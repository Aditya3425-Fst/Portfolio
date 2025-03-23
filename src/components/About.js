import React from 'react';
import { FaCode, FaServer, FaLaptopCode } from 'react-icons/fa';
import { SiGeeksforgeeks } from 'react-icons/si';
import './About.css';

function About({ darkMode }) {
  return (
    <section id="about" className={`about-section ${darkMode ? 'dark-mode' : 'light-mode'}`}>
      <h2>Expertise</h2>
      <div className="expertise-container">
        {/* Frontend Developer */}
        <div className="expertise-card">
          <FaCode size={50} className="expertise-icon" />
          <h3>Frontend Developer</h3>
          <p>
            I specialize in crafting responsive and interactive user interfaces using modern frontend technologies. My focus is on creating seamless user experiences with clean and efficient code.
          </p>
          <p className="tech-stack-label">Tech stack:</p>
          <div className="tech-stack">
            <span>React</span>
            <span>JavaScript</span>
            <span>HTML5</span>
            <span>CSS3</span>
            <span>SASS</span>
            <span>Tailwind CSS</span>
            <span>Redux</span>
            <span>Webpack</span>
            <span>Figma</span>
          </div>
        </div>

        {/* Backend Developer */}
        <div className="expertise-card">
          <FaServer size={50} className="expertise-icon" />
          <h3>Backend Developer</h3>
          <p>
            I build robust and scalable server-side applications, focusing on APIs, databases, and server logic to ensure smooth functionality and data management.
          </p>
          <p className="tech-stack-label">Tech stack:</p>
          <div className="tech-stack">
            <span>Node.js</span>
            <span>Express</span>
            <span>SQL</span>
            <span>PostgreSQL</span>
            <span>MongoDB</span>
            <span>REST APIs</span>
            <span>Postman</span>
          </div>
        </div>

        {/* Full Stack Developer */}
        <div className="expertise-card">
          <FaLaptopCode size={50} className="expertise-icon" />
          <h3>Full Stack Developer</h3>
          <p>
            I combine frontend and backend expertise to deliver end-to-end web solutions, ensuring seamless integration and a cohesive development process.
          </p>
          <p className="tech-stack-label">Tech stack:</p>
          <div className="tech-stack">
            <span>React</span>
            <span>JavaScript</span>
            <span>Python</span>
            <span>SQL</span>
            <span>PostgreSQL</span>
            <span>Node.js</span>
            <span>AWS</span>
            <span>Git</span>
            <span>Docker</span>
          </div>
        </div>
      </div>

      {/* Coding Profiles Section */}
      <div className="coding-profiles-section">
        <h3>Coding Profiles</h3>
        <p>
          I actively solve problems on coding platforms to sharpen my skills and stay competitive in the tech world.
        </p>
        <div className="coding-profiles">
          <a href="https://leetcode.com/adityakumartiwari" target="_blank" rel="noopener noreferrer">
            <FaCode /> LeetCode
          </a>
          <a href="https://www.geeksforgeeks.org/user/adityakumartiwari" target="_blank" rel="noopener noreferrer">
            <SiGeeksforgeeks /> GeeksforGeeks
          </a>
          <a href="https://www.codechef.com/users/adityakumartiwari" target="_blank" rel="noopener noreferrer">
            <FaLaptopCode /> CodeChef
          </a>
        </div>
      </div>
    </section>
  );
}

export default About;