import React from 'react'
import Link from 'next/link'

const Header = () => {
  return (
    <div className="fixed bg-white top-0 w-screen border-color-50 border-b-2">
      <div className="w-full max-w-screen-xl h-14 mx-auto px-4">
        <div className="flex justify-between items-center h-full">
          <Link href="/">
            <a className="text-lg font-semibold">
              Siddharth Kundu
            </a>
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
