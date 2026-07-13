import React, { useState, useEffect } from 'react'

interface SettingsPanelProps {
  onConfigChange: (key: string, value: string) => void
  initialSteamApiKey: string
  initialSgdbApiKey: string
  initialGreenLumaPath: string
}

export const SettingsPanel: React.FC<SettingsPanelProps> = ({ 
  onConfigChange, 
  initialSteamApiKey, 
  initialSgdbApiKey, 
  initialGreenLumaPath 
}) => {
  const [steamApiKey, setSteamApiKey] = useState(initialSteamApiKey)
  const [sgdbApiKey, setSgdbApiKey] = useState(initialSgdbApiKey)
  const [greenLumaPath, setGreenLumaPath] = useState(initialGreenLumaPath)
  const [showApiKey, setShowApiKey] = useState(false)
  
  const [toastMessage, setToastMessage] = useState<string | null>(null)

  useEffect(() => {
    setSteamApiKey(initialSteamApiKey)
    setSgdbApiKey(initialSgdbApiKey)
    setGreenLumaPath(initialGreenLumaPath)
  }, [initialSteamApiKey, initialSgdbApiKey, initialGreenLumaPath])

  const showToast = (msg: string) => {
    setToastMessage(msg)
    setTimeout(() => setToastMessage(null), 3000)
  }

  const saveSteamApiKey = async () => {
    if ((window as any).api?.saveConfigData) {
      await (window as any).api.saveConfigData('steamApiKey', steamApiKey)
      onConfigChange('steamApiKey', steamApiKey)
      showToast('Steam Web API Key salva com sucesso!')
    }
  }

  const saveSgdbApiKey = async () => {
    if ((window as any).api?.saveConfigData) {
      await (window as any).api.saveConfigData('sgdbApiKey', sgdbApiKey)
      onConfigChange('sgdbApiKey', sgdbApiKey)
      showToast('SteamGridDB API Key salva com sucesso!')
    }
  }

  const selectGreenLumaPath = async () => {
    const path = await (window as any).api.selectExe()
    if (path) {
      setGreenLumaPath(path)
      if ((window as any).api?.saveConfigData) {
        await (window as any).api.saveConfigData('greenLumaPath', path)
        onConfigChange('greenLumaPath', path)
        showToast('Caminho do GreenLuma salvo com sucesso!')
      }
    }
  }

  return (
    <div className="animate-fade-in space-y-8 relative">
      {/* Toast Notification */}
      {toastMessage && (
        <div className="fixed top-16 left-1/2 -translate-x-1/2 bg-adwaita-green/90 text-white px-4 py-2 rounded-full shadow-lg shadow-green-900/20 text-sm font-bold animate-fade-in z-50 flex items-center gap-2">
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7" /></svg>
          {toastMessage}
        </div>
      )}

      {/* SGDB API Key */}
      <div className="max-w-md mx-auto">
        <label className="text-[10px] font-bold text-adwaita-text-secondary uppercase block mb-2 text-center">Inserir SteamGridDB API Key (Artes)</label>
        <div className="flex items-center gap-2">
          <div className="relative flex-1">
            <input 
              type={showApiKey ? "text" : "password"}
              placeholder="Cole sua SGDB API Key..."
              value={sgdbApiKey}
              onChange={(e) => setSgdbApiKey(e.target.value)}
              className="adwaita-input w-full pr-10 text-sm"
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
          </div>
          <button 
            onClick={saveSgdbApiKey}
            className="px-4 py-2 bg-adwaita-blue hover:bg-blue-500 text-white rounded-lg transition-colors font-bold text-sm"
          >
            Salvar
          </button>
        </div>
      </div>

      {/* Steam Web API Key */}
      <div className="max-w-md mx-auto pt-6 border-t border-white/5">
        <label className="text-[10px] font-bold text-adwaita-text-secondary uppercase block mb-2 text-center">Inserir Steam Web API Key (Conquistas)</label>
        <div className="flex items-center gap-2">
          <div className="relative flex-1">
            <input 
              type={showApiKey ? "text" : "password"}
              placeholder="Cole sua Steam Web API Key..."
              value={steamApiKey}
              onChange={(e) => setSteamApiKey(e.target.value)}
              className="adwaita-input w-full pr-10 text-sm"
            />
          </div>
          <button 
            onClick={saveSteamApiKey}
            className="px-4 py-2 bg-adwaita-blue hover:bg-blue-500 text-white rounded-lg transition-colors font-bold text-sm"
          >
            Salvar
          </button>
        </div>
      </div>

      {/* GreenLuma Path */}
      <div className="max-w-md mx-auto pt-6 border-t border-white/5">
        <label className="text-[10px] font-bold text-adwaita-text-secondary uppercase block mb-2 text-center">Caminho do GreenLuma (libSteam.so)</label>
        <div className="flex items-center gap-2">
          <input 
            type="text"
            readOnly
            placeholder="Selecione o arquivo libSteam.so..."
            value={greenLumaPath}
            className="adwaita-input flex-1 text-sm overflow-hidden text-ellipsis bg-white/5"
          />
          <button 
            onClick={selectGreenLumaPath}
            className="px-4 py-2 bg-white/10 hover:bg-white/20 text-white rounded-lg transition-colors font-bold text-sm whitespace-nowrap"
          >
            Procurar...
          </button>
        </div>
      </div>
    </div>
  )
}
