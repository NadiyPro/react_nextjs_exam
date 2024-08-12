import React from 'react';
import {movieService} from "@/servise/api.servise"

const AllMoviesLayout = async ()  => {
    let movie = await movieService();
    return (
        <div>
            {
                movie.map(value => <div key={value.id}>id:{value.id} title:{value.title}</div>)
            }
        </div>
    );
};

export default AllMoviesLayout;