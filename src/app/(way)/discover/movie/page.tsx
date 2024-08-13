import React from 'react';
import {movieService} from "@/servise/api.servise";
import {IMovie} from "@/models/IMovie";


const AllMoviesLayout = async () => {
    let movies= await movieService() as IMovie[];

    return (
        <div>
            {
                movies.map(value => <div key={value.id}>{value.id} {value.title}</div>)
            }
        </div>
    );
};

export default AllMoviesLayout;