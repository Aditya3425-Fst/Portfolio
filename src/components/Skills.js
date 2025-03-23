import React, { useEffect, useRef, useState } from 'react';
import { FaGithub } from 'react-icons/fa'; // Import GitHub icon from react-icons
import './Skills.css';

// Placeholder images (replace with actual images)
import filmateImage from '../assets/blog.png'; // Existing image
import highSpeedChaseImage from '../assets/todo.png'; // Existing image
import project3Image from '../assets/techispot.png'; // Placeholder for new project
import project4Image from '../assets/Github-finder.png'; // Placeholder for new project
import project5Image from '../assets/Portfolio.png'; // Placeholder for new project

function Skills() {
  const [isVisible, setIsVisible] = useState(false);
  const skillsRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            console.log('Skills section is visible!'); // Debug log
            setIsVisible(true);
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1 } // Trigger when 10% of the section is visible
    );

    if (skillsRef.current) {
      observer.observe(skillsRef.current);
    }

    return () => {
      if (skillsRef.current) {
        observer.unobserve(skillsRef.current);
      }
    };
  }, []);

  return (
    <section id="skills" className="skills-section" ref={skillsRef}>
      <h2>Personal Projects</h2>
      <div className="projects-container">
        {/* Project 1: Filmate AI */}
        <div className={`project-card ${isVisible ? 'animate' : ''}`} data-delay="0">
          <div className="project-image">
            <img src={filmateImage} alt="Filmate AI" />
          </div>
          <h3>FullStack-Blogging</h3>
          <p>
            Designed and developed a full-stack blogging platform using React for a dynamic frontend, and Node.js with Express for a robust backend. Implemented features like user authentication, post creation, and commenting, with a MongoDB database for efficient data management.
          </p>
          <a
            href="https://github.com/Aditya3425-Fst/fullstack-blogging-platform" // Replace with your GitHub link
            target="_blank"
            rel="noopener noreferrer"
            className="github-link"
          >
            <FaGithub className="github-icon" /> View on GitHub
          </a>
        </div>

        {/* Project 2: High Speed Chase */}
        <div className={`project-card ${isVisible ? 'animate' : ''}`} data-delay="200">
          <div className="project-image">
            <img src={highSpeedChaseImage} alt="High Speed Chase" />
          </div>
          <h3>ToDo</h3>
          <p>
            Built a responsive to-do list application using React, featuring task creation, editing, and deletion with local storage for persistent data. Focused on clean UI and efficient state management.
          </p>
          <a
            href="https://github.com/Aditya3425-Fst/SignUp" // Replace with your GitHub link
            target="_blank"
            rel="noopener noreferrer"
            className="github-link"
          >
            <FaGithub className="github-icon" /> View on GitHub
          </a>
        </div>

        {/* Project 3: Weather Dashboard */}
        <div className={`project-card ${isVisible ? 'animate' : ''}`} data-delay="400">
          <div className="project-image">
            <img src={project3Image} alt="Weather Dashboard" />
          </div>
          <h3>Techispot</h3>
         <p>
            Developed a frontend tech platform, Techispot, using React to showcase tech news and updates. Implemented a modern UI with responsive design and seamless navigation.
          </p>
          <a
            href="https://github.com/Aditya3425-Fst/TechiSpot-react" // Replace with your GitHub link
            target="_blank"
            rel="noopener noreferrer"
            className="github-link"
          >
            <FaGithub className="github-icon" /> View on GitHub
          </a>
        </div>

        {/* Project 4: Chat Application */}
        <div className={`project-card no-gap ${isVisible ? 'animate' : ''}`} data-delay="400">
          <div className="project-image">
            <img src={project4Image} alt="Chat Application" />
          </div>
          <h3>GitHub Finder</h3>
          <p>
            Created a full-stack GitHub Finder app using React for the frontend and Node.js with Express for the backend. Integrated the GitHub API to search for user profiles and display repositories dynamically.
          </p>
          <a
            href="https://github.com/Aditya3425-Fst/FindGithubUser" // Replace with your GitHub link
            target="_blank"
            rel="noopener noreferrer"
            className="github-link"
          >
            <FaGithub className="github-icon" /> View on GitHub
          </a>
        </div>

        {/* Project 5: Portfolio Website */}
        <div className={`project-card ${isVisible ? 'animate' : ''}`} data-delay="400">
          <div className="project-image">
            <img src={project5Image} alt="Portfolio Website" />
          </div>
          <h3>Portfolio Website</h3>
          <p>
            Designed and developed a personal portfolio website using React and CSS, showcasing projects, skills, and contact information with a focus on responsive design and smooth animations.
          </p>
          <a
            href="https://github.com/yourusername/portfolio-website" // Replace with your GitHub link
            target="_blank"
            rel="noopener noreferrer"
            className="github-link"
          >
            <FaGithub className="github-icon" /> View on GitHub
          </a>
        </div>
      </div>
    </section>
  );
}

export default Skills;