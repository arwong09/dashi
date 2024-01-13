import { ReactNode } from 'react'

interface Props {
  children: ReactNode
  onClick: () => void
}

export default function SecondaryButton({ children, onClick }: Props) {
  return (
    <button
      className="text-neutral-400 hover:text-neutral-500 border hover:bg-neutral-50 border-neutral-200 hover:border-neutral-300 rounded-md px-3 py-2 text-sm"
      onClick={onClick}
    >
      {children}
    </button>
  )
}
