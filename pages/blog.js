import Head from 'next/head'
import { Layout } from '../components/layout'

export default function Home() {
  return (
    <>
      <Head>
        <title>Posts::Siddharth Kundu</title>
      </Head>
      <Layout>
        <div className="w-screen max-w-screen-md mx-auto pt-14 flex flex-col flex-auto">
          <div className="px-4 my-4 sm:my-6 md:my-10">
            <p className="text-3xl mb-5 font-bold">Posts</p>
            <p>Candid thoughts about all JS, React, Node, everyday experiences and other interesting things</p>
            <div className="flex flex-col mt-8">

            </div>
          </div>
        </div>
      </Layout>
    </>
  )
}
