import { ReactNode } from 'react'
import MaxWidthLayout from './MaxWidthLayout'

interface Props {
  children: ReactNode
  header: ReactNode
}

export default function HeaderLayout({ children, header }: Props) {
  return (
    <>
      <MaxWidthLayout>
        <header className="text-neutral-800 flex justify-between items-center">
          {header}
        </header>
      </MaxWidthLayout>
      <main className="flex flex-col">{children}</main>
    </>
  )
}
