import { app, BrowserWindow, ipcMain, dialog, protocol, net } from 'electron'
import path from 'node:path'
import { fileURLToPath } from 'node:url'
import { injectNonSteamShortcut } from './nonSteamInjector'
import { getSavedApiKey, saveApiKey, getConfig, saveConfigData } from './storeManager'
import { getNonSteamLibrary, updateManualArt, getInstalledProtons, removeNonSteamShortcut } from './libraryManager'
import { launchPatchedSteam } from './steamPatcher'
import { getHybridAchievements } from './goldbergParser'
import { SGDBService } from './sgdbService'
import { checkGlumaStatus, downloadAndExtractGreenLuma } from './glumaFetcher'
import fs from 'fs/promises'
import os from 'os'
import { exec } from 'node:child_process'

// Previne que o GNOME faça fuzzy-match com a string "steam" e use o ícone da Steam
app.setName('NonSteamAutomation')
if (process.platform === 'linux') {
  // @ts-ignore
  app.setDesktopName('NonSteamAutomation.desktop')
  // Suprime o spam de erros 'GetVSyncParametersIfAvailable' no console do Linux
  app.commandLine.appendSwitch('disable-gpu-vsync')
}

const __dirname = path.dirname(fileURLToPath(import.meta.url))

process.env.APP_ROOT = path.join(__dirname, '..')
export const VITE_DEV_SERVER_URL = process.env['VITE_DEV_SERVER_URL']
export const RENDERER_DIST = path.join(process.env.APP_ROOT, 'dist')
process.env.VITE_PUBLIC = VITE_DEV_SERVER_URL ? path.join(process.env.APP_ROOT, 'public') : RENDERER_DIST

let win: BrowserWindow | null

protocol.registerSchemesAsPrivileged([
  { scheme: 'steam-asset', privileges: { bypassCSP: true, secure: true, supportFetchAPI: true } }
])

function createWindow() {
  win = new BrowserWindow({
    width: 1280,
    height: 900,
    minWidth: 1200,
    minHeight: 800,
    icon: path.join(process.env.VITE_PUBLIC, 'electron-vite.svg'),
    frame: false,
    webPreferences: {
      preload: path.join(__dirname, 'preload.cjs'),
      nodeIntegration: false,
      contextIsolation: true,
      sandbox: false
    },
    title: 'Non-Steam Automation',
    backgroundColor: '#1b2838'
  })

  // Window control handlers for custom titlebar
  ipcMain.on('window-minimize', () => win?.minimize())
  ipcMain.on('window-maximize', () => {
    if (win?.isMaximized()) {
      win?.unmaximize()
    } else {
      win?.maximize()
    }
  })
  ipcMain.on('window-close', () => win?.close())

  if (VITE_DEV_SERVER_URL) {
    win.loadURL(VITE_DEV_SERVER_URL)
  } else {
    win.loadFile(path.join(RENDERER_DIST, 'index.html'))
  }
}

app.whenReady().then(() => {
  protocol.handle('steam-asset', (request) => {
    const filePath = fileURLToPath(request.url.replace('steam-asset://', 'file://'))
    return net.fetch('file://' + filePath)
  })

  // --- IPC HANDLERS ---
  
  ipcMain.handle('get-api-key', () => getSavedApiKey())
  ipcMain.handle('save-api-key', async (_event, apiKey) => await saveApiKey(apiKey))

  ipcMain.handle('get-config', () => getConfig())
  ipcMain.handle('save-config-data', async (_event, data) => await saveConfigData(data.key, data.value))

  ipcMain.handle('get-protons', () => getInstalledProtons())
  
  ipcMain.handle('launch-patched-steam', async (_event, greenLumaPath) => await launchPatchedSteam(greenLumaPath))
  ipcMain.handle('get-hybrid-achievements', async (_event, data) => await getHybridAchievements(data.appId, data.apiKey))

  ipcMain.handle('check-gluma-status', async () => {
    return await checkGlumaStatus()
  })

  ipcMain.handle('download-gluma', async () => {
    await downloadAndExtractGreenLuma()
    return true
  })

  ipcMain.handle('select-exe', async () => {
    const result = await dialog.showOpenDialog({
      properties: ['openFile'],
      filters: [{ name: 'Executables', extensions: ['exe', 'x86_64', 'bin', 'sh', 'AppImage'] }]
    })
    return result.canceled ? null : result.filePaths[0]
  })

  // Nova função para buscar artes antes de injetar (para o Preview)
  ipcMain.handle('search-sgdb-arts', async (_event, { gameName, apiKey }) => {
    const sgdb = new SGDBService(apiKey)
    const game = await sgdb.searchGame(gameName)
    if (!game) return null
    return await sgdb.getAssets(game.id)
  })

  // Nova função para buscar lista de alternativas de uma arte
  ipcMain.handle('get-alternative-arts', async (_event, { gameName, apiKey, type }) => {
    const sgdb = new SGDBService(apiKey)
    const game = await sgdb.searchGame(gameName)
    if (!game) return []
    return await sgdb.getAlternativeAssets(game.id, type)
  })

  // Função para baixar imagem temporária para o preview (se o usuário trocar)
  ipcMain.handle('download-temp-art', async (_event, { url }) => {
    const tempDir = path.join(os.tmpdir(), 'non-steam-automation-temp')
    await fs.mkdir(tempDir, { recursive: true })
    const fileName = `temp_${Date.now()}.png`
    const dest = path.join(tempDir, fileName)
    
    const sgdb = new SGDBService('') // Key não necessária para download direto de URL
    await sgdb.downloadImage(url, dest)
    return `steam-asset://${dest}`
  })

  ipcMain.handle('inject-automated-shortcut', async (_event, data) => {
    try {
      if (data.sgdbApiKey) await saveApiKey(data.sgdbApiKey)
      return await injectNonSteamShortcut(data)
    } catch (error) {
      console.error(error)
      return { success: false, error: String(error) }
    }
  })

  ipcMain.handle('get-non-steam-library', () => getNonSteamLibrary())

  ipcMain.handle('remove-shortcut', (_event, { appId }) => removeNonSteamShortcut(appId))

  ipcMain.handle('update-manual-art', (_event, data) => updateManualArt(data.appId, data.artType, data.sourceFilePath))

  ipcMain.handle('select-art-file', async () => {
    const result = await dialog.showOpenDialog({
      properties: ['openFile'],
      filters: [{ name: 'Images', extensions: ['png', 'jpg', 'jpeg', 'webp'] }]
    })
    return result.canceled ? null : result.filePaths[0]
  })

  ipcMain.handle('restart-steam', () => {
    return new Promise((resolve) => {
      // Tenta fechar a Steam e abrir novamente
      exec('pkill -9 steam && sleep 1 && steam &', (error) => {
        if (error) {
          // Se falhou o pkill (steam não tava aberta), tenta só abrir
          exec('steam &')
        }
        resolve({ success: true })
      })
    })
  })

  createWindow()
})

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') app.quit()
})
