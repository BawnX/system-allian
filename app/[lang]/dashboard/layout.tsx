import { NavBar } from '@components/organisms/navbar'
import { ReactNode } from 'react'

export default function RootLayout ({
  children,
  params
}: {
  children: ReactNode;
  params: { lang: string };
}) {
  return (
    <div className='h-screen bg-light dark:bg-dark body-font font-balooChettan text-primary dark:text-light'>
      <header>
        <NavBar />
      </header>

      <main>
        {children}
      </main>
    </div>
  )
}
