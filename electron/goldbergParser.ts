import fs from 'node:fs/promises'
import { existsSync } from 'node:fs'
import path from 'node:path'
import os from 'node:os'
import vdf from 'vdf-parser'
import { fetchAchievementsSchema, SteamAchievement } from './steamApiUtils'

async function getSteamPath() {
  const paths = [
    path.join(os.homedir(), '.steam/steam'),
    path.join(os.homedir(), '.local/share/Steam'),
    path.join(os.homedir(), '.var/app/com.valvesoftware.Steam/.local/share/Steam')
  ]
  for (const p of paths) {
    if (existsSync(p)) return p
  }
  return paths[0]
}

async function getLibraryPaths() {
  const steamPath = await getSteamPath()
  const libraryPaths = [steamPath]
  try {
    const vdfPath = path.join(steamPath, 'steamapps/libraryfolders.vdf')
    if (existsSync(vdfPath)) {
      const vdfContent = await fs.readFile(vdfPath, 'utf-8')
      const parsed = vdf.parse(vdfContent) as any
      const folders = parsed.libraryfolders || {}
      Object.values(folders).forEach((folder: any) => {
        if (folder.path && typeof folder.path === 'string') {
          libraryPaths.push(folder.path)
        }
      })
    }
  } catch (e) {
    console.error('Erro ao ler libraryfolders.vdf no goldbergParser:', e)
  }
  return libraryPaths
}

export async function getLocalAchievements(appId: string, exePath?: string, achievementsJsonPath?: string): Promise<string[]> {
  const potentialPaths: string[] = []

  if (achievementsJsonPath) {
    potentialPaths.push(achievementsJsonPath)
  }

  // 0. Local Game Directory (If game saves locally next to the exe)
  if (exePath) {
    const gameDir = path.dirname(exePath)
    potentialPaths.push(
      path.join(gameDir, 'Goldberg SteamEmu Saves', appId, 'achievements.json'),
      path.join(gameDir, 'steam_settings', 'saves', appId, 'achievements.json') // Another common pattern
    )
  }

  // 1. Native Linux paths
  potentialPaths.push(
    path.join(os.homedir(), '.config/Goldberg SteamEmu Saves', appId, 'achievements.json'),
    path.join(os.homedir(), '.local/share/Goldberg SteamEmu Saves', appId, 'achievements.json'),
    path.join(os.homedir(), '.config/GSE', appId, 'achievements.json')
  )

  // 2. Proton / Prefix paths (Scan all steam library folders)
  const libs = await getLibraryPaths()
  for (const lib of libs) {
    const compatDataPath = path.join(lib, 'steamapps/compatdata', appId, 'pfx/drive_c/users/steamuser/AppData/Roaming/Goldberg SteamEmu Saves', appId, 'achievements.json')
    potentialPaths.push(compatDataPath)
  }

  let jsonPath = ''
  for (const p of potentialPaths) {
    if (existsSync(p)) {
      jsonPath = p
      break
    }
  }

  if (!jsonPath) {
    return [] // Nenhum arquivo de conquista local encontrado
  }

  try {
    const data = await fs.readFile(jsonPath, 'utf-8')
    const parsed = JSON.parse(data)
    
    // O achievements.json do Goldberg geralmente é um objeto onde as chaves são os nomes/IDs das conquistas
    // Exemplo: { "ACHIEVEMENT_1": { "earned": true, "earned_time": 123456 } }
    const unlocked: string[] = []
    
    if (Array.isArray(parsed)) {
      // Formato antigo/alternativo
      parsed.forEach(ach => {
        if (ach.earned || ach.achieved) unlocked.push(ach.name || ach.id)
      })
    } else {
      for (const [key, value] of Object.entries(parsed)) {
        const val = value as any
        if (val.earned || val.achieved) {
          unlocked.push(key)
        }
      }
    }
    
    return unlocked
  } catch (e) {
    console.error('Falha ao parsear achievements.json:', e)
    return []
  }
}

export interface HybridAchievement extends SteamAchievement {
  unlocked: boolean
  currentIcon: string
}

export async function getHybridAchievements(appId: string, apiKey: string, exePath?: string, achievementsJsonPath?: string): Promise<HybridAchievement[]> {
  const localUnlocked = await getLocalAchievements(appId, exePath, achievementsJsonPath)
  
  if (!apiKey) {
    throw new Error('Steam Web API Key não configurada.')
  }

  let realAppId = appId
  
  const { getRealAppIdCache } = await import('./storeManager')
  const cachedRealAppId = await getRealAppIdCache(appId)
  
  if (cachedRealAppId) {
    realAppId = cachedRealAppId
  } else if (achievementsJsonPath) {
    const parentFolder = path.basename(path.dirname(achievementsJsonPath))
    if (/^\d+$/.test(parentFolder)) {
      realAppId = parentFolder
    }
  }

  const schema = await fetchAchievementsSchema(realAppId, apiKey)
  
  if (!schema || schema.length === 0) {
    return []
  }

  return schema.map((ach) => {
    const isUnlocked = localUnlocked.includes(ach.name)
    return {
      ...ach,
      unlocked: isUnlocked,
      currentIcon: isUnlocked ? ach.icon : ach.icongray
    }
  })
}
