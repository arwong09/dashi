import { Inter } from 'next/font/google'
import HeaderLayout from '@/src/layouts/HeaderLayout'
import { useContext, useEffect, useState } from 'react'
import CurrentUserContext from '@/src/contexts/CurrentUserContext'

import { collection, onSnapshot, query, where } from 'firebase/firestore'
import { firestore } from '@/src/utils/firebase'
import { Tag } from '@/src/utils/types'

import Link from 'next/link'
import Image from 'next/image'

import NavBar from '@/src/components/NavBarUnauthed'
import MaxWidthLayout from '@/src/layouts/MaxWidthLayout'
import CurrentUserProvider from '@/src/contexts/CurrentUserProvider'
import NavBarAuthed from '@/src/components/NavBarAuthed'
import NavBarUnauthed from '@/src/components/NavBarUnauthed'

export default function DashboardPage() {
  const { currentUser, user } = useContext(CurrentUserContext)
  const [tags, setTags] = useState<Tag[]>([])

  useEffect(() => {
    if (currentUser === null || currentUser === undefined) return

    return onSnapshot(
      query(
        collection(firestore, 'tags'),
        where('ownerId', '==', currentUser.uid),
      ),
      (snapshot) => {
        const fetchedTags: Tag[] = []
        snapshot.forEach((doc) => {
          fetchedTags.push({ id: doc.id, ...doc.data() } as Tag)
        })

        setTags(fetchedTags)
      },
    )
  }, [currentUser])

  if (user === null || user === undefined) return null

  return (
    <HeaderLayout
      header={
        <CurrentUserProvider unauthedChildren={<NavBarUnauthed />}>
          <NavBarAuthed />
        </CurrentUserProvider>
      }
    >
      <MaxWidthLayout>
        <div className="py-6">
          <h2 className="text-xl sm:text-2xl font-semibold">Your Items</h2>
          <div className="py-4 sm:py-8">
            {tags.map((tag) => (
              <div key={tag.id} className="mb-6 sm:mb-8"></div>
            ))}
          </div>
        </div>
      </MaxWidthLayout>
    </HeaderLayout>
  )
}
