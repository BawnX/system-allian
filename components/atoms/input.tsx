'use client'
import { useLanguageContext } from './languageContext'

export type InputType = {
    type: 'email' | 'password' | 'checkbox'
    name?: string
    placeholder?: string
    label?: string
    required?: boolean
}

export default function Input (
  { type, name, placeholder, label, required }: InputType =
  { required: false, type: 'email', label: '', name: '', placeholder: '' }
) {
  const { text } = useLanguageContext()
  if (type === 'checkbox') {
    return (
      <input type='checkbox' value='' className='w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-blue-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800' required />
    )
  }

  if (!placeholder || !label) {
    return null
  }

  return (
    <>
      <label className='block mb-2 text-sm font-medium text-gray-900 dark:text-white'>{text.auth[label]}</label>
      <input
        type={type}
        name={name}
        className='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white'
        placeholder={text.auth[placeholder]}
        required={required}
      />
    </>
  )
}
