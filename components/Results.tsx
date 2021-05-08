import { IndexProps, Iresult } from '../interfaces/results'
import Thumbnail from './Thumbnail'

const Results = ({ results }: IndexProps) => {
    return (
        <div className='px-5 my-10 sm:grid'>
            {results.map((result: Iresult) => {
                return <Thumbnail result={result} />
            })}
        </div>
    )
}

export default Results
