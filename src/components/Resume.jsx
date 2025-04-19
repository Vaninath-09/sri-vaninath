import React from 'react';
import resumePDF from '../assets/V_Sri_Vaninath_Resume 2.pdf';
import internshipLetterPDF from '../assets/Internship Service Letter - V Sri Vaninath.pdf';
import AnimatedElement from './AnimatedElement';

function Resume() {
  return (
    <div className="resume-container">
      <h1 className="section-title">Resume</h1>
      
      <AnimatedElement animation="fade-in" className="resume-actions">
        <div className="resume-buttons-container">
          <a 
            href={resumePDF} 
            download="V_Sri_Vaninath_Resume.pdf"
            className="btn primary-btn resume-btn"
            target="_blank" 
            rel="noopener noreferrer"
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
              <path d="M.5 9.9a.5.5 0 0 1 .5.5v2.5a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1v-2.5a.5.5 0 0 1 1 0v2.5a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2v-2.5a.5.5 0 0 1 .5-.5z"/>
              <path d="M7.646 11.854a.5.5 0 0 0 .708 0l3-3a.5.5 0 0 0-.708-.708L8.5 10.293V1.5a.5.5 0 0 0-1 0v8.793L5.354 8.146a.5.5 0 1 0-.708.708l3 3z"/>
            </svg>
            Download Resume PDF
          </a>
          <a 
            href={resumePDF}
            className="btn secondary-btn resume-btn"
            target="_blank" 
            rel="noopener noreferrer"
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
              <path d="M14 4.5V14a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V2a2 2 0 0 1 2-2h5.5L14 4.5zm-3 0A1.5 1.5 0 0 1 9.5 3V1H4a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1h8a1 1 0 0 0 1-1V4.5h-2z"/>
              <path d="M4.5 6.5A.5.5 0 0 1 5 6h6a.5.5 0 0 1 0 1H5a.5.5 0 0 1-.5-.5zm0 2A.5.5 0 0 1 5 8h6a.5.5 0 0 1 0 1H5a.5.5 0 0 1-.5-.5zm0 2A.5.5 0 0 1 5 10h6a.5.5 0 0 1 0 1H5a.5.5 0 0 1-.5-.5z"/>
            </svg>
            View Resume Online
          </a>
        </div>
      </AnimatedElement>
      
      <AnimatedElement animation="slide-in" delay={100} className="resume-section card">
        <h2>Career Objective</h2>
        <p>
          Ambitious and entrepreneurial-minded individual passionate about business, equity markets, digital
          marketing, and emerging ventures such as real estate and construction. Currently pursuing BBA in Digital
          Technologies, blending academic knowledge with hands-on business experiences. Actively seeking
          opportunities to expand expertise in field operations, finance, and business strategy to become a
          multi-domain leader.
        </p>
      </AnimatedElement>
      
      <AnimatedElement 
        animation="slide-in" 
        delay={200} 
        className="resume-section card professional-layout"
      >
        <h2>Education</h2>
        <div className="education-item">
          <h3>Mahindra University, Bahadurpally</h3>
          <p className="education-program">
            BBA - Digital Technologies (3rd Year) <br />
            Specialization: Business Technology Integration <br />
            Relevant Coursework: Digital Marketing, Financial Management, Market Analytics <br />
            Achievements: Dean's List (2023), Best Project Award (2022)
          </p>
          <p className="education-year">2022 - 2025</p>
        </div>
        
        <div className="education-item" style={{ 
          display: 'flex', 
          flexDirection: 'column', 
          border: '1px solid var(--card-border)', 
          borderRadius: '8px', 
          padding: '16px', 
          backgroundColor: 'var(--card-bg)', 
          marginBottom: '12px', 
          boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)' 
        }}>
          <h3 style={{ marginBottom: '8px', color: 'var(--primary-accent)' }}>Gatik Junior College, Tarnaka</h3>
          <p className="education-program" style={{ marginBottom: '4px', fontWeight: '500' }}>
            Intermediate (MPC) <br />
            Focus: Mathematics, Physics, Chemistry <br />
            Achievements: Top 5% in State Board Exams
          </p>
          <p className="education-year" style={{ color: 'var(--text-muted)', fontSize: '0.9rem' }}>2020 - 2022</p>
        </div>
        
        <div className="education-item" style={{ 
          display: 'flex', 
          flexDirection: 'column', 
          border: '1px solid var(--card-border)', 
          borderRadius: '8px', 
          padding: '16px', 
          backgroundColor: 'var(--card-bg)', 
          marginBottom: '12px', 
          boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)' 
        }}>
          <h3 style={{ marginBottom: '8px', color: 'var(--primary-accent)' }}>Zee High School, Hayathnagar</h3>
          <p className="education-program" style={{ marginBottom: '4px', fontWeight: '500' }}>
            High School <br />
            Focus: Science and Mathematics <br />
            Achievements: School Topper, Science Fair Winner
          </p>
          <p className="education-year" style={{ color: 'var(--text-muted)', fontSize: '0.9rem' }}>Completed: 2020</p>
        </div>
      </AnimatedElement>
      
      <AnimatedElement animation="slide-in" delay={300} className="resume-section card">
        <h2>Internship Experience</h2>
        <div className="experience-item">
          <h3>TeamQuest Consultant Pvt. Ltd., Mumbai</h3>
          <p className="experience-role">Digital Marketing Intern</p>
          <p className="experience-duration">June 10, 2024 - August 12, 2024</p>
          <ul className="experience-responsibilities">
            <li>Contributed to the design and execution of Digital Marketing Programs</li>
            <li>Applied digital tools and strategies to live marketing campaigns</li>
            <li>Collaborated with professional teams, developing real-world communication and planning skills</li>
            <li>Delivered insights in marketing and business tech, showing strong analytical and creative capabilities</li>
          </ul>
          <div className="certificate-link">
            <a 
              href={internshipLetterPDF}
              className="btn secondary-btn"
              target="_blank" 
              rel="noopener noreferrer"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
                <path d="M14 4.5V14a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V2a2 2 0 0 1 2-2h5.5L14 4.5zm-3 0A1.5 1.5 0 0 1 9.5 3V1H4a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1h8a1 1 0 0 0 1-1V4.5h-2z"/>
                <path d="M8.5 8.5a.5.5 0 0 0-1 0v1.793L6.354 9.146a.5.5 0 1 0-.708.708l2 2a.5.5 0 0 0 .708 0l2-2a.5.5 0 0 0-.708-.708L8.5 10.293V8.5z"/>
              </svg>
              View Internship Service Letter
            </a>
          </div>
        </div>
      </AnimatedElement>
      
      <AnimatedElement animation="slide-in" delay={400} className="resume-section card">
        <h2>Skills</h2>
        <div className="skills-grid">
          <div className="skill-category">
            <h3>Marketing & Digital</h3>
            <ul>
              <li>Digital Marketing & SEO</li>
              <li>Social Media Strategy</li>
              <li>Business Technology Integration</li>
              <li>Market Research & Analytics</li>
            </ul>
          </div>
          
          <div className="skill-category">
            <h3>Business & Operations</h3>
            <ul>
              <li>Basic Accounting & Financial Management</li>
              <li>Real Estate Operations & Field Work</li>
              <li>Communication & Team Collaboration</li>
              <li>Problem-Solving & Innovation</li>
            </ul>
          </div>
        </div>
      </AnimatedElement>
      
      <AnimatedElement animation="slide-in" delay={500} className="resume-section card">
        <h2>Projects & Ventures</h2>
        <ul className="projects-list">
          <li>Assisted in family-owned real estate and construction activities, involving on-site supervision, vendor coordination, and client handling</li>
          <li>Handled basic business accounting tasks such as expense tracking and billing using digital tools</li>
          <li>Developed mini-strategies to promote construction projects via WhatsApp marketing and local platforms</li>
          <li>Participated in digital marketing campaigns and analytical reports during internship with TeamQuest</li>
        </ul>
      </AnimatedElement>
    </div>
  );
}

export default Resume;
