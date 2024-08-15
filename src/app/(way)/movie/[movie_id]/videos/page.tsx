import React from 'react';
import {getVideo} from "@/servise/api.servise";
import {Result} from "@/models/IVideo";
import style from "@/moduleCSS/style.module.css";
import Link from "next/link";

const VideosPage = async ({ params }: { params: { movie_id: string }}) => {
    let movie_id:number = +params.movie_id;
    let movie_video= await getVideo(+movie_id) as Result[];
    let name:string[]=  movie_video.map(value => value.name);
    let key:string[] =  movie_video.map(value => value.key);

    return (
        <div>

            <iframe key={`${key}`}
                    src={`https://www.youtube.com/embed/${key}}`}
                    title = {`${name}`}
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
    );
};

export default VideosPage;