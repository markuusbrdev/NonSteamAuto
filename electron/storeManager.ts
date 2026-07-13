import Store from 'electron-store'

interface ConfigSchema {
  steamApiKey: string
  sgdbApiKey: string
  greenLumaPath: string
}

const store = new Store<ConfigSchema>({
  defaults: {
    steamApiKey: '',
    sgdbApiKey: '',
    greenLumaPath: ''
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

export async function saveConfigData(key: keyof ConfigSchema, value: string): Promise<void> {
  store.set(key, value)
}
