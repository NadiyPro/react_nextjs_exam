import React from 'react';
import style from "@/moduleCSS/style.module.css";

const FormComponent = () => {
    return (
        <div className={style.div_search}>
            <div>
                <form method={'GET'} action={'/search/movie'}>
                    <label><input type={"text"} name={'query'} placeholder={'Enter the name of the movie'}/></label>
                    <button type={'submit'}>Search</button>
                </form>
            </div>
            <div>
                <div>
                    <img src="https://cdn-icons-png.flaticon.com/512/1144/1144760.png" width={30} height={30}/>
                </div>
                <div>

                </div>
            </div>

        </div>
    );
};

export default FormComponent;