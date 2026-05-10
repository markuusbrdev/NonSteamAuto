import fs from 'fs/promises'
import { existsSync } from 'fs'
import path from 'path'
import os from 'os'
import CRC32 from 'crc-32'
import * as VDFBinary from 'steam-binary-vdf'
import * as VDFParser from 'vdf-parser'
import { SGDBService } from './sgdbService'

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

async function setProtonCompatibility(appId: number, protonVersion: string) {
  if (!protonVersion || protonVersion === 'Nenhum') return

  const steamPath = await getSteamPath()
  const configVdfPath = path.join(steamPath, 'config/config.vdf')
  const backupPath = `${configVdfPath}.bak`

  if (!existsSync(configVdfPath)) return

  await fs.copyFile(configVdfPath, backupPath)

  const content = await fs.readFile(configVdfPath, 'utf-8')
  const config: any = VDFParser.parse(content)

  if (!config.InstallConfigStore) config.InstallConfigStore = {}
  if (!config.InstallConfigStore.Software) config.InstallConfigStore.Software = {}
  if (!config.InstallConfigStore.Software.Valve) config.InstallConfigStore.Software.Valve = {}
  if (!config.InstallConfigStore.Software.Valve.Steam) config.InstallConfigStore.Software.Valve.Steam = {}
  if (!config.InstallConfigStore.Software.Valve.Steam.CompatibilityMapping) {
    config.InstallConfigStore.Software.Valve.Steam.CompatibilityMapping = {}
  }

  config.InstallConfigStore.Software.Valve.Steam.CompatibilityMapping[appId.toString()] = {
    name: protonVersion,
    config: '',
    priority: '250'
  }

  const newContent = VDFParser.stringify(config, true)
  await fs.writeFile(configVdfPath, newContent)
}

// Função auxiliar para lidar com artes (download ou cópia)
async function handleArt(source: string, dest: string, sgdb: SGDBService) {
  if (source.startsWith('http')) {
    await sgdb.downloadImage(source, dest)
  } else {
    const localPath = source.replace('steam-asset://', '')
    if (existsSync(localPath)) {
      await fs.copyFile(localPath, dest)
    }
  }
}

export async function injectNonSteamShortcut(params: {
  exePath: string, 
  gameName: string, 
  sgdbApiKey: string,
  launchOptions?: string,
  protonVersion?: string,
  customArt?: { grid?: string, hero?: string, logo?: string, icon?: string }
}) {
  const { exePath, gameName, sgdbApiKey, launchOptions, protonVersion, customArt } = params
  const steamPath = await getSteamPath()
  const userDataPath = path.join(steamPath, 'userdata')
  
  const users = await fs.readdir(userDataPath)
  const userId = users.find(u => u !== '0' && u !== 'anonymous') || users[0]
  if (!userId) throw new Error('ID do usuário não encontrado.')

  const shortcutsVdfPath = path.join(userDataPath, userId, 'config/shortcuts.vdf')
  const gridPath = path.join(userDataPath, userId, 'config/grid')

  const shortcutString = `\x00${gameName}\x00${exePath}`
  const appId = (CRC32.str(shortcutString) | 0x80000000) >>> 0
  
  await fs.mkdir(gridPath, { recursive: true })

  const sgdb = new SGDBService(sgdbApiKey)
  let iconPath = ''

  if (customArt) {
    if (customArt.grid) await handleArt(customArt.grid, path.join(gridPath, `${appId}p.png`), sgdb)
    if (customArt.hero) await handleArt(customArt.hero, path.join(gridPath, `${appId}_hero.png`), sgdb)
    if (customArt.logo) await handleArt(customArt.logo, path.join(gridPath, `${appId}_logo.png`), sgdb)
    if (customArt.icon) {
      iconPath = path.join(gridPath, `${appId}_icon.png`)
      await handleArt(customArt.icon, iconPath, sgdb)
    }
  } else {
    const game = await sgdb.searchGame(gameName)
    if (game) {
      const assets = await sgdb.getAssets(game.id)
      if (assets.grid) await sgdb.downloadImage(assets.grid, path.join(gridPath, `${appId}p.png`))
      if (assets.hero) await sgdb.downloadImage(assets.hero, path.join(gridPath, `${appId}_hero.png`))
      if (assets.logo) await sgdb.downloadImage(assets.logo, path.join(gridPath, `${appId}_logo.png`))
      if (assets.icon) {
        iconPath = path.join(gridPath, `${appId}_icon.png`)
        await sgdb.downloadImage(assets.icon, iconPath)
      }
    }
  }

  let shortcutsData: any = { shortcuts: {} }
  try {
    if (existsSync(shortcutsVdfPath)) {
      const buffer = await fs.readFile(shortcutsVdfPath)
      const readFn = (VDFBinary as any).readVdf || (VDFBinary as any).default?.readVdf
      shortcutsData = readFn(buffer)
    }
  } catch (e) {
    console.log('Iniciando novo arquivo.')
  }

  const newShortcut = {
    appid: appId,
    AppName: gameName,
    Exe: `"${exePath}"`,
    StartDir: `"${path.dirname(exePath)}/"`,
    icon: iconPath,
    ShortcutPath: '',
    LaunchOptions: launchOptions || '',
    IsHidden: 0,
    AllowDesktopConfig: 1,
    AllowOverlay: 1,
    OpenVR: 0,
    Devkit: 0,
    DevkitGameID: '',
    LastPlayTime: 0,
    tags: {}
  }

  const cleanShortcuts: any = {}
  let index = 0
  if (shortcutsData.shortcuts) {
    Object.keys(shortcutsData.shortcuts).forEach(key => {
      const s = shortcutsData.shortcuts[key]
      if (s.AppName !== gameName) {
        cleanShortcuts[index++] = s
      }
    })
  }
  cleanShortcuts[index] = newShortcut
  shortcutsData.shortcuts = cleanShortcuts

  const writeFn = (VDFBinary as any).writeVdf || (VDFBinary as any).default?.writeVdf
  const outputBuffer = writeFn(shortcutsData)
  await fs.writeFile(shortcutsVdfPath, outputBuffer)

  if (protonVersion) {
    await setProtonCompatibility(appId, protonVersion)
  }

  return { success: true, appId }
}
