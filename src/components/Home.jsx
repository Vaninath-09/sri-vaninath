import React from 'react';
import { Link } from 'react-router-dom';
import AnimatedElement from './AnimatedElement';
import profilePic from '../assets/profilePic.jpg';

function Home() {
  return (
    <>
      <section className="hero">
        <div className="hero-overlay"></div>
        <div className="hero-content">
          <div className="profile-image">
            <img 
              src={profilePic} 
              alt="V Sri Vaninath" 
            />
          </div>
          <div className="hero-text">
            <AnimatedElement animation="fade-in" delay={100}>
              <h1>V SRI VANINATH</h1>
            </AnimatedElement>
            
            <AnimatedElement animation="fade-in" delay={200}>
              <h2>BBA Digital Technologies Student</h2>
            </AnimatedElement>
            
            <AnimatedElement animation="fade-in" delay={300}>
              <p className="intro">
                Ambitious and entrepreneurial-minded individual passionate about business, equity markets, digital
                marketing, and emerging ventures such as real estate and construction.
              </p>
            </AnimatedElement>
            
            <AnimatedElement animation="fade-in" delay={400}>
              <div className="cta-buttons">
                <Link to="/resume" className="btn primary-btn">View Resume</Link>
                <Link to="/projects" className="btn secondary-btn">See Projects</Link>
              </div>
            </AnimatedElement>
          </div>
        </div>
      </section>
      
      <div className="home-container">
        <AnimatedElement animation="fade-in" className="section-header">
          <h2 className="section-title">About Me</h2>
        </AnimatedElement>
        
        <AnimatedElement animation="slide-in">
          <section className="about-section">
            <div className="card about-card">
              <div className="about-grid">
                <div className="about-text">
                  <p className="about-intro">
                    Currently pursuing BBA in Digital Technologies at Mahindra University, blending academic knowledge with hands-on business experiences. 
                    Actively seeking opportunities to expand expertise in field operations, finance, and business strategy to become a multi-domain leader.
                  </p>
                  
                  <div className="professional-summary">
                    <p>
                      With experience in digital marketing and a strong foundation in business technology, I bring a unique perspective to projects at the intersection of business and technology. My experience with family-owned real estate ventures has given me practical insights into field operations and client management.
                    </p>
                  </div>
                </div>
                
                <div className="about-skills">
                  <h3 className="skills-title">Core Competencies</h3>
                  <br/>
                  <ul className="skill-list">
                    <li><span className="skill-highlight">Digital Marketing & SEO</span></li>
                    <li><span className="skill-highlight">Social Media Strategy</span></li>
                    <li><span className="skill-highlight">Business Technology Integration</span></li>
                    <li><span className="skill-highlight">Market Research & Analytics</span></li>
                    <li><span className="skill-highlight">Basic Accounting & Financial Management</span></li>
                  </ul>
                </div>
              </div>
            </div>
          </section>
        </AnimatedElement>

        <div className="section-divider"></div>

        <AnimatedElement animation="fade-in" className="section-header">
          <h2 className="section-subtitle">Professional Highlights</h2>
        </AnimatedElement>
        
        <section className="highlights">
          <div className="highlights-grid animated-gradient-bg">
            <AnimatedElement animation="fade-in" delay={100} className="highlight-card card">
              <div className="highlight-icon">🎓</div>
              <h3>Education</h3>
              <p>BBA - Digital Technologies (3rd Year)</p>
              <p>Mahindra University, Bahadurpally</p>
              <Link to="/resume" className="highlight-link">View Academic Details →</Link>
            </AnimatedElement>
            
            <AnimatedElement animation="fade-in" delay={200} className="highlight-card card">
              <div className="highlight-icon">💼</div>
              <h3>Experience</h3>
              <p>Digital Marketing Intern</p>
              <p>TeamQuest Consultant Pvt. Ltd., Mumbai</p>
              <Link to="/resume" className="highlight-link">View Experience Details →</Link>
            </AnimatedElement>
            
            <AnimatedElement animation="fade-in" delay={300} className="highlight-card card">
              <div className="highlight-icon">🚀</div>
              <h3>Projects</h3>
              <p>Real Estate Marketing</p>
              <p>Digital Campaign Analysis</p>
              <Link to="/projects" className="highlight-link">Explore Projects →</Link>
            </AnimatedElement>

            <AnimatedElement animation="fade-in" delay={400} className="highlight-card card">
              <div className="highlight-icon">💡</div>
              <h3>Skills & Expertise</h3>
              <p>Digital Marketing & SEO</p>
              <p>Business Technology Integration</p>
              <Link to="/resume" className="highlight-link">View All Skills →</Link>
            </AnimatedElement>
          </div>
        </section>

        <div className="section-divider"></div>

        <AnimatedElement animation="fade-in" delay={100}>
          <section className="contact-cta">
            <div className="cta-content card">
              <h2>Let's Connect</h2>
              <p>Interested in discussing opportunities or collaborations? Feel free to reach out.</p>
              <div className="cta-button-container">
                <a href="mailto:vaninath935@gmail.com" className="btn primary-btn">
                  Contact Me
                </a>
                <Link to="/contact" className="btn secondary-btn">View Contact Information</Link>
              </div>
            </div>
          </section>
        </AnimatedElement>
      </div>
    </>
  );
}

export default Home;
