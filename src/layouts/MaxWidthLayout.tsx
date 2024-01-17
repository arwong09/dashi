import { ReactNode } from 'react'

export default function MaxWidthLayout({ children }: { children: ReactNode }) {
  return <div className="max-w-xl mx-auto px-4">{children}</div>
}
