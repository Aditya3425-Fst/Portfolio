import React from 'react';
import { FaGithub, FaLinkedin } from 'react-icons/fa'; // Import GitHub and LinkedIn icons
import './Footer.css';

function Footer() {
  return (
    <footer className="footer-section">
      <div className="footer-content">
        <p>A portfolio designed & built by Aditya Kumar Tiwari with 💜</p>
        <div className="social-link">
          <a
            href="https://github.com/Aditya3425-Fst" // Replace with your GitHub profile
            target="_blank"
            rel="noopener noreferrer"
            className="social-icon"
          >
            <FaGithub />
          </a>
          <a
            href="https://www.linkedin.com/in/adityakt3425/" // Replace with your LinkedIn profile
            target="_blank"
            rel="noopener noreferrer"
            className="social-icon"
          >
            <FaLinkedin />
          </a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;