import Head from 'next/head'
import {GetServerSideProps} from 'next'

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

export const getServerSideProps:GetServerSideProps = async (context) => {
    const query = context.query.genre

    const request = await fetch()
}
