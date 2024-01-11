import { createContext } from 'react'
import { User as FirebaseUser } from 'firebase/auth'
import { User } from '@/utils/types'

interface CurrentUserContextInterface {
  currentUser: FirebaseUser | null | undefined
  user: User | null | undefined
}

export const CurrentUserContext = createContext<CurrentUserContextInterface>({
  currentUser: undefined,
  user: undefined,
})
CurrentUserContext.displayName = 'CurrentUserContext'
