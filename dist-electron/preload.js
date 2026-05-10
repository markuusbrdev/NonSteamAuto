"use strict";
const electron = require("electron");
electron.contextBridge.exposeInMainWorld("api", {
  selectExe: () => electron.ipcRenderer.invoke("select-exe"),
  getApiKey: () => electron.ipcRenderer.invoke("get-api-key"),
  injectShortcut: (data) => electron.ipcRenderer.invoke("inject-automated-shortcut", data),
  getLibrary: () => electron.ipcRenderer.invoke("get-non-steam-library"),
  selectArtFile: () => electron.ipcRenderer.invoke("select-art-file"),
  updateArt: (data) => electron.ipcRenderer.invoke("update-manual-art", data)
});
