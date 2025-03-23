import React, { useState, useEffect } from 'react';
import { portfolioData } from '../data/portfolioData';
import myPhoto from '../assets/photo.jpeg'; // Import the photo directly from assets
import { FaGithub, FaLinkedin } from 'react-icons/fa'; // Icons
import './Home.css';

function Home({ darkMode }) {
  const titles = ['Backend Developer', 'Full Stack Developer', 'Frontend Developer'];
  const [currentTitleIndex, setCurrentTitleIndex] = useState(0);
  const [displayedText, setDisplayedText] = useState(titles[0]);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const currentTitle = titles[currentTitleIndex];
    let timeout;

    if (isDeleting) {
      if (displayedText.length > 0) {
        timeout = setTimeout(() => {
          setDisplayedText((prev) => prev.slice(0, -1));
        }, 100);
      } else {
        setIsDeleting(false);
        setCurrentTitleIndex((prevIndex) => (prevIndex + 1) % titles.length);
      }
    } else {
      if (displayedText.length < currentTitle.length) {
        timeout = setTimeout(() => {
          setDisplayedText((prev) => currentTitle.slice(0, prev.length + 1));
        }, 100);
      } else {
        timeout = setTimeout(() => {
          setIsDeleting(true);
        }, 1000);
      }
    }

    return () => clearTimeout(timeout);
  }, [displayedText, isDeleting, currentTitleIndex, titles]);

  return (
    <section id="home" className={`home-section ${darkMode ? 'dark-mode' : 'light-mode'}`}>
      <div className="home-content">
        <img src={myPhoto} alt="Aditya" className="my-photo" />
        <div className="text-content">
          <h1 className={darkMode ? 'text-light' : 'text-dark'}>{portfolioData.name}</h1>
          <p className={`${darkMode ? 'text-light' : 'text-dark'} typewriter`}>
            {displayedText}
          </p>
          <div className="social-links">
            <a
              href={portfolioData.github}
              target="_blank"
              rel="noopener noreferrer"
              className={darkMode ? 'text-light' : 'text-dark'}
            >
              <FaGithub size={36} />
            </a>
            <a
              href={portfolioData.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className={darkMode ? 'text-light' : 'text-dark'}
            >
              <FaLinkedin size={36} />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Home;