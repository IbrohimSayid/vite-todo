import React, { useState, useEffect } from 'react';
import './Mode.css';

function App() {
    const theme = localStorage.getItem('theme') || 'light';

    const [themeMode, setThemeMode] = useState(theme);

    const toggleTheme = () => {
        setThemeMode(themeMode === 'light' ? 'dark' : 'light');
    };

    useEffect(() => {
        document.body.dataset.theme = themeMode;
        localStorage.setItem('theme', themeMode);
    }, [themeMode]);

    return (
        <div>
            <h1>React Dark Mode / Light Mode Demo</h1>
            <button onClick={toggleTheme}>
                {themeMode === 'light' ? 'Qorongu Rejimga Otish' : 'Yoruglik Rejimga Otish'}
            </button>
        </div>
    );
}

export default Mode;
