import React from 'react'
import Footer from '../footer'
import Header from '../header'

export const Layout = ({ children }) => {
  return (
    <div className="relative flex flex-col pt-20 w-screen min-h-screen">
      <Header />
      {children}
      <Footer />
    </div>
  )
}

export const WidthComp = ({ children, main }) => {
  return (
    <div className={`w-full py-5 max-w-screen-xl mx-auto${main ? " flex-1" : ""}`}>
      {children}
    </div>
  )
}