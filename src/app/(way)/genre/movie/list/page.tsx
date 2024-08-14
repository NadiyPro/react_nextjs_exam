import {getGenres} from "@/servise/api.servise";
import {IMovieList} from "@/models/IMovieList";
import React from "react";
import style from "@/moduleCSS/style.module.css";
import Link from "next/link";

const MoviesList = async () => {
    const movieList = await getGenres() as IMovieList[];
    console.log(movieList)
    return (
        // <div className={style.div_MoviesList}>
        //     {movieList.map(value =>
        //         <div key={value.id}>
        //             <p className={style.p_MoviesList}>{value.name}</p>
        //         </div>
        //     )}
        // </div>
        <div className={style.div_MoviesList}>
            <div>
                {movieList.map(value =>
                    <div key={value.id} className={style.p_MoviesList}>
                        <Link href={`/movie/${value.id}/changes`}>{value.name}</Link>
                    </div>
                )}
            </div>
        </div>


    );
};

export default MoviesList;