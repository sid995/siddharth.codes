import React from 'react'
import Link from 'next/link'

const Header = () => {
  return (
    <nav className="fixed bg-white top-0 left-0 z-10 w-full border-color-50 border-b">
      <div className="w-full max-w-screen-md h-14 mx-auto px-4 sm:px-6 md:px-8">
        <div className="flex justify-between items-center h-full">
          <Link href="/">
            <a>
              <div className="flex flex-initial items-center text-xl font-semibold font-onlyMono">
                <span className="mr-2">{">"}</span>
                <span>$ cd /home</span>
                <span className="inline-block w-3 h-5 ml-2 rounded-1px bg-red-400 animate-pulse"></span>
              </div>
            </a>
          </Link>
          <span className="flex w-auto">
            <Link href="/blog">
              <a className="text-base font-semibold">Blog</a>
            </Link>
          </span>
        </div>
      </div>
    </nav>
  )
}

export default Header
