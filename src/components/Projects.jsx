import React from 'react';
import AnimatedElement from './AnimatedElement';

function Projects() {
  // Project data
  const projects = [
    {
      id: 1,
      title: "Comparative Analysis of Fiscal, Monetary, and Trade Policies in the Horticulture Sector",
      category: "Economic Research",
      duration: "2023",
      description: "Conducted a comprehensive analysis comparing the influence of fiscal, monetary, and trade policies on the horticulture sectors in Brazil and China, providing insights into economic policy impacts.",
      technologies: ["Economic Analysis", "Policy Research", "International Trade"],
      imageUrl: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    },
    {
      id: 2,
      title: "Amazon Sales Report - Predicting Cancellations",
      category: "Data Analytics",
      duration: "2022 - 2023",
      description: "Developed a predictive model to identify high-risk order cancellations for Amazon sales, enabling proactive pricing strategies and improved revenue management.",
      technologies: ["Data Analysis", "Predictive Modeling", "E-commerce Strategy"],
      imageUrl: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
    },
    {
      id: 3,
      title: "IOT-Based Seizure Detection and Response Wearable",
      category: "Healthcare Technology",
      duration: "2022",
      description: "Engineered a wearable device that monitors and tracks seizure patterns in epilepsy patients, providing critical data for healthcare providers to optimize treatment plans and improve patient outcomes.",
      technologies: ["IoT Development", "Health Monitoring", "Embedded Systems"],
      imageUrl: "https://images.unsplash.com/photo-1576669801775-ff43c5ab079d?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
    },
    {
      id: 4,
      title: "E-Commerce Transformation for Home-Based Bakery",
      category: "Digital Transformation",
      duration: "2021 - 2022",
      description: "Transformed a home-based bakery business from manual Instagram/WhatsApp operations to a full e-commerce platform, streamlining the ordering process and enabling business scaling.",
      technologies: ["E-commerce Development", "UX Design", "Digital Marketing"],
      imageUrl: "https://images.unsplash.com/photo-1603532648955-039310d9ed75?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
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
                  src={project.imageUrl}
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
