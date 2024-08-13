'use client';

import React, {useEffect, useState} from 'react';
import {usePathname, useSearchParams} from "next/navigation";
import {movieService} from "@/servise/api.servise";
import {IPageMovie} from "@/models/IPageMovie";

const PaginationComponent = ({currentPage:number}) => {
    const searchParams = useSearchParams(); // используем useSearchParams для работы с параметрами URL
    const pathname = usePathname(); // используем usePathname для получения текущего пути
    const [moviePage, setMoviePage] = useState<IPageMovie[] | null>(null);

    useEffect(() => {
        const currentPage = +(searchParams.get('page')) || 1;
        movieService(currentPage).then(value => {
            setMoviePage(value);
        });
    }, [searchParams]);

    const handlePageChange = (page: number) => {
        const params = new URLSearchParams(searchParams.toString());
        params.set('page', page.toString());
        window.history.pushState({}, '', `${pathname}?${params.toString()}`);
    };

    // const [searchParams, setSearchParams] = useSearchParams();
    // const [moviePage, setMoviePage] = useState<IPageMovie[] > ([]);
    // useEffect(() => {
    //     const currentPage = +(searchParams.get('page')!) || 1;
    //     movieService(currentPage).then(value => {
    //         setMoviePage(value)
    //         return currentPage;
    //     })
    // }, [searchParams]);


    return (
        <div>
            <button onClick={() => {
                const page = +(searchParams.get('page')) || 1;
                handlePageChange(page + 1);
            }}>Next
            </button>

        </div>
    );
};

export default PaginationComponent;