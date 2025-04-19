import React from 'react';
import AnimatedElement from './AnimatedElement';

function Certificates() {
  // Sample certificates - replace with actual data
  const certificates = [
    {
      id: 1,
      title: 'Digital Marketing Fundamentals',
      issuer: 'TeamQuest Consultants',
      date: 'August 2024',
      image: '../assets/certificates/digital-marketing-cert.jpg',
      description: 'Completed comprehensive training in digital marketing fundamentals',
    },
    {
      id: 2,
      title: 'Business Technology Integration',
      issuer: 'Mahindra University',
      date: 'December 2023',
      image: '../assets/certificates/business-tech-cert.jpg',
      description: 'Certification in business technology integration practices',
    },
    {
      id: 3,
      title: 'Financial Markets Foundation',
      issuer: 'Online Learning Platform',
      date: 'June 2023',
      image: '../assets/certificates/finance-cert.jpg',
      description: 'Understanding of equity markets and financial instruments',
    }
  ];

  return (
    <div className="certificates-container section-padding">
      <AnimatedElement animation="fade-in" className="section-header">
        <h1 className="section-title">Certificates & Achievements</h1>
      </AnimatedElement>
      
      <AnimatedElement animation="fade-in" delay={100}>
        <div className="certificates-grid">
          {certificates.map((certificate, index) => (
            <AnimatedElement 
              key={certificate.id} 
              animation="fade-in" 
              delay={index * 150} 
              className="certificate-card card"
            >
              <h3 className="card-title">{certificate.title}</h3>
              <div className="card-content">
                <div className="certificate-image">
                  {/* Always use placeholder image since actual images don't exist */}
                  <img 
                    src={`https://via.placeholder.com/300x200?text=${certificate.title.replace(/\s+/g, '+')}`} 
                    alt={certificate.title} 
                  />
                </div>
                <div className="certificate-details">
                  <div className="certificate-meta">
                    <p className="certificate-issuer"><strong>Issuer:</strong> {certificate.issuer}</p>
                    <p className="certificate-date"><strong>Date:</strong> {certificate.date}</p>
                  </div>
                  <p className="certificate-desc">{certificate.description}</p>
                </div>
              </div>
            </AnimatedElement>
          ))}
        </div>
      </AnimatedElement>
      
      <div className="section-divider"></div>
      
      <AnimatedElement animation="fade-in" delay={300} className="training-section">
        <h2 className="section-subtitle">Additional Training</h2>
        <div className="training-card card">
          <div className="card-content">
            <ul className="training-list">
              <li>
                <h3>Financial Markets</h3>
                <p>Webinars and workshops on investing and equity markets</p>
              </li>
              <li>
                <h3>Construction Management</h3>
                <p>Field training in real estate and construction management</p>
              </li>
              <li>
                <h3>Digital Tools Proficiency</h3>
                <p>Digital tools and software proficiency training</p>
              </li>
            </ul>
          </div>
        </div>
      </AnimatedElement>
    </div>
  );
}

export default Certificates;
