import ChangeLangButton from '@components/molecules/buttons/changeLangButton'
import ChangeThemeButton from '@components/molecules/buttons/changeThemeButtone'
import LogoLink from '@components/molecules/logoLink'

export default function NavbarAuth () {
  return (
    <header className='mx-auto flex flex-wrap py-2.5 font-medium'>
      <LogoLink />

      <section className='md:ml-auto flex flex-wrap items-center'>
        <ChangeThemeButton />

        <ChangeLangButton langToChange='es' />
        |
        <ChangeLangButton langToChange='en' />
      </section>

    </header>
  )
}
