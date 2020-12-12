import Head from 'next/head'
import { Layout } from '@components/layout'

export default function Home() {
  return (
    <>
      <Head>
        <title>Siddharh Kundu</title>
      </Head>
      <Layout>
        <div className="w-screen max-w-screen-md mx-auto pt-14 flex flex-col flex-auto items-center justify-center">
          <div className="px-4 my-4 sm:my-6 md:my-10">
            <p className="text-3xl mb-5 text-center font-bold">
              Hey, I'm Siddharth
            </p>
            <p className="text-lg">
              I'm a Javascript Engineer from India in love
              with React and Node. I currently work as a
              software engineer at ACKO. In my free time I
              try to learn anything interesting. Currently
              trying (and failing) to learn Rust.
            </p>
            <p className="mt-5 text-lg">
              In the work place, I am using React, NextJS,
              styled-components, storybook and many other
              tools to create and maintain services used by
              thousands of customers
            </p>
          </div>
        </div>
      </Layout>
    </>
  )
}
