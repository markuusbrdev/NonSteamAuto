import { useState, useEffect } from 'react'
import { LocalLibrary } from './components/LocalLibrary'
import { InjectionWizard } from './components/InjectionWizard'

function App() {
  const [activeTab, setActiveTab] = useState<'injector' | 'library'>('injector')
  const [apiKey, setApiKey] = useState('')
  const [showSuccess, setShowSuccess] = useState(false)

  useEffect(() => {
    const loadKey = async () => {
      if ((window as any).api?.getApiKey) {
        const savedKey = await (window as any).api.getApiKey()
        if (savedKey) setApiKey(savedKey)
      }
    }
    loadKey()
  }, [])

  return (
    <div className="min-h-screen bg-adwaita-bg text-adwaita-text selection:bg-adwaita-blue/30">
      {/* Adwaita Headerbar */}
      <header className="adwaita-header px-4 h-14 flex items-center justify-between sticky top-0 z-50">
        <div className="flex items-center gap-3">
          <div className="w-8 h-8 bg-adwaita-blue rounded-lg flex items-center justify-center shadow-lg shadow-adwaita-blue/20">
            <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M13 10V3L4 14h7v7l9-11h-7z" />
            </svg>
          </div>
          <div className="hidden sm:block">
            <h1 className="text-sm font-bold tracking-tight">Non-Steam Automation</h1>
          </div>
        </div>

        <nav className="absolute left-1/2 -translate-x-1/2 flex bg-black/20 p-1 rounded-full border border-white/5">
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
        </nav>

        <div className="flex items-center gap-3">
          <button 
            onClick={() => (window as any).api.restartSteam()}
            className="flex items-center gap-2 px-3 py-1.5 bg-adwaita-blue/10 hover:bg-adwaita-blue/20 text-adwaita-blue rounded-lg transition-all text-[10px] font-bold uppercase tracking-wider group"
            title="Reiniciar Steam para aplicar mudanças"
          >
            <svg className="w-3.5 h-3.5 group-active:rotate-180 transition-transform duration-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
            </svg>
            Reiniciar Steam
          </button>
          <div className="w-8 h-8 rounded-full bg-white/5 border border-white/5 flex items-center justify-center">
            <span className="text-[10px] font-bold">MB</span>
          </div>
        </div>
      </header>

      <main className="max-w-4xl mx-auto py-10 px-6">
        {activeTab === 'injector' ? (
          <div className="animate-fade-in space-y-10">
            <div className="text-center">
              <h2 className="text-3xl font-extrabold tracking-tight mb-2">Automador Non-Steam</h2>
              <p className="text-adwaita-text-secondary text-sm">Adicione jogos com artes e compatibilidade proton</p>
            </div>

            <div className="max-w-xs mx-auto">
               <label className="text-[10px] font-bold text-adwaita-text-secondary uppercase block mb-2 text-center">SteamGridDB API Key</label>
               <input 
                type="password"
                placeholder="Insira sua chave API..."
                value={apiKey}
                onChange={(e) => setApiKey(e.target.value)}
                className="adwaita-input w-full text-center text-sm"
              />
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
        ) : (
          <LocalLibrary />
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
