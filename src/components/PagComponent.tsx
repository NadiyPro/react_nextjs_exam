// 'use client';
// import {movieService} from "@/servise/api.servise";
// import {useSearchParams} from "next/navigation";
// import React, {useEffect, useState} from "react";
// import {IPageMovie} from "@/models/IPageMovie";
//
// const PagComponent =  () => {
//     const [query, setQuery] = useSearchParams();
//     const [moviePage, setMoviePage] = useState<IPageMovie[]> ([]);
//     useEffect(() => {
//         const currentPage = +(query.get('page')) || 1;
//         movieService(currentPage).then(value => {
//             setMoviePage(value)
//             console.log(value)
//         })
//     }, [query]);
//     return (
//         <div>
//             <button onClick={() => {
//                 const page = +(query.get('page')) || 1;
//                 if (page) {
//                     let currentPage = +page;
//                     currentPage++;
//                     setQuery({page: currentPage})
//                 }
//             }}>Next
//             </button>
//         </div>
//     );
// };
//
// export default PagComponent;