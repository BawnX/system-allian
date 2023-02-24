'use client'

import {
  ReactNode,
  createContext,
  useContext
} from 'react'
import { useRouter } from 'next/navigation'
import { setCookie, deleteCookie } from 'cookies-next'

export type AuthContextType = {
  handleLogin: (lang: string) => void;
  handleLogout: (lang: string) => void;
};

const AuthContext = createContext<AuthContextType | null>(null)

export const AuthProvider = ({ children }: { children: ReactNode }) => {
  const router = useRouter()

  const handleLogin = (lang: string) => {
    setCookie('token', '1111111111111')
    router.push(`/${lang}/dashboard`)
  }

  const handleLogout = (lang: string) => {
    deleteCookie('token')
    router.push(`/${lang}/login`)
  }

  const data = {
    handleLogin,
    handleLogout
  }

  return <AuthContext.Provider value={data}>{children}</AuthContext.Provider>
}

export const UseAuthContext = () => {
  const context = useContext(AuthContext) as AuthContextType

  if (!context) {
    console.error('Error deploying Auth Context!!!')
  }

  return context
}

export default AuthContext
