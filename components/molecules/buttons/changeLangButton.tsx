'use client'
import { Button } from '@components/atoms/button'
import { useLanguageContext } from '@components/atoms/languageContext'

export default function ChangeLangButton ({ langToChange }: {langToChange: string}) {
  const { handleLang } = useLanguageContext()

  return (
    <Button
      color='transparent'
      isRounded
      size='normal'
      onClick={() => handleLang(langToChange)}
      isTypeSubmit={false}
    >
      {langToChange.toUpperCase()}
    </Button>
  )
}
