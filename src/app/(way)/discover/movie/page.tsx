import React from 'react';

import PagComponent from "@/components/PagComponent";
import {movieService} from "@/servise/api.servise";
import {IMovie} from "@/models/IMovie";


const AllMoviesLayout =  async ({page:number}) => {
    let movies= await movieService(1) as IMovie[];
    return (
        <div>
            {
                movies.map(value => <div key={value.id}>{value.id} {value.title}</div>)
            }
            <PagComponent/>
        </div>
    );
};

export default AllMoviesLayout;