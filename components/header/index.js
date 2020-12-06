import React from 'react'
import Link from 'next/link'

const Header = () => {
  return (
    <div className="absolute top-0 w-screen border-color-50 border-b-2 px-4">
      <div className="w-full py-5 max-w-screen-xl mx-auto">
        <div className="flex justify-between">
          <Link href="/">
            <a className="text-lg font-semibold">Home</a>
          </Link>
          <span className="flex w-auto">
            <Link href="/blog">
              <a className="text-lg font-semibold">Blog</a>
            </Link>
          </span>
        </div>
      </div>
    </div>
  )
}

export default Header
