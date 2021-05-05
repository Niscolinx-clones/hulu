import request from "../utils/request"
import {TmdbRequest} from '../interfaces/requestParams'

const Nav = () => {
    return (
        <nav>
            {Object.entries(request).map(([key, {title, url}]) => (
                
                <h2>{title}</h2>
            ))  }
        </nav>
    )
}

export default Nav