import React from 'react';
import style from "@/moduleCSS/style.module.css";
import {getSearch} from "@/servise/api.servise";

const SearchPage = async () => {
    // const query:ISearch[] = await getSearch(search);
    return (
        <div>



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