import HeaderLayout from '@/layouts/HeaderLayout'
import MaxWidthLayout from '@/layouts/MaxWidthLayout'
import Image from 'next/image'
import Link from 'next/link'
import NavBar from '@/components/NavBar'
import CTAButton from '@/components/CTAButton'

export default function Home() {
  return (
    <HeaderLayout header={<NavBar />}>
      <MaxWidthLayout>
        <>
          <h2
            className="text-[2.4rem] leading-none sm:text-[3.7rem] mt-4 sm:mt-12 mb-12 sm:mb-20 text-center"
            style={{ fontFamily: 'gladine' }}
          >
            LOST AND
            <br />
            FOUND LABELS
          </h2>
          <div className="relative w-full flex justify-center h-[300px] sm:h-[400px] imessage">
            <p className="from-them bg-gradient-to-b from-zinc-200/95 via-zinc-200 to-zinc-200/95 shadow-xl z-10 px-4 sm:px-7 py-2 sm:py-4 flex-0  sm:text-xl shrink absolute -left-2 sm:left-8 -top-[48px] sm:-top-20 animate-[float_1.5s_ease-in-out_infinite]">
              Hey! I think I found your <br /> water bottle at the park!
            </p>
            <Image
              objectFit="contain"
              fill
              src="/bottle.png"
              alt="Lost & Found Labels"
            />
          </div>
          <div className="mt-10 sm:mt-16 flex justify-center mb-12">
            <CTAButton href="qrgems.com">Buy on Amazon</CTAButton>
          </div>
        </>
      </MaxWidthLayout>
    </HeaderLayout>
  )
}
