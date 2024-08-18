import {getGenres} from "@/servise/api.servise";
import {IMovieList} from "@/models/IMovieList";
import React from "react";
import '@/moduleCSS/globals.css';
import Link from "next/link";

const MoviesList = async () => {
    const movieList:IMovieList[] = await getGenres();
    return (
        <div className='div_MoviesList'>
                <div className='h3_genres'>
                    <h2>Genres:</h2>
                </div>
                {movieList.map(value =>
                    <div key={value.id} className='p_MoviesList'>
                        <Link href={{
                            pathname:'/discover/movie',
                            query:{with_genres:value.id,page:1}
                        }} className='Link_genres'>
                            <h4 className='h4_genres'>{value.name}</h4>
                        </Link>
                    </div>
                )}
        </div>


    );
};

export default MoviesList;