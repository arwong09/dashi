import { auth } from '../utils/firebase'
import Link from 'next/link'
import { useRouter } from 'next/router'
import Image from 'next/image'
import TextButton from './TextButton'
import SecondaryButton from './SecondaryButton'

export default function NavBarAuthed() {
  const router = useRouter()

  const signOut = () => {
    auth.signOut().then(() => {
      router.push('/')
    })
  }

  return (
    <>
      <Link href="/">
        <Image
          src="/logo.png"
          width={100}
          height={32}
          alt="Gems Logo"
          className="py-6 sm:py-8"
        />
      </Link>
      <TextButton href="/dashboard">Dashboard</TextButton>
      <SecondaryButton onClick={signOut}>Sign out</SecondaryButton>
    </>
  )
}
