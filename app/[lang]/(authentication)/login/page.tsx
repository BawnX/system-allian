
import { LogoNavbar } from '@components/atoms/logoNavbar'
import { PageProps } from '@services/common/typePage'

export default function Page ({ params }: PageProps) {
  return (
    <>
      <header>
        <LogoNavbar companyName='Allian' />
      </header>
      <main className='flex flex-row'>
        <section className='justify-between basis-2/4'>
          <h1 className=''>Login</h1>
          <h1 className=''>Login</h1>
        </section>
      </main>
    </>
  )
}
