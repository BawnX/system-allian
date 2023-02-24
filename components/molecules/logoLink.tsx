'use client'

import Link from 'next/link'
import { LogoNavbar } from '@components/atoms/logoNavbar'
import { useLanguageContext } from '@components/atoms/languageContext'

export default function LogoLink () {
  const { lang, text } = useLanguageContext()

  return (
    <Link href={`/${lang}/dashboard`} passHref>
      <LogoNavbar companyName={text.navigation.logo} />
    </Link>
  )
}
