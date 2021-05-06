import React from 'react'
import request from '../utils/request'

interface TmdbRequestArray {
    [index: number]: [
        string,
        {
            title: string
            url: string
        }
    ]
}
const Nav = () => {
    return (
        <nav>
            <div className='flex '>
                {Object.entries(request).map(([key, { title, url }]) => (
                    <h2
                        key={key}
                        className='cursor-pointer transition duration-100 transform hover:scale-125 hover:text-white active:text-red-500'
                    >
                        {title}
                    </h2>
                ))}
            </div>
        </nav>
    )
}

export default Nav
