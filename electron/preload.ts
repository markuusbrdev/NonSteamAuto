import { ipcRenderer, contextBridge } from 'electron'

contextBridge.exposeInMainWorld('api', {
  selectExe: () => ipcRenderer.invoke('select-exe'),
  getApiKey: () => ipcRenderer.invoke('get-api-key'),
  saveApiKey: (apiKey: string) => ipcRenderer.invoke('save-api-key', apiKey),
  setDesktopName: (name: string) => ipcRenderer.invoke('set-desktop-name', name),
  getConfig: () => ipcRenderer.invoke('get-config'),
  saveConfigData: (key: string, value: any) => ipcRenderer.invoke('save-config-data', { key, value }),
  getRunInBackground: () => ipcRenderer.invoke('get-run-in-background'),
  saveRunInBackground: (enabled: boolean) => ipcRenderer.invoke('save-run-in-background', enabled),
  validateSgdbKey: (apiKey: string) => ipcRenderer.invoke('validate-sgdb-key', apiKey),
  validateSteamKey: (apiKey: string) => ipcRenderer.invoke('validate-steam-key', apiKey),
  getLocalSteamUsers: () => ipcRenderer.invoke('get-local-steam-users'),
  getProtons: () => ipcRenderer.invoke('get-protons'),
  getHybridAchievements: (appId: string, apiKey: string, exePath?: string, achievementsJsonPath?: string) => ipcRenderer.invoke('get-hybrid-achievements', { appId, apiKey, exePath, achievementsJsonPath }),
  autoScanGoldberg: (appId: string) => ipcRenderer.invoke('auto-scan-goldberg', appId),
  manualSelectGoldberg: (appId: string) => ipcRenderer.invoke('manual-select-goldberg', appId),
  clearGoldbergCache: (appId: string) => ipcRenderer.invoke('clear-goldberg-cache', appId),
  getRealAppId: (appId: string) => ipcRenderer.invoke('get-real-app-id', appId),
  saveRealAppId: (appId: string, realAppId: string) => ipcRenderer.invoke('save-real-app-id', { appId, realAppId }),
  getAchievementsEnabled: (appId: string) => ipcRenderer.invoke('get-achievements-enabled', appId),
  saveAchievementsEnabled: (appId: string, enabled: boolean) => ipcRenderer.invoke('save-achievements-enabled', { appId, enabled }),
  restartSteam: () => ipcRenderer.invoke('restart-steam'),
  
  // Controles de Janela
  minimize: () => ipcRenderer.send('window-minimize'),
  maximize: () => ipcRenderer.send('window-maximize'),
  close: () => ipcRenderer.send('window-close'),
  
  // Novos para o Wizard
  searchArts: (gameName: string, apiKey: string) => 
    ipcRenderer.invoke('search-sgdb-arts', { gameName, apiKey }),
  getAlternativeArts: (gameName: string, apiKey: string, type: string) => 
    ipcRenderer.invoke('get-alternative-arts', { gameName, apiKey, type }),
  downloadTempArt: (url: string) => 
    ipcRenderer.invoke('download-temp-art', { url }),
    
  injectShortcut: (data: { 
    exePath: string, 
    gameName: string, 
    sgdbApiKey: string,
    launchOptions?: string,
    protonVersion?: string,
    customArt?: { grid?: string, hero?: string, logo?: string, icon?: string }
  }) => ipcRenderer.invoke('inject-automated-shortcut', data),

  getLibrary: () => ipcRenderer.invoke('get-non-steam-library'),
  removeShortcut: (appId: number) => ipcRenderer.invoke('remove-shortcut', { appId }),
  selectArtFile: () => ipcRenderer.invoke('select-art-file'),
  updateArt: (data: { appId: number, artType: string, sourceFilePath: string }) => 
    ipcRenderer.invoke('update-manual-art', data),
  openExternalUrl: (url: string) => ipcRenderer.send('open-external-url', url),
  searchSteamGame: (query: string) => ipcRenderer.invoke('search-steam-game', query)
})
