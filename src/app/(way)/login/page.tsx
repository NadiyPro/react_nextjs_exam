import React from 'react';
import Link from "next/link";
import FormComponent from "@/component/FormComponent";
import style from "@/moduleCSS/style.module.css";

const LoginPage = () => {
    return (
        <div className={style.div_LoginPage_LoginPage}>
            <FormComponent/>
            <div className={style.div_LoginPage}>
                <div>
                    <img className={style.img_LoginPage} src={'https://www.pngall.com/wp-content/uploads/14/Welcome-Background-PNG.png'} alt={'img'}/>
                </div>
                <div>
                    <form className={style.form_LoginPage} method={'GET'} action={'/search/movie'}>
                        <label form="name">Enter your login</label>
                        <input type={"text"} name={'name'} placeholder={'Nadia Prosianyk'}
                               required={true}/>

                        <label form="password">Enter your password</label>
                        <input type={"password"} name={'password'} placeholder={'**********'}
                               required={true}/>
                        <div>
                            <button className={style.button_pagination}>
                                <Link href={'/discover/movie?page=1'} className={style.p_MoviesPage}>
                                    Login
                                </Link>
                            </button>
                            <button className={style.button_pagination}>
                                <Link href={'/discover/movie?page=1'} className={style.p_MoviesPage}>
                                    Home
                                </Link>
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default LoginPage;