import React, { useEffect, useRef, useState } from 'react';
import rabloLogo from '../assets/rablo.png'; // Adjust the path to your logo file
import './Projects.css';

function Projects() {
  const [isVisible, setIsVisible] = useState(false); // Set to true for testing
  const timelineRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            console.log('Timeline is visible!'); // Debug log
            setIsVisible(true);
            observer.unobserve(entry.target); // Stop observing after animation triggers
          }
        });
      },
      { threshold: 0.1 } // Lowered threshold to 10%
    );

    if (timelineRef.current) {
      observer.observe(timelineRef.current);
    }

    return () => {
      if (timelineRef.current) {
        observer.unobserve(timelineRef.current);
      }
    };
  }, []);

  return (
    <section id="projects" className="projects-section">
      <h2>Career History</h2>
      <div className={`timeline ${isVisible ? 'animate' : ''}`} ref={timelineRef}>
        {/* Timeline Entry 1 - Rablo */}
        <div className={`timeline-entry left ${isVisible ? 'animate' : ''}`}>
          <div className="timeline-content">
            <h3>Backend Developer Intern,RABLO</h3>
            <p className="location">Lucknow, Uttar Pradesh</p>
            <p>
              Worked at Rablo, an EdTech platform that helps educators manage and grow their tuition businesses. Focused on backend development to support e-learning providers.
            </p>
          </div>
          <div className="timeline-marker">
            <img src={rabloLogo} alt="Rablo Logo" className="timeline-logo" />
          </div>
          <div className="timeline-date">August 2024 - November 2024</div>
        </div>
      </div>
    </section>
  );
}

export default Projects;