// DarkModeToggle.js
import React, { useContext } from 'react';
import '../App.css';
import { DarkModeContext } from './DarkModeContext';

const DarkModeToggle = () => {
  const { darkMode, toggleDarkMode } = useContext(DarkModeContext);

  return (
    <button className={`dark-mode-toggle ${darkMode ? 'dark' : 'light'}`} onClick={toggleDarkMode}>
      {darkMode ? '🌙' : '☀️'}
    </button>
  );
};

export default DarkModeToggle;
