import React from 'react'
import Image from 'next/image'

const Footer = () => {
  return (
    <div className="bg-white border-color-50 w-full py-10 md:py-16 mx-auto border-t-2">
      <div className="grid max-w-screen-md grid-cols-1 md:gap-x-20 gap-y-10 grid-rows-2 md:grid-cols-2 md:grid-rows-1 px-4 mx-auto">
        <div className="flex flex-col">
          <p className="font-bold text-gray-800 tracking-wide mb-2">
            About this place
          </p>
          <p className="text-gray-500">
            Welcome to my personal website. I'm Siddharth,
            Javascript Engineer from India and I love React and NextJS (especially).
          </p>
        </div>
        <div className="flex flex-col">
          <p className="font-bold text-gray-800 tracking-wide mb-2">Socials</p>
          <div className="flex">
            <span className="mr-4">
              <a href="https://www.github.com/sid995" target="_blank" className="text-gray-500">
                <Image src="/images/svg/github.svg" alt="Github" width={16} height={16} />
              </a>
            </span>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Footer
