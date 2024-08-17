import {getGenres} from "@/servise/api.servise";
import {IMovieList} from "@/models/IMovieList";
import React from "react";
import style from "@/moduleCSS/style.module.css";
import Link from "next/link";

const MoviesList = async () => {
    const movieList:IMovieList[] = await getGenres();
    return (
        <div className={style.div_MoviesList}>
            <div> <h5>Genres</h5>
                {movieList.map(value =>
                    <div key={value.id} className={style.p_MoviesList}>
                        <Link href={{
                            pathname:'/discover/movie',
                            query:{with_genres:value.id,page:1}
                        }}>{value.name}</Link>
                    </div>
                )}
            </div>
        </div>


    );
};

export default MoviesList;