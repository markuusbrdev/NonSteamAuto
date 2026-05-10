import React, { useState, useEffect } from 'react'

interface Game {
  appId: number
  name: string
  exe: string
  art: {
    grid: string | null
    hero: string | null
    logo: string | null
  }
}

export const LocalLibrary: React.FC = () => {
  const [library, setLibrary] = useState<Game[]>([])
  const [loading, setLoading] = useState(true)

  const load = async () => {
    if (!window.api?.getLibrary) {
      setLoading(false)
      return
    }
    setLoading(true)
    const data = await window.api.getLibrary()
    setLibrary(data)
    setLoading(false)
  }

  useEffect(() => {
    load()
  }, [])

  const handleRemove = async (appId: number, name: string) => {
    if (!confirm(`Tem certeza que deseja remover "${name}" da Steam?`)) return
    
    const result = await (window as any).api.removeShortcut(appId)
    if (result.success) {
      load()
    } else {
      alert('Erro ao remover: ' + result.error)
    }
  }

  if (loading) {
    return (
      <div className="flex flex-col items-center justify-center py-20 animate-pulse">
        <div className="w-10 h-10 border-4 border-adwaita-blue border-t-transparent rounded-full animate-spin mb-4"></div>
        <p className="text-adwaita-text-secondary text-xs font-bold uppercase tracking-widest">Carregando Biblioteca...</p>
      </div>
    )
  }

  return (
    <div className="animate-fade-in space-y-6">
      <div className="flex justify-between items-end mb-2">
        <div>
          <h2 className="text-2xl font-bold tracking-tight">Jogos Non-Steam</h2>
          <p className="text-adwaita-text-secondary text-sm">Gerencie seus jogos externos e customizações</p>
        </div>
        <button 
          onClick={load}
          className="p-2 hover:bg-white/5 rounded-lg transition-colors text-adwaita-text-secondary hover:text-white"
          title="Recarregar"
        >
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
          </svg>
        </button>
      </div>

      {library.length === 0 ? (
        <div className="adwaita-card p-20 text-center border-dashed border-white/10 bg-transparent">
          <div className="w-16 h-16 bg-white/5 rounded-full flex items-center justify-center mx-auto mb-4">
             <svg className="w-8 h-8 text-adwaita-text-secondary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
               <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M20 13V6a2 2 0 00-2-2H6a2 2 0 00-2 2v7m16 0v5a2 2 0 00-2 2H6a2 2 0 00-2-2v-5m16 0h-2.586a1 1 0 00-.707.293l-2.414 2.414a1 1 0 01-.707.293h-3.172a1 1 0 01-.707-.293l-2.414-2.414A1 1 0 006.586 13H4" />
             </svg>
          </div>
          <p className="text-adwaita-text-secondary font-medium">Nenhum jogo non-steam encontrado</p>
        </div>
      ) : (
        <div className="grid gap-4">
          {library.map((game) => (
            <div key={game.appId} className="adwaita-card p-4 flex items-center gap-4 group hover:bg-white/[0.02] transition-colors">
              <div className="w-16 h-24 bg-black/40 rounded-lg overflow-hidden flex-shrink-0 shadow-sm border border-white/5">
                {game.art.grid ? (
                  <img src={game.art.grid} className="w-full h-full object-cover" />
                ) : (
                  <div className="w-full h-full flex items-center justify-center text-[10px] text-adwaita-text-secondary font-bold text-center p-1 uppercase">Sem Capa</div>
                )}
              </div>
              
              <div className="flex-1 min-w-0">
                <h3 className="font-bold text-lg truncate leading-tight">{game.name}</h3>
                <p className="text-adwaita-text-secondary text-xs truncate mt-1 opacity-60 font-mono">{game.exe}</p>
                <div className="flex gap-2 mt-3">
                   <div className="px-2 py-0.5 bg-adwaita-blue/10 text-adwaita-blue text-[10px] font-bold rounded uppercase tracking-wider">Injetado</div>
                   <div className="px-2 py-0.5 bg-white/5 text-adwaita-text-secondary text-[10px] font-bold rounded uppercase tracking-wider">Steam</div>
                </div>
              </div>

              <div className="flex gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
                <button 
                  onClick={() => handleRemove(game.appId, game.name)}
                  className="adwaita-btn-destructive p-2 !rounded-lg"
                  title="Remover da Steam"
                >
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                  </svg>
                </button>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  )
}
