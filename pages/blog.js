import Head from 'next/head'
import { Layout, WidthComp } from '../components/layout'

export default function Home() {
  return (
    <>
      <Head>
        <title>Articles</title>
      </Head>
      <Layout>
        <WidthComp main>
          <div className="flex-1">blog page</div>
        </WidthComp>
      </Layout>
    </>
  )
}
