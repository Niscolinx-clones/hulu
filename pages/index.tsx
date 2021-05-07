import Head from 'next/head'
import { GetServerSideProps } from 'next'

import Header from '../components/Header'
import Nav from '../components/Nav'
import Results from '../components/Results'
import requests from '../utils/request'



interface Iresult {
    [key: string]: string | number | boolean | Array<string> | Array<number>
}
interface IndexProps {
    results: Array<Iresult>
}

const IndexPage = ({results}: IndexProps) => {
   
    return (
        <>
            <Head>
                <title>Hulu clone</title>
            </Head>

            <Header />

            <Nav />

            <Results results={results}/>
        </>
    )
}

export default IndexPage



export const getServerSideProps: GetServerSideProps = async (context) => {

    const genre = context.query.genre

    const request = await fetch(
        `https://api.themoviedb.org/3${
            requests[genre as keyof typeof requests]?.url || requests.fetchTrending.url
        }`
    ).then((res) => res.json())

    return {
        props: {
            results: request.results,
        },
    }
}
