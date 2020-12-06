import Head from 'next/head'
import { Layout, WidthComp } from '../components/layout'

export default function Home() {
  return (
    <>
      <Head>
        <title>Personal portfolio</title>
      </Head>
      <Layout>
        <WidthComp main>
          <div className="flex-1 text-center">
            <p className="text-3xl">Hi I am Siddharth</p>
            <p>
              I'm a Javascript Engineer from India in love
              with React and Node. I currently work as a
              software engineer at ACKO. In my free time I
              try to learn anything interesting. Currently
              trying and failing to learn Rust.
            </p>
          </div>
        </WidthComp>
      </Layout>
    </>
  )
}
