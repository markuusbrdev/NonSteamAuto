import { useState, useEffect } from 'react'
import { LocalLibrary } from './components/LocalLibrary'
import { InjectionWizard } from './components/InjectionWizard'

import { SettingsPanel } from './components/SettingsPanel'
import { GameDetailsDrawer } from './components/GameDetailsDrawer'

function App() {
  const [activeTab, setActiveTab] = useState<'library' | 'settings'>('library')
  const [apiKey, setApiKey] = useState('')
  const [showSuccess, setShowSuccess] = useState(false)
  const [editGame, setEditGame] = useState<any>(null)
  const [isInjectorModalOpen, setIsInjectorModalOpen] = useState(false)
  const [libraryRefreshTrigger, setLibraryRefreshTrigger] = useState(0)

  const [steamApiKey, setSteamApiKey] = useState('')

  const [isRestartingSteam, setIsRestartingSteam] = useState(false)
  const [showAchievementsFor, setShowAchievementsFor] = useState<any | null>(null)

  const [sgdbStatus, setSgdbStatus] = useState<'checking' | 'ok' | 'error'>('checking')
  const [steamStatus, setSteamStatus] = useState<'checking' | 'ok' | 'error'>('checking')
  const [steam32Id, setSteam32Id] = useState('')

  useEffect(() => {
    const loadConfig = async () => {
      if ((window as any).api?.getConfig) {
        const config = await (window as any).api.getConfig()
        
        if (config.steam32Id) {
          setSteam32Id(config.steam32Id)
        }
        
        if (config.sgdbApiKey) {
          setApiKey(config.sgdbApiKey)
          if ((window as any).api?.validateSgdbKey) {
            const res = await (window as any).api.validateSgdbKey(config.sgdbApiKey)
            setSgdbStatus(res.valid ? 'ok' : 'error')
          } else {
            setSgdbStatus('ok') // Fallback if no validation function
          }
        } else {
          setSgdbStatus('error')
        }
        
        if (config.steamApiKey) {
          setSteamApiKey(config.steamApiKey)
          if ((window as any).api?.validateSteamKey) {
            const res = await (window as any).api.validateSteamKey(config.steamApiKey)
            setSteamStatus(res.valid ? 'ok' : 'error')
          } else {
            setSteamStatus('ok')
          }
        } else {
          setSteamStatus('error')
        }
      }
    }
    loadConfig()
  }, [])

  return (
    <div className="min-h-screen bg-adwaita-bg text-adwaita-text selection:bg-adwaita-blue/30">
      {/* Adwaita Headerbar */}
      <header 
        className="adwaita-header px-4 h-14 flex items-center justify-between sticky top-0 z-50 select-none"
        style={{ WebkitAppRegion: 'drag' } as React.CSSProperties}
      >
        <div className="flex items-center gap-3 pl-1">
          <div className="flex items-center justify-center">
            <svg className="w-5 h-5 text-white/90" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
              <path d="M4 14a1 1 0 0 1-.78-1.63l9.9-10.2a.5.5 0 0 1 .86.46l-1.92 6.02A1 1 0 0 0 13 10h7a1 1 0 0 1 .78 1.63l-9.9 10.2a.5.5 0 0 1-.86-.46l1.92-6.02A1 1 0 0 0 11 14z" />
            </svg>
          </div>
          <div className="hidden sm:block">
            <h1 className="text-sm font-bold tracking-tight">Non-Steam Automation</h1>
          </div>
          
          <button 
            style={{ WebkitAppRegion: 'no-drag' } as React.CSSProperties}
            onClick={() => {
              setIsRestartingSteam(true)
              ;(window as any).api.restartSteam()
              setTimeout(() => {
                setIsRestartingSteam(false)
              }, 4000)
            }}
            disabled={isRestartingSteam}
            className={`ml-2 flex items-center gap-1 px-2 py-1 ${isRestartingSteam ? 'bg-adwaita-blue/5 text-adwaita-blue/50' : 'bg-adwaita-blue/10 hover:bg-adwaita-blue/20 text-adwaita-blue'} rounded-lg transition-all text-[9px] font-bold uppercase tracking-wider group`}
            title="Reiniciar Steam para aplicar mudanças"
          >
            <svg className={`w-3 h-3 ${isRestartingSteam ? 'animate-spin' : 'group-active:rotate-180 transition-transform duration-500'}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
            </svg>
            {isRestartingSteam ? 'Reiniciando...' : 'Reiniciar Steam'}
          </button>
        </div>

        <nav 
          className="absolute left-1/2 -translate-x-1/2 flex bg-black/20 p-1 rounded-full border border-white/5"
          style={{ WebkitAppRegion: 'no-drag' } as React.CSSProperties}
        >
          <button 
            onClick={() => setActiveTab('library')}
            className={`px-6 py-1.5 rounded-full font-semibold text-xs transition-all ${activeTab === 'library' ? 'bg-white/15 text-white shadow-lg border border-white/10' : 'text-adwaita-text-secondary hover:text-white border border-transparent'}`}
          >
            Biblioteca
          </button>
          <button 
            onClick={() => setActiveTab('settings')}
            className={`px-6 py-1.5 rounded-full font-semibold text-xs transition-all ${activeTab === 'settings' ? 'bg-white/15 text-white shadow-lg border border-white/10' : 'text-adwaita-text-secondary hover:text-white border border-transparent'}`}
          >
            Configurações
          </button>
        </nav>

        <div className="flex items-center gap-2">
          {/* API Status Indicators */}
          <div className="hidden md:flex items-center gap-2 mr-2" style={{ WebkitAppRegion: 'no-drag' } as React.CSSProperties}>
            <div className={`flex items-center gap-1.5 px-2.5 py-1 rounded-full text-[9px] font-bold uppercase tracking-wider border transition-colors ${sgdbStatus === 'ok' ? 'bg-green-500/10 text-green-400 border-green-500/20' : sgdbStatus === 'checking' ? 'bg-white/5 text-white/50 border-white/10' : 'bg-red-500/10 text-red-400 border-red-500/20'}`} title="Status da API SteamGridDB">
              <div className={`w-1.5 h-1.5 rounded-full ${sgdbStatus === 'ok' ? 'bg-green-400 shadow-[0_0_8px_rgba(74,222,128,0.5)]' : sgdbStatus === 'checking' ? 'bg-white/50 animate-pulse' : 'bg-red-400 shadow-[0_0_8px_rgba(248,113,113,0.5)]'}`}></div>
              GridDB
            </div>
            <div className={`flex items-center gap-1.5 px-2.5 py-1 rounded-full text-[9px] font-bold uppercase tracking-wider border transition-colors ${steamStatus === 'ok' ? 'bg-green-500/10 text-green-400 border-green-500/20' : steamStatus === 'checking' ? 'bg-white/5 text-white/50 border-white/10' : 'bg-red-500/10 text-red-400 border-red-500/20'}`} title="Status da API de Conquistas Steam">
              <div className={`w-1.5 h-1.5 rounded-full ${steamStatus === 'ok' ? 'bg-green-400 shadow-[0_0_8px_rgba(74,222,128,0.5)]' : steamStatus === 'checking' ? 'bg-white/50 animate-pulse' : 'bg-red-400 shadow-[0_0_8px_rgba(248,113,113,0.5)]'}`}></div>
              Conquistas
            </div>
          </div>

          {/* Window Controls */}
          <div className="flex items-center gap-1 border-l border-white/10 pl-2" style={{ WebkitAppRegion: 'no-drag' } as React.CSSProperties}>
            <button 
              onClick={() => (window as any).api.minimize()} 
              className="w-8 h-8 flex items-center justify-center rounded-full hover:bg-white/10 transition-colors text-white/70 hover:text-white"
              title="Minimizar"
            >
              <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M20 12H4" />
              </svg>
            </button>
            <button 
              onClick={() => (window as any).api.maximize()} 
              className="w-8 h-8 flex items-center justify-center rounded-full hover:bg-white/10 transition-colors text-white/70 hover:text-white"
              title="Maximizar"
            >
              <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <rect x="4" y="4" width="16" height="16" rx="2" ry="2" strokeWidth="3" />
              </svg>
            </button>
            <button 
              onClick={() => (window as any).api.close()} 
              className="w-8 h-8 flex items-center justify-center rounded-full hover:bg-red-500/80 transition-colors text-white/70 hover:text-white"
              title="Fechar"
            >
              <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>
        </div>
      </header>

      <main className="max-w-4xl mx-auto py-10 px-6 relative">
        {isRestartingSteam && (
          <div className="fixed inset-0 z-[100] bg-black/80 flex items-center justify-center p-4 animate-fade-in backdrop-blur-sm">
            <div className="bg-[#1e2a3b] border border-white/10 rounded-2xl p-8 max-w-sm w-full text-center shadow-2xl animate-bounce-in">
              <div className="w-16 h-16 bg-adwaita-blue/20 rounded-full flex items-center justify-center mx-auto mb-6">
                <svg className="w-8 h-8 text-adwaita-blue animate-spin" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-2">Reiniciando a Steam...</h3>
              <p className="text-adwaita-text-secondary text-sm">Aguarde alguns segundos. A Steam será fechada e aberta novamente de forma automática.</p>
            </div>
          </div>
        )}
        
        {activeTab === 'library' && (
          <>
            <LocalLibrary 
              refreshTrigger={libraryRefreshTrigger}
              onAddGame={() => setIsInjectorModalOpen(true)}
              onEdit={(game) => {
                setEditGame(game)
              }}
              onShowDetails={async (game) => {
                const enabled = await (window as any).api.getAchievementsEnabled(game.appId.toString())
                if (enabled) {
                  setShowAchievementsFor(game)
                }
              }}
            />
            {showAchievementsFor && (
              <GameDetailsDrawer 
                game={showAchievementsFor} 
                steamApiKey={steamApiKey} 
                onClose={() => setShowAchievementsFor(null)} 
              />
            )}
            {editGame && (
              <div className="fixed inset-0 z-[60] bg-black/80 flex items-center justify-center p-4 animate-fade-in backdrop-blur-sm">
                <div className="w-full max-w-2xl max-h-[90vh] overflow-y-auto rounded-xl shadow-2xl">
                  <InjectionWizard 
                    apiKey={apiKey} 
                    initialData={editGame}
                    onComplete={() => {
                      setEditGame(null)
                      setLibraryRefreshTrigger(prev => prev + 1)
                      // Pequeno alerta temporário de sucesso
                      const el = document.createElement('div')
                      el.className = 'fixed bottom-4 left-1/2 -translate-x-1/2 bg-adwaita-green text-white px-4 py-2 rounded-lg font-bold text-sm shadow-xl z-[70] animate-fade-in'
                      el.innerText = 'Jogo atualizado com sucesso! Reinicie a Steam.'
                      document.body.appendChild(el)
                      setTimeout(() => {
                        el.classList.replace('animate-fade-in', 'opacity-0')
                        el.style.transition = 'opacity 0.3s'
                        setTimeout(() => el.remove(), 300)
                      }, 3000)
                    }}
                    onCancel={() => {
                      setEditGame(null)
                    }}
                  />
                </div>
              </div>
            )}
          </>
        )}
        
        {activeTab === 'settings' && (
          <SettingsPanel 
            initialSteamApiKey={steamApiKey}
            initialSgdbApiKey={apiKey}
            initialSteam32Id={steam32Id}
            onConfigChange={async (key, value) => {
              if (key === 'steamApiKey') {
                setSteamApiKey(value)
                setSteamStatus('checking')
                if ((window as any).api?.validateSteamKey) {
                  const res = await (window as any).api.validateSteamKey(value)
                  setSteamStatus(res.valid ? 'ok' : 'error')
                }
              }
              if (key === 'sgdbApiKey') {
                setApiKey(value)
                setSgdbStatus('checking')
                if ((window as any).api?.validateSgdbKey) {
                  const res = await (window as any).api.validateSgdbKey(value)
                  setSgdbStatus(res.valid ? 'ok' : 'error')
                }
              }
              if (key === 'steam32Id') {
                setSteam32Id(value)
              }
            }}
          />
        )}
      </main>

      <footer className="py-10 text-center opacity-30 select-none pointer-events-none">
         <p className="text-[10px] font-bold uppercase tracking-widest">
           Libadwaita Concept • Linux Desktop
         </p>
      </footer>

      {/* Modal Injetor */}
      {(isInjectorModalOpen || editGame) && (
        <div className="fixed inset-0 z-40 bg-black/80 backdrop-blur-sm flex items-center justify-center p-4 overflow-y-auto pt-24 animate-fade-in">
          <div className="relative w-full max-w-2xl my-auto">
            {showSuccess ? (
              <div className="adwaita-card p-12 text-center animate-bounce-in bg-adwaita-green/5 border-adwaita-green/20 shadow-2xl">
                <div className="w-16 h-16 bg-adwaita-green rounded-full flex items-center justify-center mx-auto mb-6 shadow-xl shadow-adwaita-green/20">
                   <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                     <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7" />
                   </svg>
                </div>
                <h3 className="text-xl font-bold mb-1">{editGame ? 'Jogo Atualizado com Sucesso' : 'Jogo Injetado com Sucesso'}</h3>
                <p className="text-adwaita-text-secondary text-sm mb-8">Reinicie a Steam para aplicar as alterações.</p>
                <div className="flex gap-3 justify-center">
                  <button 
                    onClick={() => {
                      setShowSuccess(false)
                      setIsInjectorModalOpen(false)
                      setEditGame(null)
                      setLibraryRefreshTrigger(prev => prev + 1)
                    }}
                    className="adwaita-btn-primary"
                  >
                    Fechar e Ver Biblioteca
                  </button>
                </div>
              </div>
            ) : (
              <InjectionWizard 
                apiKey={apiKey} 
                initialData={editGame}
                onComplete={() => {
                  setShowSuccess(true)
                }}
                onCancel={() => {
                  setIsInjectorModalOpen(false)
                  setEditGame(null)
                }}
              />
            )}
          </div>
        </div>
      )}


    </div>
  )
}

export default App
