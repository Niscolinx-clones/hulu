import {IThumbnail} from "../interfaces/results"
import Image from 'next/image'



const Thumbnail = ({ result }: IThumbnail) => {

    const BASE_URL = 'https://image.tmdb.org/t/p/original/'
    
    return (
        <div>
            <Image
                layout='responsive'
                height={1000}
                width={1920}
                src={`${BASE_URL}${result.backdrop_path || result.poster_path}`}
            />
        </div>
    )
    return <p>Thumbnail</p>
}

export default Thumbnail
