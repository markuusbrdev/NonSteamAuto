import { a as axios } from './main-C789GSZJ.js';
import fs from 'fs';
import path from 'path';
import os from 'os';
import { exec } from 'child_process';
import { promisify } from 'util';

const execAsync = promisify(exec);
async function downloadVCRedist(onProgress) {
  const url = "https://aka.ms/vs/17/release/vc_redist.x64.exe";
  const tmpDir = os.tmpdir();
  const filePath = path.join(tmpDir, "vc_redist.x64.exe");
  if (fs.existsSync(filePath)) {
    if (onProgress) onProgress(100);
    return filePath;
  }
  const response = await axios({
    url,
    method: "GET",
    responseType: "stream"
  });
  const totalLength = parseInt(String(response.headers["content-length"] || "25000000"), 10);
  let downloadedLength = 0;
  const writer = fs.createWriteStream(filePath);
  return new Promise((resolve, reject) => {
    response.data.on("data", (chunk) => {
      downloadedLength += chunk.length;
      if (onProgress && totalLength) {
        const percent = Math.round(downloadedLength / totalLength * 100);
        onProgress(Math.min(percent, 100));
      }
    });
    response.data.pipe(writer);
    writer.on("finish", () => resolve(filePath));
    writer.on("error", (err) => {
      fs.unlink(filePath, () => {
      });
      reject(err);
    });
  });
}
async function getPrefixPath(appId) {
  const paths = [
    path.join(os.homedir(), ".steam/steam/steamapps/compatdata", appId, "pfx"),
    path.join(os.homedir(), ".local/share/Steam/steamapps/compatdata", appId, "pfx"),
    path.join(os.homedir(), ".var/app/com.valvesoftware.Steam/.local/share/Steam/steamapps/compatdata", appId, "pfx")
  ];
  for (const p of paths) {
    if (fs.existsSync(p)) {
      return p;
    }
  }
  throw new Error(`Prefixo Proton não encontrado para o jogo. Inicie o jogo pelo menos uma vez pela Steam.`);
}
async function installVCRedist(appId, onProgress) {
  try {
    await execAsync("which wine");
  } catch (err) {
    throw new Error('Wine nativo não encontrado no sistema. Por favor, instale o pacote "wine" no seu sistema operacional (ou verifique se está no PATH).');
  }
  const prefixPath = await getPrefixPath(appId);
  const exePath = await downloadVCRedist(onProgress);
  try {
    const cmd = `WINEPREFIX="${prefixPath}" wine "${exePath}" /quiet /norestart`;
    await execAsync(cmd);
    return true;
  } catch (err) {
    if (err.code === 3010 || err.code === 1638) {
      return true;
    }
    console.error("Erro ao instalar VCRedist:", err);
    throw new Error(`Falha ao instalar o pacote: ${err.message}`);
  }
}

export { downloadVCRedist, getPrefixPath, installVCRedist };
