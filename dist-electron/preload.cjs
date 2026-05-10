"use strict";
const electron = require("electron");
electron.contextBridge.exposeInMainWorld("api", {
  selectExe: () => electron.ipcRenderer.invoke("select-exe"),
  getApiKey: () => electron.ipcRenderer.invoke("get-api-key"),
  getProtons: () => electron.ipcRenderer.invoke("get-protons"),
  // Novos para o Wizard
  searchArts: (gameName, apiKey) => electron.ipcRenderer.invoke("search-sgdb-arts", { gameName, apiKey }),
  downloadTempArt: (url) => electron.ipcRenderer.invoke("download-temp-art", { url }),
  injectShortcut: (data) => electron.ipcRenderer.invoke("inject-automated-shortcut", data),
  getLibrary: () => electron.ipcRenderer.invoke("get-non-steam-library"),
  removeShortcut: (appId) => electron.ipcRenderer.invoke("remove-shortcut", { appId }),
  selectArtFile: () => electron.ipcRenderer.invoke("select-art-file"),
  updateArt: (data) => electron.ipcRenderer.invoke("update-manual-art", data)
});
