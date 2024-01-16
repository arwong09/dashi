import Link from 'next/link'
import Image from 'next/image'
import TextButton from './TextButton'

export default function NavBarUnauthed() {
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
      <TextButton href="/login">Sign In</TextButton>
    </>
  )
}
