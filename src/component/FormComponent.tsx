import React from 'react';
import style from "@/moduleCSS/style.module.css";

const FormComponent = () => {
    return (
        <div className={style.div_search}>
                <form method={'GET'} action={'/search/movie'}>
                    <label><input type={"text"} name={'query'} placeholder={'Enter the name of the movie'}/></label>
                    <button type={'submit'}>Search</button>
                </form>
        </div>
    );
};

export default FormComponent;