import React from 'react';
import {baseImg, getMovies} from "@/servise/api.servise";
import {IMovie} from "@/models/IMovie";
import style from '@/moduleCSS/style.module.css'
import Link from "next/link";
import {Params} from "next/dist/shared/lib/router/utils/route-matcher";

const AllMoviesLayout =  async ({searchParams}:Params | null) => {
   console.log(searchParams)
    let page = searchParams? searchParams.page : 1;
    const movies = await getMovies(page) as IMovie[];
    return (
        <div className={style.div_img_title_next}>
            <div className={style.div_title}>
                {
                    movies.map(value => <div key={value.id} className={style.div_img_title}>
                        {/* eslint-disable-next-line @next/next/no-img-element */}
                       <img className={style.img_title} src={baseImg + value.poster_path} alt={'image'} />
                        <div className={style.p_style}><p>{value.title}</p></div>
                    </div>)
                }
            </div>
            <div>
                <button className={style.button_pagination}>
                    <Link href={`/discover/movie?page=${page >= 1 ? page - 1 : 1}`}>prev</Link>
                </button>{page}<button className={style.button_pagination}>
                    <Link href={`/discover/movie?page=${page <= 1 ? 1 : +page + 1}`}>next</Link>
                </button>
            </div>
        </div>
    );
};
export default AllMoviesLayout;