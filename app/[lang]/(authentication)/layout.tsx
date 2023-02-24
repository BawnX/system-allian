import NavbarAuth from '@components/organisms/navbarAuth'
import { ReactNode } from 'react'

export default function AuthenticationLayout ({
  children,
  params
}: {
    children: ReactNode;
    params: { lang: string };
  }) {
  return (
    <section className='h-screen px-6'>
      <NavbarAuth />
      {children}
    </section>
  )
}
