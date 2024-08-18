import React from 'react';
import '@/moduleCSS/globals.css'
import Link from "next/link";

const FormComponent = () => {
    return (
        <div className='div_search'>
            <div>
                <form method={'GET'} action={'/search/movie'}>
                    <label><input type={"text"} name={'query'} placeholder={'Enter the name of the movie'} className='input_FormComponent'/></label>
                    <button className='button_pagination' type={'submit'}>Search</button>
                </form>
            </div>
            <div className='div_search_login'>
                <div className='div_img_login'>
                    <img src="https://cdn-icons-png.flaticon.com/512/1144/1144760.png" width={30} height={30} alt={'img'}/>
                </div>
                <div>
                    <button className='button_pagination'><Link href={'/login'} className='p_MoviesPage'>Login</Link></button>
                </div>
            </div>

        </div>
    );
};

export default FormComponent;