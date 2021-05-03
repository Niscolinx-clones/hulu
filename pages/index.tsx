import Link from 'next/link'
import Head from 'next/head'

const IndexPage = () => (
  <>
    <Head>
      <title>Hulu clone</title>
    </Head>


    <h1>The Home page</h1>
    <p>
      <Link href="/about">
        <a>Go to About page</a>
      </Link>
    </p>
  </>
)

export default IndexPage
