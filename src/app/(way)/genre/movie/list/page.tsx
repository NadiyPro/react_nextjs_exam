import {getGenres} from "@/servise/api.servise";
import {IMovieList} from "@/models/IMovieList";
import React from "react";
import style from "@/moduleCSS/style.module.css";

const MoviesList = async () => {
    const movieList = await getGenres() as IMovieList[];
    console.log(movieList)
    return (
        <div>
            {movieList.map(value =>
                <div key={value.id}><p>{value.name}</p></div>
            )}
        </div>
    );
};

export default MoviesList;