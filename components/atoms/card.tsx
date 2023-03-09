import { ReactNode } from 'react'

export default function Card ({ children }: {children: ReactNode}) {
  return (
    <section className='w-full m-auto max-w-sm p-4 bg-white border border-gray-200 rounded-lg shadow sm:p-6 md:p-8 dark:bg-gray-800 dark:border-gray-700'>
      {children}
    </section>
  )
}
