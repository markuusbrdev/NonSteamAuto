import fs from 'fs/promises'
import path from 'path'
import { app } from 'electron'

const configPath = path.join(app.getPath('userData'), 'config.json')

export async function getSavedApiKey(): Promise<string> {
  try {
    const data = await fs.readFile(configPath, 'utf-8')
    const config = JSON.parse(data)
    return config.sgdbApiKey || ''
  } catch {
    return ''
  }
}

export async function saveApiKey(apiKey: string): Promise<void> {
  const config = { sgdbApiKey: apiKey }
  await fs.writeFile(configPath, JSON.stringify(config, null, 2))
}
