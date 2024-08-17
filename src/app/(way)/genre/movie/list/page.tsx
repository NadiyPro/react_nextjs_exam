import {getGenres} from "@/servise/api.servise";
import {IMovieList} from "@/models/IMovieList";
import React from "react";
import style from "@/moduleCSS/style.module.css";
import Link from "next/link";

const MoviesList = async () => {
    const movieList:IMovieList[] = await getGenres();
    return (
        <div className={style.div_MoviesList}>
            {/*<div>*/}
                <div className={style.h3_genres}>
                    <h2>Genres:</h2>
                </div>
                {movieList.map(value =>
                    <div key={value.id} className={style.p_MoviesList}>
                        <Link href={{
                            pathname:'/discover/movie',
                            query:{with_genres:value.id,page:1}
                        }} className={style.Link_genres}>
                            <h4 className={style.h4_genres}>{value.name}</h4>
                        </Link>
                    </div>
                )}
            {/*</div>*/}
        </div>


    );
};

export default MoviesList;