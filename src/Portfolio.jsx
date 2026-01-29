import React, { useState, useEffect } from 'react';

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
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Crimson+Pro:wght@300;400;600&family=DM+Sans:wght@400;500;700&display=swap');
        
        * {
          margin: 0;
          padding: 0;
          box-sizing: border-box;
        }

        :root {
          --primary: #0a0a0a;
          --secondary: #f5f5f5;
          --accent: #2d5c8f;
          --text: #1a1a1a;
          --text-light: #666;
          --border: #e0e0e0;
        }

        /* SCROLL-SNAP CONFIGURATION */
        html {
          scroll-behavior: smooth;
          scroll-snap-type: y proximity; /* Use 'mandatory' for stricter snapping */
        }

        body {
          font-family: 'DM Sans', sans-serif;
          color: var(--text);
          background: var(--secondary);
          overflow-x: hidden;
        }

        .portfolio {
          min-height: 100vh;
        }

        /* Snap sections with internal scrolling capability */
        .snap-section {
          scroll-snap-align: start;
          scroll-snap-stop: normal; /* Allows scrolling through long sections */
          min-height: 100vh;
          position: relative;
        }

        /* Navigation */
        nav {
          position: fixed;
          top: 0;
          left: 0;
          right: 0;
          z-index: 1000;
          padding: 2rem 5%;
          display: flex;
          justify-content: space-between;
          align-items: center;
          transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
        }

        nav.scrolled {
          background: rgba(245, 245, 245, 0.95);
          backdrop-filter: blur(10px);
          padding: 1.2rem 5%;
          box-shadow: 0 1px 0 var(--border);
        }

        .logo {
          font-family: 'Crimson Pro', serif;
          font-size: 1.5rem;
          font-weight: 600;
          color: var(--primary);
          letter-spacing: -0.02em;
        }

        .nav-links {
          display: flex;
          gap: 2.5rem;
          list-style: none;
        }

        .nav-links a {
          color: var(--text);
          text-decoration: none;
          font-size: 0.95rem;
          font-weight: 500;
          position: relative;
          transition: color 0.3s;
        }

        .nav-links a::after {
          content: '';
          position: absolute;
          bottom: -4px;
          left: 0;
          width: 0;
          height: 1px;
          background: var(--accent);
          transition: width 0.3s cubic-bezier(0.4, 0, 0.2, 1);
        }

        .nav-links a:hover::after,
        .nav-links a.active::after {
          width: 100%;
        }

        .nav-links a.active {
          color: var(--accent);
        }

        /* Hero Section */
        .hero {
          min-height: 100vh;
          display: flex;
          align-items: center;
          padding: 0 5%;
          position: relative;
          overflow: hidden;
        }

        .hero::before {
          content: '';
          position: absolute;
          top: -50%;
          right: -20%;
          width: 80%;
          height: 150%;
          background: radial-gradient(circle, rgba(45, 92, 143, 0.05) 0%, transparent 70%);
          animation: float 20s ease-in-out infinite;
        }

        @keyframes float {
          0%, 100% { transform: translate(0, 0) rotate(0deg); }
          50% { transform: translate(-30px, -30px) rotate(5deg); }
        }

        .hero-content {
          max-width: 800px;
          position: relative;
          z-index: 1;
          animation: fadeInUp 1s ease-out;
        }

        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .hero-subtitle {
          font-size: 1rem;
          color: var(--accent);
          font-weight: 500;
          margin-bottom: 1rem;
          letter-spacing: 0.1em;
          text-transform: uppercase;
          animation: fadeInUp 1s ease-out 0.2s both;
        }

        .hero-title {
          font-family: 'Crimson Pro', serif;
          font-size: 5rem;
          font-weight: 600;
          line-height: 1.1;
          margin-bottom: 1.5rem;
          color: var(--primary);
          letter-spacing: -0.03em;
          animation: fadeInUp 1s ease-out 0.4s both;
        }

        .hero-description {
          font-size: 1.25rem;
          color: var(--text-light);
          line-height: 1.8;
          margin-bottom: 3rem;
          max-width: 600px;
          animation: fadeInUp 1s ease-out 0.6s both;
        }

        .cta-button {
          display: inline-block;
          padding: 1rem 2.5rem;
          background: var(--primary);
          color: white;
          text-decoration: none;
          font-weight: 500;
          transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
          border: 2px solid var(--primary);
          animation: fadeInUp 1s ease-out 0.8s both;
        }

        .cta-button:hover {
          background: transparent;
          color: var(--primary);
          transform: translateY(-2px);
        }

        /* Section Styles */
        section {
          padding: 8rem 5%;
          position: relative;
        }

        .section-title {
          font-family: 'Crimson Pro', serif;
          font-size: 3rem;
          font-weight: 600;
          margin-bottom: 3rem;
          color: var(--primary);
          letter-spacing: -0.02em;
        }

        /* About Section */
        .about-content {
          max-width: 800px;
          line-height: 1.9;
          font-size: 1.1rem;
          color: var(--text-light);
        }

        .about-content p {
          margin-bottom: 1.5rem;
        }

        .skills {
          display: flex;
          flex-wrap: wrap;
          gap: 1rem;
          margin-top: 2rem;
        }

        .skill-tag {
          padding: 0.6rem 1.2rem;
          background: white;
          border: 1px solid var(--border);
          font-size: 0.9rem;
          font-weight: 500;
          transition: all 0.3s;
        }

        .skill-tag:hover {
          border-color: var(--accent);
          transform: translateY(-2px);
        }

        /* Projects Section */
        .projects-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
          gap: 2rem;
        }

        .project-card {
          background: white;
          padding: 2rem;
          border: 1px solid var(--border);
          transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
          position: relative;
        }

        .project-card::before {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          width: 0;
          height: 2px;
          background: var(--accent);
          transition: width 0.4s cubic-bezier(0.4, 0, 0.2, 1);
        }

        .project-card:hover {
          transform: translateY(-8px);
          box-shadow: 0 20px 40px rgba(0, 0, 0, 0.08);
        }

        .project-card:hover::before {
          width: 100%;
        }

        .project-title {
          font-family: 'Crimson Pro', serif;
          font-size: 1.5rem;
          font-weight: 600;
          margin-bottom: 1rem;
          color: var(--primary);
        }

        .project-description {
          color: var(--text-light);
          line-height: 1.7;
          margin-bottom: 1.5rem;
        }

        .project-tech {
          display: flex;
          flex-wrap: wrap;
          gap: 0.5rem;
          margin-bottom: 1.5rem;
        }

        .tech-badge {
          padding: 0.3rem 0.8rem;
          background: var(--secondary);
          font-size: 0.85rem;
          color: var(--text);
        }

        .project-link {
          color: var(--accent);
          text-decoration: none;
          font-weight: 500;
          display: inline-flex;
          align-items: center;
          gap: 0.5rem;
          transition: gap 0.3s;
        }

        .project-link:hover {
          gap: 1rem;
        }

        /* Contact Section */
        .contact-content {
          max-width: 600px;
        }

        .contact-info {
          display: flex;
          flex-direction: column;
          gap: 1.5rem;
          margin-top: 2rem;
        }

        .contact-item {
          display: flex;
          align-items: center;
          gap: 1rem;
          font-size: 1.1rem;
          color: var(--text-light);
        }

        .contact-item a {
          color: var(--accent);
          text-decoration: none;
          transition: color 0.3s;
        }

        .contact-item a:hover {
          color: var(--primary);
        }

        /* Footer */
        footer {
          padding: 3rem 5%;
          border-top: 1px solid var(--border);
          text-align: center;
          color: var(--text-light);
        }

        /* Mobile Responsive */
        @media (max-width: 768px) {
          .nav-links {
            gap: 1.5rem;
          }

          .hero-title {
            font-size: 3rem;
          }

          .hero-description {
            font-size: 1.1rem;
          }

          .section-title {
            font-size: 2.5rem;
          }

          .projects-grid {
            grid-template-columns: 1fr;
          }

          nav {
            padding: 1.5rem 5%;
          }
        }

        @media (max-width: 480px) {
          .hero-title {
            font-size: 2.5rem;
          }

          .nav-links {
            display: none;
          }
        }
      `}</style>

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