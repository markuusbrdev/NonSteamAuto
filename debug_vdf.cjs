const fs = require('fs');
const vdf = require('steam-binary-vdf');
const CRC32 = require('crc-32');

const buf = fs.readFileSync('/home/marcus/.local/share/Steam/userdata/1179354093/config/shortcuts.vdf');
const data = vdf.readVdf(buf);

console.log("Found shortcuts:", Object.keys(data.shortcuts).length);

const targetAppId = 4133461462; // some app ID if we knew it. Let's just log them!
Object.keys(data.shortcuts).forEach(k => {
  const s = data.shortcuts[k];
  const cleanExe = (s.Exe || s.exe || '').replace(/"/g, '');
  const shortcutString = `\x00${s.AppName || s.appname}\x00${cleanExe}`;
  const sAppId = (CRC32.str(shortcutString) | 0x80000000) >>> 0;
  console.log(k, s.AppName, sAppId);
});

