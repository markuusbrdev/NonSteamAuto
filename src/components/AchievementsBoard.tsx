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
  const [loading, setLoading] = useState(true)
  const [achievements, setAchievements] = useState<HybridAchievement[]>([])
  const [error, setError] = useState('')

  useEffect(() => {
    const loadAchievements = async () => {
      setLoading(true)
      try {
        if (steamApiKey) {
          const hybridData = await (window as any).api.getHybridAchievements(appId, steamApiKey)
          if (hybridData && hybridData.length > 0) {
            setAchievements(hybridData)
          } else {
            setError('Nenhuma conquista encontrada na Steam para este jogo.')
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
  }, [appId, steamApiKey])

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
            <p className="text-adwaita-text-secondary text-sm">AppID: {appId}</p>
          </div>
          <button onClick={onClose} className="w-8 h-8 flex items-center justify-center rounded-full hover:bg-white/10 text-white/50 hover:text-white transition-colors">
            ✕
          </button>
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

        {/* Conteúdo */}
        <div className="flex-1 overflow-y-auto p-6">
          {loading ? (
            <div className="flex justify-center items-center py-20">
              <div className="animate-spin w-8 h-8 border-4 border-adwaita-blue border-t-transparent rounded-full"></div>
            </div>
          ) : error ? (
            <div className="text-center py-20 px-4">
              <p className="text-red-400 mb-2 font-bold">{error}</p>
            </div>
          ) : achievements.length === 0 ? (
            <div className="text-center py-20 px-4 text-adwaita-text-secondary">
              Nenhuma conquista cadastrada para este jogo na base de dados da Steam.
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
