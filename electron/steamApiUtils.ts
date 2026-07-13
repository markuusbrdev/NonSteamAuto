import axios from 'axios'

export interface SteamAchievement {
  name: string
  defaultvalue: number
  displayName: string
  hidden: number
  description: string
  icon: string
  icongray: string
}

export async function fetchAchievementsSchema(appId: string, apiKey: string): Promise<SteamAchievement[]> {
  try {
    const url = `http://api.steampowered.com/ISteamUserStats/GetSchemaForGame/v2/?key=${apiKey}&appid=${appId}`
    const response = await axios.get(url)

    if (response.data && response.data.game && response.data.game.availableGameStats && response.data.game.availableGameStats.achievements) {
      return response.data.game.availableGameStats.achievements
    }
    
    return []
  } catch (error) {
    console.error(`Erro ao buscar conquistas da Steam para AppID ${appId}:`, error)
    return []
  }
}
