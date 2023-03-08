'use client'

import LoginForm from '@components/molecules/loginForm'

export default function Page () {
  return (
    <>
      <main className='flex h-144 items-center justify-center'>
        <section className='w-full m-auto max-w-sm p-4 bg-white border border-gray-200 rounded-lg shadow sm:p-6 md:p-8 dark:bg-gray-800 dark:border-gray-700'>
          <LoginForm />
        </section>
      </main>
    </>
  )
}
