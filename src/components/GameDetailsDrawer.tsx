import React, { useState, useEffect } from 'react'

interface Game {
  appId: number
  name: string
  exe: string
  launchOptions: string
  proton: string
  art: {
    grid: string | null
    gridHorizontal: string | null
    hero: string | null
    logo: string | null
    icon: string | null
  }
}

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
  game: Game
  steamApiKey: string
  onClose: () => void
}

export const GameDetailsDrawer: React.FC<Props> = ({ game, steamApiKey, onClose }) => {
  const [loading, setLoading] = useState(true)
  const [achievements, setAchievements] = useState<HybridAchievement[]>([])
  const [error, setError] = useState('')
  const [isEditingAppId, setIsEditingAppId] = useState(false)
  const [manualAppIdInput, setManualAppIdInput] = useState('')

  const loadAchievements = async () => {
    setLoading(true)
    try {
      if (steamApiKey) {
        const hybridData = await (window as any).api.getHybridAchievements(game.appId.toString(), steamApiKey, game.exe)
        if (hybridData && hybridData.length > 0) {
          setAchievements(hybridData)
        } else {
          setError('Nenhuma conquista encontrada na Steam para este jogo.')
        }
      } else {
        setError('Steam Web API Key não configurada. Configure-a na aba Configurações.')
      }
    } catch (err) {
      setError('Falha ao carregar conquistas: ' + err)
    } finally {
      setLoading(false)
    }
  }

  useEffect(() => {
    loadAchievements()
  }, [game.appId, steamApiKey, game.exe])

  const handleSaveRealAppId = async () => {
    if (!manualAppIdInput.trim()) return
    try {
      setLoading(true)
      await (window as any).api.saveRealAppId(game.appId.toString(), manualAppIdInput.trim())
      setIsEditingAppId(false)
      await loadAchievements()
    } catch (err) {
      console.error(err)
    } finally {
      setLoading(false)
    }
  }

  const unlockedCount = achievements.filter(a => a.unlocked).length
  const totalCount = achievements.length
  
  // Usar Hero como fallback, ou Horizontal, ou fallback genérico escuro
  const heroImage = game.art.hero || game.art.gridHorizontal || null

  return (
    <div className="fixed inset-0 z-[80] flex justify-end animate-fade-in backdrop-blur-sm bg-black/40">
      {/* Clique fora para fechar */}
      <div className="absolute inset-0 cursor-pointer" onClick={onClose}></div>
      
      {/* Drawer */}
      <div className="relative w-full md:w-[60%] lg:w-[50%] h-full bg-[#1e1e1e] shadow-2xl flex flex-col transform transition-transform animate-slide-left border-l border-white/10">
        
        {/* Botão de Fechar */}
        <button 
          onClick={onClose} 
          className="absolute top-4 right-4 z-10 w-10 h-10 flex items-center justify-center rounded-full bg-black/50 text-white hover:bg-black/80 backdrop-blur-md transition-colors"
        >
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" /></svg>
        </button>

        {/* Header com Hero Image */}
        <div className="relative h-64 md:h-80 flex-shrink-0 bg-black/60">
          {heroImage && (
            <img 
              src={heroImage} 
              alt={game.name} 
              className="absolute inset-0 w-full h-full object-cover"
            />
          )}
          <div className="absolute inset-0 bg-gradient-to-t from-[#1e1e1e] via-[#1e1e1e]/40 to-transparent"></div>
          
          <div className="absolute bottom-6 left-6 right-6">
            <h1 className="text-3xl md:text-5xl font-bold text-white drop-shadow-lg">{game.name}</h1>
            <p className="text-gray-400 mt-2 font-mono text-xs opacity-70 truncate">{game.exe}</p>
          </div>
        </div>

        {/* Progresso Geral */}
        {totalCount > 0 && !loading && (
          <div className="px-6 py-4 bg-white/[0.02] border-b border-white/5">
            <div className="flex justify-between items-end mb-2">
              <span className="text-sm font-bold uppercase text-gray-400">Progresso</span>
              <span className="text-sm font-mono text-blue-400">{unlockedCount} / {totalCount} ({Math.round((unlockedCount/totalCount)*100)}%)</span>
            </div>
            <div className="w-full h-2 bg-black/40 rounded-full overflow-hidden">
              <div 
                className="h-full bg-blue-500 transition-all duration-1000 ease-out shadow-[0_0_10px_rgba(59,130,246,0.5)]"
                style={{ width: `${(unlockedCount/totalCount)*100}%` }}
              ></div>
            </div>
          </div>
        )}

        {/* Lista de Conquistas */}
        <div className="flex-1 overflow-y-auto p-6 space-y-4">
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-xl font-bold flex items-center gap-2">
              <svg className="w-5 h-5 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" /></svg>
              Conquistas
            </h2>
            <button 
              onClick={() => setIsEditingAppId(!isEditingAppId)}
              className="text-xs bg-white/10 hover:bg-white/20 px-2 py-1 rounded text-white transition-colors"
              title="Alterar ID da Steam manualmente"
            >
              Editar AppID
            </button>
          </div>

          {isEditingAppId && (
            <div className="bg-black/20 p-4 rounded-xl border border-white/10 w-full animate-fade-in text-left mb-4">
              <label className="block text-xs font-bold text-gray-400 uppercase mb-2">ID Real da Steam</label>
              <input
                type="text"
                value={manualAppIdInput}
                onChange={(e) => setManualAppIdInput(e.target.value)}
                placeholder="Ex: 259060"
                className="w-full bg-black/40 border border-white/10 rounded-lg px-3 py-2 text-white mb-3 focus:outline-none focus:border-blue-500"
              />
              <p className="text-xs text-gray-400 mb-4">
                Pesquise o jogo no <a href="#" onClick={(e) => { e.preventDefault(); (window as any).api.openExternalUrl('https://steamdb.info/') }} className="text-blue-400 hover:underline">SteamDB</a> e copie o AppID.
              </p>
              <div className="flex gap-2">
                <button onClick={() => setIsEditingAppId(false)} className="flex-1 py-2 bg-white/5 hover:bg-white/10 rounded-lg text-sm font-bold transition-colors">Cancelar</button>
                <button onClick={handleSaveRealAppId} disabled={!manualAppIdInput.trim()} className="flex-1 py-2 bg-blue-500 hover:bg-blue-600 text-white rounded-lg text-sm font-bold transition-colors disabled:opacity-50">Salvar e Atualizar</button>
              </div>
            </div>
          )}

          {loading ? (
            <div className="flex justify-center items-center py-20">
              <div className="animate-spin w-8 h-8 border-4 border-blue-500 border-t-transparent rounded-full"></div>
            </div>
          ) : error || achievements.length === 0 ? (
            <div className="flex flex-col items-center justify-center py-10 px-4 max-w-md mx-auto text-center">
              {error ? (
                <p className="text-red-400 mb-6 font-bold">{error}</p>
              ) : (
                <p className="text-gray-400 mb-6">Nenhuma conquista cadastrada para este jogo na base de dados da Steam.</p>
              )}
              
              {!isEditingAppId && (
                <div className="bg-white/5 p-4 rounded-xl border border-white/10 w-full mt-4">
                  <p className="text-sm text-gray-400 mb-4">
                    Talvez o AppID (Identificador do Jogo na Steam) que detectamos esteja incorreto. Deseja inserir outro?
                  </p>
                  <button onClick={() => setIsEditingAppId(true)} className="w-full py-2 bg-white/10 hover:bg-white/20 text-white rounded-lg text-sm font-bold transition-colors">
                    Inserir AppID Manualmente
                  </button>
                </div>
              )}
            </div>
          ) : (
            <div className="grid grid-cols-1 gap-3">
              {achievements.map((ach) => {
                const isHidden = ach.hidden === 1 && !ach.unlocked
                return (
                  <div 
                    key={ach.name} 
                    className={`flex items-center gap-4 p-4 rounded-xl border transition-all ${ach.unlocked ? 'bg-white/[0.05] border-blue-500/30 shadow-md' : 'bg-black/20 border-white/5 grayscale opacity-50'}`}
                  >
                    <div className="w-14 h-14 flex-shrink-0 rounded-lg overflow-hidden bg-black/40 border border-white/10 relative">
                      <img 
                        src={ach.currentIcon} 
                        alt={ach.displayName}
                        className={`w-full h-full object-cover ${isHidden ? 'blur-md' : ''}`}
                        loading="lazy"
                      />
                      {!ach.unlocked && (
                         <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
                           <svg className="w-5 h-5 text-white/50" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" /></svg>
                         </div>
                      )}
                    </div>
                    <div className="flex-1 min-w-0">
                      <h4 className="font-bold text-white truncate text-sm" title={isHidden ? 'Conquista Oculta' : ach.displayName}>
                        {isHidden ? 'Conquista Oculta' : ach.displayName}
                      </h4>
                      <p className="text-xs text-gray-400 mt-1 line-clamp-2 leading-relaxed" title={isHidden ? 'Jogue para descobrir...' : ach.description}>
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
