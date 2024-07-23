// src/components/Projects.js

import React from 'react';
import './Projects.css';

const projects = [
  {
    title: 'Project 1',
    description: 'Description of project 1.',
    link: 'https://example.com/project1',
    image: 'https://via.placeholder.com/150' // Replace with actual image URLs
  },
  {
    title: 'Project 2',
    description: 'Description of project 2.',
    link: 'https://example.com/project2',
    image: 'https://via.placeholder.com/150' // Replace with actual image URLs
  },
  {
    title: 'Project 3',
    description: 'Description of project 3.',
    link: 'https://example.com/project3',
    image: 'https://via.placeholder.com/150' // Replace with actual image URLs
  }
];

const Projects = () => {
  return (
    <section id="projects" className="projects">
      <h2>Projects</h2>
      <div className="project-cards">
        {projects.map((project, index) => (
          <div key={index} className="project-card">
            <img src={project.image} alt={project.title} className="project-image" />
            <h3 className="project-title">{project.title}</h3>
            <p className="project-description">{project.description}</p>
            <a href={project.link} target="_blank" rel="noopener noreferrer" className="project-link">View Project</a>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
