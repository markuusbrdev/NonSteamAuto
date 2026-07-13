import axios from 'axios'

export async function validateSgdbKey(apiKey: string): Promise<{ valid: boolean }> {
  try {
    const response = await axios.get('https://www.steamgriddb.com/api/v2/games/id/1', {
      headers: {
        Authorization: `Bearer ${apiKey}`
      }
    })
    if (response.status === 200) {
      return { valid: true }
    }
    return { valid: false }
  } catch (error) {
    return { valid: false }
  }
}

export async function validateSteamKey(apiKey: string): Promise<{ valid: boolean }> {
  try {
    const url = `http://api.steampowered.com/ISteamUserStats/GetSchemaForGame/v2/?key=${apiKey}&appid=440`
    const response = await axios.get(url)
    if (response.status === 200) {
      return { valid: true }
    }
    return { valid: false }
  } catch (error: any) {
    if (error.response && (error.response.status === 401 || error.response.status === 403)) {
      return { valid: false }
    }
    return { valid: false }
  }
}
