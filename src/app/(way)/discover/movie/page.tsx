import React from 'react';
import {baseImg, movieService} from "@/servise/api.servise";
import {IMovie} from "@/models/IMovie";
import style from '@/moduleCSS/style.module.css'
import Link from "next/link";
import {Params} from "next/dist/shared/lib/router/utils/route-matcher";

const AllMoviesLayout =  async ({searchParams}:Params) => {
    console.log(searchParams.page)
    let page = searchParams.page;
    const movies = await movieService(page) as IMovie[];
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
                <Link href={`/discover/movie?page=${page >= 1 ? page - 1 : 1}`}>prev</Link>
                {page}
                <Link href={`/discover/movie?page=${page + 1}`}>next</Link>
                {/*<PaginationComponent currentPage={currentPage} />*/}
            </div>
        </div>
    );
};
export default AllMoviesLayout;