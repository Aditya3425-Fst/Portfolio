import React from 'react';
import { FaSun, FaMoon } from 'react-icons/fa';
import './Navbar.css';

function Navbar({ toggleDarkMode, darkMode }) {
  return (
    <nav className={`navbar ${darkMode ? 'dark-mode' : 'light-mode'}`}>
      <a
        href="https://drive.google.com/file/d/1m5PZsRH27tzSBxTRX1CRAIQtHW2PeNte/view?usp=drive_link"
         // Path to your resume in the public folder
         target="_blank" // Open in a new tab
        rel="noopener noreferrer" // Security best practice
        download="AdityaKumarTiwari.pdf" // Optional: specify the downloaded file name
        className="resume-link"
      >
        CV
      </a>
      <div className="nav-links">
        <a href="#home">Home</a>
        <a href="#about">Expertise</a>
        <a href="#projects">History</a>
        <a href="#skills">Projects</a>
        <a href="#contact">Contact</a>
        <button
          onClick={toggleDarkMode}
          className="theme-toggle"
          aria-label={darkMode ? 'Switch to light mode' : 'Switch to dark mode'}
        >
          {darkMode ? <FaSun size={20} /> : <FaMoon size={20} />}
        </button>
      </div>
    </nav>
  );
}

export default Navbar;