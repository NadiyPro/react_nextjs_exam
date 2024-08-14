import {IPageMovie} from "@/models/IPageMovie";
import {IMovieList} from "@/models/IMovieList";
import MoviesListCard from "@/app/(way)/discover/movie/[id]/changes/page";
import {IMoviesListCard} from "@/models/IMoviesListCard";

const base:string = 'https://api.themoviedb.org/3'; // базова для всіх окрім малюнків
const baseImg:string = 'https://image.tmdb.org/t/p/w500'; // базова для малюнків

const options = {
    method: 'GET',
    headers: {
        accept: 'application/json',
        Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIzN2Q1YmZmNjQ5ZmExODBmMzc3MTNjN2FjMzA0OWFhNCIsIm5iZiI6MTcyMzQ5Mzc2Ny4xNzkzNjEsInN1YiI6IjY2YmEyM2Y0MWNmNzA2OTIwMmI3NjJjNSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.aerB6h7L4ri-kq_pATHn79WpPMZIsmrVgln9iNkWJ9U'
    }
};

const getMovies = async (page:number=1):Promise<IPageMovie[]> => {
    let movies = await fetch(base +`/discover/movie?page=${page}`, options)
        .then(response => response.json())
    return movies.results;
}

const getGenres = async ():Promise<IMovieList[]> => {
    let movieList = await fetch(base +`/genre/movie/list`, options)
        .then(response => response.json())
    return movieList.genres;
}
const getGenresCard = async (id:string):Promise<IMoviesListCard[]> => {
    let movieList = await fetch(base +`/movie/${id}`, options)
        .then(response => response.json())
    console.log(movieList)
    return movieList;
}

export {
    getMovies,
    baseImg,
    getGenres
}