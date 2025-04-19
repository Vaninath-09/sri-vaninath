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
    <div className="certificates-container">
      <h1 className="section-title">Certificates & Achievements</h1>
      
      <AnimatedElement animation="fade-in">
        <div className="certificates-grid">
          {certificates.map((certificate, index) => (
            <AnimatedElement 
              key={certificate.id} 
              animation="scale-in" 
              delay={index * 150} 
              className="certificate-card card"
            >
              <div className="certificate-image">
                {/* Always use placeholder image since actual images don't exist */}
                <img 
                  src={`https://via.placeholder.com/300x200?text=${certificate.title.replace(/\s+/g, '+')}`} 
                  alt={certificate.title} 
                />
              </div>
              <div className="certificate-content">
                <h3>{certificate.title}</h3>
                <p className="certificate-issuer">{certificate.issuer}</p>
                <p className="certificate-date">{certificate.date}</p>
                <p className="certificate-desc">{certificate.description}</p>
              </div>
            </AnimatedElement>
          ))}
        </div>
      </AnimatedElement>
      
      <AnimatedElement animation="slide-in" delay={400} className="additional-info card">
        <h2>Additional Training</h2>
        <ul>
          <li>Webinars and workshops on investing and equity markets</li>
          <li>Field training in real estate and construction management</li>
          <li>Digital tools and software proficiency training</li>
        </ul>
      </AnimatedElement>
    </div>
  );
}

export default Certificates;
