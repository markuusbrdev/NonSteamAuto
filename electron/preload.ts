import { ipcRenderer, contextBridge } from 'electron'

contextBridge.exposeInMainWorld('api', {
  selectExe: () => ipcRenderer.invoke('select-exe'),
  getApiKey: () => ipcRenderer.invoke('get-api-key'),
  getProtons: () => ipcRenderer.invoke('get-protons'),
  
  // Novos para o Wizard
  searchArts: (gameName: string, apiKey: string) => 
    ipcRenderer.invoke('search-sgdb-arts', { gameName, apiKey }),
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
