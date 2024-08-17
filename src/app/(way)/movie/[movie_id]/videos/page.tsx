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
        <div className={style.div_VideosPage}>
            <FormComponent/>
            <div className={style.div_inner_VideosPage}>
                {video ? (
                    <div>
                        <h2>{video.name}</h2>
                        <iframe
                            width="840"
                            height="472"
                            src={`https://www.youtube.com/embed/${video.key}`}
                            title={video.name}
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                            allowFullScreen
                        ></iframe>
                    </div>
                ) : (
                    <div className={style.div_error_MovieSearchPage}>
                        <div>
                            <img className={style.img_MovieSearchPage}
                                 src={'https://stickeryouwant.com.ua/src/apps/admin/files/product-photo-1604871456343.png'}
                                 alt={'img'}/>
                        </div>
                        <div>
                            <h3 className={style.h3_error_div_error_MovieSearchPage}>No videos available</h3>

                        </div>
                    </div>
                    )}
                <div>
                    <StarRating rating={3}/>
                </div>
                <div className={style.div_button_VideosPage}>
                    <button className={style.button_pagination}>
                        <Link className={style.Link_VideosPage} href={`/movie/${movie_id}` }>Back</Link>
                    </button>
                    <button className={style.button_pagination}>
                        <Link className={style.Link_VideosPage} href={'/discover/movie?page=1'}>Home</Link>
                    </button>
                </div>
            </div>
        </div>
    );
};

export default VideosPage;