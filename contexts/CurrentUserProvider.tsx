import { User as FirebaseUser } from 'firebase/auth'
import { ReactNode, useEffect, useState } from 'react'
import { User } from '@/utils/types'
import { auth, firestore } from '@/utils/firebase'
import { doc, onSnapshot } from 'firebase/firestore'
import { useRouter } from 'next/router'
import { CurrentUserContext } from '@/contexts/CurrentUserContext'

export default function CurrentUserProvider({
  children,
}: {
  children: ReactNode
}) {
  const router = useRouter()
  const [currentUser, setCurrentUser] = useState<
    FirebaseUser | null | undefined
  >(undefined)
  const [user, setUser] = useState<User | null | undefined>(undefined)

  useEffect(
    () =>
      auth.onAuthStateChanged(async (authStateUser) => {
        setCurrentUser(authStateUser)
      }),
    [],
  )

  useEffect(() => {
    if (currentUser === null || currentUser === undefined) {
      return
    }

    return onSnapshot(doc(firestore, 'users', currentUser.uid), (doc) => {
      if (doc.exists()) {
        setUser(doc.data() as User)
      } else {
        setUser(null)
      }
    })
  }, [currentUser])

  if (currentUser === undefined || user === undefined) {
    return null // firebase initializing
  }

  if (currentUser === null) {
    router.replace(`/`) // redirect to home page
    return null
  }

  return (
    <CurrentUserContext.Provider value={{ currentUser, user }}>
      {children}
    </CurrentUserContext.Provider>
  )
}
