import React from 'react';
import profilePhoto from '../DSCF2312 (1).jpg';

function App() {
  return (
    <div className="portfolio">

      {/* PANELS */}
      <nav className="navbar">
        <img
          className="profile-photo"
          src={profilePhoto}
          alt="Francis Aban"
        />
        <h2 className="logo">My Portfolio</h2>

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
              Welcome to my personal portfolio! </p>
            <p>
              I am passionate about technology,
              programming, and web development.
            </p>

            <a href="#about" className="btn">
            </a>
          </div>

        </div>
      </section>

      {/* ABOUT */}
      <section id="about" className="about">
        <h1>About Me</h1>

        
<p>
  I am Francis P. Aban, currently pursuing a Bachelor of
  Science in Information Technology at Batangas State
  University – Balayan Campus.
</p>

<p>
  I was born on November 29, 2005, and reside in Sampaga,
  Balayan, Batangas. I completed my elementary education
  at Sampaga Elementary School and my junior high school
  education at Balayan National High School. I pursued
  the Information and Communications Technology (ICT)
  strand at Balayan Senior High School, where I graduated
  with High Honors.
</p>

<p>
  I am also a recipient of the Commission on Higher
  Education (CHED) Scholarship Program, which continues
  to support my academic journey throughout college.
</p>

<p>
  I am a dedicated and motivated individual with a strong
  passion for technology, programming, and innovation.
  I continuously seek opportunities to enhance my
  knowledge, develop my technical skills, and gain
  practical experience in web development and software
  engineering. I aspire to apply my skills to create
  meaningful and innovative technological solutions.
</p>


        <h2>My Skills</h2>

        <div className="skills">
          <p>HTML</p>
          <p>CSS</p>
          <p>JavaScript</p>
          <p>React</p>
          <p>Java</p>
          <p>Python</p>
          <p>MySQL</p>
          <p>Communication</p>
          <p>Management</p>
          <p>Public Speaking</p>
          <p>Leadership</p>
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
          <p>Email: francisaban2905@email.com</p>
          <p>Facebook: Francis Porras Aban (https://www.facebook.com/share/18ZWgdKEBM/)</p>
          <p>GitHub: https://github.com/FRANCISABAN</p>
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