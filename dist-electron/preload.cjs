"use strict";
const electron = require("electron");
electron.contextBridge.exposeInMainWorld("api", {
  selectExe: () => electron.ipcRenderer.invoke("select-exe"),
  getApiKey: () => electron.ipcRenderer.invoke("get-api-key"),
  saveApiKey: (apiKey) => electron.ipcRenderer.invoke("save-api-key", apiKey),
  setDesktopName: (name) => electron.ipcRenderer.invoke("set-desktop-name", name),
  getConfig: () => electron.ipcRenderer.invoke("get-config"),
  saveConfigData: (key, value) => electron.ipcRenderer.invoke("save-config-data", { key, value }),
  validateSgdbKey: (apiKey) => electron.ipcRenderer.invoke("validate-sgdb-key", apiKey),
  validateSteamKey: (apiKey) => electron.ipcRenderer.invoke("validate-steam-key", apiKey),
  getLocalSteamUsers: () => electron.ipcRenderer.invoke("get-local-steam-users"),
  getProtons: () => electron.ipcRenderer.invoke("get-protons"),
  getHybridAchievements: (appId, apiKey, exePath, achievementsJsonPath) => electron.ipcRenderer.invoke("get-hybrid-achievements", { appId, apiKey, exePath, achievementsJsonPath }),
  autoScanGoldberg: (appId) => electron.ipcRenderer.invoke("auto-scan-goldberg", appId),
  manualSelectGoldberg: (appId) => electron.ipcRenderer.invoke("manual-select-goldberg", appId),
  clearGoldbergCache: (appId) => electron.ipcRenderer.invoke("clear-goldberg-cache", appId),
  getRealAppId: (appId) => electron.ipcRenderer.invoke("get-real-app-id", appId),
  saveRealAppId: (appId, realAppId) => electron.ipcRenderer.invoke("save-real-app-id", { appId, realAppId }),
  getAchievementsEnabled: (appId) => electron.ipcRenderer.invoke("get-achievements-enabled", appId),
  saveAchievementsEnabled: (appId, enabled) => electron.ipcRenderer.invoke("save-achievements-enabled", { appId, enabled }),
  restartSteam: () => electron.ipcRenderer.invoke("restart-steam"),
  // Controles de Janela
  minimize: () => electron.ipcRenderer.send("window-minimize"),
  maximize: () => electron.ipcRenderer.send("window-maximize"),
  close: () => electron.ipcRenderer.send("window-close"),
  // Novos para o Wizard
  searchArts: (gameName, apiKey) => electron.ipcRenderer.invoke("search-sgdb-arts", { gameName, apiKey }),
  getAlternativeArts: (gameName, apiKey, type) => electron.ipcRenderer.invoke("get-alternative-arts", { gameName, apiKey, type }),
  downloadTempArt: (url) => electron.ipcRenderer.invoke("download-temp-art", { url }),
  injectShortcut: (data) => electron.ipcRenderer.invoke("inject-automated-shortcut", data),
  getLibrary: () => electron.ipcRenderer.invoke("get-non-steam-library"),
  removeShortcut: (appId) => electron.ipcRenderer.invoke("remove-shortcut", { appId }),
  selectArtFile: () => electron.ipcRenderer.invoke("select-art-file"),
  updateArt: (data) => electron.ipcRenderer.invoke("update-manual-art", data),
  openExternalUrl: (url) => electron.ipcRenderer.send("open-external-url", url),
  searchSteamGame: (query) => electron.ipcRenderer.invoke("search-steam-game", query)
});
