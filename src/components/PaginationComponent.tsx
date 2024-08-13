'use client';

import React, {useEffect, useState} from 'react';
import {useSearchParams} from "next/navigation";
import {movieService} from "@/servise/api.servise";
import {IPageMovie} from "@/models/IPageMovie";
import {IMovie} from "@/models/IMovie";

const PaginationComponent = ({currentPage:number}) => {
    const [query, setQuery] = useSearchParams();
    const [moviePage, setMoviePage] = useState<IPageMovie[]> ([]);
    useEffect(() => {
        const currentPage = +(query.get('page')) || 1;
        movieService(currentPage).then(value => {
            setMoviePage(value)
            console.log(value)
        })
    }, [query]);
    return (
        <div>
            <button onClick={() => {
                const page = +(query.get('page')) || 1;
                if (page) {
                    let currentPage = +page;
                    currentPage++;
                    setQuery({page: currentPage})
                }
            }}>Next
            </button>

        </div>
    );
};

export default PaginationComponent;