import { clsx } from 'clsx'
import { InputHTMLAttributes } from 'react'

export type TextInputProps = InputHTMLAttributes<HTMLInputElement>

export const TextInput = ({ ...props }: TextInputProps) => {
  return (
    <input
      {...props}
      className={clsx(
        'py-4 px-3 bg-gray-800 text-gray-100 text-xs rounded placeholder:text-gray-400 focus:ring-2 ring-cyan-300 outline-none',
        {}
      )}
    />
  )
}
