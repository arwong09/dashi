import '../styles/globals.css'
import type { AppProps } from 'next/app'
import CurrentUserProvider from '@/contexts/CurrentUserProvider'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <CurrentUserProvider>
      <Component {...pageProps} />
    </CurrentUserProvider>
  )
}

export default MyApp
