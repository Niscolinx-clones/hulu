import Head from 'next/head'
import { GetServerSideProps } from 'next'
import { AppProps } from 'next/app'


import Header from '../components/Header'
import Nav from '../components/Nav'
import Results from '../components/Results'
import requests from '../utils/request'

const IndexPage = (props: AppProps) => {
    console.log(props)
    return (
        <>
            <Head>
                <title>Hulu clone</title>
            </Head>

            <Header />

            <Nav />

            <Results />
        </>
    )
}

export default IndexPage

export const getServerSideProps: GetServerSideProps = async (context) => {
    const genre:string | []s = context.query.genre

    const request = await fetch(
        `https://api.themoviedb.org/3${
            requests[genre]?.url || requests.fetchTrending.url
        }`
    ).then((res) => res.json())

    return {
        props: {
            results: request.results,
        },
    }
}
