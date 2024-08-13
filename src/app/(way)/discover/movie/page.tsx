import React from 'react';
import PaginationComponent from "@/components/PaginationComponent";

const AllMoviesLayout = async ()  => {
    // let movie = await movieService();
    return (
        <div>
            {/*{*/}
            {/*    movie.map(value => <div key={value.id}>id:{value.id} title:{value.title}</div>)*/}
            {/*}*/}
            <PaginationComponent/>
        </div>
    );
};

export default AllMoviesLayout;