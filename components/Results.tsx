import { IndexProps, Iresult } from "../interfaces/results"
import Thumbnail from "./Thumbnail"

const Results = ({results}: IndexProps) => {
    return (<div>
        {results.map((result: any) => {
            console.log('result from results', result)
            return <Thumbnail result={result}/>
        })}
    </div>)
}

export default Results