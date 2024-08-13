'use client';
import React from 'react';
import {baseImg, movieService} from "@/servise/api.servise";
import {IMovie} from "@/models/IMovie";
import {useSearchParams} from "next/navigation";
import PaginationComponent from "@/components/PaginationComponent";
import style from '@/moduleCSS/style.module.css'



const AllMoviesLayout =  async () => {
    const searchParams = useSearchParams();
    const currentPage = +(searchParams.get('page') || 1);
    const movies = await movieService(currentPage) as IMovie[];
    return (
        <div className={style.div_img_title_next}>
            <div className={style.div_title}>
                {
                    movies.map(value => <div key={value.id} className={style.div_img_title}>
                        <img className={style.img_title} src={baseImg + value.poster_path} alt={'image'} />
                        <p>{value.title}</p></div> )
                }
            </div>
           <div>
               <PaginationComponent currentPage={currentPage} />
           </div>
        </div>
    );
};

export default AllMoviesLayout;