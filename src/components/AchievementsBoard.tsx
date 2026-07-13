import React, { useState, useEffect } from 'react'

interface HybridAchievement {
  name: string
  defaultvalue: number
  displayName: string
  hidden: number
  description: string
  icon: string
  icongray: string
  unlocked: boolean
  currentIcon: string
}

interface Props {
  appId: string
  steamApiKey: string
  onClose: () => void
}

export const AchievementsBoard: React.FC<Props> = ({ appId, steamApiKey, onClose }) => {
  const [loading, setLoading] = useState(false)
  const [achievements, setAchievements] = useState<HybridAchievement[]>([])
  const [error, setError] = useState('')
  const [scanStatus, setScanStatus] = useState<'scanning' | 'found' | 'not-found'>('scanning')
  const [goldbergPath, setGoldbergPath] = useState<string | null>(null)
  const [isEditingAppId, setIsEditingAppId] = useState(false)
  const [manualAppIdInput, setManualAppIdInput] = useState('')

  // 1. Auto-scan on mount
  useEffect(() => {
    const scan = async () => {
      setScanStatus('scanning')
      if ((window as any).api?.autoScanGoldberg) {
        const foundPath = await (window as any).api.autoScanGoldberg(appId)
        if (foundPath) {
          setGoldbergPath(foundPath)
          setScanStatus('found')
        } else {
          setScanStatus('not-found')
        }
      } else {
        setScanStatus('not-found')
      }
    }
    scan()
  }, [appId])

  // 2. Load achievements when found
  useEffect(() => {
    if (scanStatus !== 'found') return

    const loadAchievements = async () => {
      setLoading(true)
      try {
        if (steamApiKey) {
          const hybridData = await (window as any).api.getHybridAchievements(appId, steamApiKey, undefined, goldbergPath || undefined)
          if (hybridData && hybridData.length > 0) {
            setAchievements(hybridData)
          } else {
            setError('Nenhuma conquista encontrada na Steam para este jogo ou os dados locais estão vazios.')
          }
        } else {
          setError('Steam Web API Key não configurada. Impossível carregar conquistas.')
        }
      } catch (err) {
        setError('Falha ao carregar conquistas: ' + err)
      } finally {
        setLoading(false)
      }
    }
    loadAchievements()
  }, [appId, steamApiKey, scanStatus, goldbergPath])

  const handleManualSelect = async () => {
    if ((window as any).api?.manualSelectGoldberg) {
      const selected = await (window as any).api.manualSelectGoldberg(appId)
      if (selected) {
        setGoldbergPath(selected)
        setScanStatus('found')
      }
    }
  }

  const handleClearCache = async () => {
    if ((window as any).api?.clearGoldbergCache) {
      await (window as any).api.clearGoldbergCache(appId)
      setGoldbergPath(null)
      setScanStatus('not-found')
      setAchievements([])
    }
  }

  const handleSaveRealAppId = async () => {
    if (!manualAppIdInput.trim()) return
    try {
      setLoading(true)
      await (window as any).api.saveRealAppId(appId, manualAppIdInput.trim())
      setIsEditingAppId(false)
      // Force reload by re-triggering scan/load
      setScanStatus('scanning')
      const foundPath = await (window as any).api.autoScanGoldberg(appId)
      if (foundPath) {
        setGoldbergPath(foundPath)
        setScanStatus('found')
      } else {
        setScanStatus('not-found')
      }
    } catch (err) {
      console.error(err)
    } finally {
      setLoading(false)
    }
  }

  const unlockedCount = achievements.filter(a => a.unlocked).length
  const totalCount = achievements.length

  return (
    <div className="fixed inset-0 z-[80] bg-black/80 flex items-center justify-center p-4 animate-fade-in backdrop-blur-sm">
      <div className="bg-adwaita-card rounded-2xl w-full max-w-4xl max-h-[90vh] flex flex-col shadow-2xl border border-white/10">
        
        {/* Header */}
        <div className="flex justify-between items-center p-6 border-b border-white/5 bg-black/20 rounded-t-2xl">
          <div>
            <h2 className="text-xl font-bold flex items-center gap-2">
              <svg className="w-5 h-5 text-adwaita-blue" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" /></svg>
              Conquistas (Offline)
            </h2>
            <div className="flex items-center gap-2">
              <p className="text-adwaita-text-secondary text-sm">AppID: {appId}</p>
              <button 
                onClick={() => setIsEditingAppId(!isEditingAppId)}
                className="text-xs bg-white/10 hover:bg-white/20 px-2 py-1 rounded text-white transition-colors"
                title="Alterar ID da Steam manualmente"
              >
                Editar AppID
              </button>
            </div>
          </div>
          <div className="flex items-center gap-2">
            <button 
              onClick={handleClearCache} 
              title="Redefinir caminho das conquistas"
              className="p-2 hover:bg-white/10 rounded-full transition-colors group"
            >
              <svg className="w-5 h-5 text-white/50 group-hover:text-white transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" /></svg>
            </button>
            <button onClick={onClose} className="p-2 hover:bg-white/10 rounded-full transition-colors">
              <svg className="w-6 h-6 text-white/50 hover:text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" /></svg>
            </button>
          </div>
        </div>

        {/* Progresso Geral */}
        {totalCount > 0 && !loading && (
          <div className="px-6 py-4 bg-black/10 border-b border-white/5">
            <div className="flex justify-between items-end mb-2">
              <span className="text-sm font-bold uppercase text-adwaita-text-secondary">Progresso</span>
              <span className="text-sm font-mono">{unlockedCount} / {totalCount} ({Math.round((unlockedCount/totalCount)*100)}%)</span>
            </div>
            <div className="w-full h-2 bg-black/40 rounded-full overflow-hidden">
              <div 
                className="h-full bg-adwaita-blue transition-all duration-1000 ease-out"
                style={{ width: `${(unlockedCount/totalCount)*100}%` }}
              ></div>
            </div>
          </div>
        )}

        {/* Editor de AppID (Global) */}
        {isEditingAppId && (
          <div className="px-6 py-4 bg-black/40 border-b border-white/5 animate-fade-in">
            <div className="bg-black/20 p-4 rounded-xl border border-white/10 w-full text-left">
              <label className="block text-xs font-bold text-adwaita-text-secondary uppercase mb-2">ID Real da Steam</label>
              <input
                type="text"
                value={manualAppIdInput}
                onChange={(e) => setManualAppIdInput(e.target.value)}
                placeholder="Ex: 259060"
                className="w-full bg-black/40 border border-white/10 rounded-lg px-3 py-2 text-white mb-3 focus:outline-none focus:border-adwaita-blue"
              />
              <p className="text-xs text-adwaita-text-secondary mb-4">
                Pesquise o jogo no <a href="#" onClick={(e) => { e.preventDefault(); (window as any).api.openExternalUrl('https://steamdb.info/') }} className="text-adwaita-blue hover:underline">SteamDB</a> e copie o AppID.
              </p>
              <div className="flex gap-2">
                <button onClick={() => setIsEditingAppId(false)} className="flex-1 py-2 bg-white/5 hover:bg-white/10 rounded-lg text-sm font-bold transition-colors">Cancelar</button>
                <button onClick={handleSaveRealAppId} disabled={!manualAppIdInput.trim()} className="flex-1 py-2 bg-adwaita-blue hover:bg-blue-600 text-white rounded-lg text-sm font-bold transition-colors disabled:opacity-50">Salvar e Atualizar</button>
              </div>
            </div>
          </div>
        )}

        {/* Conteúdo */}
        <div className="flex-1 overflow-y-auto p-6 relative">
          {scanStatus === 'scanning' ? (
            <div className="flex flex-col items-center justify-center py-20 animate-pulse">
              <svg className="w-12 h-12 text-adwaita-blue mb-4 opacity-50" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" /></svg>
              <p className="text-adwaita-text-secondary text-lg">Procurando dados locais de conquistas (Goldberg)...</p>
            </div>
          ) : scanStatus === 'not-found' ? (
            <div className="flex flex-col items-center justify-center py-20 text-center">
              <svg className="w-16 h-16 text-white/20 mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
              <h3 className="text-xl font-bold mb-2">Conquistas Locais Não Encontradas</h3>
              <p className="text-adwaita-text-secondary max-w-md mb-6">Não foi possível localizar os dados do Goldberg automaticamente para este jogo.</p>
              <button onClick={handleManualSelect} className="px-6 py-3 bg-white/10 hover:bg-white/20 text-white font-bold rounded-xl transition-all border border-white/5 shadow-lg flex items-center gap-2">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 19a2 2 0 01-2-2V7a2 2 0 012-2h4l2 2h4a2 2 0 012 2v1M5 19h14a2 2 0 002-2v-5a2 2 0 00-2-2H9a2 2 0 00-2 2v5a2 2 0 01-2 2z" /></svg>
                Procurar arquivo manualmente
              </button>
            </div>
          ) : loading ? (
            <div className="flex justify-center items-center py-20">
              <div className="animate-spin w-8 h-8 border-4 border-adwaita-blue border-t-transparent rounded-full"></div>
            </div>
          ) : error || achievements.length === 0 ? (
            <div className="flex flex-col items-center justify-center py-10 px-4 max-w-md mx-auto text-center">
              {error ? (
                <p className="text-red-400 mb-6 font-bold">{error}</p>
              ) : (
                <p className="text-adwaita-text-secondary mb-6">Nenhuma conquista cadastrada para este jogo na base de dados da Steam.</p>
              )}
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {achievements.map((ach) => {
                const isHidden = ach.hidden === 1 && !ach.unlocked
                return (
                  <div 
                    key={ach.name} 
                    className={`flex items-center gap-4 p-4 rounded-xl border transition-all ${ach.unlocked ? 'bg-adwaita-blue/10 border-adwaita-blue/30 shadow-md' : 'bg-black/20 border-white/5 grayscale opacity-50'}`}
                  >
                    <div className="w-16 h-16 flex-shrink-0 rounded-lg overflow-hidden bg-black/40 border border-white/10 relative">
                      <img 
                        src={ach.currentIcon} 
                        alt={ach.displayName}
                        className={`w-full h-full object-cover ${isHidden ? 'blur-md' : ''}`}
                        loading="lazy"
                      />
                      {!ach.unlocked && (
                         <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
                           <svg className="w-6 h-6 text-white/50" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" /></svg>
                         </div>
                      )}
                    </div>
                    <div className="flex-1 min-w-0">
                      <h4 className="font-bold text-white truncate" title={isHidden ? 'Conquista Oculta' : ach.displayName}>
                        {isHidden ? 'Conquista Oculta' : ach.displayName}
                      </h4>
                      <p className="text-xs text-adwaita-text-secondary mt-1 line-clamp-2" title={isHidden ? 'Jogue para descobrir...' : ach.description}>
                        {isHidden ? 'Jogue para descobrir...' : (ach.description || 'Sem descrição.')}
                      </p>
                    </div>
                  </div>
                )
              })}
            </div>
          )}
        </div>
      </div>
    </div>
  )
}
