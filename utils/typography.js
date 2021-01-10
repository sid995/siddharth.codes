import React from 'react'

export const H2 = ({ children }) => (
  <div className="mb-8">
    <p className="font-sans tracking-wider font-bold text-5xl">
      {children}
    </p>
  </div>
)

export const H3 = ({ children }) => (
  <div className="mb-5">
    <p className="text-3xl font-semibold">
      {children}
    </p>
  </div>
)

export const Paragraph = ({ children }) => {
  return (<div className="mb-2">
    <p className="text-base">
      {children}
    </p>
  </div>
  )
}