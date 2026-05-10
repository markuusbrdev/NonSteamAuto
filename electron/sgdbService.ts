import axios from 'axios'
import fs from 'fs/promises'
import path from 'path'

export class SGDBService {
  private apiKey: string
  private baseUrl = 'https://www.steamgriddb.com/api/v2'

  constructor(apiKey: string) {
    this.apiKey = apiKey
  }

  private get headers() {
    return { Authorization: `Bearer ${this.apiKey}` }
  }

  async searchGame(name: string) {
    const response = await axios.get(`${this.baseUrl}/search/autocomplete/${encodeURIComponent(name)}`, { headers: this.headers })
    return response.data.data[0] // Return the first match
  }

  async getAssets(gameId: number) {
    const [grids, heroes, logos, icons] = await Promise.all([
      axios.get(`${this.baseUrl}/grids/game/${gameId}`, { headers: this.headers }),
      axios.get(`${this.baseUrl}/heroes/game/${gameId}`, { headers: this.headers }),
      axios.get(`${this.baseUrl}/logos/game/${gameId}`, { headers: this.headers }),
      axios.get(`${this.baseUrl}/icons/game/${gameId}`, { headers: this.headers })
    ])

    return {
      grid: grids.data.data[0]?.url,
      hero: heroes.data.data[0]?.url,
      logo: logos.data.data[0]?.url,
      icon: icons.data.data[0]?.url
    }
  }

  async downloadImage(url: string, dest: string) {
    const response = await axios({
      url,
      method: 'GET',
      responseType: 'arraybuffer'
    })
    await fs.writeFile(dest, response.data)
  }
}
