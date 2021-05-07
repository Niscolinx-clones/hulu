const Results = ({results}: IndexProps) => {
    return (<div>
        {results.map(e => {
           return e.title
        })}
    </div>)
}

export default Results