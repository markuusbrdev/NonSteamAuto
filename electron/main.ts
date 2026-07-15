import { app, BrowserWindow, ipcMain, dialog, protocol, net, shell, Tray, Menu } from 'electron'
import axios from 'axios'
import path from 'node:path'
import { fileURLToPath } from 'node:url'
import { injectNonSteamShortcut } from './nonSteamInjector'
import { getSavedApiKey, saveApiKey, getConfig, saveConfigData, getRunInBackgroundSync } from './storeManager'
import { getNonSteamLibrary, updateManualArt, getInstalledProtons, removeNonSteamShortcut } from './libraryManager'
import { getHybridAchievements } from './goldbergParser'
import { SGDBService } from './sgdbService'
import { validateSgdbKey, validateSteamKey } from './validationService'
import { getLocalSteamUsers } from './steamUserManager'
import { autoScanGoldberg } from './goldbergScanner'
import { initGlobalWatchers } from './achievementWatcher'
import fs from 'fs/promises'
import os from 'os'
import { exec } from 'node:child_process'

// Previne que o GNOME faça fuzzy-match com a string "steam" e use o ícone da Steam
app.setName('NonSteamAutomation')
if (process.platform === 'linux') {
  // @ts-ignore
  app.setDesktopName('nonsteamautomation.desktop')
  app.setAppUserModelId('com.marcus.nonsteamauto')
  // Suprime o spam de erros 'GetVSyncParametersIfAvailable' no console do Linux
  app.commandLine.appendSwitch('disable-gpu-vsync')
}

const __dirname = path.dirname(fileURLToPath(import.meta.url))

process.env.APP_ROOT = path.join(__dirname, '..')
export const VITE_DEV_SERVER_URL = process.env['VITE_DEV_SERVER_URL']
export const RENDERER_DIST = path.join(process.env.APP_ROOT, 'dist')
process.env.VITE_PUBLIC = VITE_DEV_SERVER_URL ? path.join(process.env.APP_ROOT, 'public') : RENDERER_DIST

let win: BrowserWindow | null = null
let tray: Tray | null = null
let isQuitting = false

protocol.registerSchemesAsPrivileged([
  { scheme: 'steam-asset', privileges: { bypassCSP: true, secure: true, supportFetchAPI: true } }
])

