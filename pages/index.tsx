import Link from 'next/link'
import Head from 'next/head'
import Header from '../components/Header'

const IndexPage = () => (
  <>
    <Head>
      <title>Hulu clone</title>
    </Head>

      <Header/>

    <h1>The Home page</h1>
    <p>
      <Link href="/about">
        <a>Go to About page</a>
      </Link>
    </p>
  </>
)

export default IndexPage
