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
    console.log(Object.entries(request))
    return (
        <nav>
            {Object.entries(request).map(([key, { title, url }]) => 
                (<p>{title}</p>)
            )}
        </nav>
    )
}

export default Nav
