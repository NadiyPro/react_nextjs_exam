import React from 'react';
import {Params} from "next/dist/shared/lib/router/utils/route-matcher";
import {getMovieInfo} from "@/servise/api.servise";
import {IMovieInfo} from "@/models/IMovieInfo";

const MovieInfo = async ({searchParams}:Params) => {
    let movie_id = +searchParams.id;
    let movie_info = await getMovieInfo(movie_id) as IMovieInfo;
    // console.log(movie_info.title)

    return (
        <div>
            {
                <div>{ movie_info.title}</div>
                // movie_info.genres.map(value => <div key={value.id}>{value.name}</div>)
            }
        </div>
    );
};

export default MovieInfo;