import React from 'react';
import {getSearch} from "@/servise/api.servise";
import {ISearch} from "@/models/ISearch";
import MoviesPage from "@/app/(way)/discover/movie/page";
interface ISearchProps{
    searchParams:{
        query?:string
    }
}

const SearchPage = async ({searchParams: {query}}:ISearchProps) => {
    const search:ISearch[] | string = query? await getSearch(query) : 'There are no search results for your request';
    const searchRend:ISearch[] | string = Array.isArray(search)? search.map(value => value) : 'There are no search results for your request';
    console.log(searchRend)
    return (
        <div>
            {Array.isArray(searchRend) ? (
                <MoviesPage searchParams={{ query }} movies={[]} />
            ) : (
                <p>{searchRend}</p>
            )}
            {/*<div className={style.div_search}>*/}
            {/*    <form action={getSearch}>*/}
            {/*        <label><input type={"text"} name={'query'} placeholder={'Enter the name of the movie'}/></label>*/}
            {/*        <button>Search</button>*/}
            {/*    </form>*/}
            {/*</div>*/}
        </div>
    );
};

export default SearchPage;