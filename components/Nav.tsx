import React from 'react'
import request from '../utils/request'

interface TmdbRequestArray {
    [index: number]: [
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
            {Object.entries(request).map(([{ title, url }]:[]TmdbRequestArray) => {
                return (<p>{title}</p>)
            })}
        </nav>
    )
}

export default Nav
