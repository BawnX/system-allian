'use client'

import { Button } from '@components/atoms/button'
import { Sun } from '@components/icons/sun'
import { Moon } from '@components/icons/moon'
import { useThemeContext } from '@components/atoms/themeContext'

export default function ChangeThemeButton () {
  const { mode, handleTheme } = useThemeContext()
  return (
    <Button
      onClick={() => handleTheme()}
      color='transparent'
      isRounded
      size='normal'
      isTypeSubmit={false}
    >
      {
          mode === 'light'
            ? (
              <Sun className='hover:text-gray-600' />
              )
            : (
              <Moon className='hover:text-gray-400' />
              )
        }
    </Button>
  )
}
