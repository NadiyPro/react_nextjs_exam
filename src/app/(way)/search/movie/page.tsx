import React from 'react';
import {ISearchPageResult} from "@/models/ISearch";
import {baseImg, getSearchPage} from "@/servise/api.servise";
import '@/moduleCSS/globals.css';
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
    const search:ISearchPageResult[] | string = query? await getSearchPage(query,pageSearch) as ISearchPageResult[] : 'No movies were found for your request. Please change your search parameters and try again.';
console.log(search)

    return (
        <div className='div_MovieSearchPage'>
            <FormComponent/>
            <div className='div_inner_MovieSearchPage'>
                {Array.isArray(search)  && search.length > 0 ?
                    search.map(value =>
                        <div key={value.id} className='div_img_title_MovieSearchPage'>
                            <div key={value.id} >
                                {/* eslint-disable-next-line @next/next/no-img-element */}
                                <Link href={`/movie/${value.id}`}><img className='img_title'
                                                                       src={baseImg + value.poster_path}
                                                                       alt={'image'}/></Link>
                                <div>
                                    <Link href={`/movie/${value.id}`} className='div_Lint_title_MovieSearchPage'>
                                        <p className='p_MovieSearchPage'>{value.title}</p>
                                    </Link>
                                </div>
                            </div>
                            <div>
                                <StarRating rating={3}/>
                            </div>
                        </div>)
                    :
                    <div className='div_error_MovieSearchPage'>
                        <div>
                            <img className='img_MovieSearchPage'
                                 src={'https://stickeryouwant.com.ua/src/apps/admin/files/product-photo-1604871456343.png'} alt={'img'}/>
                        </div>
                        <div>
                            <h3 className='h3_error_div_error_MovieSearchPage'>No movies were found for your request. </h3>
                            <h3 className='h3_error_div_error_MovieSearchPage'> Please change your search parameters and try again.</h3>
                        </div>
                    </div>
                }
            </div>
            <div className='div_button_MovieSearchPage'>
                <button  className='button_pagination_MovieSearchPage'>
                    <Link href={`/search/movie?query=${query}&page=${pageSearch > 1 ? pageSearch - 1 : 1}`} className='style.p_MovieSearchPage'>
                        Prev {pageSearch > 1 ? pageSearch - 1 : 1}</Link>
                </button>
                <h2>{page}</h2>
                <button className='button_pagination_MovieSearchPage'>
                <Link href={`/search/movie?query=${query}&page=${pageSearch < 1 ? 1 : +pageSearch + 1}`} className='style.p_MovieSearchPage'>
                        Next {pageSearch < 1 ? 1 : +pageSearch + 1}</Link>
                </button>
                <button className='button_pagination_MovieSearchPage' >
                    <Link href={'/discover/movie?page=1'} className='style.p_MovieSearchPage'>
                        Home
                    </Link>
                </button>

            </div>
        </div>
    );
};

export default MovieSearchPage;