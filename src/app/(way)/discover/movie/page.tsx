import React from 'react';
import {baseImg, movieService} from "@/servise/api.servise";
import {IMovie} from "@/models/IMovie";
import style from '@/moduleCSS/style.module.css'
import PaginationComponent from "@/components/PaginationComponent";

const AllMoviesLayout =  async () => {
    let currentPage:number = 1;
    const movies = await movieService(currentPage) as IMovie[];
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

               <PaginationComponent key={currentPage} currentPage={currentPage}/>

            </div>
        </div>
    );
};

export default AllMoviesLayout;