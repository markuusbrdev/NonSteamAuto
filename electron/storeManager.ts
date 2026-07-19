import Store from 'electron-store'

interface ConfigSchema {
  steamApiKey: string
  sgdbApiKey: string
  greenLumaPath: string
  steam32Id?: string

  goldbergCache: Record<string, string>
  realAppIdCache: Record<string, string>
  achievementsEnabledCache: Record<string, boolean>
}

const store = new Store<ConfigSchema>({
  defaults: {
    steamApiKey: '',
    sgdbApiKey: '',
    greenLumaPath: '',
    steam32Id: '',

    goldbergCache: {},
    realAppIdCache: {},
    achievementsEnabledCache: {}
  }
})

export async function getConfig(): Promise<ConfigSchema> {
  return store.store
}

export async function getSavedApiKey(): Promise<string> {
  return store.get('sgdbApiKey')
}

export async function saveApiKey(apiKey: string): Promise<void> {
  store.set('sgdbApiKey', apiKey)
}

export async function saveConfigData(key: keyof ConfigSchema, value: any): Promise<void> {
  store.set(key, value)
}

export async function getGoldbergCache(appId: string): Promise<string | undefined> {
  const cache = store.get('goldbergCache') || {}
  return cache[appId]
}

export async function saveGoldbergCache(appId: string, path: string): Promise<void> {
  const cache = store.get('goldbergCache') || {}
  cache[appId] = path
  store.set('goldbergCache', cache)
}

export async function clearGoldbergCache(appId: string): Promise<boolean> {
  const cache = store.get('goldbergCache') || {}
  if (cache[appId]) {
    delete cache[appId]
    store.set('goldbergCache', cache)
    return true
  }
  return false
}

export async function getRealAppIdCache(appId: string): Promise<string | undefined> {
  const cache = store.get('realAppIdCache') || {}
  return cache[appId]
}

export async function saveRealAppIdCache(appId: string, realAppId: string): Promise<void> {
  const cache = store.get('realAppIdCache') || {}
  cache[appId] = realAppId
  store.set('realAppIdCache', cache)
}

export async function getAchievementsEnabledCache(appId: string): Promise<boolean> {
  const cache: Record<string, boolean> = store.get('achievementsEnabledCache') || {}
  // Default to true if not set
  return cache[appId] !== undefined ? cache[appId] : true
}

export async function saveAchievementsEnabledCache(appId: string, enabled: boolean): Promise<void> {
  const cache: Record<string, boolean> = store.get('achievementsEnabledCache') || {}
  cache[appId] = enabled
  store.set('achievementsEnabledCache', cache)
}

