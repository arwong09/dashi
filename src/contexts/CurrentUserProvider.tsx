import { User as FirebaseUser } from 'firebase/auth'
import { ReactNode, useEffect, useState } from 'react'
import { User } from '@/src/utils/types'
import { auth, firestore } from '@/src/utils/firebase'
import { doc, onSnapshot } from 'firebase/firestore'
import { useRouter } from 'next/router'
import CurrentUserContext from '@/src/contexts/CurrentUserContext'

interface Props {
  children: ReactNode
  unauthedChildren: ReactNode
}

export default function CurrentUserProvider({
  children,
  unauthedChildren,
}: Props) {
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

  // firebase initializing
  if (currentUser === undefined || user === undefined) {
    return (
      <CurrentUserContext.Provider value={{ currentUser, user }}>
        {unauthedChildren}
      </CurrentUserContext.Provider>
    )
  }

  // logged out
  if (currentUser === null) {
    router.replace(`/`) // redirect to home page
    return (
      <CurrentUserContext.Provider value={{ currentUser, user }}>
        {unauthedChildren}
      </CurrentUserContext.Provider>
    )
  }

  return (
    <CurrentUserContext.Provider value={{ currentUser, user }}>
      {children}
    </CurrentUserContext.Provider>
  )
}
