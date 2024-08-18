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



// const ThemeToggle = () => {
//     let root = document.querySelector(':root');
//     let button = document.querySelector('#themToggle');
//
//     button.addEventListener('click', () => {
//       event.preventDefault();
//       root.classList.toggle('dark');
//       if(themToggle.textContent === 'color'){
//           themToggle.textContent === 'dark';}
//       else{
//           themToggle.textContent === 'color'
//       }
//
//     })
//     return (
//         <div>
//
//         </div>
//     );
// };
//
// export default ThemeToggle;
//

'use client';
import React, { useEffect, useState } from 'react';

const ThemeToggle: React.FC = () => {
    const [isDarkTheme, setIsDarkTheme] = useState<boolean>(false);

    useEffect(() => {
        const savedTheme = localStorage.getItem('theme');
        if (savedTheme === 'dark') {
            setIsDarkTheme(true);
        }
    }, []);

    useEffect(() => {
        document.body.classList.toggle('dark-theme', isDarkTheme);
        localStorage.setItem('theme', isDarkTheme ? 'dark' : 'light');
    }, [isDarkTheme]);

    const handleToggle = () => {
        setIsDarkTheme(prevTheme => !prevTheme);
    };

    return (
        <button onClick={handleToggle}>
            {isDarkTheme ? 'Switch to Light Theme' : 'Switch to Dark Theme'}
        </button>
    );
};

export default ThemeToggle;

