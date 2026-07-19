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

export const LocalLibrary: React.FC<{ onEdit: (game: Game) => void, onShowDetails?: (game: Game) => void, refreshTrigger?: number, onAddGame?: () => void }> = ({ onEdit, onShowDetails, refreshTrigger, onAddGame }) => {
  const [library, setLibrary] = useState<Game[]>([])
  const [loading, setLoading] = useState(true)
  const [removingGame, setRemovingGame] = useState<Game | null>(null)
  const [isRemoving, setIsRemoving] = useState(false)
  const [installingVCAppId, setInstallingVCAppId] = useState<number | null>(null)
  const [vcProgress, setVcProgress] = useState(0)

  useEffect(() => {
    if ((window as any).api?.onVCRedistProgress) {
      (window as any).api.onVCRedistProgress((percent: number) => {
        setVcProgress(percent)
      })
    }
  }, [])

  const handleInstallVC = async (game: Game) => {
    setInstallingVCAppId(game.appId)
    setVcProgress(0)
    try {
      await (window as any).api.installVCRedist(game.appId.toString())
      alert('VC++ Redistributable instalado com sucesso!')
    } catch (err: any) {
      alert(`Falha ao instalar VC++ Redistributable:\n${err.message || err}`)
    } finally {
      setInstallingVCAppId(null)
      setVcProgress(0)
    }
  }

  const load = async () => {
    if (!(window as any).api?.getLibrary) {
      setLoading(false)
      return
    }
    setLoading(true)
    const data = await (window as any).api.getLibrary()
    setLibrary(data)
    setLoading(false)
  }

  useEffect(() => {
    load()
  }, [refreshTrigger])

  const confirmRemove = async () => {
    if (!removingGame) return
    setIsRemoving(true)
    
    try {
      const result = await (window as any).api.removeShortcut(removingGame.appId)
      if (result.success) {
        if ((window as any).api.restartSteam) {
          await (window as any).api.restartSteam()
        }
        await load()
      } else {
        alert('Erro ao remover: ' + result.error)
      }
    } finally {
      setIsRemoving(false)
      setRemovingGame(null)
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
        <div className="flex items-center gap-2">
          {onAddGame && (
            <button 
              onClick={onAddGame}
              className="flex items-center gap-2 bg-[#26a269] text-white font-bold px-4 py-2 rounded-lg hover:bg-[#33d17a] transition-colors shadow-[0_0_15px_rgba(38,162,105,0.2)] text-sm mr-2"
            >
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M12 4v16m8-8H4" />
              </svg>
              Adicionar Game Non-Steam
            </button>
          )}
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
            <div 
              key={game.appId} 
              className="adwaita-card p-4 flex items-center gap-4 group hover:bg-white/[0.05] transition-colors cursor-pointer relative"
              onClick={() => onShowDetails && onShowDetails(game)}
            >
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
                  onClick={(e) => {
                    e.stopPropagation()
                    onEdit(game)
                  }}
                  className="p-2 bg-white/10 hover:bg-white/20 text-white !rounded-lg transition-colors z-10"
                  title="Editar Jogo"
                >
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
                  </svg>
                </button>
                <button 
                  onClick={(e) => {
                    e.stopPropagation()
                    handleInstallVC(game)
                  }}
                  disabled={installingVCAppId === game.appId}
                  className="p-2 bg-blue-500/20 hover:bg-blue-500/40 text-blue-400 !rounded-lg transition-colors z-10 disabled:opacity-50 flex items-center justify-center relative overflow-hidden"
                  title="Instalar VC++ Redistributable"
                >
                  {installingVCAppId === game.appId ? (
                    <div className="absolute inset-0 flex items-center justify-center bg-blue-500/20">
                      <div className="w-full h-1 bg-black/40 absolute bottom-0 left-0">
                        <div className="h-full bg-blue-400 transition-all duration-300" style={{ width: `${vcProgress}%` }}></div>
                      </div>
                      <div className="w-4 h-4 border-2 border-blue-400/30 border-t-blue-400 rounded-full animate-spin"></div>
                    </div>
                  ) : (
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                  )}
                </button>
                <button 
                  onClick={(e) => {
                    e.stopPropagation()
                    setRemovingGame(game)
                  }}
                  className="adwaita-btn-destructive p-2 !rounded-lg z-10"
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

      {/* Modal de Confirmação de Remoção */}
      {removingGame && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm animate-fade-in">
          <div className="bg-adwaita-card border border-white/10 p-6 rounded-2xl w-full max-w-md shadow-2xl flex flex-col items-center text-center">
            <div className="w-16 h-16 bg-red-500/20 rounded-full flex items-center justify-center mb-4 text-red-500">
              <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" /></svg>
            </div>
            <h3 className="text-xl font-bold mb-2">Remover "{removingGame.name}"?</h3>
            <p className="text-adwaita-text-secondary mb-6 text-sm">
              Para remover este jogo completamente e não deixar vestígios na sua biblioteca, <strong className="text-white">a Steam será reiniciada automaticamente</strong>. Deseja prosseguir?
            </p>
            <div className="flex gap-3 w-full">
              <button 
                onClick={() => setRemovingGame(null)}
                disabled={isRemoving}
                className="flex-1 py-3 bg-white/5 hover:bg-white/10 rounded-xl font-bold transition-colors disabled:opacity-50"
              >
                Cancelar
              </button>
              <button 
                onClick={confirmRemove}
                disabled={isRemoving}
                className="flex-1 py-3 bg-red-500 hover:bg-red-600 text-white rounded-xl font-bold transition-colors disabled:opacity-50 flex items-center justify-center gap-2"
              >
                {isRemoving ? (
                  <>
                    <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
                    Removendo...
                  </>
                ) : (
                  'Sim, Remover'
                )}
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}
