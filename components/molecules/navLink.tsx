'use client'

import Link from 'next/link'
import { useLanguageContext } from '@components/atoms/languageContext'

export interface ILink {
  text: string
  url: string
}

export interface INavLink {
  linksArray: Array<ILink>
}

export const NavLink = () => {
  const { lang, text } = useLanguageContext()

  const linksArray: Array<ILink> = [
    {
      text: text.navigation.pricing,
      url: `/${lang}/pricing`
    }
  ]

  return (
    <nav className='md:ml-auto flex flex-wrap items-center text-base justify-center'>
      {linksArray.map((el, index) => (
        <Link href={el.url} passHref key={index} className='mr-5 hover:text-gray-600 dark:hover:text-gray-400'>
          {el.text}
        </Link>
      ))}
    </nav>
  )
}
