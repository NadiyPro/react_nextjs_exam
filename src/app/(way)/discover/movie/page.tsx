import React from 'react';
import {baseImg, getGenresCard, getMovies} from "@/servise/api.servise";
import '@/moduleCSS/globals.css'
import Link from "next/link";
import {IMovie} from "@/models/IPageMovie";
import FormComponent from "@/component/FormComponent";
import StarRating from "@/component/stars/Stars";
interface IProps{
    searchParams:{
        page?:number
        with_genres?:string
    }
    movies:IMovie[]
}
const MoviesPage =  async ({searchParams: {page, with_genres}}:IProps) => {
    const movies:IMovie[] = with_genres? await getGenresCard(with_genres, +page) as IMovie[] : await getMovies(+page) as IMovie[]
    const paginationPrev:string = with_genres? `/discover/movie?with_genres=${with_genres}&page=${page > 1 ? page - 1 : 1}` : `/discover/movie?page=${page > 1 ? page - 1 : 1}`
    const paginationNext:string = with_genres? `/discover/movie?with_genres=${with_genres}&page=${page < 1 ? 1 : +page + 1}` : `/discover/movie?page=${page < 1 ? 1 : +page + 1}`

    return (
        <div className='div_MoviesPage'>
            <FormComponent/>
            <div className='div_inner_MoviesPage'>
                {movies &&
                    movies.map(value =>
                        <div key={value.id} className='div_img_title'>
                            <div key={value.id}>
                                {/* eslint-disable-next-line @next/next/no-img-element */}
                                <Link href={`/movie/${value.id}`}><img className='img_title'
                                                                       src={baseImg + value.poster_path}
                                                                       alt={'image'}/></Link>
                                <div>
                                    <Link href={`/movie/${value.id}`} className='Link_MoviesPage'>
                                        <p className='p_MoviesPage'>{value.title}</p>
                                    </Link>
                                </div>
                            </div>
                            <div>
                                <StarRating rating={3}/>
                            </div>
                        </div>)
                }
            </div>
            <div className='div_button_MoviesPage'>
                <button className='button_pagination'>
                    <Link href={paginationPrev} className='p_MoviesPage'>
                        Prev {page > 1 ? page - 1 : 1}
                    </Link>
                </button>
                <h2>{page}</h2>
                <button className='button_pagination'>
                    <Link href={paginationNext} className='p_MoviesPage'>
                        Next {page < 1 ? 1 : +page + 1}
                    </Link>
                </button>
                <button className='button_pagination'>
                    <Link href={'/discover/movie?page=1'} className='p_MoviesPage'>
                        Home
                    </Link>
                </button>

            </div>
        </div>
    );
};
export default MoviesPage;