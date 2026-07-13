import fs from 'fs/promises'
import { existsSync } from 'fs'
import path from 'path'
import os from 'os'
import * as VDFParser from 'vdf-parser'

export interface SteamUser {
  steam32Id: string
  steam64Id: string
  accountName: string
  personaName: string
  mostRecent: boolean
}

export interface SteamUserResponse {
  users: SteamUser[]
  installType: 'native' | 'flatpak' | 'none'
}

export async function getLocalSteamUsers(): Promise<SteamUserResponse> {
  const nativePaths = [
    path.join(os.homedir(), '.steam/steam/config/loginusers.vdf'),
    path.join(os.homedir(), '.local/share/Steam/config/loginusers.vdf')
  ]
  const flatpakPath = path.join(os.homedir(), '.var/app/com.valvesoftware.Steam/.local/share/Steam/config/loginusers.vdf')

  let vdfPath = ''
  let installType: 'native' | 'flatpak' | 'none' = 'none'

  // Prioritize native
  for (const p of nativePaths) {
    if (existsSync(p)) {
      vdfPath = p
      installType = 'native'
      break
    }
  }

  // Fallback to flatpak
  if (!vdfPath && existsSync(flatpakPath)) {
    vdfPath = flatpakPath
    installType = 'flatpak'
  }

  if (!vdfPath) {
    return { users: [], installType: 'none' }
  }

  try {
    const content = await fs.readFile(vdfPath, 'utf-8')
    const parsed: any = VDFParser.parse(content)
    
    if (!parsed || !parsed.users) {
      return { users: [], installType }
    }

    const usersList: SteamUser[] = []
    
    for (const steam64Id in parsed.users) {
      const userData = parsed.users[steam64Id]
      const steam32Id = (BigInt(steam64Id) - 76561197960265728n).toString()
      
      usersList.push({
        steam32Id,
        steam64Id,
        accountName: userData.AccountName || 'Unknown',
        personaName: userData.PersonaName || 'Unknown',
        mostRecent: userData.MostRecent === '1'
      })
    }

    return { users: usersList, installType }
  } catch (error) {
    console.error('Error parsing loginusers.vdf:', error)
    return { users: [], installType: 'none' }
  }
}
