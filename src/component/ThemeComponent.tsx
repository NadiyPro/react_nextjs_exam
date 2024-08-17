// 'use client';
// import React, {useState} from 'react';
//
// const ThemeComponent = () => {
//     const [theme, setTheme] = useState<'light' | 'dark'>('light');
//
//     const toggleTheme = () => {
//         setTheme((prevTheme) => (prevTheme === 'light' ? 'dark' : 'light'));
//     };
//
//     return (
//         <div className={theme === 'light' ? styles.lightTheme : styles.darkTheme}>
//             <button onClick={toggleTheme}>
//                 Toggle Theme
//             </button>
//         </div>
//     );
// };
//
// export default ThemeComponent;



/* ThemeToggle.module.css */

// .lightTheme {
//     background-image: url('/images/light-bg.jpg'); /* Path to your light theme background */
//     color: #000;
//     min-height: 100vh;
//     transition: background-image 0.3s ease-in-out;
// }
//
// .darkTheme {
//     background-image: url('/images/dark-bg.jpg'); /* Path to your dark theme background */
//     color: #fff;
//     min-height: 100vh;
//     transition: background-image 0.3s ease-in-out;
// }
//
// button {
//     margin: 20px;
//     padding: 10px 20px;
//     font-size: 16px;
//     cursor: pointer;
// }



// // pages/index.tsx
// import ThemeToggle from '../components/ThemeToggle';
//
// const Home = () => {
//     return (
//         <div>
//             <ThemeToggle />
//             <h1>Welcome to the Theme Toggle Page!</h1>
//         </div>
//     );
// };
//
// export default Home;