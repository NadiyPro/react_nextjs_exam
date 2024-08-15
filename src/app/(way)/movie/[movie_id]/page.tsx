import React from 'react';
import {baseImg, getMovieInfo} from "@/servise/api.servise";
import {IMovieInfo} from "@/models/IMovieInfo";
import style from "@/moduleCSS/style.module.css";
import Link from "next/link";

const MovieInfo = async ({ params }: { params: { movie_id: string } }) => {
    let movie_id:number = +params.movie_id;
    let movie_info:IMovieInfo = await getMovieInfo(movie_id);
    let genres_id = movie_info.genres.map(value => value.id) as number;
    let genres_name = movie_info.genres.map(value => <Link key={value.id} href={{
        pathname: '/discover/movie',
        query: {with_genres: value.id, page: 1}
    }}><h5>{value.name}</h5></Link>) as string;
    return (
        <div>
            <div>
                <div>
                    <div>
                        <img className={style.img_title} src={baseImg + movie_info.poster_path} alt={'image'}/>
                    </div>
                    <div>
                        зірки
                    </div>
                </div>

                <div>
                    <div><h2>{movie_info.title}</h2></div>
                    <div>
                        <h5>{genres_name}</h5>
                        {/*<Link href={{*/}
                        {/*    pathname: '/discover/movie',*/}
                        {/*    query: {with_genres: genres_id, page: 1}*/}
                        {/*}}>{genres_name}</Link>*/}
                    </div>
                    <div><h4>release date: {movie_info.release_date}</h4></div>
                    {/*<div><h6>production countries: {movie_info.production_countries}</h6></div>*/}
                    <div><h4>original language: {movie_info.original_language}</h4></div>
                    {/*<div><h6>spoken languages: {movie_info.spoken_languages}</h6></div>*/}
                    <div><h4>vote count: {movie_info.vote_count} vote average: {movie_info.vote_average}</h4></div>
                </div>
            </div>


            <div>
                <h3>{movie_info.tagline}</h3>
                <p>{movie_info.overview}</p>
            </div>

            <div>
                відео
            </div>
        </div>
    );
};

export default MovieInfo;