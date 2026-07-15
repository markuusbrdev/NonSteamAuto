import fs from 'fs/promises'
import { existsSync } from 'fs'
import path from 'path'
import os from 'os'
import CRC32 from 'crc-32'
import * as VDF from 'steam-binary-vdf'
import vdf from 'vdf-parser'
import { getConfig } from './storeManager'

async function getSteamPath() {
  const paths = [
    path.join(os.homedir(), '.steam/steam'),
    path.join(os.homedir(), '.local/share/Steam'),
    path.join(os.homedir(), '.var/app/com.valvesoftware.Steam/.local/share/Steam')
  ]
  for (const p of paths) {
    if (existsSync(path.join(p, 'config', 'config.vdf'))) return p
  }
  return paths[0]
}

export async function getNonSteamLibrary() {
  const steamPath = await getSteamPath()
  const userDataPath = path.join(steamPath, 'userdata')
  
  if (!existsSync(userDataPath)) return []

  const config = await getConfig()
  const users = await fs.readdir(userDataPath)
  const userId = config.steam32Id || users.find(u => u !== '0' && u !== 'anonymous') || users[0]
  if (!userId) return []

  const shortcutsVdfPath = path.join(userDataPath, userId, 'config/shortcuts.vdf')
  const gridPath = path.join(userDataPath, userId, 'config/grid')

  if (!existsSync(shortcutsVdfPath)) return []

  const configVdfPath = path.join(steamPath, 'config/config.vdf')
  let configData: any = {}
  try {
    if (existsSync(configVdfPath)) {
      const content = await fs.readFile(configVdfPath, 'utf-8')
      configData = vdf.parse(content)
    }
  } catch(e) {}
  const compatMapping = configData?.InstallConfigStore?.Software?.Valve?.Steam?.CompatibilityMapping || {}

  try {
    const buffer = await fs.readFile(shortcutsVdfPath)
    const readFn = (VDF as any).readVdf || (VDF as any).default?.readVdf
    const parsed = readFn(buffer)
    const shortcutsObj = parsed.shortcuts || {}
    
    const shortcuts = Object.values(shortcutsObj)

    return shortcuts.map((s: any) => {
      const cleanExe = (s.Exe || s.exe || '').replace(/"/g, '')
      const shortcutString = `\x00${s.AppName || s.appname}\x00${cleanExe}`
      const appId = (CRC32.str(shortcutString) | 0x80000000) >>> 0

      const protonVersion = compatMapping[appId.toString()]?.name || 'Nenhum'

      return {
        appId,
        name: s.AppName || s.appname,
        exe: s.Exe || s.exe,
        launchOptions: s.LaunchOptions || s.launchoptions || '',
        proton: protonVersion,
        art: {
          grid: existsSync(path.join(gridPath, `${appId}p.png`)) ? `steam-asset://${path.join(gridPath, `${appId}p.png`)}` : null,
          gridHorizontal: existsSync(path.join(gridPath, `${appId}.png`)) ? `steam-asset://${path.join(gridPath, `${appId}.png`)}` : null,
          hero: existsSync(path.join(gridPath, `${appId}_hero.png`)) ? `steam-asset://${path.join(gridPath, `${appId}_hero.png`)}` : null,
          logo: existsSync(path.join(gridPath, `${appId}_logo.png`)) ? `steam-asset://${path.join(gridPath, `${appId}_logo.png`)}` : null,
          icon: existsSync(path.join(gridPath, `${appId}_icon.png`)) ? `steam-asset://${path.join(gridPath, `${appId}_icon.png`)}` : ((s.icon && existsSync(s.icon)) ? `steam-asset://${s.icon}` : null)
        }
      }
    })
  } catch (e) {
    return []
  }
}

export async function updateManualArt(appId: number, artType: string, sourcePath: string) {
  const steamPath = await getSteamPath()
  const userDataPath = path.join(steamPath, 'userdata')
  const users = await fs.readdir(userDataPath)
  const userId = users.find(u => u !== '0' && u !== 'anonymous') || users[0]
  const gridPath = path.join(userDataPath, userId, 'config/grid')

  await fs.mkdir(gridPath, { recursive: true })

  let fileName = ''
  if (artType === 'grid') fileName = `${appId}p.png`
  else if (artType === 'gridHorizontal') fileName = `${appId}.png`
  else if (artType === 'hero') fileName = `${appId}_hero.png`
  else if (artType === 'logo') fileName = `${appId}_logo.png`

  const destPath = path.join(gridPath, fileName)
  await fs.copyFile(sourcePath, destPath)
  return { success: true, path: destPath }
}

export async function removeNonSteamShortcut(appId: number) {
  const { getConfig } = await import('./storeManager')
  const config = await getConfig()
  
  const steamPath = await getSteamPath()
  const userDataPath = path.join(steamPath, 'userdata')
  const users = await fs.readdir(userDataPath)
  const userId = config.steam32Id || users.find(u => u !== '0' && u !== 'anonymous') || users[0]
  const shortcutsVdfPath = path.join(userDataPath, userId, 'config/shortcuts.vdf')
  const gridPath = path.join(userDataPath, userId, 'config/grid')

  if (!existsSync(shortcutsVdfPath)) return { success: false, error: 'Arquivo não encontrado.' }

  const buffer = await fs.readFile(shortcutsVdfPath)
  const readFn = (VDF as any).readVdf || (VDF as any).default?.readVdf
  const shortcutsData = readFn(buffer)
  
  const targetAppId = Number(appId)
  
  const cleanShortcuts: any = {}
  let index = 0
  if (shortcutsData.shortcuts) {
    Object.keys(shortcutsData.shortcuts).forEach(key => {
      const s = shortcutsData.shortcuts[key]
      const cleanExe = (s.Exe || s.exe || '').replace(/"/g, '')
      const shortcutString = `\x00${s.AppName || s.appname}\x00${cleanExe}`
      const sAppId = (CRC32.str(shortcutString) | 0x80000000) >>> 0
      
      if (sAppId !== targetAppId) {
        cleanShortcuts[index++] = s
      }
    })
  }
  
  shortcutsData.shortcuts = cleanShortcuts
  const writeFn = (VDF as any).writeVdf || (VDF as any).default?.writeVdf
  const outputBuffer = writeFn(shortcutsData)
  
  // Kill Steam BEFORE writing to ensure it doesn't overwrite our changes
  try {
    const { execSync } = await import('child_process')
    execSync('pkill -9 steam || flatpak kill com.valvesoftware.Steam || true')
  } catch(e) {}
  
  await fs.writeFile(shortcutsVdfPath, outputBuffer)

  // Remover artes
  const artFiles = [
    path.join(gridPath, `${appId}p.png`),
    path.join(gridPath, `${appId}.png`),
    path.join(gridPath, `${appId}_hero.png`),
    path.join(gridPath, `${appId}_logo.png`),
    path.join(gridPath, `${appId}_icon.png`)
  ]

  for (const f of artFiles) {
    if (existsSync(f)) await fs.unlink(f)
  }

  return { success: true }
}

export async function getInstalledProtons() {
  const steamPath = await getSteamPath()
  const customPath = path.join(steamPath, 'compatibilitytools.d')
  
  const protons = new Map<string, string>([
    ['Nenhum', 'Nenhum'],
    ['proton_experimental', 'Proton Experimental']
  ])

  // 1. Get all library paths
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
    console.error('Erro ao ler libraryfolders.vdf:', e)
  }

  // 2. Iterate through all library paths and check steamapps/common
  for (const lib of libraryPaths) {
    try {
      const commonPath = path.join(lib, 'steamapps/common')
      if (existsSync(commonPath)) {
        const dirs = await fs.readdir(commonPath)
        for (const d of dirs) {
          if (d.toLowerCase().includes('proton')) {
             let internalName = d.toLowerCase().replace(/ /g, '_').replace(/\./g, '')
             if (d === 'Proton Experimental') internalName = 'proton_experimental'
             protons.set(internalName, d)
          }
        }
      }
    } catch (e) {
      console.error(`Erro ao ler common path em ${lib}:`, e)
    }
  }

  // 3. Custom protons (GE-Proton etc)
  const loadCustomProtons = async (p: string) => {
    try {
      if (existsSync(p)) {
        const dirs = await fs.readdir(p)
        for (const d of dirs) {
          const vdfPath = path.join(p, d, 'compatibilitytool.vdf')
          let internalName = d
          let displayName = d
          if (existsSync(vdfPath)) {
             const content = await fs.readFile(vdfPath, 'utf-8')
             const parsed = vdf.parse(content) as any
             if (parsed?.compatibilitytools?.compat_tools) {
                internalName = Object.keys(parsed.compatibilitytools.compat_tools)[0]
                displayName = parsed.compatibilitytools.compat_tools[internalName]?.display_name || d
             }
          }
          protons.set(internalName, displayName)
        }
      }
    } catch (e) {}
  }
  
  await loadCustomProtons(customPath)
  const altCustomPath = path.join(os.homedir(), '.local/share/Steam/compatibilitytools.d')
  if (altCustomPath !== customPath) await loadCustomProtons(altCustomPath)

  return Array.from(protons.entries()).map(([value, label]) => ({ value, label }))
}
