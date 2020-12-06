import Head from 'next/head'
import { Layout } from '../components/layout'

export default function Home() {
  return (
    <>
      <Head>
        <title>Personal portfolio</title>
      </Head>
      <Layout>
        <div className="w-full py-5 max-w-screen-xl mx-auto flex-1">
          <div className="flex-1 text-center px-4">
            <p className="text-3xl mb-4">
              Hi! I am Siddharth
            </p>
            <p>
              I'm a Javascript Engineer from India in love
              with React and Node. I currently work as a
              software engineer at ACKO. In my free time I
              try to learn anything interesting. Currently
              trying and failing to learn Rust.
            </p>
          </div>
        </div>
      </Layout>
    </>
  )
}
