'use client'

import { useLanguageContext } from './languageContext'

export type TitleTextType = {
    title: string
}

export default function TitleText ({ title }: TitleTextType) {
  const { text } = useLanguageContext()
  return (
    <h1 className='text-xl font-medium text-gray-900 dark:text-white'>
      {text.auth[title]}
    </h1>
  )
}
