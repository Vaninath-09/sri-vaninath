import React from 'react';
import AnimatedElement from './AnimatedElement';

function Projects() {
  // Sample projects data - replace with actual data
  const projects = [
    {
      id: 1,
      title: 'Real Estate Marketing Campaign',
      category: 'Digital Marketing',
      duration: '2023 - Present',
      description: 'Developed and implemented marketing strategies for family-owned real estate projects, using digital tools and local platforms.',
      technologies: ['WhatsApp Marketing', 'Local SEO', 'Content Creation'],
    },
    {
      id: 2,
      title: 'Construction Project Management',
      category: 'Field Operations',
      duration: '2022 - 2023',
      description: 'Assisted in on-site supervision, vendor coordination, and client handling for construction projects.',
      technologies: ['Vendor Management', 'Client Relations', 'Quality Control'],
    },
    {
      id: 3,
      title: 'Digital Marketing Analysis',
      category: 'Analytics',
      duration: 'June - August 2024',
      description: 'Created analytical reports and insights during internship with TeamQuest Consultants.',
      technologies: ['Marketing Analytics', 'Data Visualization', 'Performance Metrics'],
    }
  ];

  return (
    <div className="projects-container">
      <h1 className="section-title">Projects & Ventures</h1>
      
      <AnimatedElement animation="slide-in">
        <div className="projects-grid">
          {projects.map((project, index) => (
            <AnimatedElement 
              key={project.id} 
              className="project-card card" 
              animation="scale-in"
              delay={index * 100}
            >
              <div className="project-image">
                <img 
                  src={`https://via.placeholder.com/400x250?text=${project.title.replace(/\s+/g, '+')}`}
                  alt={project.title} 
                />
              </div>
              <div className="project-content">
                <h3>{project.title}</h3>
                <div className="project-meta">
                  <span className="project-category">{project.category}</span>
                  <span className="project-duration">{project.duration}</span>
                </div>
                <p className="project-description">{project.description}</p>
                <div className="project-tech">
                  <h4>Technologies/Skills Used:</h4>
                  <ul>
                    {project.technologies.map((tech, index) => (
                      <li key={index}>{tech}</li>
                    ))}
                  </ul>
                </div>
              </div>
            </AnimatedElement>
          ))}
        </div>
      </AnimatedElement>
      
      <AnimatedElement animation="fade-in" delay={300} className="other-projects card">
        <h2>Additional Ventures</h2>
        <ul>
          <li>
            <strong>Financial Analysis Project:</strong> Tracking and analyzing equity market trends and investment opportunities.
          </li>
          <li>
            <strong>Digital Accounting Implementation:</strong> Set up digital tools for expense tracking and billing for small projects.
          </li>
          <li>
            <strong>Business Strategy Development:</strong> Created mini-strategies for promoting various business ventures.
          </li>
        </ul>
      </AnimatedElement>
    </div>
  );
}

export default Projects;
