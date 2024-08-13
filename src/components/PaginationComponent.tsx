'use client';

import React, {useEffect, useState} from 'react';
import {useSearchParams} from "next/navigation";
import {movieService} from "@/servise/api.servise";
import {IPageMovie} from "@/models/IPageMovie";

const PaginationComponent = ({currentPage:number}) => {
    const [searchParams, setSearchParams] = useSearchParams();
    const [moviePage, setMoviePage] = useState<IPageMovie[] > ([]);
    useEffect(() => {
        const currentPage = +(searchParams.get('page')!) || 1;
        movieService(currentPage).then(value => {
            setMoviePage(value)
            return currentPage;
        })
    }, [searchParams]);


    return (
        <div>
            <button onClick={() => {
                const page = +(searchParams.get('page')) || 1;
                if (page) {
                    setSearchParams({ page: (page + 1).toString() });
            }}}>Next
            </button>

        </div>
    );
};

export default PaginationComponent;