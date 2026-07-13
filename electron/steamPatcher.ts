import { exec } from 'node:child_process'
import { existsSync } from 'node:fs'

export async function launchPatchedSteam(greenLumaPath: string): Promise<{ success: boolean; error?: string }> {
  if (!existsSync(greenLumaPath)) {
    return { success: false, error: 'O arquivo GreenLuma fornecido não foi encontrado.' }
  }

  return new Promise((resolve) => {
    // Primeiro tentamos matar a steam, esperamos um momento e então iniciamos a nova com o patch
    exec('pkill -9 steam && sleep 1', () => {
      const child = exec('steam', {
        env: {
          ...process.env,
          LD_PRELOAD: greenLumaPath
        }
      })
      
      child.on('error', (err) => {
        resolve({ success: false, error: String(err) })
      })

      // Consideramos que o lançamento foi iniciado com sucesso
      // se não houver erro imediato
      setTimeout(() => {
        resolve({ success: true })
      }, 1000)
    })
  })
}
