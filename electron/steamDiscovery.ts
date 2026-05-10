import { join } from 'path';
import { existsSync } from 'fs';
import { homedir } from 'os';

export interface DiscoveryResult {
  success: boolean;
  path?: string;
  type?: 'Native' | 'Flatpak';
  error?: string;
}

/**
 * Busca o diretório 'steamapps' nos caminhos padrão do Linux.
 */
export function findSteamApps(): DiscoveryResult {
  const home = homedir();
  
  const paths = [
    join(home, '.local/share/Steam/steamapps'),
    join(home, '.steam/steam/steamapps'),
    join(home, '.var/app/com.valvesoftware.Steam/.local/share/Steam/steamapps')
  ];

  for (const path of paths) {
    if (existsSync(path)) {
      return {
        success: true,
        path: path,
        type: path.includes('flatpak') ? 'Flatpak' : 'Native'
      };
    }
  }

  return {
    success: false,
    error: 'Diretório steamapps não encontrado nos locais padrão.'
  };
}
