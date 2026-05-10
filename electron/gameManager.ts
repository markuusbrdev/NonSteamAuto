import { readdirSync, readFileSync, writeFileSync, copyFileSync, mkdirSync, existsSync, unlinkSync } from 'fs';
import { join, dirname } from 'path';
import { parseVDF } from './vdfParser';
import { shell } from 'electron';

export interface GameInfo {
  appid: string;
  name: string;
  installdir: string;
  sizeOnDisk: string;
  formattedSize: string;
  manifestPath: string;
  buildid: string;
  lastPlayed: string;
  lastUpdated: string;
  rawLastPlayed: number;
  rawSize: number;
}

export function getInstalledGames(steamAppsPath: string): GameInfo[] {
  try {
    const files = readdirSync(steamAppsPath);
    const manifests = files.filter(f => f.startsWith('appmanifest_') && f.endsWith('.acf'));
    
    return manifests.map(file => {
      const manifestPath = join(steamAppsPath, file);
      const content = readFileSync(manifestPath, 'utf-8');
      const data = parseVDF(content);
      
      const sizeInBytes = parseInt(data.sizeondisk || '0');
      const lastPlayedTs = parseInt(data.lastplayed || '0');
      
      return {
        appid: data.appid || '0',
        name: data.name || 'Unknown Game',
        installdir: data.installdir || '',
        sizeOnDisk: data.sizeondisk || '0',
        formattedSize: formatBytes(sizeInBytes),
        manifestPath: manifestPath,
        buildid: data.buildid || 'N/A',
        lastPlayed: formatDate(data.lastplayed),
        lastUpdated: formatDate(data.lastupdated),
        rawLastPlayed: lastPlayedTs,
        rawSize: sizeInBytes
      };
    }).sort((a, b) => a.name.localeCompare(b.name));
  } catch (error) {
    console.error('Erro ao ler jogos:', error);
    return [];
  }
}

export function readManifest(path: string): string {
  return readFileSync(path, 'utf-8');
}

export function saveManifest(path: string, content: string): boolean {
  try {
    createBackup(path);
    writeFileSync(path, content, 'utf-8');
    return true;
  } catch (error) {
    console.error('Erro ao salvar manifesto:', error);
    return false;
  }
}

export function deleteManifest(path: string): boolean {
  try {
    createBackup(path);
    unlinkSync(path);
    return true;
  } catch (error) {
    console.error('Erro ao deletar manifesto:', error);
    return false;
  }
}

export function openManifestFolder(path: string) {
  shell.showItemInFolder(path);
}

function createBackup(path: string) {
  const backupDir = join(dirname(path), '.asmm_backup');
  if (!existsSync(backupDir)) {
    mkdirSync(backupDir, { recursive: true });
  }
  const timestamp = new Date().toISOString().replace(/[:.]/g, '-');
  const fileName = path.split('/').pop();
  copyFileSync(path, join(backupDir, `${fileName}.${timestamp}.bak`));
}

function formatDate(unixTimestamp: string | undefined): string {
  if (!unixTimestamp || unixTimestamp === '0') return 'Nunca';
  const date = new Date(parseInt(unixTimestamp) * 1000);
  return date.toLocaleDateString('pt-BR', { day: '2-digit', month: '2-digit', year: 'numeric' });
}

function formatBytes(bytes: number, decimals = 2) {
  if (bytes === 0) return '0 Bytes';
  const k = 1024;
  const dm = decimals < 0 ? 0 : decimals;
  const sizes = ['Bytes', 'KB', 'MB', 'GB', 'TB'];
  const i = Math.floor(Math.log(bytes) / Math.log(k));
  return parseFloat((bytes / Math.pow(k, i)).toFixed(dm)) + ' ' + sizes[i];
}
