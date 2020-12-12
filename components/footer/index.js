import React from 'react'

const Footer = () => {
  return (
    <div className="bg-white border-color-50 w-full py-5 max-w-screen-xl mx-auto border-t-2">
      <div className="grid grid-cols-1 grid-rows-1 px-4">
        <div>
          <p className="font-bold text-gray-800 tracking-wide mb-2">
            About this place
          </p>
          <p className="text-gray-500">
            Welcome to my personal website. I'm Siddharth,
            Javascript Engineer from India and I love React
            and Node.
          </p>
        </div>
      </div>
    </div>
  )
}

export default Footer
