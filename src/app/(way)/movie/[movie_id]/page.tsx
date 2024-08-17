import React from 'react';
import {baseImg, getMovieInfo} from "@/servise/api.servise";
import {IMovieInfo} from "@/models/IMovieInfo";
import style from "@/moduleCSS/style.module.css";
import Link from "next/link";
import FormComponent from "@/component/FormComponent";
import StarRating from "@/component/stars/Stars";
import {Badge} from "reactstrap";
import 'bootstrap/dist/css/bootstrap.min.css';
import { AppProps } from 'next/app';

function MyApp({ Component, pageProps }: AppProps) {
    return <Component {...pageProps} />;
}

const MovieInfo = async ({ params }: { params: { movie_id: string } }) => {
    const movie_id:number = +params.movie_id;
    const movie_info:IMovieInfo = await getMovieInfo(movie_id);
    const genres_name = movie_info.genres.map(value =>
                                                    <Link key={value.id} href={{
                                                        pathname: '/discover/movie',
                                                        query: {with_genres: value.id, page: 1}}}>
                                                        <Badge  color="success" pill className="mr-2">
                                                            {value.name}
                                                        </Badge>
                                                    </Link>) as string;
    const production_countries = movie_info.production_countries.map(value => value.name) as string;
    const spoken_languages = movie_info.spoken_languages.map(value => value.name) as string;

    return (
        <div>
            <FormComponent/>
            <div className={style.div_inner_MovieInfo}>
                <div className={style.div_MovieInfo_img}>
                    <div>
                        {/* eslint-disable-next-line @next/next/no-img-element */}
                        <img className={style.img_title} src={baseImg + movie_info.poster_path} alt={'image'}/>
                    </div>
                    <div className={style.div_StarRating}>
                        <StarRating rating={3}/>
                    </div>
                </div>

                <div>
                    <div><h2>{movie_info.title}</h2></div>
                    <div><h5>Genres: {genres_name}</h5></div>
                    <div><h5>Release date: {movie_info.release_date}</h5></div>
                    <div><h5>Production countries: {production_countries}</h5></div>
                    <div><h5>Original language: {movie_info.original_language}</h5></div>
                    <div><h5>Spoken languages: {spoken_languages}</h5></div>
                    <div><h5>Vote count: {movie_info.vote_count} / Vote average: {movie_info.vote_average}</h5></div>
                </div>
            </div>

            <div>
                <div>
                    <h3>{movie_info.tagline}</h3>
                    <p>{movie_info.overview}</p>
                </div>
                <div>
                    <button className={style.button_pagination}>
                        <Link href={`/movie/${movie_id}/videos`}>Video</Link>
                    </button>
                    <button className={style.button_pagination}>
                        <Link href={'/discover/movie?page=1'}>Home</Link>
                    </button>
                </div>
            </div>

        </div>
    );
};

export default MovieInfo;