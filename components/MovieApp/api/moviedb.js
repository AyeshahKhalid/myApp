import  axios  from "axios";
import { apiKey } from "../constants";

//define endpoints
const apiBaseUrl='https://api.themoviedb.org/3'
const trendngMoviesEndpoint=`${apiBaseUrl}/trending/movie/day?api_key=${apiKey}`
const upcomingMoviesEndpoint=`${apiBaseUrl}/movie/upcoming?api_key=${apiKey}`
const topRatedMoviesEndpoint=`${apiBaseUrl}/movie/top_rated?api_key=${apiKey}`

export const image500="https://image.tmdb.org/t/p/w500/1E5baAaEse26fej7uHcjOgEE2t2.jpg"

const apiCall=async(endpoint,params)=>{
    const options={
        method:"GET",
        url:endpoint,
        params:params?params:{}
    }
    try{
        const response=await axios.request(options)
        return response.data
    }
    catch(err){
        console.log("errorqw",err)
        return {}
    }
}
export const fetchTrendingMovies=()=>{
    return apiCall(trendngMoviesEndpoint)
}
export const fetchUpcomingMovies=()=>{
    return apiCall(upcomingMoviesEndpoint)
}
export const fetchTopRatedMovies=()=>{
    return apiCall(topRatedMoviesEndpoint)
}