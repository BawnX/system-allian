'use client'

import { Button } from '@components/atoms/button'
import { useLanguageContext } from '@components/atoms/languageContext'

export default function LoginButton () {
  const { text } = useLanguageContext()

  return (
    <Button
      isRounded={false}
      color='primary'
      size='full'
      onClick={() => {}}
      isTypeSubmit
    >
      {text.auth.singin_button}
    </Button>
  )
}
