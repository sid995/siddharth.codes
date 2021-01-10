import React from 'react'
import Link from 'next/link'
import format from 'date-fns/format'

const Post = ({ data }) => {
  const { title, slug, date } = data
  return (
    <Link href={`/blog/${slug}`}>
      <a>
        <div className="group border-0 border-b-2 border-solid border-gray-200 pb-8 mt-8">
          <h3 className="font-sans font-bold text-2xl tracking-wide mb-4 group-hover:underline group-focus:underline">{title}</h3>
          <p className="font-sans text-gray-500">{format(new Date(date), 'PPP')}</p>
        </div>
      </a>
    </Link>
  )
}

export default Post
