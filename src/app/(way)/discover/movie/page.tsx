'use client';
import React from 'react';
import {baseImg, movieService} from "@/servise/api.servise";
import {IMovie} from "@/models/IMovie";
import {useSearchParams} from "next/navigation";
import PaginationComponent from "@/components/PaginationComponent";



const AllMoviesLayout =  async () => {
    const searchParams = useSearchParams();
    const currentPage = +(searchParams.get('page') || 1);
    const movies = await movieService(currentPage) as IMovie[];
    return (
        <div>
            {
                movies.map(value => <div key={value.id}>
                    <img src={baseImg + value.poster_path} alt={'image'}/>
                    <p>{value.id} {value.title}</p></div> )
            }
            <PaginationComponent currentPage={currentPage} />
        </div>
    );
};

export default AllMoviesLayout;