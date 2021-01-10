import Head from 'next/head'
import { Layout } from '../components/layout'
import { client } from '@utils/contentfulPosts'
import Post from '@components/post'

export default function Blog({ posts }) {
  return (
    <>
      <Head>
        <title>Posts::Siddharth Kundu</title>
      </Head>
      <Layout>
        <div className="max-w-screen-md w-full mx-auto pt-14 flex flex-col flex-auto">
          <div className="px-4 my-4 sm:my-6 md:my-10 sm:px-6 md:px-8">
            <p className="text-3xl mb-5 font-bold">Posts</p>
            <p>Candid thoughts about JS, React, Node, everyday experiences and other interesting things</p>
            <div className="flex flex-col mt-2">
              {posts.total !== 0 ? (
                posts.items.map(p => <Post key={p.sys.id} data={p.fields} />)
              ) : <p>No items</p>}
            </div>
          </div>
        </div>
      </Layout>
    </>
  )
}

export async function getStaticProps() {
  const posts = await client.getEntries({
    content_type: 'article'
  })

  return {
    props: {
      posts
    }
  }
}
