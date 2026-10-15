import React from 'react';
import "./style.css";

function App() {
  return (
    <div className="portfolio">

      {/* PANELS */}
      <nav className="navbar">
        <img
          className="profile-photo"
          src="/BSCF2312.jpg"
          alt="Francis Aban"
        />
        <h2 className="logo">MyPortfolio.</h2>

        <div className="nav-links">
          <a href="#home">Home</a>
          <a href="#about">About</a>
          <a href="#projects">Projects</a>
          <a href="#contact">Contact</a>
        </div>
      </nav>

      {/* HOME */}
      <section id="home" className="home">
        <div className="home-content">

          <div className="home-text">
            <h3>Hello, I'm</h3>
            <h1>Francis P. Aban</h1>
            <h2>BS Information Technology Student</h2>

            <p>
              Welcome to my personal portfolio!
              I am passionate about technology,
              programming, and web development.
            </p>

            <a href="#about" className="btn">
              Discover More
            </a>
          </div>

        </div>
      </section>

      {/* ABOUT */}
      <section id="about" className="about">
        <h1>About Me</h1>

        <p>
          I am Francis P. Aban, a Bachelor of Science
          in Information Technology student at
          Batangas State University - Balayan Campus.
        </p>

        <h2>My Skills</h2>

        <div className="skills">
          <span>HTML</span>
          <span>CSS</span>
          <span>JavaScript</span>
          <span>React</span>
          <span>Java</span>
          <span>Python</span>
          <span>MySQL</span>
        </div>
      </section>

      {/* PROJECTS */}
      <section id="projects" className="projects">
        <h1>My Projects</h1>

        <div className="project-container">

          <div className="project-card">
            <h2>JobLink</h2>
            <p>
              A barangay-based employment registry
              and job matching system.
            </p>
          </div>

          <div className="project-card">
            <h2>EcoScan</h2>
            <p>
              A waste classification and reward
              management system.
            </p>
          </div>

          <div className="project-card">
            <h2>AUTOTRACK</h2>
            <p>
              A web-based inventory and sales
              management system.
            </p>
          </div>

        </div>
      </section>

      {/* CONTACT */}
      <section id="contact" className="contact">
        <h1>Contact Me</h1>

        <p>
          Interested in connecting? Feel free
          to reach out!
        </p>

        <div className="contact-info">
          <p>Email: your-email@example.com</p>
          <p>Facebook: Your Facebook</p>
          <p>GitHub: Your GitHub</p>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="footer">
        <p>© 2026 Francis P. Aban. All Rights Reserved.</p>
      </footer>

    </div>
  );
}

export default App;