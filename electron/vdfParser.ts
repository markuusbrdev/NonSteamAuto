/**
 * Parser minimalista para arquivos .acf (formato VDF).
 * Foca em extrair pares de chave-valor simples.
 */
export function parseVDF(content: string) {
  const result: any = {};
  const lines = content.split('\n');
  

  
  for (let line of lines) {
    line = line.trim();
    if (!line || line.startsWith('{') || line.startsWith('}')) continue;

    // Regex para capturar "chave" "valor"
    const match = line.match(/"([^"]+)"\s+"([^"]+)"/);
    if (match) {
      const key = match[1].toLowerCase();
      const value = match[2];
      result[key] = value;
    }
  }
  
  return result;
}
