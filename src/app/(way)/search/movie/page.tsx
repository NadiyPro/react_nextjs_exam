import React from 'react';
import {ISearchPageResult} from "@/models/ISearch";
import {baseImg, getSearchPage} from "@/servise/api.servise";
import style from "@/moduleCSS/style.module.css";
import Link from "next/link";
import StarRating from "@/component/stars/Stars";
import FormComponent from "@/component/FormComponent";
interface ISearchProps{
    searchParams:{
        query?:string
        page?:number
    }
}
const MovieSearchPage = async ({searchParams: {query,page}}:ISearchProps) => {
    const pageSearch:number = page? +page : 1;
    const search:ISearchPageResult[] | string = query? await getSearchPage(query,pageSearch) as ISearchPageResult[] : 'There are no search results for your request';
console.log(search)

    return (
        <div className={style.div_MoviesPage}>
            <FormComponent/>
            <div className={style.div_inner_MoviesPage}>
                {Array.isArray(search) ?
                    search.map(value =>
                        <div key={value.id} className={style.div_img_title}>
                            <div key={value.id} >
                                {/* eslint-disable-next-line @next/next/no-img-element */}
                                <Link href={`/movie/${value.id}`}><img className={style.img_title}
                                                                       src={baseImg + value.poster_path}
                                                                       alt={'image'}/></Link>
                                <div>
                                    <Link href={`/movie/${value.id}`} className={style.Link_MoviesPage}>
                                        <p className={style.p_MoviesPage}>{value.title}</p>
                                    </Link>
                                </div>
                            </div>
                            <div>
                                <StarRating rating={3}/>
                            </div>
                        </div>)
                    :
                    <div><p>There are no search results for your request</p></div>
                }
            </div>
            <div className={style.div_button_MoviesPage}>
                <button className={style.button_pagination}>
                    <Link href={`/search/movie?query=${query}&page=${pageSearch > 1 ? pageSearch - 1 : 1}`} className={style.p_MoviesPage}>
                        Prev {pageSearch > 1 ? pageSearch - 1 : 1}</Link>
                </button>
                <h2>{page}</h2>
                <button className={style.button_pagination}>
                <Link href={`/search/movie?query=${query}&page=${pageSearch < 1 ? 1 : +pageSearch + 1}`} className={style.p_MoviesPage}>
                        Next {pageSearch < 1 ? 1 : +pageSearch + 1}</Link>
                </button>
                <button className={style.button_pagination}>
                    <Link href={'/discover/movie?page=1'} className={style.p_MoviesPage}>
                        Home
                    </Link>
                </button>

            </div>
        </div>
    );
};

export default MovieSearchPage;