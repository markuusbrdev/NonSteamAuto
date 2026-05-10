import * as VDF from 'steam-binary-vdf';
console.log('VDF Exports:', Object.keys(VDF));
if (VDF.default) {
  console.log('VDF Default Exports:', Object.keys(VDF.default));
}
