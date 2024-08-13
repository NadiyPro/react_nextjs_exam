import React from 'react';
import PaginationComponent from "@/components/PaginationComponent";
import {movieService} from "@/servise/api.servise";
import {IMovie} from "@/models/IMovie";
import {IPageMovie} from "@/models/IPageMovie";

interface IProps{
    movieService: IPageMovie[],
    movie: IMovie[]
}
const AllMoviesLayout =  async ()  => {
    let moviePg:IPageMovie[] = await movieService(3);
    return (
        <div>
            {
                moviePg.map(value => <div key={value.id}>id:{value.id} title:{value.title}</div>)
            }
            <PaginationComponent/>
        </div>
    );
};

export default AllMoviesLayout;