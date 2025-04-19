import React, { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import AnimatedElement from './AnimatedElement';

function Home() {
  return (
    <div className="home-container">
      <section className="hero">
        <div className="hero-content">
          <div className="profile-image">
            <img 
              src="https://via.placeholder.com/300x300?text=V+SRI+VANINATH" 
              alt="V Sri Vaninath" 
            />
          </div>
          <div className="hero-text">
            <h1>V SRI VANINATH</h1>
            <h2>BBA Digital Technologies Student</h2>
            <p className="intro">
              Ambitious and entrepreneurial-minded individual passionate about business, equity markets, digital
              marketing, and emerging ventures such as real estate and construction.
            </p>
            <div className="cta-buttons">
              <Link to="/resume" className="btn primary-btn">View Resume</Link>
              <Link to="/projects" className="btn secondary-btn">See Projects</Link>
            </div>
          </div>
        </div>
      </section>

      <AnimatedElement animation="slide-in" delay={100}>
        <section className="about" id="about">
          <h2 className="section-title">About Me</h2>
          <div className="card">
            <p>
              Currently pursuing BBA in Digital Technologies, blending academic knowledge with hands-on business experiences. 
              Actively seeking opportunities to expand expertise in field operations, finance, and business strategy to become a multi-domain leader.
            </p>
            
            <div className="key-skills">
              <h3>Key Skills</h3>
              <ul className="skill-list">
                <li>Digital Marketing & SEO</li>
                <li>Social Media Strategy</li>
                <li>Business Technology Integration</li>
                <li>Market Research & Analytics</li>
                <li>Basic Accounting & Financial Management</li>
              </ul>
            </div>
          </div>
        </section>
      </AnimatedElement>

      <AnimatedElement animation="slide-in" delay={200}>
        <section className="highlights">
          <h2 className="section-title">Highlights</h2>
          <div className="highlights-grid">
            <div className="highlight-card card">
              <h3>Education</h3>
              <p>BBA - Digital Technologies (3rd Year)</p>
              <p>Mahindra University, Bahadurpally</p>
            </div>
            
            <div className="highlight-card card">
              <h3>Experience</h3>
              <p>Digital Marketing Intern</p>
              <p>TeamQuest Consultant Pvt. Ltd., Mumbai</p>
            </div>
            
            <div className="highlight-card card">
              <h3>Projects</h3>
              <p>Real Estate Marketing</p>
              <p>Digital Campaign Analysis</p>
            </div>
          </div>
        </section>
      </AnimatedElement>
    </div>
  );
}

export default Home;
