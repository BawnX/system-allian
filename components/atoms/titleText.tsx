'use client'

export type TitleTextType = {
    title: string
}

export default function TitleText ({ title }: TitleTextType) {
  return (
    <h1 className='text-xl font-medium text-gray-900 dark:text-white'>
      {title}
    </h1>
  )
}
