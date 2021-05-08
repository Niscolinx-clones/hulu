import { IndexProps, Iresult } from '../interfaces/results'
import Thumbnail from './Thumbnail'

const Results = ({ results }: IndexProps) => {
    return (
        <div className='px-5 my-10 sm:grid md:grid-cols-2 lg:grid-cols-3 xl'>
            {results.map((result: Iresult, key: number) => {
                return <Thumbnail key={key} result={result} />
            })}
        </div>
    )
}

export default Results
