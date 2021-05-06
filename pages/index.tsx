import Head from 'next/head'
import Header from '../components/Header'
import Nav from '../components/Nav'
import Results from '../components/Results'

const IndexPage = () => (
    <>
        <Head>
            <title>Hulu clone</title>
        </Head>

        <Header />

        <Nav />

        <Results/>
    
    </>
)

export default IndexPage

const getServerSideProps = context => {
    const query = context.query.genre
}
