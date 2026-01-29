import React, { useState, useEffect } from 'react';
import Noise from './Noise';

export default function Portfolio() {
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
      
      const sections = ['home', 'about', 'projects', 'contact'];
      const current = sections.find(section => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          return rect.top <= 100 && rect.bottom >= 100;
        }
        return false;
      });
      if (current) setActiveSection(current);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const projects = [
    {
      title: "E-Commerce Platform",
      description: "A full-stack e-commerce solution with payment integration and inventory management.",
      tech: ["React", "Node.js", "MongoDB", "Stripe"],
      link: "#"
    },
    {
      title: "Task Management App",
      description: "Collaborative task manager with real-time updates and team features.",
      tech: ["React", "Firebase", "Tailwind CSS"],
      link: "#"
    },
    {
      title: "Weather Dashboard",
      description: "Interactive weather application with forecasts and location-based data.",
      tech: ["React", "API Integration", "Chart.js"],
      link: "#"
    },
    {
      title: "Portfolio Generator",
      description: "Dynamic portfolio builder with customizable themes and layouts.",
      tech: ["React", "CSS Grid", "LocalStorage"],
      link: "#"
    }
  ];

  return (
    
    <div className="portfolio">
  <Noise
    patternSize={250}
    patternScaleX={2}
    patternScaleY={2}
    patternRefreshInterval={2}
    patternAlpha={15}
  />
      {/* Navigation */}
      <nav className={scrolled ? 'scrolled' : ''}>
        <div className="logo">Portfolio</div>
        <ul className="nav-links">
          <li>
            <a 
              href="#home" 
              className={activeSection === 'home' ? 'active' : ''}
              onClick={(e) => { e.preventDefault(); scrollToSection('home'); }}
            >
              Home
            </a>
          </li>
          <li>
            <a 
              href="#about" 
              className={activeSection === 'about' ? 'active' : ''}
              onClick={(e) => { e.preventDefault(); scrollToSection('about'); }}
            >
              About
            </a>
          </li>
          <li>
            <a 
              href="#projects" 
              className={activeSection === 'projects' ? 'active' : ''}
              onClick={(e) => { e.preventDefault(); scrollToSection('projects'); }}
            >
              Projects
            </a>
          </li>
          <li>
            <a 
              href="#contact" 
              className={activeSection === 'contact' ? 'active' : ''}
              onClick={(e) => { e.preventDefault(); scrollToSection('contact'); }}
            >
              Contact
            </a>
          </li>
        </ul>
      </nav>

      {/* Hero Section */}
      <section id="home" className="hero snap-section">
        <div className="hero-content">
          
          <div className="hero-subtitle">AI Engineer</div>
          <h1 className="hero-title">George Adriel Kurniawan</h1>
          <p className="hero-description">
            I'm a passionate developer focused on building beautiful, functional web applications 
            that make a difference. Let's create something amazing together.
          </p>
          <a href="#contact" className="cta-button" onClick={(e) => { e.preventDefault(); scrollToSection('contact'); }}>
            Get In Touch
          </a>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="snap-section">
        <h2 className="section-title">About Me</h2>
        <div className="about-content">
          <Noise
    patternSize={250}
    patternScaleX={2}
    patternScaleY={2}
    patternRefreshInterval={2}
    patternAlpha={15}
  />
          <p>
            I'm a full-stack developer with a passion for creating elegant solutions to complex problems. 
            With expertise in modern web technologies, I specialize in building responsive, user-friendly 
            applications that deliver exceptional experiences.
          </p>
          <p>
            When I'm not coding, you'll find me exploring new technologies, contributing to open-source 
            projects, or sharing knowledge with the developer community.
          </p>
          <div className="skills">
            <span className="skill-tag">React</span>
            <span className="skill-tag">JavaScript</span>
            <span className="skill-tag">TypeScript</span>
            <span className="skill-tag">Node.js</span>
            <span className="skill-tag">CSS/Tailwind</span>
            <span className="skill-tag">Git</span>
            <span className="skill-tag">MongoDB</span>
            <span className="skill-tag">REST APIs</span>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="snap-section">
        <h2 className="section-title">Featured Projects</h2>
        <div className="projects-grid">
          <Noise
    patternSize={250}
    patternScaleX={2}
    patternScaleY={2}
    patternRefreshInterval={2}
    patternAlpha={15}
  />
          {projects.map((project, index) => (
            <div key={index} className="project-card">
              <h3 className="project-title">{project.title}</h3>
              <p className="project-description">{project.description}</p>
              <div className="project-tech">
                {project.tech.map((tech, i) => (
                  <span key={i} className="tech-badge">{tech}</span>
                ))}
              </div>
              <a href={project.link} className="project-link">
                View Project →
              </a>
            </div>
          ))}
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="snap-section">
        <h2 className="section-title">Get In Touch</h2>
        <div className="contact-content">
          <Noise
    patternSize={250}
    patternScaleX={2}
    patternScaleY={2}
    patternRefreshInterval={2}
    patternAlpha={15}
  />
          <p style={{ fontSize: '1.1rem', color: 'var(--text-light)', lineHeight: '1.8', marginBottom: '2rem' }}>
            I'm always interested in hearing about new projects and opportunities. 
            Whether you have a question or just want to say hi, feel free to reach out!
          </p>
          <div className="contact-info">
            <div className="contact-item">
              <span>📧</span>
              <a href="mailto:your.email@example.com">your.email@example.com</a>
            </div>
            <div className="contact-item">
              <span>💼</span>
              <a href="https://linkedin.com/in/yourprofile" target="_blank" rel="noopener noreferrer">LinkedIn</a>
            </div>
            <div className="contact-item">
              <span>🐙</span>
              <a href="https://github.com/yourusername" target="_blank" rel="noopener noreferrer">GitHub</a>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer>
        <p>© {new Date().getFullYear()} Your Name. Built with React.</p>
      </footer>
    </div>
  );
}