import React, { useState, useEffect } from 'react'

export const GlumaStatus: React.FC = () => {
  const [status, setStatus] = useState<'checking' | 'downloading' | 'ready' | 'error'>('checking')
  const [errorMessage, setErrorMessage] = useState('')

  useEffect(() => {
    const initGluma = async () => {
      try {
        if ((window as any).api?.checkGlumaStatus) {
          const isReady = await (window as any).api.checkGlumaStatus()
          if (isReady) {
            setStatus('ready')
          } else {
            setStatus('downloading')
            await (window as any).api.downloadGluma()
            setStatus('ready')
          }
        }
      } catch (err: any) {
        setStatus('error')
        setErrorMessage(err.message || 'Erro ao inicializar GreenLuma')
      }
    }
    initGluma()
  }, [])

  return (
    <div className="flex items-center gap-2">
      {status === 'checking' && (
        <div className="flex items-center gap-2 px-3 py-1.5 bg-white/5 rounded-full text-xs font-medium text-white/50 animate-pulse">
          <div className="w-2 h-2 rounded-full bg-white/20"></div>
          Verificando motor...
        </div>
      )}

      {status === 'downloading' && (
        <div className="flex items-center gap-2 px-3 py-1.5 bg-adwaita-blue/10 border border-adwaita-blue/20 rounded-full text-xs font-medium text-adwaita-blue animate-fade-in shadow-[0_0_15px_rgba(53,132,228,0.2)]">
          <svg className="w-3.5 h-3.5 animate-spin" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" strokeLinecap="round" className="opacity-25" />
            <path d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" fill="currentColor" className="opacity-75" />
          </svg>
          Inicializando motor de injeção...
        </div>
      )}

      {status === 'ready' && (
        <div className="flex items-center gap-2 px-3 py-1.5 bg-adwaita-green/10 border border-adwaita-green/20 rounded-full text-xs font-bold text-adwaita-green animate-fade-in shadow-[0_0_15px_rgba(46,194,126,0.1)]">
          <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7" />
          </svg>
          GreenLuma: Pronto e Autossuficiente
        </div>
      )}

      {status === 'error' && (
        <div className="flex items-center gap-2 px-3 py-1.5 bg-red-500/10 border border-red-500/20 rounded-full text-xs font-medium text-red-400 animate-fade-in" title={errorMessage}>
          <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
          Falha no Motor
        </div>
      )}
    </div>
  )
}
