import { LanguageProvider } from '@components/atoms/languageContext'
import { ThemeProvider } from '@components/atoms/themeContext'
import { NavBar } from '@components/organisms/navbar'
import { ReactNode } from 'react'
import '../../styles/globals.css'

export default function RootLayout ({
  children,
  params
}: {
  children: ReactNode;
  params: { lang: string };
}) {
  return (
    <html lang={params.lang} dir={params.lang}>
      <head>
        <title>Create Next App</title>
        <meta name='description' content='Generated by create next app' />
        <link rel='icon' href='/favicon.ico' />
      </head>
      <body style={{ height: '100vh' }} className='bg-light dark:bg-dark body-font font-balooChettan text-primary dark:text-light'>
        <ThemeProvider>
          <LanguageProvider>
            <header>
              <NavBar />
            </header>

            <main>
              {children}
            </main>
          </LanguageProvider>
        </ThemeProvider>
      </body>
    </html>
  )
}