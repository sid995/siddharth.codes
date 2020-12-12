import Head from 'next/head'
import { Layout } from '../components/layout'

export default function Home() {
  return (
    <>
      <Head>
        <title>Articles</title>
      </Head>
      <Layout>
        <div className="w-screen max-w-screen-md mx-auto pt-14 flex flex-col flex-auto">
          <div className="flex-1">blog page</div>
        </div>
      </Layout>
    </>
  )
}
