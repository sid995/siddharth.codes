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
          <div className="flex-1">index page</div>
        </WidthComp>
      </Layout>
    </>
  )
}
