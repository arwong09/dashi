import { ReactNode } from 'react'
import Link from 'next/link'

interface BaseProps {
  bg: string
  children: ReactNode
}

interface LinkProps extends BaseProps {
  href: string
  onClick?: () => void
  disabled?: never
}

interface ButtonProps extends BaseProps {
  onClick: () => void
  disabled?: boolean
  href?: never
}

const getBgClassNames = (bg: string) => {
  const classes = bg.split(' ')
  return (
    bg +
    ' ' +
    classes.map((c) => `hover:${c}/90`).join(' ') +
    ' ' +
    classes.map((c) => `disabled:${c}/30`).join(' ')
  )
}

export default function CTAButton({
  bg,
  children,
  disabled,
  href,
  onClick,
}: LinkProps | ButtonProps) {
  const className = `rounded-xl text-white font-semibold sm:text-lg px-20 sm:px-32 py-4 ${getBgClassNames(bg)}`

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
