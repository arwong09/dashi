import {
  createContext, useEffect, useMemo, useState,
} from 'react'
import type { AppProps } from 'next/app'
import { User } from 'firebase/auth'
import auth from '../utils/initializeFirebase'
import '../styles/globals.css'

interface UserContextInterface {
  currentUser: User | null
}

export const UserContext = createContext<UserContextInterface>({ currentUser: null })
UserContext.displayName = 'AppContext'

function MyApp({ Component, pageProps }: AppProps) {
  const [currentUser, setCurrentUser] = useState<User | null>(null)

  useEffect(() => auth.onAuthStateChanged((user) => {
    setCurrentUser(user)
  }), [])

  const contextValue = useMemo(() => ({ currentUser }), [currentUser])

  return (
    <UserContext.Provider value={contextValue}>
      <Component {...pageProps} />
    </UserContext.Provider>
  )
}

export default MyApp
