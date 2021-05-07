import Thumbnail from "./Thumbnail"

const Results = ({results}: IndexProps) => {
    return (<div>
        {results.map(result => {
            return <Thumbnail results={result}/>
        })}
    </div>)
}

export default Results