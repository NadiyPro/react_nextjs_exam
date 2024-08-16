// import React from 'react';
// import { Badge } from 'reactstrap';
//
// const Badge = () => {
//     return (
//         <div>
//
//         </div>
//     );
// };
//
// export default Badge;
//
// const GenreBadges: React.FC<> = ({ genres }) => {
//     return (
//         <div>
//             {genres.map((genre) => (
//                 <Badge
//                     key={genre.id}
//                     color="primary"
//                     className="rounded-md mr-2 px-4 py-1 bg-amber-500 dark:bg-white hover:bg-amber-600 dark:hover:bg-[#b4b4b4] text-black dark:text-black"
//                     style={{ cursor: 'pointer' }}
//                     onClick={() => {
//                         window.location.href = /genres/${genre.id}?genre=${genre.name.toLowerCase()};
//                     }}
//                 >
//                     {genre.name}
//                 </Badge>
//             ))}
//         </div>
//     );
// };
//
