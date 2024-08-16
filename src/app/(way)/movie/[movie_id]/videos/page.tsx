import React from 'react';
import {getVideo} from "@/servise/api.servise";
import {Result} from "@/models/IVideo";
import style from "@/moduleCSS/style.module.css";
import Link from "next/link";

const VideosPage = async ({ params }: { params: { movie_id: string }}) => {
    let movie_id:number = +params.movie_id;
    let movie_video:Result[]= await getVideo(+movie_id);
    let name:string[]=  movie_video.map(value => value.name);
    let key:string[] =  movie_video.map(value => value.key);
    let nameRang:string[]=  name.map(value => value);
    let keyRang:string[] =  key.map(value => value);

    return (
        <div>
            <div className={style.div_search}>
                <form method={'GET'} action={'/search/movie'}>
                    <label><input type={"text"} name={'query'} placeholder={'Enter the name of the movie'}/></label>
                    <button type={'submit'}>Search</button>
                </form>
            </div>
            <div>
                <iframe key={`${keyRang}`}
                        src={`https://www.youtube.com/embed/${keyRang}}`}
                        title={`${nameRang}`}
                        width="560"
                        height="315"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                        referrerPolicy="strict-origin-when-cross-origin"
                        allowFullScreen
                />
                <button className={style.button_pagination}>
                    <Link href={`/movie/${movie_id}`}>Back</Link>
                </button>
                <button className={style.button_pagination}>
                    <Link href={'/discover/movie?page=1'}>Home</Link>
                </button>
            </div>
        </div>
    );
};

export default VideosPage;