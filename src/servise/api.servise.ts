import {IPageMovie} from "@/models/IPageMovie";
import {IMovieList} from "@/models/IMovieList";
import {IMovieInfo} from "@/models/IMovieInfo";
import {Result} from "@/models/IVideo";
import {ISearch} from "@/models/ISearch";


const base:string = 'https://api.themoviedb.org/3'; // базова для всіх окрім малюнків
const baseImg:string = 'https://image.tmdb.org/t/p/w500'; // базова для малюнків

const options = {
    method: 'GET',
    headers: {
        accept: 'application/json',
        Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIzN2Q1YmZmNjQ5ZmExODBmMzc3MTNjN2FjMzA0OWFhNCIsIm5iZiI6MTcyMzQ5Mzc2Ny4xNzkzNjEsInN1YiI6IjY2YmEyM2Y0MWNmNzA2OTIwMmI3NjJjNSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.aerB6h7L4ri-kq_pATHn79WpPMZIsmrVgln9iNkWJ9U'
    }
};

const getMovies = async (page:number):Promise<IPageMovie[]> => {
    let movies = await fetch(base +`/discover/movie?page=${page}`, options)
        .then(response => response.json())
    return movies.results;
}

const getGenres = async ():Promise<IMovieList[]> => {
    let movieList = await fetch(base +`/genre/movie/list`, options)
        .then(response => response.json())
    return movieList.genres;
}
const getGenresCard = async (with_genres:string,page:number):Promise<IPageMovie[]> => {
    let with_genres_rend = await fetch(base +`/discover/movie?with_genres=${with_genres}&page=${page}`, options)
        .then(response => response.json())
    return with_genres_rend.results;
}

const getMovieInfo = async (movie_id:number):Promise<IMovieInfo> => {
    let [movieInfo] = await Promise.all([fetch(base + `/movie/${movie_id}`, options)
        .then(response => response.json())])
    return movieInfo;
}

const getSearch= async (query:string):Promise<ISearch[]> => {
    let search_get = await fetch(base + `/search/keyword?query=${query}`, options)
        .then(response => response.json())
    console.log(search_get.results)
    return search_get.results;
}
const getSearchPage= async (query:string,page:number):Promise<ISearch[]> => {
    let search_get = await fetch(base + `/search/keyword?query=${query}&page=${page}`, options)
        .then(response => response.json())
    console.log(search_get.results)
    return search_get.results;
}


const getVideo = async (movie_id:number):Promise<Result[]> => {
    let [movieVideo] = await Promise.all([fetch(base + `/movie/${movie_id}/videos`, options)
        .then(response => response.json())])
    return movieVideo.results;
}


export {
    getMovies,
    baseImg,
    getGenres,
    getGenresCard,
    getMovieInfo,
    getVideo,
    getSearch,
    getSearchPage
}