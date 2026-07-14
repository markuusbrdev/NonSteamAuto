import chokidar, { FSWatcher } from 'chokidar'
import fs from 'fs/promises'
import { readFileSync, existsSync } from 'fs'
import path from 'path'
import os from 'os'
import axios from 'axios'
import { Notification } from 'electron'
import { getConfig } from './storeManager'
import { fetchAchievementsSchema } from './steamApiUtils'

// Variável global para armazenar o estado anterior de cada jogo
const knownAchievements: Record<string, string[]> = {}
const activeWatchers: Record<string, FSWatcher> = {}

/**
 * Lê o arquivo JSON de conquistas do Goldberg e retorna um array de IDs desbloqueados.
 */
function readAchievementsFromFile(filePath: string): string[] {
  try {
    if (!existsSync(filePath)) return []
    const data = readFileSync(filePath, 'utf-8')
    if (!data.trim()) return []
    
    const parsed = JSON.parse(data)
    
    // Goldberg normalmente salva num formato objeto: { "ACHIEVEMENT_NAME": { ... }, ... }
    // ou array de strings se modificado, tratamos ambos.
    if (Array.isArray(parsed)) {
      return parsed.map(String)
    } else if (typeof parsed === 'object' && parsed !== null) {
      return Object.keys(parsed)
    }
    return []
  } catch (error) {
    console.error(`[AchievementWatcher] Erro ao ler arquivo ${filePath}:`, error)
    return []
  }
}

/**
 * Inicia os watchers globais para todos os jogos no cache
 */
export async function initGlobalWatchers() {
  console.log('[AchievementWatcher] Inicializando observador de conquistas...')
  
  try {
    const config = await getConfig()
    const cache = config.goldbergCache || {}
    
    for (const [appId, filePath] of Object.entries(cache)) {
      startWatchingApp(appId, filePath)
    }
  } catch (error) {
    console.error('[AchievementWatcher] Erro ao inicializar watchers:', error)
  }
}

/**
 * Inicia o watcher para um jogo específico
 */
export function startWatchingApp(appId: string, filePath: string) {
  if (activeWatchers[appId]) {
    // Já está sendo monitorado, mas podemos querer reiniciar se o caminho mudou
    activeWatchers[appId].close()
  }
  
  // Carrega estado inicial na memória
  knownAchievements[appId] = readAchievementsFromFile(filePath)
  console.log(`[AchievementWatcher] Monitorando AppID ${appId} em ${filePath} (${knownAchievements[appId].length} conquistas)`)

  const watcher = chokidar.watch(filePath, { 
    persistent: true,
    awaitWriteFinish: {
      stabilityThreshold: 500,
      pollInterval: 100
    }
  })
  
  watcher.on('change', async (changedPath) => {
    try {
      const currentAchievements = readAchievementsFromFile(changedPath)
      const previousAchievements = knownAchievements[appId] || []
      
      // Isolar IDs inéditos
      const newAchievements = currentAchievements.filter(id => !previousAchievements.includes(id))
      
      if (newAchievements.length > 0) {
        console.log(`[AchievementWatcher] Novas conquistas detectadas para AppID ${appId}:`, newAchievements)
        
        // Atualiza memória
        knownAchievements[appId] = currentAchievements
        
        // Dispara notificação para cada nova conquista
        for (const newAchievementId of newAchievements) {
          await triggerAchievementNotification(appId, newAchievementId)
        }
      }
    } catch (error) {
      console.error(`[AchievementWatcher] Erro no evento change para ${appId}:`, error)
    }
  })
  
  watcher.on('error', (error) => {
    console.error(`[AchievementWatcher] Erro no watcher para ${appId}:`, error)
  })

  activeWatchers[appId] = watcher
}

/**
 * Para de monitorar um jogo específico
 */
export function stopWatchingApp(appId: string) {
  if (activeWatchers[appId]) {
    activeWatchers[appId].close()
    delete activeWatchers[appId]
    console.log(`[AchievementWatcher] Parando monitoramento do AppID ${appId}`)
  }
}

/**
 * Lida com a busca de metadados e disparo da notificação nativa
 */
async function triggerAchievementNotification(appId: string, achievementId: string) {
  let title = '🏆 Conquista Desbloqueada!'
  let body = `ID: ${achievementId}`
  let localIconPath: string | undefined = undefined

  try {
    const config = await getConfig()
    const steamApiKey = config.steamApiKey
    
    if (steamApiKey) {
      // Busca metadados da Steam
      const schema = await fetchAchievementsSchema(appId, steamApiKey)
      const achievementData = schema.find(a => a.name === achievementId)
      
      if (achievementData) {
        body = achievementData.displayName
        
        if (achievementData.icon) {
          // Baixa o ícone temporariamente
          localIconPath = await downloadTempIcon(achievementData.icon, appId, achievementId)
        }
      }
    } else {
      console.warn('[AchievementWatcher] Steam API Key não configurada. Mostrando notificação genérica.')
    }
  } catch (error) {
    console.error(`[AchievementWatcher] Erro ao buscar dados da conquista ${achievementId}:`, error)
  }

  // Dispara a notificação nativa
  if (Notification.isSupported()) {
    const notification = new Notification({
      title,
      body,
      icon: localIconPath,
      silent: false // Tocar som padrão do sistema
    })
    
    notification.show()
  } else {
    console.warn('[AchievementWatcher] Notificações não são suportadas neste sistema.')
  }
}

/**
 * Baixa o ícone da URL para uma pasta temporária e retorna o caminho local
 */
async function downloadTempIcon(url: string, appId: string, achievementId: string): Promise<string | undefined> {
  try {
    const tempDir = path.join(os.tmpdir(), 'non-steam-automation-achievements')
    await fs.mkdir(tempDir, { recursive: true })
    
    // Usamos um nome de arquivo fixo por conquista para reaproveitar no futuro
    const fileName = `${appId}_${achievementId}.jpg`
    const dest = path.join(tempDir, fileName)
    
    // Verifica se já temos o cache
    if (existsSync(dest)) {
      return dest
    }
    
    const response = await axios.get(url, { responseType: 'arraybuffer' })
    await fs.writeFile(dest, Buffer.from(response.data))
    
    return dest
  } catch (error) {
    console.error(`[AchievementWatcher] Erro ao baixar ícone de ${url}:`, error)
    return undefined
  }
}
