'use client'
import LinkText from '@components/atoms/linkText'
import TitleText from '@components/atoms/titleText'
import Input from '@components/atoms/input'
import { UseAuthContext } from '@components/atoms/authenticationContext'
import { useLanguageContext } from '@components/atoms/languageContext'
import { FormEvent } from 'react'
import LoginButton from './buttons/loginButton'

export default function LoginForm () {
  const { handleLogin } = UseAuthContext()
  const { lang } = useLanguageContext()
  const login = (e: FormEvent) => {
    e.preventDefault()
    handleLogin(lang)
  }

  return (
    <form className='space-y-6' onSubmit={login}>
      <TitleText title='title_login' />
      <Input name='email' type='email' placeholder='email_example' label='email_input' required />
      <Input name='password' type='password' placeholder='password_example' label='password_input' required />
      <div className='flex items-between'>
        <Input type='checkbox' label='remember' />
        <LinkText linkTo='#' keyText='lost_password' />
      </div>
      <LoginButton />
      <div className='text-sm font-medium text-gray-500 dark:text-gray-300'>
        <LinkText linkTo={`/${lang}/signup`} keyText='signup_button' />
      </div>
    </form>
  )
}
