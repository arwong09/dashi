import { customConfig } from '@/tailwind.config'
import Link from 'next/link'
import { ReactNode } from 'react'

interface Props {
  children: ReactNode
  href: string
}

export default function TextButton({ children, href }: Props) {
  return (
    <Link href={href} className={customConfig.textButtonColor}>
      {children}
    </Link>
  )
}
