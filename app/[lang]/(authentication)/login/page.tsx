'use client'
import { UseAuthContext } from '@components/atoms/authenticationContext'
import Input from '@components/atoms/input'
import { useLanguageContext } from '@components/atoms/languageContext'
import LinkText from '@components/atoms/linkText'
import TitleText from '@components/atoms/titleText'
import FetchLang from '@services/common/fetchLang'
import { PageProps } from '@services/common/typePage'
import { FormEvent } from 'react'

export default async function Page ({ params }: PageProps) {
  const { handleLogin } = UseAuthContext()
  const { lang } = useLanguageContext()
  await FetchLang({ lang, category: 'auth' })
  const login = (e: FormEvent) => {
    e.preventDefault()
    handleLogin(lang)
  }

  return (
    <>
      <main className='flex h-144 items-center justify-center'>
        <section className='w-full m-auto max-w-sm p-4 bg-white border border-gray-200 rounded-lg shadow sm:p-6 md:p-8 dark:bg-gray-800 dark:border-gray-700'>
          <form className='space-y-6' onSubmit={login}>
            <TitleText title='Sign in' />
            <Input name='email' type='email' placeholder='email_example' label='email_input' required />
            <Input name='password' type='password' placeholder='password_example' label='password_input' required />
            <div className='flex items-between'>
              <Input type='checkbox' label='remember' />
              <LinkText linkTo='#' keyText='lost_password' />
            </div>
            <button type='submit' className='w-full text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800'>Login to your account</button>
            <div className='text-sm font-medium text-gray-500 dark:text-gray-300'>
              Not registered? <a href='#' className='text-blue-700 hover:underline dark:text-blue-500'>Create account</a>
            </div>
          </form>
        </section>
      </main>
    </>
  )
}
