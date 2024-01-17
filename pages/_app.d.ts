/// <reference types="react" />
import '../styles/globals.css'
import { AppProps } from 'next/app'
declare function MyApp({
  Component,
  pageProps,
}: AppProps): import('react').JSX.Element
export default MyApp
