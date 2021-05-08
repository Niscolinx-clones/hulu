import { IndexProps, Iresult } from '../interfaces/results'
import Thumbnail from './Thumbnail'

const Results = ({ results }: IndexProps) => {
    return (
        <div className='px-5 my-10 sm:grid md:grid-cols-2'>
            {results.map((result: Iresult) => {
                return <Thumbnail hello={'helllo'} result={result} />
            })}
        </div>
    )
}

export default Results
