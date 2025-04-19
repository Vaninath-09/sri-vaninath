import React from 'react';
import AnimatedElement from './AnimatedElement';

function Extracurricular() {
  return (
    <div className="extracurricular-container">
      <h1 className="section-title">Extracurricular Activities</h1>
      
      <AnimatedElement animation="slide-in" className="industry-exposure card">
        <h2>Industry Exposure</h2>
        <ul>
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
      </AnimatedElement>
      
      <AnimatedElement animation="slide-in" delay={200} className="interests-hobbies card">
        <h2>Interests & Hobbies</h2>
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
      </AnimatedElement>
      
      <AnimatedElement animation="fade-in" delay={400} className="gallery card">
        <h2>Activity Gallery</h2>
        <div className="gallery-grid">
          {/* Always use placeholder images */}
          <div className="gallery-item">
            <img src="https://via.placeholder.com/300x200?text=Construction+Site+Visit" alt="Construction site visit" />
            <p>Construction site visit</p>
          </div>
          <div className="gallery-item">
            <img src="https://via.placeholder.com/300x200?text=Badminton+Tournament" alt="Badminton tournament" />
            <p>Badminton tournament</p>
          </div>
          <div className="gallery-item">
            <img src="https://via.placeholder.com/300x200?text=Investment+Workshop" alt="Investment workshop" />
            <p>Investment workshop</p>
          </div>
          <div className="gallery-item">
            <img src="https://via.placeholder.com/300x200?text=Market+Research" alt="Market research" />
            <p>Market research activity</p>
          </div>
        </div>
      </AnimatedElement>
    </div>
  );
}

export default Extracurricular;
