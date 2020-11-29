import React from 'react'
import { WidthComp } from '../layout'

const Header = () => {
  return (
    <div className="absolute top-0 w-screen">
      <WidthComp>
        <div className="flex justify-between">
          <span>Home</span>
          <span className="flex w-auto">
            <span>Articles</span>
          </span>
        </div>
      </WidthComp>
    </div>
  )
}

export default Header