function createWindow() {
  win = new BrowserWindow({
    width: 1280,
    height: 900,
    minWidth: 1200,
    minHeight: 800,
    icon: path.join(process.env.VITE_PUBLIC as string, 'icon.png'),
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

  win.on('close', (event) => {
    if (!isQuitting && getRunInBackgroundSync()) {
      event.preventDefault()
      win?.hide()
    }
  })
}

const gotTheLock = app.requestSingleInstanceLock()

if (!gotTheLock) {
  app.quit()
} else {
  app.on('second-instance', () => {
    if (win) {
      if (!win.isVisible()) win.show()
      if (win.isMinimized()) win.restore()
      win.focus()
    }
  })

  app.whenReady().then(() => {
  initGlobalWatchers()

  // Setup System Tray
  try {
    const iconPath = path.join(process.env.VITE_PUBLIC as string, 'icon.png')
    tray = new Tray(iconPath)
    tray.setToolTip('Non-Steam Automation')
    
    const contextMenu = Menu.buildFromTemplate([
      { label: 'Abrir', click: () => win?.show() },
      { label: 'Encerrar completamente', click: () => {
          isQuitting = true
          app.quit()
        } 
      }
    ])
    
    tray.setContextMenu(contextMenu)
    tray.on('click', () => win?.show())
  } catch (error) {
    console.error('Falha ao criar System Tray:', error)
  }

  protocol.handle('steam-asset', (request) => {
    const filePath = fileURLToPath(request.url.replace('steam-asset://', 'file://'))
    return net.fetch('file://' + filePath)
  })

  // --- IPC HANDLERS ---
  
  ipcMain.handle('get-api-key', () => getSavedApiKey())
  ipcMain.handle('save-api-key', async (_event, apiKey) => await saveApiKey(apiKey))

  ipcMain.handle('get-config', () => getConfig())
  ipcMain.handle('save-config-data', async (_event, data) => await saveConfigData(data.key, data.value))
  ipcMain.handle('get-run-in-background', () => getRunInBackgroundSync())
  ipcMain.handle('save-run-in-background', async (_event, enabled: boolean) => {
    const { saveRunInBackground } = await import('./storeManager')
    await saveRunInBackground(enabled)
  })

  ipcMain.handle('validate-sgdb-key', async (_event, apiKey) => await validateSgdbKey(apiKey))
  ipcMain.handle('validate-steam-key', async (_event, apiKey) => await validateSteamKey(apiKey))

  ipcMain.handle('get-local-steam-users', () => getLocalSteamUsers())

  ipcMain.handle('get-protons', () => getInstalledProtons())

  ipcMain.handle('get-hybrid-achievements', async (_event, data) => await getHybridAchievements(data.appId, data.apiKey, data.exePath, data.achievementsJsonPath))
  
  ipcMain.handle('auto-scan-goldberg', async (_event, appId) => await autoScanGoldberg(appId))
  
  ipcMain.handle('manual-select-goldberg', async (_event, appId) => {
    const result = await dialog.showOpenDialog({
      properties: ['openFile'],
      filters: [{ name: 'Achievements JSON', extensions: ['json'] }]
    })
    if (!result.canceled && result.filePaths.length > 0) {
      const selected = result.filePaths[0]
      if (selected.toLowerCase().endsWith('achievements.json')) {
        const { saveGoldbergCache } = await import('./storeManager')
        await saveGoldbergCache(appId, selected)
        return selected
      }
    }
    return null
  })

  ipcMain.handle('clear-goldberg-cache', async (_event, appId) => {
    const { clearGoldbergCache } = await import('./storeManager')
    return await clearGoldbergCache(appId)
  })

  ipcMain.handle('get-real-app-id', async (_event, appId) => {
    const { getRealAppIdCache } = await import('./storeManager')
    return await getRealAppIdCache(appId)
  })

  ipcMain.handle('save-real-app-id', async (_event, data) => {
    const { saveRealAppIdCache } = await import('./storeManager')
    await saveRealAppIdCache(data.appId, data.realAppId)
    return true
  })
  ipcMain.handle('get-achievements-enabled', async (_event, appId) => {
    const { getAchievementsEnabledCache } = await import('./storeManager')
    return await getAchievementsEnabledCache(appId)
  })

  ipcMain.handle('save-achievements-enabled', async (_event, data) => {
    const { saveAchievementsEnabledCache } = await import('./storeManager')
    await saveAchievementsEnabledCache(data.appId, data.enabled)
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

  ipcMain.handle('search-steam-game', async (_event, query: string) => {
    if (!query || query.trim() === '') return []
    try {
      const response = await axios.get(`https://store.steampowered.com/api/storesearch/?term=${encodeURIComponent(query)}&l=portuguese&cc=BR`)
      if (response.data && response.data.items) {
        return response.data.items.map((item: any) => ({
          id: item.id,
          name: item.name,
          tiny_image: item.tiny_image
        }))
      }
      return []
    } catch (e) {
      console.error('Failed to search Steam games:', e)
      return []
    }
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
      // Use pkill -x to match exactly 'steam' so it doesn't kill 'non-steam-automation'
      exec('pkill -9 -x steam || killall -9 steam || flatpak kill com.valvesoftware.Steam || true', () => {
        setTimeout(async () => {
          const { spawn } = await import('child_process')
          // Tenta iniciar a steam nativa e flatpak em background
          const child = spawn('sh', ['-c', 'steam || flatpak run com.valvesoftware.Steam &'], {
            detached: true,
            stdio: 'ignore'
          })
          child.unref()
          resolve({ success: true })
        }, 1000)
      })
    })
  })

  ipcMain.on('open-external-url', (_event, url) => {
    shell.openExternal(url)
  })

  createWindow()
})

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') app.quit()
})
}
