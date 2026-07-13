import React, { useState, useEffect } from 'react'

interface Props {
  apiKey: string
  onComplete: () => void
  onCancel: () => void
  initialData?: any
}

export const InjectionWizard: React.FC<Props> = ({ apiKey, onComplete, onCancel, initialData }) => {
  const [step, setStep] = useState(initialData ? 2 : 1)
  const [loading, setLoading] = useState(false)
  const [protonVersions, setProtonVersions] = useState<{value: string, label: string}[]>([{value: 'Nenhum', label: 'Nenhum'}])
  
  const [formData, setFormData] = useState({
    name: initialData?.name || '',
    exe: initialData?.exe || '',
    launchOptions: initialData?.launchOptions || '',
    proton: initialData?.proton || 'Nenhum'
  })

  // Presets
  const [useMangoHud, setUseMangoHud] = useState(false)
  const [useGameMode, setUseGameMode] = useState(false)
  
  const [arts, setArts] = useState<{ grid: string | null, gridHorizontal: string | null, hero: string | null, logo: string | null, icon: string | null }>({
    grid: initialData?.art?.grid || null, 
    gridHorizontal: initialData?.art?.gridHorizontal || null, 
    hero: initialData?.art?.hero || null, 
    logo: initialData?.art?.logo || null, 
    icon: initialData?.art?.icon || null
  })

  const [artModal, setArtModal] = useState<{ isOpen: boolean, type: 'grid' | 'gridHorizontal' | 'hero' | 'logo' | 'icon' | null, images: string[], loading: boolean }>({
    isOpen: false, type: null, images: [], loading: false
  })

  useEffect(() => {
    const loadProtons = async () => {
      if ((window as any).api?.getProtons) {
        const list = await (window as any).api.getProtons()
        setProtonVersions(list)
      }
    }
    loadProtons()
  }, [])

  const handleSelectExe = async () => {
    const path = await (window as any).api.selectExe()
    if (path) {
      setFormData({ ...formData, exe: path, name: path.split('/').pop()?.split('.')[0] || '' })
    }
  }

  const handleNext = async () => {
    if (!formData.name || !formData.exe) return
    
    setLoading(true)
    try {
      const results = await (window as any).api.searchArts(formData.name, apiKey)
      if (results) {
        setArts({
          grid: results.grid || null,
          gridHorizontal: results.gridHorizontal || null,
          hero: results.hero || null,
          logo: results.logo || null,
          icon: results.icon || null
        })
      }
      setStep(2)
    } catch (e) {
      console.error(e)
      setStep(2)
    } finally {
      setLoading(false)
    }
  }

  const handleSelectLocalArt = async (type: 'grid' | 'gridHorizontal' | 'hero' | 'logo' | 'icon') => {
    const path = await (window as any).api.selectArtFile()
    if (path) {
      setArts({ ...arts, [type]: `steam-asset://${path}` })
    }
  }

  const openArtModal = async (type: 'grid' | 'gridHorizontal' | 'hero' | 'logo' | 'icon') => {
    setArtModal({ isOpen: true, type, images: [], loading: true })
    try {
      const images = await (window as any).api.getAlternativeArts(formData.name, apiKey, type)
      setArtModal({ isOpen: true, type, images: images || [], loading: false })
    } catch (e) {
      console.error(e)
      setArtModal({ isOpen: true, type, images: [], loading: false })
    }
  }

  const handleInject = async () => {
    setLoading(true)
    
    let finalLaunchOptions = formData.launchOptions
    if (useMangoHud) finalLaunchOptions = `mangohud ${finalLaunchOptions}`
    if (useGameMode) finalLaunchOptions = `gamemoderun ${finalLaunchOptions}`
    if (finalLaunchOptions.trim() && !finalLaunchOptions.includes('%command%')) {
      finalLaunchOptions = `${finalLaunchOptions} %command%`
    }

    try {
      const result = await (window as any).api.injectShortcut({
        exePath: formData.exe,
        gameName: formData.name,
        sgdbApiKey: apiKey,
        launchOptions: finalLaunchOptions.trim(),
        protonVersion: formData.proton === 'Nenhum' ? undefined : formData.proton,
        customArt: arts,
        oldAppName: initialData?.name
      })
      
      if (result.success) {
        onComplete()
      } else {
        alert('Erro: ' + result.error)
      }
    } catch (e) {
      alert('Falha na injeção: ' + e)
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="adwaita-card p-8 max-w-2xl w-full mx-auto shadow-2xl animate-fade-in bg-adwaita-card">
      <div className="flex justify-between items-center mb-8">
        <div>
          <h2 className="text-xl font-bold">
            {initialData ? 'Editar Jogo' : step === 1 ? 'Configuração do Jogo' : 'Artes da Biblioteca'}
          </h2>
          <p className="text-adwaita-text-secondary text-sm">{initialData && step === 2 ? 'Modifique as artes ou confirme as edições' : step === 1 ? 'Dados básicos e compatibilidade' : 'Confirme como o jogo aparecerá na Steam'}</p>
        </div>
        <div className="flex gap-2">
          <div className={`h-2 w-2 rounded-full ${step >= 1 ? 'bg-adwaita-blue' : 'bg-white/10'}`}></div>
          <div className={`h-2 w-2 rounded-full ${step >= 2 ? 'bg-adwaita-blue' : 'bg-white/10'}`}></div>
        </div>
      </div>

      {step === 1 ? (
        <div className="space-y-6">
          {!apiKey && (
            <div className="p-3 bg-red-500/10 border border-red-500/20 rounded-lg flex items-center gap-3 animate-fade-in">
              <div className="p-2 bg-red-500/20 rounded-full text-red-500 flex-shrink-0">
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                </svg>
              </div>
              <p className="text-xs text-red-400 font-medium">Aviso: Nenhuma chave da SteamGridDB configurada. O injetor não poderá buscar capas automaticamente.</p>
            </div>
          )}

          <div className="space-y-2">
            <label className="text-[10px] font-bold text-adwaita-text-secondary uppercase px-1">Executável</label>
            <div className="flex gap-2">
              <input 
                readOnly 
                value={formData.exe}
                placeholder="Selecione o arquivo..."
                className="adwaita-input flex-1 text-sm overflow-hidden text-ellipsis"
              />
              <button 
                onClick={handleSelectExe}
                className="adwaita-btn-secondary !py-2"
              >
                Buscar
              </button>
            </div>
          </div>

          <div className="space-y-2">
            <label className="text-[10px] font-bold text-adwaita-text-secondary uppercase px-1">Nome no Scraper</label>
            <input 
              value={formData.name}
              onChange={(e) => setFormData({ ...formData, name: e.target.value })}
              className="adwaita-input w-full text-sm"
            />
          </div>

          <div className="grid grid-cols-2 gap-6">
            <div className="space-y-3">
               <label className="text-[10px] font-bold text-adwaita-text-secondary uppercase px-1 block">Otimizações</label>
               <div className="space-y-2">
                 <label className="flex items-center gap-3 cursor-pointer group">
                    <input 
                      type="checkbox" 
                      checked={useMangoHud}
                      onChange={(e) => setUseMangoHud(e.target.checked)}
                      className="w-4 h-4 rounded border-white/10 bg-black/30 text-adwaita-blue focus:ring-0" 
                    />
                    <span className="text-sm text-adwaita-text-secondary group-hover:text-white transition-colors">MangoHud</span>
                 </label>
                 <label className="flex items-center gap-3 cursor-pointer group">
                    <input 
                      type="checkbox" 
                      checked={useGameMode}
                      onChange={(e) => setUseGameMode(e.target.checked)}
                      className="w-4 h-4 rounded border-white/10 bg-black/30 text-adwaita-blue focus:ring-0" 
                    />
                    <span className="text-sm text-adwaita-text-secondary group-hover:text-white transition-colors">GameMode</span>
                 </label>
               </div>
            </div>
            <div className="space-y-2">
              <label className="text-[10px] font-bold text-adwaita-text-secondary uppercase px-1">Versão do Proton</label>
              <select 
                value={formData.proton}
                onChange={(e) => setFormData({ ...formData, proton: e.target.value })}
                className="adwaita-input w-full text-sm appearance-none cursor-pointer"
              >
                {protonVersions.map(v => <option key={v.value} value={v.value} className="bg-[#2b2b2b] text-white">{v.label}</option>)}
              </select>
            </div>
          </div>

          <div className="space-y-2">
            <label className="text-[10px] font-bold text-adwaita-text-secondary uppercase px-1">Parâmetros Adicionais</label>
            <input 
              placeholder="Ex: -windowed -nojoy"
              value={formData.launchOptions}
              onChange={(e) => setFormData({ ...formData, launchOptions: e.target.value })}
              className="adwaita-input w-full text-sm"
            />
          </div>

          <div className="flex gap-3 pt-4">
            <button 
              onClick={onCancel}
              className="flex-1 adwaita-btn-secondary"
            >
              Cancelar
            </button>
            <button 
              onClick={handleNext}
              disabled={!formData.exe || loading}
              className="flex-1 adwaita-btn-primary"
            >
              {loading ? 'Buscando...' : 'Próximo'}
            </button>
          </div>
        </div>
      ) : (
        <div className="space-y-6">
          <div className="grid grid-cols-3 gap-4">
            <div className="space-y-4">
              <div className="space-y-2">
                <p className="text-[10px] font-bold text-adwaita-text-secondary uppercase px-1">Capa Vertical</p>
                <div className="aspect-[2/3] bg-black/40 rounded-xl overflow-hidden border border-white/5 relative group shadow-inner">
                  {arts.grid ? <img src={arts.grid} className="w-full h-full object-cover" /> : <div className="flex items-center justify-center h-full text-adwaita-text-secondary text-[10px]">Sem Arte</div>}
                  <button 
                    onClick={() => openArtModal('grid')}
                    className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 flex items-center justify-center text-[10px] font-bold transition-all"
                  >
                    Alterar
                  </button>
                </div>
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <p className="text-[10px] font-bold text-adwaita-text-secondary uppercase px-1">Logo</p>
                  <div className="h-16 bg-black/40 rounded-xl overflow-hidden border border-white/5 relative group p-2 shadow-inner">
                    {arts.logo ? <img src={arts.logo} className="h-full object-contain mx-auto" /> : <div className="flex items-center justify-center h-full text-adwaita-text-secondary text-[10px]">Sem Logo</div>}
                    <button 
                      onClick={() => openArtModal('logo')}
                      className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 flex items-center justify-center text-[10px] font-bold transition-all"
                    >
                      Alterar
                    </button>
                  </div>
                </div>
                <div className="space-y-2">
                  <p className="text-[10px] font-bold text-adwaita-text-secondary uppercase px-1">Ícone</p>
                  <div className="h-16 w-16 bg-black/40 rounded-xl overflow-hidden border border-white/5 relative group p-2 shadow-inner mx-auto">
                    {arts.icon ? <img src={arts.icon} className="h-full w-full object-contain" /> : <div className="flex items-center justify-center h-full text-adwaita-text-secondary text-[10px]">Sem Ícone</div>}
                    <button 
                      onClick={() => openArtModal('icon')}
                      className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 flex items-center justify-center text-[10px] font-bold transition-all"
                    >
                      Alterar
                    </button>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-span-2 space-y-4">
              <div className="space-y-2">
                <p className="text-[10px] font-bold text-adwaita-text-secondary uppercase px-1">Banner</p>
                <div className="aspect-[21/9] bg-black/40 rounded-xl overflow-hidden border border-white/5 relative group shadow-inner">
                  {arts.hero ? <img src={arts.hero} className="w-full h-full object-cover" /> : <div className="flex items-center justify-center h-full text-adwaita-text-secondary text-[10px]">Sem Arte</div>}
                  <button 
                    onClick={() => openArtModal('hero')}
                    className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 flex items-center justify-center text-[10px] font-bold transition-all"
                  >
                    Alterar
                  </button>
                </div>
              </div>
              <div className="space-y-2">
                <p className="text-[10px] font-bold text-adwaita-text-secondary uppercase px-1">Capa Horizontal (Big Picture)</p>
                <div className="aspect-[21/9] bg-black/40 rounded-xl overflow-hidden border border-white/5 relative group shadow-inner">
                  {arts.gridHorizontal ? <img src={arts.gridHorizontal} className="w-full h-full object-cover" /> : <div className="flex items-center justify-center h-full text-adwaita-text-secondary text-[10px]">Sem Arte</div>}
                  <button 
                    onClick={() => openArtModal('gridHorizontal')}
                    className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 flex items-center justify-center text-[10px] font-bold transition-all"
                  >
                    Alterar
                  </button>
                </div>
              </div>
            </div>
          </div>

          {initialData ? (
            <div className="grid grid-cols-2 gap-4 bg-black/20 p-4 rounded-xl border border-white/5">
              <div className="space-y-2">
                <label className="text-[10px] font-bold text-adwaita-text-secondary uppercase px-1">Versão do Proton</label>
                <select 
                  value={formData.proton}
                  onChange={(e) => setFormData({ ...formData, proton: e.target.value })}
                  className="adwaita-input w-full text-sm appearance-none cursor-pointer"
                >
                  {protonVersions.map(v => <option key={v.value} value={v.value} className="bg-[#2b2b2b] text-white">{v.label}</option>)}
                </select>
              </div>
              <div className="space-y-2">
                <label className="text-[10px] font-bold text-adwaita-text-secondary uppercase px-1">Parâmetros Adicionais</label>
                <input 
                  placeholder="Ex: -windowed -nojoy"
                  value={formData.launchOptions}
                  onChange={(e) => setFormData({ ...formData, launchOptions: e.target.value })}
                  className="adwaita-input w-full text-sm"
                />
              </div>
            </div>
          ) : (
            <div className="bg-white/5 p-4 rounded-xl text-xs text-adwaita-text-secondary border border-white/5">
               <p>Injetando <span className="text-white font-bold">{formData.name}</span></p>
               <p className="mt-1 opacity-60">Proton: {protonVersions.find(p => p.value === formData.proton)?.label || formData.proton}</p>
            </div>
          )}

          <div className="flex gap-3">
            {initialData ? (
              <button 
                onClick={onCancel}
                className="flex-1 adwaita-btn-secondary"
              >
                Cancelar
              </button>
            ) : (
              <button 
                onClick={() => setStep(1)}
                className="flex-1 adwaita-btn-secondary"
              >
                Voltar
              </button>
            )}
            <button 
              onClick={handleInject}
              disabled={loading}
              className="flex-[2] adwaita-btn-primary"
            >
              {loading ? (initialData ? 'Salvando...' : 'Injetando...') : (initialData ? 'Salvar Alterações' : 'Confirmar e Injetar')}
            </button>
          </div>
        </div>
      )}

      {/* Modal de Seleção de Arte */}
      {artModal.isOpen && (
        <div className="fixed inset-0 z-50 bg-black/80 flex items-center justify-center p-4 animate-fade-in backdrop-blur-sm">
          <div className="bg-adwaita-card p-6 rounded-2xl max-w-3xl w-full max-h-[80vh] flex flex-col shadow-2xl border border-white/10">
            <div className="flex justify-between items-center mb-6">
              <h3 className="text-lg font-bold">Alterar Arte</h3>
              <button onClick={() => setArtModal({ ...artModal, isOpen: false })} className="text-white/50 hover:text-white transition-colors">✕</button>
            </div>
            
            <button 
              onClick={() => {
                setArtModal({ ...artModal, isOpen: false })
                handleSelectLocalArt(artModal.type!)
              }}
              className="w-full adwaita-btn-secondary mb-6 !py-3 flex justify-center items-center gap-2"
            >
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-8l-4-4m0 0L8 8m4-4v12" /></svg>
              Selecionar arquivo do computador...
            </button>
            
            <p className="text-xs font-bold text-adwaita-text-secondary uppercase mb-4">Ou escolha do SteamGridDB</p>
            
            <div className="flex-1 overflow-y-auto min-h-0 pr-2">
              {artModal.loading ? (
                <div className="flex justify-center items-center py-20">
                  <div className="animate-spin w-8 h-8 border-4 border-adwaita-blue border-t-transparent rounded-full"></div>
                </div>
              ) : (
                <div className={`grid gap-4 ${artModal.type === 'hero' || artModal.type === 'gridHorizontal' ? 'grid-cols-2' : artModal.type === 'logo' || artModal.type === 'icon' ? 'grid-cols-4' : 'grid-cols-3'}`}>
                  {artModal.images.map((url, i) => (
                    <button 
                      key={i} 
                      onClick={async () => {
                        try {
                          const newArt = await (window as any).api.downloadTempArt(url)
                          setArts({ ...arts, [artModal.type!]: newArt })
                          setArtModal({ ...artModal, isOpen: false })
                        } catch (e) {
                          alert('Falha ao baixar imagem.')
                        }
                      }}
                      className="border-2 border-transparent hover:border-adwaita-blue rounded-xl overflow-hidden transition-all focus:outline-none focus:border-adwaita-blue bg-black/40 group relative"
                    >
                      <img src={url} className={`w-full object-contain ${artModal.type === 'grid' ? 'aspect-[2/3]' : artModal.type === 'hero' || artModal.type === 'gridHorizontal' ? 'aspect-[21/9]' : 'aspect-square'}`} />
                      <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 flex items-center justify-center transition-opacity text-xs font-bold">
                        Selecionar
                      </div>
                    </button>
                  ))}
                  {artModal.images.length === 0 && (
                    <p className="col-span-full text-center text-white/50 text-sm py-10">Nenhuma arte encontrada para este tipo.</p>
                  )}
                </div>
              )}
            </div>
          </div>
        </div>
      )}
    </div>
  )
}
