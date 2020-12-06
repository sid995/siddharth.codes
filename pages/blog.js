import Head from 'next/head'
import { Layout } from '../components/layout'

export default function Home() {
  return (
    <>
      <Head>
        <title>Articles</title>
      </Head>
      <Layout>
        <div className="w-full py-5 max-w-screen-xl mx-auto flex-1">
          <div className="flex-1">blog page</div>
        </div>
      </Layout>
    </>
  )
}
