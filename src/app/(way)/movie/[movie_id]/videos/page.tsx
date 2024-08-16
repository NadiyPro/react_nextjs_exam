import React from 'react';
import {getVideo} from "@/servise/api.servise";
import {Result} from "@/models/IVideo";
import style from "@/moduleCSS/style.module.css";
import Link from "next/link";
import FormComponent from "@/component/FormComponent";
import StarRating from "@/component/stars/Stars";

const VideosPage = async ({ params }: { params: { movie_id: string }}) => {
    const movie_id:number = +params.movie_id;
    const movie_video:Result[]= await getVideo(+movie_id);
    const name:string[]=  movie_video.map(value => value.name);
    const key:string[] =  movie_video.map(value => value.key);
    const nameRang:string[]=  name.map(value => value);
    const keyRang:string[] =  key.map(value => value);

    return (
        <div>
            <FormComponent/>
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
                <div>
                    <StarRating rating={3}/>
                </div>
                <div>
                    <button className={style.button_pagination}>
                        <Link href={`/movie/${movie_id}`}>Back</Link>
                    </button>
                    <button className={style.button_pagination}>
                        <Link href={'/discover/movie?page=1'}>Home</Link>
                    </button>
                </div>
            </div>
        </div>
    );
};

export default VideosPage;