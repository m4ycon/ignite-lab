import { Slot } from '@radix-ui/react-slot'
import { clsx } from 'clsx'
import { ReactNode } from 'react'

export type ButtonProps = {
  children: ReactNode
  asChild?: boolean
}

export const Button = ({ children, asChild }: ButtonProps) => {
  const Comp = asChild ? Slot : 'button'

  return (
    <Comp
      className={clsx(
        'py-4 px-3 bg-cyan-500 font-semibold text-black rounded text-sm w-full transition-colors hover:bg-cyan-300 focus:ring-2 ring-white',
        {}
      )}
    >
      {children}
    </Comp>
  )
}
