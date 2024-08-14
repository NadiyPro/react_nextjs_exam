import React from 'react';
import {Params} from "next/dist/shared/lib/router/utils/route-matcher";
import {IMovie} from "@/models/IMovie";
import {baseImg, getGenresCard} from "@/servise/api.servise";
import style from "@/moduleCSS/style.module.css";
import Link from "next/link";

const MoviesListCard = async ({searchParams}:Params) => {
    let with_genres = searchParams.with_genres;
    let page = searchParams.page;
let with_genres_rend = await getGenresCard(page,with_genres) as IMovie[]
    return (
        <div>
            <div className={style.div_inner_MoviesPage}>
                {
                    with_genres_rend.map(value => <div key={value.id} className={style.div_img_title}>
                        {/* eslint-disable-next-line @next/next/no-img-element */}
                        <img className={style.img_title} src={baseImg + value.poster_path} alt={'image'}/>
                        <div className={style.p_MoviesPage}><p>{value.title}</p></div>
                    </div>)
                }
            </div>
            <div>
                {/*<button className={style.button_pagination}>*/}
                {/*    <Link href={`/discover/movie?include_adult=false&include_video=false&language=en-US&page=${page >= 1 ? page - 1 : 1}&sort_by=popularity.desc&with_genres=${id}`}>prev</Link>*/}
                {/*    /!*<Link href={`/discover/movie?page=${page >= 1 ? page - 1 : 1}&sort_by=popularity.desc`}>prev</Link>*!/*/}
                {/*</button>*/}
                {/*{page}*/}
                {/*<button className={style.button_pagination}>*/}
                {/*    <Link href={`/discover/movie?include_adult=false&include_video=false&language=en-US&page=${page < 1 ? 1 : +page + 1}&sort_by=popularity.desc&with_genres=${id}`}>prev</Link>*/}
                {/*    /!*<Link href={`/discover/movie?page=${page < 1 ? 1 : +page + 1}&sort_by=popularity.desc`}>next</Link>*!/*/}
                {/*</button>*/}
            </div>
        </div>
    );
};

export default MoviesListCard;