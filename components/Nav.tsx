import request from "../utils/request"

interface TmdbRequestArray {

    title: string
    url: string
    
}
const Nav = () => {
    console.log(Object.entries(request))
    return (
        <nav>
            {Object.entries(request).map(([key, {title, url}]) => (
                
                <h2>{title}</h2>
            ))  }
        </nav>
    )
}

export default Nav