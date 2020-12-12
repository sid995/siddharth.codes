import React from 'react'
import Image from 'next/image'

const socialArr = [
  {
    description: "View source on Github",
    iconSource: "/images/svg/github.svg",
    type: "Twitter",
    url: "https://www.github.com/sid995"
  },
  {
    description: "Follow me on Twitter",
    iconSource: "/images/svg/twitter.svg",
    type: "Twitter",
    url: "https://twitter.com/sidk995"
  }
]

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
          {socialArr.map((item, index) => (
            <div className="flex" key={index}>
              <a href={`${item.url}`} target="_blank" className="text-gray-500 hover:underline">
                <div className={`flex items-center${index === 0 ? " pb-1" : (index === item.length - 1 ? " pt-1" : " py-1")}`}>
                  <span className="mr-2 flex items-center">
                    <Image src={`${item.iconSource}`} alt="Github" width={18} height={18} />
                  </span>
                  <span className="w-full">{`${item.description}`}</span>
                </div>
              </a>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Footer
