import React, { useState, useEffect } from 'react'

interface SteamUser {
  steam32Id: string
  steam64Id: string
  accountName: string
  personaName: string
  mostRecent: boolean
}

interface SettingsPanelProps {
  onConfigChange: (key: string, value: string) => void
  initialSteamApiKey: string
  initialSgdbApiKey: string
  initialSteam32Id?: string
}

export const SettingsPanel: React.FC<SettingsPanelProps> = ({ 
  onConfigChange, 
  initialSteamApiKey, 
  initialSgdbApiKey,
  initialSteam32Id = ''
}) => {
  const [steamApiKey, setSteamApiKey] = useState(initialSteamApiKey)
  const [sgdbApiKey, setSgdbApiKey] = useState(initialSgdbApiKey)
  const [steam32Id, setSteam32Id] = useState(initialSteam32Id)
  const [localUsers, setLocalUsers] = useState<SteamUser[]>([])
  const [installType, setInstallType] = useState<'native' | 'flatpak' | 'none'>('none')

  
  const [showApiKey, setShowApiKey] = useState(false)
  const [showSteamKey, setShowSteamKey] = useState(false)
  
  type ValidationStatus = 'idle' | 'loading' | 'success' | 'error'
  const [steamKeyStatus, setSteamKeyStatus] = useState<ValidationStatus>('idle')
  const [sgdbKeyStatus, setSgdbKeyStatus] = useState<ValidationStatus>('idle')
  
  useEffect(() => {
    setSteamApiKey(initialSteamApiKey)
    setSgdbApiKey(initialSgdbApiKey)
    setSteam32Id(initialSteam32Id)
  }, [initialSteamApiKey, initialSgdbApiKey, initialSteam32Id])

  useEffect(() => {
    const fetchData = async () => {

      if ((window as any).api?.getLocalSteamUsers) {
        const response = await (window as any).api.getLocalSteamUsers()
        const users = response.users || []
        setLocalUsers(users)
        setInstallType(response.installType || 'none')
        
        // Se não houver nenhum selecionado, seleciona o mostRecent
        if (!initialSteam32Id && users.length > 0) {
          const recentUser = users.find((u: SteamUser) => u.mostRecent) || users[0]
          setSteam32Id(recentUser.steam32Id)
          saveSteam32Id(recentUser.steam32Id)
        }
      }
    }
    fetchData()
  }, [])

  const saveSteam32Id = async (id: string) => {
    if ((window as any).api?.saveConfigData) {
      await (window as any).api.saveConfigData('steam32Id', id)
      onConfigChange('steam32Id', id)
    }
  }

  const handleUserChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const newId = e.target.value
    setSteam32Id(newId)
    saveSteam32Id(newId)
  }

  const saveSteamApiKey = async () => {
    if (!steamApiKey) return
    setSteamKeyStatus('loading')
    if ((window as any).api?.validateSteamKey) {
      const res = await (window as any).api.validateSteamKey(steamApiKey)
      if (res.valid) {
        setSteamKeyStatus('success')
        await (window as any).api.saveConfigData('steamApiKey', steamApiKey)
        onConfigChange('steamApiKey', steamApiKey)
        setTimeout(() => setSteamKeyStatus('idle'), 3000)
      } else {
        setSteamKeyStatus('error')
      }
    }
  }

  const saveSgdbApiKey = async () => {
    if (!sgdbApiKey) return
    setSgdbKeyStatus('loading')
    if ((window as any).api?.validateSgdbKey) {
      const res = await (window as any).api.validateSgdbKey(sgdbApiKey)
      if (res.valid) {
        setSgdbKeyStatus('success')
        await (window as any).api.saveConfigData('sgdbApiKey', sgdbApiKey)
        onConfigChange('sgdbApiKey', sgdbApiKey)
        setTimeout(() => setSgdbKeyStatus('idle'), 3000)
      } else {
        setSgdbKeyStatus('error')
      }
    }
  }

  return (
    <div className="animate-fade-in relative grid grid-cols-1 md:grid-cols-2 gap-6 p-4">
      {/* Card 0: Perfil Ativo da Steam */}
      <div className="adwaita-card p-6 flex flex-col space-y-6 md:col-span-2 max-w-4xl mx-auto w-full">
        <div>
          <h2 className="text-lg font-bold mb-1">Perfil Ativo da Steam</h2>
          <p className="text-sm text-adwaita-text-secondary">Selecione qual conta receberá os atalhos e as artes injetadas.</p>
        </div>
        <div>
          <select 
            value={steam32Id}
            onChange={handleUserChange}
            className="adwaita-input w-full text-sm font-semibold"
          >
            {localUsers.length === 0 && <option value="">Nenhum usuário encontrado</option>}
            {localUsers.map(user => (
              <option key={user.steam32Id} value={user.steam32Id}>
                {user.personaName} (Account: {user.accountName} | ID: {user.steam32Id})
              </option>
            ))}
          </select>
          {installType !== 'none' && (
            <div className="mt-3 flex items-center">
              {installType === 'flatpak' ? (
                <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider bg-adwaita-blue/10 text-adwaita-blue border border-adwaita-blue/20">
                  <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" /></svg>
                  Steam (Flatpak) - Sandbox Ativa
                </span>
              ) : (
                <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider bg-white/5 text-adwaita-text-secondary border border-white/10">
                  <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 8h14M5 8a2 2 0 110-4h14a2 2 0 110 4M5 8v10a2 2 0 002 2h10a2 2 0 002-2V8m-9 4h4" /></svg>
                  Steam (Nativa) - Acesso Total
                </span>
              )}
            </div>
          )}
        </div>
      </div>

      {/* Card 1: APIs e Integrações */}
      <div className="adwaita-card p-6 flex flex-col space-y-6 md:col-span-2 max-w-4xl mx-auto w-full">
        <div>
          <h2 className="text-lg font-bold mb-1">APIs e Integrações</h2>
          <p className="text-sm text-adwaita-text-secondary">Configure suas chaves de API para habilitar funcionalidades extras no sistema.</p>
        </div>

        {/* SGDB API Key */}
        <div>
          <label className="text-[11px] font-bold text-adwaita-text-secondary uppercase block mb-1">SteamGridDB API Key (Artes)</label>
          <p className="text-sm text-gray-400">Esta chave permite que o aplicativo baixe automaticamente capas, logos e banners em alta qualidade para os seus jogos.</p>
          <div className="mb-3 mt-1">
            <button 
              onClick={() => (window as any).api?.openExternalUrl?.('https://www.steamgriddb.com/profile/api')}
              className="text-blue-400 hover:text-blue-300 underline-offset-2 hover:underline cursor-pointer text-sm font-medium inline-flex items-center gap-1 transition-colors"
            >
              Obter chave no SteamGridDB
              <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" /></svg>
            </button>
          </div>
          <div className="flex items-center gap-2">
            <div className="relative flex-1">
              <input 
                type={showApiKey ? "text" : "password"}
                placeholder="Cole sua SGDB API Key..."
                value={sgdbApiKey}
                onChange={(e) => {
                  setSgdbApiKey(e.target.value)
                  if (sgdbKeyStatus === 'error') setSgdbKeyStatus('idle')
                }}
                className={`adwaita-input w-full pr-10 text-sm ${sgdbKeyStatus === 'error' ? 'border-red-500/50' : ''}`}
              />
              <button 
                onClick={() => setShowApiKey(!showApiKey)}
                className="absolute right-2 top-1/2 -translate-y-1/2 p-1 text-white/40 hover:text-white/80 transition-colors"
              >
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  {showApiKey ? (
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13.875 18.825A10.05 10.05 0 0112 19c-4.478 0-8.268-2.943-9.543-7a9.97 9.97 0 011.563-3.029m5.858.908a3 3 0 114.243 4.243M9.878 9.878l4.242 4.242M9.88 9.88l-3.29-3.29m7.532 7.532l3.29 3.29M3 3l3.59 3.59m0 0A9.953 9.953 0 0112 5c4.478 0 8.268 2.943 9.543 7a10.025 10.025 0 01-4.132 5.411m0 0l-3.29-3.29" />
                  ) : (
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0zM2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                  )}
                </svg>
              </button>
              {sgdbKeyStatus === 'success' && (
                <div className="absolute right-10 top-1/2 -translate-y-1/2 p-1 text-green-500">
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7" /></svg>
                </div>
              )}
            </div>
            <button 
              onClick={saveSgdbApiKey}
              disabled={sgdbKeyStatus === 'loading'}
              className={`px-4 py-2 text-white rounded-lg transition-colors font-bold text-sm min-w-[120px] flex justify-center items-center ${sgdbKeyStatus === 'success' ? 'bg-green-600' : 'bg-adwaita-blue hover:bg-blue-500'}`}
            >
              {sgdbKeyStatus === 'loading' ? (
                <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
              ) : sgdbKeyStatus === 'success' ? (
                "Salvo!"
              ) : (
                "Salvar"
              )}
            </button>
          </div>
          {sgdbKeyStatus === 'error' && (
            <p className="text-red-400 text-xs mt-1">Chave inválida ou expirada.</p>
          )}
        </div>

        {/* Steam Web API Key */}
        <div className="pt-2">
          <label className="text-[11px] font-bold text-adwaita-text-secondary uppercase block mb-1">Steam Web API Key (Conquistas)</label>
          <p className="text-sm text-gray-400">Esta chave oficial da Valve é usada apenas como leitura pública para baixar os nomes, descrições e ícones das conquistas. Nenhum dado pessoal é acessado.</p>
          <div className="mb-3 mt-1">
            <button 
              onClick={() => (window as any).api?.openExternalUrl?.('https://steamcommunity.com/dev/apikey')}
              className="text-blue-400 hover:text-blue-300 underline-offset-2 hover:underline cursor-pointer text-sm font-medium inline-flex items-center gap-1 transition-colors"
            >
              Gerar chave na Steam Community
              <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" /></svg>
            </button>
          </div>
          <div className="flex items-center gap-2">
            <div className="relative flex-1">
              <input 
                type={showSteamKey ? "text" : "password"}
                placeholder="Cole sua Steam Web API Key..."
                value={steamApiKey}
                onChange={(e) => {
                  setSteamApiKey(e.target.value)
                  if (steamKeyStatus === 'error') setSteamKeyStatus('idle')
                }}
                className={`adwaita-input w-full pr-10 text-sm ${steamKeyStatus === 'error' ? 'border-red-500/50' : ''}`}
              />
              <button 
                onClick={() => setShowSteamKey(!showSteamKey)}
                className="absolute right-2 top-1/2 -translate-y-1/2 p-1 text-white/40 hover:text-white/80 transition-colors"
              >
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  {showSteamKey ? (
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13.875 18.825A10.05 10.05 0 0112 19c-4.478 0-8.268-2.943-9.543-7a9.97 9.97 0 011.563-3.029m5.858.908a3 3 0 114.243 4.243M9.878 9.878l4.242 4.242M9.88 9.88l-3.29-3.29m7.532 7.532l3.29 3.29M3 3l3.59 3.59m0 0A9.953 9.953 0 0112 5c4.478 0 8.268 2.943 9.543 7a10.025 10.025 0 01-4.132 5.411m0 0l-3.29-3.29" />
                  ) : (
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0zM2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                  )}
                </svg>
              </button>
              {steamKeyStatus === 'success' && (
                <div className="absolute right-10 top-1/2 -translate-y-1/2 p-1 text-green-500">
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7" /></svg>
                </div>
              )}
            </div>
            <button 
              onClick={saveSteamApiKey}
              disabled={steamKeyStatus === 'loading'}
              className={`px-4 py-2 text-white rounded-lg transition-colors font-bold text-sm min-w-[120px] flex justify-center items-center ${steamKeyStatus === 'success' ? 'bg-green-600' : 'bg-adwaita-blue hover:bg-blue-500'}`}
            >
              {steamKeyStatus === 'loading' ? (
                <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
              ) : steamKeyStatus === 'success' ? (
                "Salvo!"
              ) : (
                "Salvar"
              )}
            </button>
          </div>
          {steamKeyStatus === 'error' && (
            <p className="text-red-400 text-xs mt-1">Chave inválida ou expirada.</p>
          )}
        </div>
      </div>


    </div>
  )
}
