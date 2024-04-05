import  axios  from "axios";
import { apiKey } from "../constants";

//define endpoints
const apiBaseUrl='https://api.themoviedb.org/3'
const trendngMoviesEndpoint=`${apiBaseUrl}/trending/movie/day?api_key=${apiKey}`
const upcomingMoviesEndpoint=`${apiBaseUrl}/movie/upcoming?api_key=${apiKey}`
const topRatedMoviesEndpoint=`${apiBaseUrl}/movie/top_rated?api_key=${apiKey}`

// dynamic endpoints

const movieDetailsEndpoint=id=>`${apiBaseUrl}/movie/${id}?api_key=${apiKey}`
const movieCreditsEndpoint=id=>`${apiBaseUrl}/movie/${id}/credits?api_key=${apiKey}`
const similarMovieEndpoint=id=>`${apiBaseUrl}/movie/${id}/similar?api_key=${apiKey}`

export const image500=path=>path?`https://image.tmdb.org/t/p/w500${path}`:null;
export const image342=path=>path?`https://image.tmdb.org/t/p/w342${path}`:null;
export const image185=path=>path?`https://image.tmdb.org/t/p/w185${path}`:null;



export const fallbackMoviePoster ="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRHkA7Q3OlLhnLBLe_nB8ok3NHC7MwX6Y_WL5pTj2atisqp2IpIJd_xAWpNtPlsV-UsOxc&usqp=CAU"
export const fallbackPersonImage ="https://www.idhsustainabletrade.com/content/themes/idh/assets/img/fallback-person.png?x16939&x16939"

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
export const fetchMovieDetails=id=>{
    return apiCall(movieDetailsEndpoint(id))
}
export const fetchMovieCredits=id=>{
    return apiCall(movieCreditsEndpoint(id))
}
export const fetchSimilarMovies=id=>{
    return apiCall(similarMovieEndpoint(id))
}

