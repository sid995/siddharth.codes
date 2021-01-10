import Head from 'next/head'
import { client } from '@utils/contentfulPosts'
import { BlogParseRender } from '@utils/blogParseRender'
import { Layout } from '@components/layout'
import Link from 'next/link'

export default function Article({ article }) {
  return (
    <>
      <Head>
        <title>{article.fields.title || "Article from Siddharth Kundu"}</title>
      </Head>
      <Layout>
        <div className="max-w-screen-md w-full mx-auto pt-14 flex flex-col flex-auto">
          <div className="px-4 my-4 sm:my-6 md:my-10 sm:px-6 md:px-8">
            <div className="uppercase mb-6 font-semibold tracking-wide text-gray-500 text-sm">
              <Link href="/blog">
                <a>&#8592; Back to blog</a>
              </Link>
            </div>
            {BlogParseRender(article.fields.content)}
          </div>
        </div>
      </Layout>
    </>
  )
}

export async function getStaticPaths() {
  const data = await client.getEntries({
    content_type: 'article'
  })
  const paths = data.items.map(item => ({
    params: { slug: item.fields.slug }
  }))
  return {
    paths: paths,
    fallback: false
  }
}

export async function getStaticProps({ params }) {
  const data = await client.getEntries({
    content_type: 'article',
    'fields.slug': params.slug
  })

  return {
    props: {
      article: data.items[0]
    }
  }
}