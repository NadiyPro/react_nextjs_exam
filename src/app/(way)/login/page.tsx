import React from 'react';
import Link from "next/link";

const LoginPage = () => {
    return (
        <div>
            <form method={'GET'} action={'/search/movie'}>
                <label form="name">Enter your login</label>
                <input type={"text"} name={'name'} placeholder={'Nadia Prosianyk'}
                       required={true}/><sup>*</sup>

                <label form="password">Enter your password</label>
                <input type={"password"} name={'password'} placeholder={'*****'}
                       required={true}/><sup>*</sup>
                <button><Link href={'/discover/movie?page=1'}>Search</Link></button>
            </form>
        </div>
    );
};

export default LoginPage;