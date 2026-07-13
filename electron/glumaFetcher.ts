import os from 'node:os'
import fs from 'node:fs/promises'
import path from 'node:path'
import axios from 'axios'
import * as tar from 'tar'

const GLUMA_DIR = path.join(os.homedir(), '.config', 'STLinuxTools', 'gluma')
const GLUMA_SO = path.join(GLUMA_DIR, 'greenluma.so')
const GLUMA_SH = path.join(GLUMA_DIR, 'greenluma.sh')

export async function checkGlumaStatus(): Promise<boolean> {
  try {
    await fs.access(GLUMA_SO)
    // Se precisar checar o .sh, pode adicionar:
    // await fs.access(GLUMA_SH)
    return true
  } catch {
    return false
  }
}

export async function downloadAndExtractGreenLuma(): Promise<void> {
  try {
    // 1. Criar diretório se não existir
    await fs.mkdir(GLUMA_DIR, { recursive: true })

    // 2. Fetch the latest release metadata
    // Substitua pelo repositório oficial se necessário. Ex: 'PhantomGamers/GreenLuma-2024-Tux'
    const REPO = 'PhantomGamers/GreenLuma-2024-Tux'
    const response = await axios.get(`https://api.github.com/repos/${REPO}/releases/latest`)
    
    // 3. Find the x86_64 tar.gz asset
    const assets = response.data.assets
    const targetAsset = assets.find((asset: any) => 
      asset.name.includes('x86_64') && asset.name.endsWith('.tar.gz')
    )

    if (!targetAsset) {
      throw new Error('Não foi possível encontrar a release do GreenLuma para x86_64.')
    }

    // 4. Download and stream to tar
    const tarPath = path.join(GLUMA_DIR, 'gluma.tar.gz')
    const downloadStream = await axios.get(targetAsset.browser_download_url, {
      responseType: 'stream'
    })

    // We stream it to a temporary file, then extract it
    const writer = (await import('node:fs')).createWriteStream(tarPath)
    downloadStream.data.pipe(writer)
    
    await new Promise<void>((resolve, reject) => {
      writer.on('finish', resolve)
      writer.on('error', reject)
    })

    // 5. Extract the tar.gz file
    await tar.x({
      file: tarPath,
      cwd: GLUMA_DIR
    })

    // Remove the downloaded archive
    await fs.unlink(tarPath)

    // 6. Apply permissions (chmod 0o755) to executable and libraries
    try {
      await fs.chmod(GLUMA_SO, 0o755)
    } catch (e) {
      console.warn('Could not chmod greenluma.so, might not exist.', e)
    }
    
    try {
      await fs.chmod(GLUMA_SH, 0o755)
    } catch (e) {
      console.warn('Could not chmod greenluma.sh, might not exist.', e)
    }

  } catch (error) {
    console.error('Falha ao baixar/extrair GreenLuma:', error)
    throw error
  }
}
