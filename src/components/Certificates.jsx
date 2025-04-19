import React, { useState } from 'react';
import AnimatedElement from './AnimatedElement';
// Import certificate images
import macroeconomicsImg from '../assets/macroeconomics.png';
import businessCaseImg from '../assets/business case dev.png';
import pythonImg from '../assets/google python.png';
import writingImg from '../assets/writinf and editing.png';

function Certificates() {
  // State for image preview modal
  const [previewImage, setPreviewImage] = useState(null);
  const [showPreview, setShowPreview] = useState(false);
  
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
  
  // Function to open image preview
  const openImagePreview = (imageSrc) => {
    setPreviewImage(imageSrc);
    setShowPreview(true);
    // Prevent body scrolling when modal is open
    document.body.style.overflow = 'hidden';
  };
  
  // Function to close image preview
  const closeImagePreview = () => {
    setShowPreview(false);
    document.body.style.overflow = 'auto';
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
                <div 
                  className="certificate-image" 
                  style={{ border: '1px solid var(--card-border)', borderRadius: '6px', cursor: 'pointer' }}
                  onClick={() => openImagePreview(certificate.image)}
                  title="Click to enlarge"
                >
                  <img 
                    src={certificate.image} 
                    alt={certificate.title} 
                    onError={handleImageError}
                    style={{ 
                      display: 'block', 
                      width: '100%', 
                      height: '200px', 
                      objectFit: 'cover',
                      transition: 'transform 0.3s ease'
                    }}
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
      
      {/* Image Preview Modal */}
      {showPreview && (
        <div 
          className="image-preview-modal"
          onClick={closeImagePreview}
          style={{
            position: 'fixed',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            backgroundColor: 'rgba(0, 0, 0, 0.85)',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            zIndex: 1000,
            padding: '20px',
            cursor: 'zoom-out',
          }}
        >
          <div className="modal-content" onClick={e => e.stopPropagation()}>
            <img 
              src={previewImage} 
              alt="Certificate Preview" 
              style={{
                maxWidth: '90%',
                maxHeight: '90vh',
                objectFit: 'contain',
                border: '2px solid white',
                borderRadius: '4px',
                boxShadow: '0 5px 15px rgba(0,0,0,0.5)',
              }}
            />
            <button 
              onClick={closeImagePreview}
              style={{
                position: 'absolute',
                top: '20px',
                right: '20px',
                background: 'transparent',
                border: 'none',
                color: 'white',
                fontSize: '24px',
                cursor: 'pointer',
              }}
              aria-label="Close preview"
            >
              ×
            </button>
          </div>
        </div>
      )}
      
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
