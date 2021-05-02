import Link from 'next/link'

const IndexPage = () => (
  <>
    <title>hello</title>
    <h1>The Home page 👋</h1>
    <p>
      <Link href="/about">
        <a>Go to About page</a>
      </Link>
    </p>
  </>
)

export default IndexPage
