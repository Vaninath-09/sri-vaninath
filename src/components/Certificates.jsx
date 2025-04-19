import React from 'react';
import AnimatedElement from './AnimatedElement';
// Import certificate images
import macroeconomicsImg from '../assets/macroeconomics.png';
import businessCaseImg from '../assets/business case dev.png';
import pythonImg from '../assets/google python.png';
import writingImg from '../assets/writinf and editing.png';

function Certificates() {
  // Updated certificates data
  const certificates = [
    {
      id: 1,
      title: 'Macroeconomics for Business Management',
      issuer: 'FIA Business School',
      date: 'March 2023',
      image: macroeconomicsImg,
      description: 'Comprehensive certification covering core concepts of digital marketing including search, social media, and content marketing.',
    },
    {
      id: 2,
      title: 'Business Case Development',
      issuer: 'Harvard Manage Mentor',
      date: 'Feb 2023', // Corrected from 2025 which appears to be a future date
      image: businessCaseImg,
      description: 'In-depth course on developing effective business strategies, market analysis, and competitive positioning.',
    },
    {
      id: 3,
      title: 'Crash course on Python',
      issuer: 'Google',
      date: 'Aug 2020',
      image: pythonImg,
      description: 'This course provided a strong foundation in Python programming, covering essential topics such as variables, loops, conditionals, functions, and error handling. It also included practical exercises to build real-world skills in writing Python scripts and automating tasks.',
    },
    {
      id: 4,
      title: 'Writing and Editing: Structure and Organization',
      issuer: 'University of Michigan',
      date: 'April 2020',
      image: writingImg,
      description: 'The certificate verifies a strong foundation in professional writing techniques, editorial standards, and content clarity—skills applicable across academic, creative, and workplace communications.',
    }
  ];

  // Function to handle image loading errors
  const handleImageError = (e) => {
    e.target.onerror = null; // Prevent infinite callbacks
    e.target.src = `https://via.placeholder.com/300x200?text=${e.target.alt.replace(/\s+/g, '+')}`;
  };

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
              className="certificate-card card professional-cert-card"
            >
              <h3 className="card-title">{certificate.title}</h3>
              <div className="card-content">
                <div className="certificate-image" style={{ border: '1px solid var(--card-border)', borderRadius: '6px' }}>
                  <img 
                    src={certificate.image} 
                    alt={certificate.title} 
                    onError={handleImageError}
                    style={{ display: 'block', width: '100%', height: 'auto' }}
                  />
                </div>
                <div className="certificate-details" style={{ padding: '10px 5px' }}>
                  <div className="certificate-meta" style={{ 
                    display: 'flex', 
                    justifyContent: 'space-between',
                    backgroundColor: 'rgba(72, 166, 167, 0.05)',
                    padding: '8px 12px',
                    borderRadius: '4px',
                    marginBottom: '12px'
                  }}>
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
