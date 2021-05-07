import { IndexProps, Iresult } from "../interfaces/results"
import Thumbnail from "./Thumbnail"

const Results = ({results}: IndexProps) => {
    return (<div>
        {results.map((result: Iresult) => {
            return <Thumbnail result={result}/>
        })}
    </div>)
}

export default Results