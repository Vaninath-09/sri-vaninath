import { useState, useEffect } from 'react'
import { Routes, Route, NavLink, useLocation } from 'react-router-dom'
import './App.css'

// Pages
import Home from './components/Home'
import Resume from './components/Resume'
import Certificates from './components/Certificates'
import Projects from './components/Projects'
import Extracurricular from './components/Extracurricular'
import ScrollToTop from './components/ScrollToTop'
import ThemeProvider from './components/ThemeProvider'

function App() {
  const [activeNav, setActiveNav] = useState('home')
  const [headerClass, setHeaderClass] = useState('')
  const [lastScrollY, setLastScrollY] = useState(0)
  const [menuOpen, setMenuOpen] = useState(false)
  const location = useLocation()

  // Update active nav based on location
  useEffect(() => {
    const path = location.pathname
    if (path === '/') setActiveNav('home')
    else if (path.includes('resume')) setActiveNav('resume')
    else if (path.includes('certificates')) setActiveNav('certificates')
    else if (path.includes('projects')) setActiveNav('projects')
    else if (path.includes('extracurricular')) setActiveNav('extracurricular')
    
    // Close mobile menu when navigating
    setMenuOpen(false)
  }, [location])

  // Handle header show/hide on scroll
  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY
      
      if (scrollY > 100) {
        if (scrollY > lastScrollY) {
          setHeaderClass('scrolled')
        } else {
          setHeaderClass('visible')
        }
      } else {
        setHeaderClass('')
      }
      
      setLastScrollY(scrollY)
    }
    
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [lastScrollY])

  // Prevent scrolling when mobile menu is open
  useEffect(() => {
    if (menuOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = 'auto'
    }
    
    return () => {
      document.body.style.overflow = 'auto'
    }
  }, [menuOpen])

  const toggleMenu = () => {
    setMenuOpen(!menuOpen)
  }

  return (
    <ThemeProvider>
      <div className="portfolio">
        <ScrollToTop />
        <header className={`main-header ${headerClass}`}>
          <div className="header-container">
            <div className="logo">
              <NavLink to="/">
                <h2>V SRI VANINATH</h2>
              </NavLink>
            </div>
            <button 
              className="menu-toggle" 
              onClick={toggleMenu}
              aria-label="Toggle menu"
            >
              <span className="menu-icon">{menuOpen ? '✕' : '☰'}</span>
            </button>
            <nav className={menuOpen ? 'active' : ''}>
              <div className="nav-links">
                <NavLink to="/" 
                  className={({ isActive }) => isActive ? 'active' : ''}>
                  Home
                </NavLink>
                <NavLink to="/resume" 
                  className={({ isActive }) => isActive ? 'active' : ''}>
                  Resume
                </NavLink>
                <NavLink to="/certificates" 
                  className={({ isActive }) => isActive ? 'active' : ''}>
                  Certificates
                </NavLink>
                <NavLink to="/projects" 
                  className={({ isActive }) => isActive ? 'active' : ''}>
                  Projects
                </NavLink>
                <NavLink to="/extracurricular" 
                  className={({ isActive }) => isActive ? 'active' : ''}>
                  Extracurricular
                </NavLink>
              </div>
            </nav>
          </div>
          <div 
            className={`backdrop ${menuOpen ? 'active' : ''}`} 
            onClick={() => setMenuOpen(false)}
          ></div>
        </header>

        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/resume" element={<Resume />} />
            <Route path="/certificates" element={<Certificates />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/extracurricular" element={<Extracurricular />} />
          </Routes>
        </main>

        <footer>
          <div className="contact">
            <p>Hyderabad, Telangana | +91 82470 25014 | <a href="mailto:vaninath935@gmail.com">vaninath935@gmail.com</a></p>
          </div>
          <div className="copyright">
            <p>&copy; {new Date().getFullYear()} V Sri Vaninath. All Rights Reserved.</p>
          </div>
        </footer>
      </div>
    </ThemeProvider>
  )
}

export default App
