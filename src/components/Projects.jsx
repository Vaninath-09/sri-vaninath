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
      <br/>
      <AnimatedElement animation="slide-in">
        <div className="projects-grid">
          {projects.map((project, index) => (
            <AnimatedElement 
              key={project.id} 
              className="project-card card professional-project-layout" 
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
      <br/>
      <br/>
      <AnimatedElement animation="fade-in" delay={300} className="other-projects card professional-ventures-card">
        <h2>Additional Ventures</h2>
        <div className="ventures-content">
          <ul className="ventures-list">
            <li className="venture-item">
              <div className="venture-item-header">
                <span className="venture-icon">📊</span>
                <strong>Financial Analysis Project</strong>
              </div>
              <p className="venture-description">Tracking and analyzing equity market trends and investment opportunities.</p>
            </li>
            <li className="venture-item">
              <div className="venture-item-header">
                <span className="venture-icon">💼</span>
                <strong>Digital Accounting Implementation</strong>
              </div>
              <p className="venture-description">Set up digital tools for expense tracking and billing for small projects.</p>
            </li>
            <li className="venture-item">
              <div className="venture-item-header">
                <span className="venture-icon">🚀</span>
                <strong>Business Strategy Development</strong>
              </div>
              <p className="venture-description">Created mini-strategies for promoting various business ventures.</p>
            </li>
          </ul>
        </div>
      </AnimatedElement>
    </div>
  );
}

export default Projects;
