import { Iresult } from "../interfaces/results"
import Image from 'next/image'

const Thumbnail = (props) => {
    console.log(props)

    // const BASE_URL = 'https://image.tmdb.org/t/p/original/'
    
    // return (
    //     <div>
    //         <Image
    //             layout='responsive'
    //             height={1000}
    //             width={1920}
    //             src={`${BASE_URL}${result.backdrop_path || result.poster_path}`}
    //         />
    //     </div>
    // )
    return <p>Thumbnail</p>
}

export default Thumbnail
