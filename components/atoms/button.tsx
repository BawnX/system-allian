'use client'

import * as React from 'react'

export interface IButton {
  isRounded: boolean;
  size: 'small' | 'normal' | 'large' | 'full';
  color: 'primary' | 'transparent';
  children?: React.ReactNode;
  isTypeSubmit: boolean;
  onClick: () => void;
}

export const Button: React.FC<IButton> = ({
  isRounded,
  size,
  color,
  children,
  onClick,
  isTypeSubmit
}) => {
  const staticClass =
    'items-center border-0 py-1 px-3 focus:outline-none text-base mt-4 md:mt-0'
  const roundedClass = isRounded ? 'rounded-full' : 'rounded-lg'
  const sizeClass = {
    small: 'h-8',
    normal: 'h-11',
    large: 'h-15',
    full: 'w-full h-15 text-center'
  }
  const constructedClass = {
    primary: `${staticClass} ${roundedClass} ${sizeClass[size]} dark:bg-primary dark:hover:bg-secondary hover:bg-secondary bg-primary text-light`,
    transparent: `${staticClass} ${roundedClass} ${sizeClass[size]}`
  }

  return (
    <button type={isTypeSubmit ? 'submit' : 'button'} onClick={onClick} className={constructedClass[color]}>
      {children}
    </button>
  )
}
