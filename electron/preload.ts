import { ipcRenderer, contextBridge } from 'electron'

contextBridge.exposeInMainWorld('api', {
  selectExe: () => ipcRenderer.invoke('select-exe'),
  getApiKey: () => ipcRenderer.invoke('get-api-key'),
  saveApiKey: (apiKey: string) => ipcRenderer.invoke('save-api-key', apiKey),
  setDesktopName: (name: string) => ipcRenderer.invoke('set-desktop-name', name),
  checkGlumaStatus: () => ipcRenderer.invoke('check-gluma-status'),
  downloadGluma: () => ipcRenderer.invoke('download-gluma'),
  getConfig: () => ipcRenderer.invoke('get-config'),
  saveConfigData: (key: string, value: any) => ipcRenderer.invoke('save-config-data', { key, value }),
  getProtons: () => ipcRenderer.invoke('get-protons'),
  
  launchPatchedSteam: (greenLumaPath: string) => ipcRenderer.invoke('launch-patched-steam', greenLumaPath),
  getHybridAchievements: (appId: string, apiKey: string) => ipcRenderer.invoke('get-hybrid-achievements', { appId, apiKey }),
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
    ipcRenderer.invoke('update-manual-art', data)
})
