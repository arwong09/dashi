import { ReactNode } from 'react'
import Link from 'next/link'
import { customConfig } from '@/tailwind.config'

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
