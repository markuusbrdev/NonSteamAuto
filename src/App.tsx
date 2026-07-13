import { useState, useEffect } from 'react'
import { LocalLibrary } from './components/LocalLibrary'
import { InjectionWizard } from './components/InjectionWizard'

function App() {
  const [activeTab, setActiveTab] = useState<'injector' | 'library' | 'settings'>('injector')
  const [apiKey, setApiKey] = useState('')
  const [tempApiKey, setTempApiKey] = useState('')
  const [showSuccess, setShowSuccess] = useState(false)
  const [saveStatus, setSaveStatus] = useState<'idle' | 'saving' | 'saved'>('idle')
  const [showApiKey, setShowApiKey] = useState(false)

  useEffect(() => {
    const loadKey = async () => {
      if ((window as any).api?.getApiKey) {
        const savedKey = await (window as any).api.getApiKey()
        if (savedKey) {
          setApiKey(savedKey)
          setTempApiKey(savedKey)
        }
      }
    }
    loadKey()
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
        </div>

        <nav 
          className="absolute left-1/2 -translate-x-1/2 flex bg-black/20 p-1 rounded-full border border-white/5"
          style={{ WebkitAppRegion: 'no-drag' } as React.CSSProperties}
        >
          <button 
            onClick={() => setActiveTab('injector')}
            className={`px-6 py-1.5 rounded-full font-semibold text-xs transition-all ${activeTab === 'injector' ? 'bg-adwaita-header text-white shadow-md' : 'text-adwaita-text-secondary hover:text-white'}`}
          >
            Injetor
          </button>
          <button 
            onClick={() => setActiveTab('library')}
            className={`px-6 py-1.5 rounded-full font-semibold text-xs transition-all ${activeTab === 'library' ? 'bg-adwaita-header text-white shadow-md' : 'text-adwaita-text-secondary hover:text-white'}`}
          >
            Biblioteca
          </button>
          <button 
            onClick={() => setActiveTab('settings')}
            className={`px-6 py-1.5 rounded-full font-semibold text-xs transition-all ${activeTab === 'settings' ? 'bg-adwaita-header text-white shadow-md' : 'text-adwaita-text-secondary hover:text-white'}`}
          >
            Configurações
          </button>
        </nav>

        <div className="flex items-center gap-2">
          {/* API Status Indicator */}
          <button
            onClick={() => setActiveTab('settings')}
            style={{ WebkitAppRegion: 'no-drag' } as React.CSSProperties}
            className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg transition-colors text-[10px] font-bold uppercase tracking-wider ${apiKey ? 'bg-adwaita-green/10 text-adwaita-green hover:bg-adwaita-green/20' : 'bg-red-500/10 text-red-500 hover:bg-red-500/20'}`}
            title="Ir para Configurações"
          >
            <div className={`w-2 h-2 rounded-full ${apiKey ? 'bg-adwaita-green shadow-[0_0_8px_rgba(46,204,113,0.6)]' : 'bg-red-500 shadow-[0_0_8px_rgba(231,76,60,0.6)]'}`}></div>
            {apiKey ? 'API OK' : 'SEM API'}
          </button>

          <button 
            style={{ WebkitAppRegion: 'no-drag' } as React.CSSProperties}
            onClick={() => (window as any).api.restartSteam()}
            className="flex items-center gap-2 px-3 py-1.5 mr-2 bg-adwaita-blue/10 hover:bg-adwaita-blue/20 text-adwaita-blue rounded-lg transition-all text-[10px] font-bold uppercase tracking-wider group"
            title="Reiniciar Steam para aplicar mudanças"
          >
            <svg className="w-3.5 h-3.5 group-active:rotate-180 transition-transform duration-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
            </svg>
            Reiniciar Steam
          </button>

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

      <main className="max-w-4xl mx-auto py-10 px-6">
        {activeTab === 'injector' && (
          <div className="animate-fade-in space-y-10">
            <div className="text-center">
              <h2 className="text-3xl font-extrabold tracking-tight mb-2">Automador Non-Steam</h2>
              <p className="text-adwaita-text-secondary text-sm">Adicione jogos com artes e compatibilidade proton</p>
            </div>

            {showSuccess ? (
              <div className="adwaita-card p-12 text-center animate-bounce-in bg-adwaita-green/5 border-adwaita-green/20">
                <div className="w-16 h-16 bg-adwaita-green rounded-full flex items-center justify-center mx-auto mb-6 shadow-xl shadow-adwaita-green/20">
                   <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                     <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7" />
                   </svg>
                </div>
                <h3 className="text-xl font-bold mb-1">Jogo Injetado com Sucesso</h3>
                <p className="text-adwaita-text-secondary text-sm mb-8">Reinicie a Steam para aplicar as alterações.</p>
                <div className="flex gap-3 justify-center">
                  <button 
                    onClick={() => setShowSuccess(false)}
                    className="adwaita-btn-secondary"
                  >
                    Adicionar Outro
                  </button>
                  <button 
                    onClick={() => setActiveTab('library')}
                    className="adwaita-btn-primary"
                  >
                    Ver Biblioteca
                  </button>
                </div>
              </div>
            ) : (
              <InjectionWizard 
                apiKey={apiKey} 
                onComplete={() => {
                  setShowSuccess(true)
                }}
                onCancel={() => {}}
              />
            )}
          </div>
        )}
        
        {activeTab === 'library' && (
          <LocalLibrary />
        )}
        
        {activeTab === 'settings' && (
          <div className="animate-fade-in space-y-10">
            <div className="text-center">
              <h2 className="text-3xl font-extrabold tracking-tight mb-2">Configurações</h2>
              <p className="text-adwaita-text-secondary text-sm">Gerencie sua chave de API e outras preferências</p>
            </div>
            
            <div className="max-w-md mx-auto">
               <label className="text-[10px] font-bold text-adwaita-text-secondary uppercase block mb-2 text-center">Inserir SteamGridDB API Key</label>
               
               <div className="flex items-center gap-2">
                 <div className="relative flex-1">
                   <input 
                    type={showApiKey ? "text" : "password"}
                    placeholder="Cole sua API e dê Enter..."
                    value={tempApiKey}
                    onChange={(e) => setTempApiKey(e.target.value)}
                    onKeyDown={async (e) => {
                      if (e.key === 'Enter') {
                        setApiKey(tempApiKey)
                        setSaveStatus('saving')
                        if ((window as any).api?.saveApiKey) {
                          await (window as any).api.saveApiKey(tempApiKey)
                          setSaveStatus('saved')
                          setTimeout(() => setSaveStatus('idle'), 2000)
                        }
                      }
                    }}
                    className="adwaita-input w-full pr-10 text-sm"
                  />
                  <button 
                    onClick={() => setShowApiKey(!showApiKey)}
                    className="absolute right-3 top-1/2 -translate-y-1/2 text-white/40 hover:text-white transition-colors outline-none"
                    title={showApiKey ? "Ocultar" : "Mostrar"}
                  >
                    {showApiKey ? (
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13.875 18.825A10.05 10.05 0 0112 19c-4.478 0-8.268-2.943-9.543-7a9.97 9.97 0 011.563-3.029m5.858.908a3 3 0 114.243 4.243M9.878 9.878l4.242 4.242M9.88 9.88l-3.29-3.29m7.532 7.532l3.29 3.29M3 3l3.59 3.59m0 0A9.953 9.953 0 0112 5c4.478 0 8.268 2.943 9.543 7a10.025 10.025 0 01-4.132 5.411m0 0L21 21" /></svg>
                    ) : (
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" /></svg>
                    )}
                  </button>
                 </div>
               </div>
              <div className="h-6 mt-2">
                {saveStatus === 'saved' && (
                  <div className="text-adwaita-green text-xs text-center animate-fade-in flex items-center justify-center gap-1">
                    <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7" /></svg>
                    Processado com sucesso
                  </div>
                )}
                {saveStatus === 'saving' && (
                  <div className="text-adwaita-text-secondary text-xs text-center animate-pulse">
                    Salvando...
                  </div>
                )}
              </div>

              {apiKey && (
                 <div className="mt-4 p-4 bg-black/20 border border-white/5 rounded-xl animate-fade-in flex items-center justify-between shadow-inner">
                   <div>
                     <p className="text-[10px] font-bold text-adwaita-green uppercase flex items-center gap-1 mb-1">
                       <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7" /></svg>
                       API Inserida
                     </p>
                     <p className="text-sm font-mono text-white/80">{showApiKey ? apiKey : '••••••••••••••••••••••••••••••'}</p>
                   </div>
                   <button
                     onClick={async () => {
                       setApiKey('')
                       setTempApiKey('')
                       if ((window as any).api?.saveApiKey) {
                         await (window as any).api.saveApiKey('')
                       }
                     }}
                     className="px-3 py-1.5 bg-red-500/10 hover:bg-red-500/20 text-red-500 rounded-lg transition-colors font-bold text-[10px] uppercase tracking-wider"
                     title="Remover Chave API"
                   >
                     Remover
                   </button>
                 </div>
               )}
            </div>
          </div>
        )}
      </main>

      <footer className="py-10 text-center opacity-30 select-none pointer-events-none">
         <p className="text-[10px] font-bold uppercase tracking-widest">
           Libadwaita Concept • Linux Desktop
         </p>
      </footer>
    </div>
  )
}

export default App
