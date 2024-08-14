import React from "react";
import MoviesPage from "@/app/(way)/discover/movie/page";
import MoviesList from "@/app/(way)/genre/movie/list/page";


const Home =  () => {
  return (
      <div>
          <main>
              <nav>
                  <MoviesList/>
              </nav>
          </main>
          <div>
              <MoviesPage/>
          </div>
      </div>
  );
}
export default Home;