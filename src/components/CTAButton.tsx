import { ReactNode } from 'react'
import Link from 'next/link'

const customConfig = {
  textButtonColor: 'text-sky-500 hover:text-sky-400',
  ctaBgColor:
    'bg-gradient-to-b to-purple-700 from-fuchsia-600 hover:to-purple-700/90 hover:from-fuchsia-600/90 disabled:from-purple-700/30 disabled:to-fuchsia-600/30',
}

interface LinkProps {
  children: ReactNode
  href: string
  onClick?: () => void
  disabled?: never
}

interface ButtonProps {
  children: ReactNode
  onClick: () => void
  disabled?: boolean
  href?: never
}

export default function CTAButton({
  children,
  disabled,
  href,
  onClick,
}: LinkProps | ButtonProps) {
  const className = `${customConfig.ctaBgColor} rounded-xl text-white font-semibold sm:text-lg px-20 sm:px-32 py-4`

  return href === undefined ? (
    <button onClick={onClick} className={className} disabled={disabled}>
      {children}
    </button>
  ) : (
    <Link onClick={onClick} href={href} className={className}>
      {children}
    </Link>
  )
}
