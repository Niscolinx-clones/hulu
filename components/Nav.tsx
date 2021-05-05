import request from "../utils/request"
import {TmdbRequest} from '../interfaces/requestParams'


interface TmdbRequestArray {
    
}
const Nav = () => {
    console.log(Object.entries(request), typeof Object.entries(request))
    return (
        <nav>
            {Object.entries(request).map(([key, {title, url}]) => (
                
                <h2>{title}</h2>
            ))  }
        </nav>
    )
}

export default Nav