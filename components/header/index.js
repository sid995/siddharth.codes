import React from 'react'
import Link from 'next/link'

const Header = () => {
  return (
    <nav className="fixed bg-white top-0 left-0 z-10 w-full border-color-50 border-b-2">
      <div className="w-full max-w-screen-md h-14 mx-auto px-4">
        <div className="flex justify-between items-center h-full">
          <Link href="/">
            <a>
              <div className="flex flex-initial items-center text-lg font-bold font-mono">
                <span className="mr-2">{">"}</span>
                <span>$ cd ~</span>
                <span className="inline-block w-3 h-6 ml-3 rounded-1px bg-red-400 animate-pulse"></span>
              </div>
            </a>
          </Link>
          <span className="flex w-auto">
            <Link href="/blog">
              <a className="text-lg font-sans">Blog</a>
            </Link>
          </span>
        </div>
      </div>
    </nav>
  )
}

export default Header
