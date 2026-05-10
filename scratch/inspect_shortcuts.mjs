import fs from 'fs/promises';
import path from 'path';
import os from 'os';
import * as VDF from 'steam-binary-vdf';

async function debug() {
  try {
    const steamPath = path.join(os.homedir(), '.steam/steam');
    const userDataPath = path.join(steamPath, 'userdata');
    const users = await fs.readdir(userDataPath);
    const userId = users.find(u => u !== '0' && u !== 'anonymous') || users[0];
    const shortcutsVdfPath = path.join(userDataPath, userId, 'config/shortcuts.vdf');

    const buffer = await fs.readFile(shortcutsVdfPath);
    const readFn = VDF.readVdf || (VDF.default && VDF.default.readVdf);
    const parsed = readFn(buffer);
    
    console.log('Parsed Keys:', Object.keys(parsed));
    if (parsed.shortcuts) {
      console.log('Shortcuts Type:', typeof parsed.shortcuts);
      const values = Object.values(parsed.shortcuts);
      console.log('Number of Shortcuts:', values.length);
      if (values.length > 0) {
        console.log('First Shortcut:', values[0]);
      }
    }
  } catch (err) {
    console.error(err);
  }
}

debug();
