'use client';
import React from 'react';
import {movieService} from "@/servise/api.servise";
import {IMovie} from "@/models/IMovie";
import PaginationComponent from "@/components/PaginationComponent";
import {useSearchParams} from "next/navigation";


const AllMoviesLayout =  async () => {
    const searchParams = useSearchParams();
    const currentPage = +(searchParams.get('page') || 1);
    const movies = await movieService(currentPage) as IMovie[];
    return (
        <div>
            {
                movies.map(value => <div key={value.id}>{value.id} {value.title}</div>)
            }
            <PaginationComponent currentPage={currentPage} />
        </div>
    );
};

export default AllMoviesLayout;