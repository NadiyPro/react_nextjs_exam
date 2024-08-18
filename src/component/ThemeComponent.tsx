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

