import React from 'react';
import {baseImg, getGenresCard, getMovies, getSearchPage} from "@/servise/api.servise";
import style from '@/moduleCSS/style.module.css'
import Link from "next/link";
import {IMovie} from "@/models/IPageMovie";
interface IProps{
    searchParams:{
        page?:number
        with_genres?:string
        query?:string
    }
    movies:IMovie[]
}


const MoviesPage =  async ({searchParams: {page, with_genres, query}}:IProps) => {
// let searchQuery:ISearch[] = query? await getSearch(query) : '';
    let movies:IMovie[] = with_genres? await getGenresCard(with_genres, +page) as IMovie[] : await getMovies(+page) as IMovie[] &&
    query? await getSearchPage(query, +page) as IMovie[] : await getMovies(+page) as IMovie[]
    let paginationPrev:string = with_genres? `/discover/movie?with_genres=${with_genres}&page=${page > 1 ? page - 1 : 1}` : `/discover/movie?page=${page > 1 ? page - 1 : 1}`
    let paginationNext:string = with_genres? `/discover/movie?with_genres=${with_genres}&page=${page < 1 ? 1 : +page + 1}` : `/discover/movie?page=${page < 1 ? 1 : +page + 1}`

    return (
        <div className={style.div_MoviesPage}>
            {/*<div className={style.div_search}>*/}
            {/*    <form action={movies}>*/}
            {/*        <label><input type={"text"} name={'query'} placeholder={'Enter the name of the movie'}/></label>*/}
            {/*        <button>Search</button>*/}
            {/*    </form>*/}
            {/*</div>*/}
            <div className={style.div_inner_MoviesPage}>
                {movies &&
                    movies.map(value => <div key={value.id} className={style.div_img_title}>
                        {/* eslint-disable-next-line @next/next/no-img-element */}
                        <Link href={`/movie/${value.id}`}><img className={style.img_title}
                                                               src={baseImg + value.poster_path} alt={'image'}/></Link>
                        <div className={style.p_MoviesPage}><p>{value.title}</p></div>
                    </div>)
                }
            </div>
            <div>
                <button className={style.button_pagination}>
                    <Link href={paginationPrev}>Prev {page > 1 ? page - 1 : 1}</Link>
                </button>
                {page}
                <button className={style.button_pagination}>
                    <Link href={paginationNext}>Next {page < 1 ? 1 : +page + 1}</Link>
                </button>
                <button className={style.button_pagination}>
                    <Link href={'/discover/movie?page=1'}>Home</Link>
                </button>

            </div>
        </div>
    );
};
export default MoviesPage;