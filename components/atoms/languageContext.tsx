'use client'

import i18n, { translationsType } from '@i18/index'
import { getCookie, setCookie } from 'cookies-next'
import { useRouter } from 'next/navigation'
import { createContext, ReactNode, useContext, useState } from 'react'

const initialLang = 'es'

export type LangContextType = {
  text: translationsType;
  lang: string;
  handleLang: (nextLang: string) => void;
};
const ClearHref = (href: string) => {
  return href.split('/')
    .map((el, index) => {
      if (index > 3) { return el }
      return null
    })
    .filter(el => el !== null)
    .join('/')
}
const LanguageContext = createContext<LangContextType | null>(null)

export const LanguageProvider = ({ children }: { children: ReactNode }) => {
  const [lang, setLang] = useState<string>(() => {
    return getCookie('lang')?.toString() ?? initialLang
  })
  const [text, setText] = useState(() => {
    return i18n[lang]
  })
  const router = useRouter()

  const handleLang = (nextLang: string) => {
    if (lang !== nextLang) {
      const cleared = ClearHref(window.location.href)
      setCookie('lang', nextLang)
      setLang(nextLang)
      setText(i18n[nextLang])
      router.push(`/${nextLang}/${cleared}`)
    }
  }

  const data = {
    text,
    handleLang,
    lang
  }

  return (
    <LanguageContext.Provider value={data}>{children}</LanguageContext.Provider>
  )
}

export const useLanguageContext = () => {
  const context = useContext(LanguageContext) as LangContextType

  if (!context) {
    console.error('Error deploying Language Context!!!')
  }

  return context
}

export default LanguageContext
