import Head from 'next/head'
import { Layout } from '@components/layout'

export default function Home() {
  return (
    <>
      <Head>
        <title>Personal portfolio</title>
      </Head>
      <Layout>
        <div className="w-full py-5 max-w-screen-xl mx-auto flex-1">
          <div className="mt-5 px-4">
            <p className="text-3xl mb-5 text-center font-semibold">
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
