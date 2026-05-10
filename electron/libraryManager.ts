import fs from 'fs/promises'
import { existsSync } from 'fs'
import path from 'path'
import os from 'os'
import CRC32 from 'crc-32'
import * as VDF from 'steam-binary-vdf'

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

export async function getNonSteamLibrary() {
  const steamPath = await getSteamPath()
  const userDataPath = path.join(steamPath, 'userdata')
  
  if (!existsSync(userDataPath)) return []

  const users = await fs.readdir(userDataPath)
  const userId = users.find(u => u !== '0' && u !== 'anonymous') || users[0]
  if (!userId) return []

  const shortcutsVdfPath = path.join(userDataPath, userId, 'config/shortcuts.vdf')
  const gridPath = path.join(userDataPath, userId, 'config/grid')

  if (!existsSync(shortcutsVdfPath)) return []

  try {
    const buffer = await fs.readFile(shortcutsVdfPath)
    const readFn = (VDF as any).readVdf || (VDF as any).default?.readVdf
    const parsed = readFn(buffer)
    const shortcutsObj = parsed.shortcuts || {}
    
    const shortcuts = Object.values(shortcutsObj)

    return shortcuts.map((s: any) => {
      const cleanExe = s.Exe.replace(/"/g, '')
      const shortcutString = `\x00${s.AppName}\x00${cleanExe}`
      const appId = (CRC32.str(shortcutString) | 0x80000000) >>> 0

      return {
        appId,
        name: s.AppName,
        exe: s.Exe,
        art: {
          grid: existsSync(path.join(gridPath, `${appId}p.png`)) ? `steam-asset://${path.join(gridPath, `${appId}p.png`)}` : null,
          hero: existsSync(path.join(gridPath, `${appId}_hero.png`)) ? `steam-asset://${path.join(gridPath, `${appId}_hero.png`)}` : null,
          logo: existsSync(path.join(gridPath, `${appId}_logo.png`)) ? `steam-asset://${path.join(gridPath, `${appId}_logo.png`)}` : null
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
  else if (artType === 'hero') fileName = `${appId}_hero.png`
  else if (artType === 'logo') fileName = `${appId}_logo.png`

  const destPath = path.join(gridPath, fileName)
  await fs.copyFile(sourcePath, destPath)
  return { success: true, path: destPath }
}

export async function removeNonSteamShortcut(appId: number) {
  const steamPath = await getSteamPath()
  const userDataPath = path.join(steamPath, 'userdata')
  const users = await fs.readdir(userDataPath)
  const userId = users.find(u => u !== '0' && u !== 'anonymous') || users[0]
  const shortcutsVdfPath = path.join(userDataPath, userId, 'config/shortcuts.vdf')
  const gridPath = path.join(userDataPath, userId, 'config/grid')

  if (!existsSync(shortcutsVdfPath)) return { success: false, error: 'Arquivo não encontrado.' }

  const buffer = await fs.readFile(shortcutsVdfPath)
  const readFn = (VDF as any).readVdf || (VDF as any).default?.readVdf
  const shortcutsData = readFn(buffer)
  
  const cleanShortcuts: any = {}
  let index = 0
  if (shortcutsData.shortcuts) {
    Object.keys(shortcutsData.shortcuts).forEach(key => {
      const s = shortcutsData.shortcuts[key]
      const shortcutString = `\x00${s.AppName}\x00${s.Exe}`
      const sAppId = (CRC32.str(shortcutString) | 0x80000000) >>> 0
      
      if (sAppId !== appId) {
        cleanShortcuts[index++] = s
      }
    })
  }
  
  shortcutsData.shortcuts = cleanShortcuts
  const writeFn = (VDF as any).writeVdf || (VDF as any).default?.writeVdf
  const outputBuffer = writeFn(shortcutsData)
  await fs.writeFile(shortcutsVdfPath, outputBuffer)

  // Remover artes
  const artFiles = [
    path.join(gridPath, `${appId}p.png`),
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
  const commonPath = path.join(steamPath, 'steamapps/common')
  const customPath = path.join(steamPath, 'compatibilitytools.d')
  
  const protons = new Set<string>(['Nenhum', 'Proton Experimental'])

  try {
    if (existsSync(commonPath)) {
      const dirs = await fs.readdir(commonPath)
      dirs.filter(d => d.startsWith('Proton')).forEach(d => protons.add(d))
    }
    if (existsSync(customPath)) {
      const dirs = await fs.readdir(customPath)
      dirs.forEach(d => protons.add(d))
    }
  } catch (e) {
    console.error('Erro ao buscar Protons:', e)
  }

  return Array.from(protons)
}
