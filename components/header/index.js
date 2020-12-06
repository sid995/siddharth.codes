import React from 'react'
import { WidthComp } from '../layout'
import Link from 'next/link'

const Header = () => {
  return (
    <div className="absolute top-0 w-screen">
      <WidthComp>
        <div className="flex justify-between px-4">
          <Link href="/">
            <a>Home</a>
          </Link>
          <span className="flex w-auto">
            <Link href="/blog">
              <a>Blog</a>
            </Link>
          </span>
        </div>
      </WidthComp>
    </div>
  )
}

export default Header
