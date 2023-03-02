'use client'
import Link from 'next/link'
import { useLanguageContext } from './languageContext'

export default function LinkText ({ linkTo, keyText }: {linkTo: string, keyText: string}) {
  const { text } = useLanguageContext()

  return (
    <Link href={linkTo} className='ml-auto text-sm text-blue-700 hover:underline dark:text-blue-500'>
      {text.auth[keyText]}
    </Link>

  )
}
