import React from 'react'
import type { NextPage } from 'next'
import NavBar from '../components/NavBar'

export default function withNavLayout<P extends object>(Component: React.ComponentType<P>) {
  const WrappedComponent: NextPage<P> = (props) => (
    <>
      <nav className="sticky top-0 z-50">
        <NavBar />
      </nav>
      <Component {...(props as P)} />
    </>
  )

  WrappedComponent.displayName = `WithNavLayout(${Component.displayName || Component.name || 'Component'})`

  return WrappedComponent
}
