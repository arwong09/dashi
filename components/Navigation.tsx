import { CurrentUserContext } from '@/contexts/CurrentUserContext'
import { auth } from '@/utils/firebase'
import Link from 'next/link'
import { useRouter } from 'next/router'
import { useContext } from 'react'
import Image from 'next/image'

export default function Navigation() {
  const { currentUser } = useContext(CurrentUserContext)
  const router = useRouter()

  const signOut = () => {
    auth.signOut().then(() => {
      router.push('/')
    })
  }

  return (
    <header className="text-neutral-800 flex justify-between items-center">
      <Link href="/" passHref>
        <Image
          src="/logo.png"
          width={100}
          height={32}
          alt="Logo"
          className="py-6 sm:py-8"
        />
      </Link>
      {router.pathname === '/' && currentUser === null && (
        <Link href="/login" className="text-sky-500 hover:text-sky-400">
          Login
        </Link>
      )}{' '}
      {router.pathname === '/' && currentUser !== null && (
        <Link href="/tags" className="text-sky-500 hover:text-sky-400">
          Dashboard
        </Link>
      )}
      {currentUser !== null && router.pathname !== '/' && (
        <button
          className="text-neutral-400 hover:text-neutral-500 border hover:bg-neutral-50 border-neutral-200 hover:border-neutral-300 rounded-md px-3 py-2 text-sm"
          onClick={signOut}
        >
          Sign out
        </button>
      )}
    </header>
  )
}
