import React from 'react';
import AnimatedElement from './AnimatedElement';

function Extracurricular() {
  return (
    <div className="extracurricular-container section-padding">
      <AnimatedElement animation="fade-in" className="section-header">
        <h1 className="section-title">Extracurricular Activities</h1>
      </AnimatedElement>
      
      <div className="activities-grid">
        <AnimatedElement animation="fade-in" delay={100} className="industry-exposure card">
          <h2 className="card-title">Industry Exposure</h2>
          <div className="card-content">
            <ul className="experience-list">
              <li>
                <h3>Construction Site Visits</h3>
                <p>Regularly visit construction sites for field learning and technical observation</p>
              </li>
              <li>
                <h3>Real Estate Market Research</h3>
                <p>Active involvement in real estate market research, pricing trends, and land development planning</p>
              </li>
              <li>
                <h3>Financial Workshops</h3>
                <p>Attend webinars and workshops on investing, equity markets, and financial modeling</p>
              </li>
              <li>
                <h3>Logistics Management</h3>
                <p>Informally manage logistics and stock for small projects related to construction and supply</p>
              </li>
            </ul>
          </div>
        </AnimatedElement>
        
        <AnimatedElement animation="fade-in" delay={200} className="interests-hobbies card">
          <h2 className="card-title">Interests & Hobbies</h2>
          <div className="card-content">
            <div className="hobbies-grid">
              <div className="hobby-item">
                <h3>Economic Trends</h3>
                <p>Following global economic and business trends</p>
              </div>
              <div className="hobby-item">
                <h3>Equity Markets</h3>
                <p>Investing and researching in equity markets</p>
              </div>
              <div className="hobby-item">
                <h3>Sports</h3>
                <p>Playing badminton and pickleball for wellness</p>
              </div>
              <div className="hobby-item">
                <h3>Construction</h3>
                <p>Learning construction techniques and market behavior</p>
              </div>
              <div className="hobby-item">
                <h3>Entrepreneurship</h3>
                <p>Exploring startup ideas across multiple domains</p>
              </div>
            </div>
          </div>
        </AnimatedElement>
      </div>
      
      <div className="section-divider"></div>
      
      {/* <AnimatedElement animation="fade-in" delay={300} className="gallery-section">
        <h2 className="section-subtitle">Activity Gallery</h2>
        <div className="gallery-grid">
          <div className="gallery-item">
            <div className="image-container">
              <img src="https://via.placeholder.com/300x200?text=Construction+Site+Visit" alt="Construction site visit" />
            </div>
            <p className="image-caption">Construction site visit</p>
          </div>
          <div className="gallery-item">
            <div className="image-container">
              <img src="https://via.placeholder.com/300x200?text=Badminton+Tournament" alt="Badminton tournament" />
            </div>
            <p className="image-caption">Badminton tournament</p>
          </div>
          <div className="gallery-item">
            <div className="image-container">
              <img src="https://via.placeholder.com/300x200?text=Investment+Workshop" alt="Investment workshop" />
            </div>
            <p className="image-caption">Investment workshop</p>
          </div>
          <div className="gallery-item">
            <div className="image-container">
              <img src="https://via.placeholder.com/300x200?text=Market+Research" alt="Market research" />
            </div>
            <p className="image-caption">Market research activity</p>
          </div>
        </div>
      </AnimatedElement> */}
    </div>
  );
}

export default Extracurricular;
