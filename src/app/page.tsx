import AllMoviesLayout from "@/app/(way)/discover/movie/page";
import React from "react";


const Home =  () => {
    // const movies =  await movieService() as IMovie[];
  return (
      <main>
          {/*<div className={style.div_img_title_next}>*/}
          {/*    <div className={style.div_title}>*/}
          {/*        {*/}
          {/*            movies.map(value => <div key={value.id} className={style.div_img_title}>*/}
          {/*                /!* eslint-disable-next-line @next/next/no-img-element *!/*/}
          {/*                <img className={style.img_title} src={baseImg + value.poster_path} alt={'image'}/>*/}
          {/*                <div className={style.p_style}><p>{value.title}</p></div>*/}
          {/*            </div>)*/}
          {/*        }*/}
          {/*    </div>*/}
          {/*    <div>*/}
          {/*        <Link href={`/discover/movie?page=${page >= 1 ? page - 1 : 1}`}>prev</Link>*/}
          {/*        {page}*/}
          {/*        <Link href={`/discover/movie?page=${page + 1}`}>next</Link>*/}
          {/*        /!*<PaginationComponent currentPage={currentPage} />*!/*/}
          {/*    </div>*/}
          {/*</div>*/}
          <AllMoviesLayout/>
      </main>
  );
}
export default Home;