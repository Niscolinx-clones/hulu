import {IThumbnail} from "../interfaces/results"
import Image from 'next/image'
import {BiLike} from 'react-icons/bi'
import React from "react"



const Thumbnail = ({ result }: IThumbnail) => {

    const BASE_URL = 'https://image.tmdb.org/t/p/original/'
    
    return (
        <div className='group cursor-pointer'>
            <Image
                layout='responsive'
                height={1000}
                width={1920}
                src={`${BASE_URL}${result.backdrop_path || result.poster_path}`}
            />
            <div className='p-2'>
                <p className='truncate max-w-md'>{result.overview}</p>
                <h2 className='mt-1 text-2xl text-white transition-all duration-100 ease-in-out group-hover:font-bold'>{result.title || result.orginal_name}</h2>
                <p className='flex items-center opacity-0 group-hover:opacity-100'>
                    {result.media_type && `${result.media_type} .`}{' '}
                    {result.release_date || result.first_air_date}. {''} <BiLike className='h-5 mx-2'/>{' '}
                    {result.vote_count}
                </p>
            </div>
        </div>
    )
}

export default Thumbnail
