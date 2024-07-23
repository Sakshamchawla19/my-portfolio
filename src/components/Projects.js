import React from 'react';
import './Projects.css';

const Projects = () => {
  return (
    <section id="projects">
      <h2>Projects</h2>
      <div className="project-card">
        <h3>KidZelp</h3>
        <ul>
          <li>Streamlined UX with Figma Prototyping: Leveraged Figma's design and prototyping capabilities to create low-fidelity and high-fidelity prototypes.</li>
          <li>Elevated User Engagement: Transitioned to high-fidelity prototypes, refining visual elements and interactions for a polished UI.</li>
          <li>Prioritized UI Polish: Incorporated detailed graphics, color schemes, and interactive components into high-fidelity prototypes using Figma.</li>
        </ul>
      </div>
      <div className="project-card">
        <h3>Gen-z-Flix</h3>
        <ul>
          <li>React & TypeScript Frontend: Built Gen-z-flix's user-friendly frontend with React and TypeScript.</li>
          <li>Innovative Subscription Model: Spearheaded Gen-z-flix's unique hourly subscription model.</li>
          <li>Secure & Scalable Platform: Integrated Firebase for secure user authentication and subscription management.</li>
          <li>User-Centric Development: Championed user-centric development, aligning future enhancements with user needs and trends.</li>
        </ul>
      </div>
    </section>
  );
};

export default Projects;
