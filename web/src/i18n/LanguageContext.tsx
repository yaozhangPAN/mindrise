import { createContext, useContext, useEffect, useMemo, useState, type ReactNode } from 'react'
import { translations, type Locale } from './index'

type LanguageContextValue = {
  locale: Locale
  setLocale: (locale: Locale) => void
  t: (typeof translations)[Locale]
}

const LanguageContext = createContext<LanguageContextValue | null>(null)

const STORAGE_KEY = 'wanwu-locale'

function readInitialLocale(): Locale {
  if (typeof window === 'undefined') return 'zh'
  const saved = window.localStorage.getItem(STORAGE_KEY)
  return saved === 'en' ? 'en' : 'zh'
}

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [locale, setLocaleState] = useState<Locale>(readInitialLocale)

  const setLocale = (next: Locale) => {
    setLocaleState(next)
    window.localStorage.setItem(STORAGE_KEY, next)
  }

  useEffect(() => {
    const t = translations[locale]
    document.documentElement.lang = locale === 'zh' ? 'zh-CN' : 'en'
    document.title = t.meta.title
    const description = document.querySelector('meta[name="description"]')
    if (description) description.setAttribute('content', t.meta.description)
  }, [locale])

  const value = useMemo(
    () => ({ locale, setLocale, t: translations[locale] }),
    [locale],
  )

  return <LanguageContext.Provider value={value}>{children}</LanguageContext.Provider>
}

export function useLanguage() {
  const context = useContext(LanguageContext)
  if (!context) {
    throw new Error('useLanguage must be used within LanguageProvider')
  }
  return context
}
