'use client'
import { UseAuthContext } from '@components/atoms/authenticationContext'
import { Button } from '@components/atoms/button'
import { useLanguageContext } from '@components/atoms/languageContext'

export default function LogoutButton () {
  const { text, lang } = useLanguageContext()
  const { handleLogout } = UseAuthContext()

  return (
    <Button
      color='primary'
      isRounded
      onClick={() => handleLogout(lang)}
      size='normal'
      isTypeSubmit={false}
    >
      {text.navigation.logout}
    </Button>
  )
}
