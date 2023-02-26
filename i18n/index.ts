import navigationEs from './es/navigation'
import navigationEn from './en/navigation'
import authEs from './es/authentication'
import authEn from './en/authentication'

export type elementType = {
  [index: string]: string
}
export type translationsType = {
  [index: string]: elementType
}

export type i18nType = {
  [index: string]: translationsType,
}

const i18n: i18nType = {
  es: {
    navigation: navigationEs,
    auth: authEs
  },
  en: {
    navigation: navigationEn,
    auth: authEn
  }
}

export default i18n
