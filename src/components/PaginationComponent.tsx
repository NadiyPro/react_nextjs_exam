// 'use client';
// import React from "react";
//
// const PaginationComponent = ({currentPage}) => {
//
//     return (
//         <div>
//             <button
//                 onClick={() => {
//                     currentPage++;}
//                 }
//             >
//                 next
//             </button>
//             {currentPage}
//             <button
//                 onClick={() => {
//                     currentPage--;}
//                 }
//             >
//                 prev
//             </button>
//         </div>
//     );
// };
//
// export default PaginationComponent;
'use client';
import React from "react";

const PaginationComponent = ({currentPage}) => {

    return (
        <div>
            <button
                onClick={() => {
                    currentPage++;}
                }
            >
                next
            </button>
            {currentPage}
            <button
                onClick={() => {
                    currentPage--;}
                }
            >
                prev
            </button>
        </div>
    );
};

export default PaginationComponent;