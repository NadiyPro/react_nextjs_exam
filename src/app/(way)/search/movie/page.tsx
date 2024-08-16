import React from 'react';
import {ISearchPageResult} from "@/models/ISearch";
import {baseImg, getSearchPage} from "@/servise/api.servise";
import style from "@/moduleCSS/style.module.css";
import Link from "next/link";
interface ISearchProps{
    searchParams:{
        query?:string
        page?:number
    }
}
const MovieSearchPage = async ({searchParams: {query,page}}:ISearchProps) => {
    const pageSearch = page? +page : 1;
    const search:ISearchPageResult[] | string = query? await getSearchPage(query,pageSearch) as ISearchPageResult[] : 'There are no search results for your request';
    // const pageSearch:ISearchPageResult[] | string = query? await getSearchPage(query) as ISearchPageResult[] : 'There are no search results for your request';
    // let paginationPrev:string = query? `/search/movie?query=${query}&page=${page > 1 ? page - 1 : 1}` : `/discover/movie?page=${page > 1 ? page - 1 : 1}`
    // let paginationNext:string = query? `/search/movie?query=${query}&page=${page < 1 ? 1 : +page + 1}` : `/discover/movie?page=${page < 1 ? 1 : +page + 1}`
console.log(search)

    return (
        <div>
            <div className={style.div_search}>
                <form method={'GET'} action={'/search/movie'}>
                    <label><input type={"text"} name={'query'} placeholder={'Enter the name of the movie'}/></label>
                    <button type={'submit'}>Search</button>
                </form>
            </div>
            <div className={style.div_inner_MoviesPage}>
                {Array.isArray(search) ?
                    search.map(value => <div key={value.id} className={style.div_img_title}>
                        {/* eslint-disable-next-line @next/next/no-img-element */}
                        <Link href={`/movie/${value.id}`}><img className={style.img_title}
                                                               src={baseImg + value.poster_path} alt={'image'}/></Link>
                        <div className={style.p_MoviesPage}><p>{value.title}</p></div>
                    </div>) : <div><p>There are no search results for your request</p></div>
                }
            </div>
            <div>
                <button className={style.button_pagination}>
                    <Link href={`/search/movie?query=${query}&page=${pageSearch > 1 ? pageSearch - 1 : 1}`}>Prev {pageSearch > 1 ? pageSearch - 1 : 1}</Link>
                </button>
                {page}
                <button className={style.button_pagination}>
                    <Link href={`/search/movie?query=${query}&page=${pageSearch < 1 ? 1 : +pageSearch + 1}`}>Next {pageSearch < 1 ? 1 : +pageSearch + 1}</Link>
                </button>
                <button className={style.button_pagination}>
                    <Link href={'/discover/movie?page=1'}>Home</Link>
                </button>

            </div>
        </div>
    );
};

export default MovieSearchPage;