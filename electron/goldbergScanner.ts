import fs from 'fs/promises'
import path from 'path'
import os from 'os'
import { existsSync } from 'fs'
import { getGoldbergCache, saveGoldbergCache } from './storeManager'

async function findAchievementsRecursive(dir: string, currentDepth: number, maxDepth: number): Promise<string | null> {
  if (currentDepth > maxDepth) return null
  
  try {
    const entries = await fs.readdir(dir, { withFileTypes: true })
    
    for (const entry of entries) {
      const fullPath = path.join(dir, entry.name)
      
      if (entry.isDirectory()) {
        const found = await findAchievementsRecursive(fullPath, currentDepth + 1, maxDepth)
        if (found) return found
      } else if (entry.isFile() && entry.name.toLowerCase() === 'achievements.json') {
        if (fullPath.includes('Goldberg SteamEmu Saves')) {
          return fullPath
        }
      }
    }
  } catch (error) {
    // Ignore permissions errors or missing dirs
  }
  return null
}

export async function autoScanGoldberg(appId: string): Promise<string | null> {
  const cachedPath = await getGoldbergCache(appId)
  if (cachedPath && existsSync(cachedPath)) {
    return cachedPath
  }

  const compatdataPaths = [
    path.join(os.homedir(), '.steam/steam/steamapps/compatdata', appId, 'pfx/drive_c/users/steamuser/AppData/Roaming/Goldberg SteamEmu Saves'),
    path.join(os.homedir(), '.local/share/Steam/steamapps/compatdata', appId, 'pfx/drive_c/users/steamuser/AppData/Roaming/Goldberg SteamEmu Saves'),
    path.join(os.homedir(), '.var/app/com.valvesoftware.Steam/.local/share/Steam/steamapps/compatdata', appId, 'pfx/drive_c/users/steamuser/AppData/Roaming/Goldberg SteamEmu Saves')
  ]

  for (const basePath of compatdataPaths) {
    if (existsSync(basePath)) {
      const found = await findAchievementsRecursive(basePath, 0, 3)
      if (found) {
        await saveGoldbergCache(appId, found)
        return found
      }
    } else {
      const appDataPath = basePath.replace('Goldberg SteamEmu Saves', '')
      if (existsSync(appDataPath)) {
        const found = await findAchievementsRecursive(appDataPath, 0, 4)
        if (found) {
          await saveGoldbergCache(appId, found)
          return found
        }
      }
    }
  }

  return null
}
