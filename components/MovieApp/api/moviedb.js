import { Axios } from "axios";
import { apiKey } from "../constants";

//define endpoints
const apiBaseUrl='https://api.themoviedb.org/3'
const trendngMoviesEndpoint=`${apiBaseUrl}/trending/movie/day?api_key=${apiKey}`
const upcomingMoviesEndpoint=`${apiBaseUrl}/trending/movie/upcoming?api_key=${apiKey}`
const topRatedMoviesEndpoint=`${apiBaseUrl}/trending/movie/top_rated?api_key=${apiKey}`