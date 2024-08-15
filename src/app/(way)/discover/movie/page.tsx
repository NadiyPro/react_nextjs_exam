import React from 'react';
import {baseImg, getGenresCard, getMovies} from "@/servise/api.servise";
import {IMovie} from "@/models/IMovie";
import style from '@/moduleCSS/style.module.css'
import Link from "next/link";
interface IProps{
    searchParams:{
        page?:number
        with_genres?:string
    }
    movies:IMovie[]
}


const MoviesPage =  async ({  searchParams: {page, with_genres}}:IProps) => {

    let movies:IMovie[] = with_genres? await getGenresCard(with_genres, +page) as IMovie[] : await getMovies(+page) as IMovie[]
let paginationPrev = with_genres? `/discover/movie?with_genres=${with_genres}&page=${page > 1 ? page - 1 : 1}` : `/discover/movie?page=${page > 1 ? page - 1 : 1}`
    let paginationNext = with_genres? `/discover/movie?with_genres=${with_genres}&page=${page < 1 ? 1 : +page + 1}` : `/discover/movie?page=${page < 1 ? 1 : +page + 1}`
    return (
        <div className={style.div_MoviesPage}>
            <div className={style.div_inner_MoviesPage}>
                { movies &&
                    movies.map(value => <div key={value.id} className={style.div_img_title}>
                        {/* eslint-disable-next-line @next/next/no-img-element */}
                        <Link href={`/movie/${value.id}`}><img className={style.img_title} src={baseImg + value.poster_path} alt={'image'}/></Link>
                        <div className={style.p_MoviesPage}><p>{value.title}</p></div>
                    </div>)
                }
            </div>
            <div>
                <button className={style.button_pagination}>
                    <Link href={paginationPrev}>prev</Link>
                </button>
                {page}
                <button className={style.button_pagination}>
                    <Link href={paginationNext}>next</Link>
                </button>
                {/*    <button className={style.button_pagination}>*/}
                {/*        <Link href={`/discover/movie?page=${page > 1 ? page - 1 : 1}`}>prev</Link>*/}
                {/*    </button>{page}<button className={style.button_pagination}>*/}
                {/*    <Link href={`/discover/movie?page=${page < 1 ? 1 : +page + 1}`}>next</Link>*/}
                {/*</button>*/}
            </div>
        </div>
    );
};
export default MoviesPage;

