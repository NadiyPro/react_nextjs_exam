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
    const video:Result | null = movie_video.length > 0 ? movie_video[0] : null;
    return (
        <div>
            <FormComponent/>
            <div>
                {video ? (
                    <div>
                        <h3>{video.name}</h3>
                        <iframe
                            width="560"
                            height="315"
                            src={`https://www.youtube.com/embed/${video.key}`}
                            title={video.name}
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                            allowFullScreen
                        ></iframe>
                    </div>
                ) : (
                    <p>No videos available</p>
                )}
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