import ChangeLangButton from '@components/molecules/buttons/changeLangButton'
import ChangeThemeButton from '@components/molecules/buttons/changeThemeButtone'
import LogoutButton from '@components/molecules/buttons/logoutButton'
import LogoLink from '@components/molecules/logoLink'
import { NavLink } from '@components/molecules/navLink'

export const NavBarDashboard = () => {
  return (
    <div className='mx-auto flex flex-wrap py-2.5 px-8 flex-col md:flex-row items-center font-medium'>
      <LogoLink />
      <NavLink />
      <ChangeThemeButton />
      <LogoutButton />
      <ChangeLangButton langToChange='es' />
      |
      <ChangeLangButton langToChange='en' />
    </div>
  )
}
