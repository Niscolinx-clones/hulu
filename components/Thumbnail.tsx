import {IThumbnail} from "../interfaces/results"
import Image from 'next/image'
import {BiLike} from 'react-icons/bi'
import React from "react"



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
            <div className='p-2'>
                <p className='truncate max-w-md'>{result.overview}</p>
                <h2>{result.title || result.orginal_name}</h2>
                
            </div>
        </div>
    )
}

export default Thumbnail
