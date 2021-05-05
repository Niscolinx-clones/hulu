import { TmdbRequest } from "../interfaces/requestParams"

const API_KEY = process.env.API_KEY

const request:TmdbRequest =  {
    fetchTrending: {
        title: 'Trending',
        url: `/trending/all/week?api_key=${API_KEY}&language=en-US`
    }
}

export default request