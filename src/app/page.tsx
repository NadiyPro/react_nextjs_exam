import React from "react";
import MoviesPage from "@/app/(way)/discover/movie/page";

const Home =  () => {
  return (
      <div>
              <MoviesPage searchParams={{ page: 1 }} movies={[]}/>
      </div>
  );
}
export default Home;