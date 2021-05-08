import React from 'react'
import FlipMove from 'react-flip-move'
import { IndexProps, Iresult } from '../interfaces/results'
import Thumbnail from './Thumbnail'


const Results = ({ results }: IndexProps) => {
    return (
        <FlipMove className='px-5 my-10 sm:grid md:grid-cols-2 xl:grid-cols-3 3xl:flex flex-wrap justify-center'>
            {results.map((result: Iresult, key: number) => {
                return <Thumbnail key={result.id} result={result} />
            })}
        </FlipMove>
    )
}

export default Results
