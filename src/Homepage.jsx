import React, { useState } from "react";
import "./App.css";
import azeem from "./images/Azeem.jpg";
import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer, LabelList } from "recharts";
import { FaLinkedin, FaInstagram, FaBars, FaTimes } from "react-icons/fa";

const skillsData = [
  { name: "HTML", level: 95 },
  { name: "CSS", level: 90 },
  { name: "JavaScript", level: 85 },
  { name: "ReactJS", level: 80 },
  { name: "Bootstrap", level: 75 },
  { name: "Core Java", level: 65 },
  { name: "Python", level: 60 }
];

const Homepage = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  const scrollToSection = (id) => {
    document.getElementById(id).scrollIntoView({ behavior: "smooth" });
    setIsSidebarOpen(false);
  };

  return (
    <div>
      {/* Navbar */}
      <nav className="navbar">
        <h2 className="logo">SHAIK AZEEM VALLI</h2>
        <ul className={isSidebarOpen ? "nav-links nav-active" : "nav-links"}>
          <li onClick={() => scrollToSection("about")}>About</li>
          <li onClick={() => scrollToSection("skills")}>Skills</li>
          <li onClick={() => scrollToSection("experience")}>Experience</li>
          <li onClick={() => scrollToSection("projects")}>Projects</li>
          <li onClick={() => scrollToSection("contact")}>Contact</li>
        </ul>
        <div className="menu-icon" onClick={toggleSidebar}>
          {isSidebarOpen ? <FaTimes /> : <FaBars />}
        </div>
      </nav>

      {/* Header Section */}
      <header className="intro">
  <h1 className="animated-text">SHAIK AZEEM VALLI</h1>
  <h3 className="front-end-title">Front-End Developer</h3>
</header>

   {/* About Section */}
<section id="about" className="about">
  <div className="about-container">
    <h2>About Me</h2>
    <img src={azeem} alt="Shaik Azeem Valli" className="profile-pic" />
    <p>
      I am a passionate Front-End Developer based in Bangalore with expertise in HTML, CSS, JavaScript, ReactJS, and Bootstrap.
    </p>
  </div>
</section>


     {/* Skills Section */}
{/* Skills Section */}
<section id="skills" className="skills">
        <h2>My Skills</h2>
        <div className="skills-container">
          <ResponsiveContainer width="100%" height={350}>
            <BarChart data={skillsData} layout="vertical">
              <defs>
                <linearGradient id="goldGradient" x1="0" y1="0" x2="1" y2="0">
                  <stop offset="0%" stopColor="#FFD700" />
                  <stop offset="100%" stopColor="#FFAA00" />
                </linearGradient>
              </defs>
              <XAxis type="number" hide />
              <YAxis dataKey="name" type="category" width={100} />
              <Tooltip cursor={{ fill: "rgba(255, 215, 0, 0.1)" }} />
              <Bar dataKey="level" fill="url(#goldGradient)" barSize={30} radius={[10, 10, 0, 0]}>
                <LabelList dataKey="level" position="right" fill="#FFD700" fontSize={14} />
              </Bar>
            </BarChart>
          </ResponsiveContainer>
        </div>
      </section>

    {/* Experience Section */}
    {/* Experience Section */}
<section className="experience">
  <div className="experience-container">
    <h2 className="section-title">Experience</h2>
    <div className="experience-cards">
      <div className="experience-card">
        <div className="card-header">
          <div className="role">
            <i className="icon fas fa-briefcase"></i>
            <h3>Business Analyst Internship</h3>
          </div>
          <p className="company-name">Company XYZ</p>
        </div>
        <div className="card-body">
          <p className="duration">June 2023 - August 2023</p>
          <p className="description">Worked with Power BI to analyze data and provide actionable insights for business optimization.</p>
        </div>
      </div>

      <div className="experience-card">
        <div className="card-header">
          <div className="role">
            <i className="icon fas fa-code"></i>
            <h3>Front-End Web Developer Intern</h3>
          </div>
          <p className="company-name">Tech Solutions</p>
        </div>
        <div className="card-body">
          <p className="duration">September 2023 - November 2023</p>
          <p className="description">Developed interactive websites using React, HTML, CSS, and JavaScript, focusing on user experience.</p>
        </div>
      </div>

      {/* New Experience Entry */}
      <div className="experience-card">
        <div className="card-header">
          <div className="role">
            <i className="icon fas fa-code"></i>
            <h3>Front-End Developer Intern</h3>
          </div>
          <p className="company-name">Your Company Name</p>
        </div>
        <div className="card-body">
          <p className="duration">February 2024 - June 2024</p>
          <p className="description">
            Developed and maintained responsive web pages using HTML, CSS, JavaScript, and ReactJS. Collaborated with the design team to implement UI/UX designs.
          </p>
        </div>
      </div>

      {/* Add more experience entries here as needed */}
    </div>
  </div>
</section>

{/* Projects Section */}
<section id="projects" className="projects">
  <h2>Projects</h2>
  <div className="project-grid">
    <div className="project-card">Men's Collection</div>
    <div className="project-card">Tredences</div>
    <div className="project-card">Portfolio</div>
    <div className="project-card">E-Commerce Website</div>
      </div>
</section>

     {/* Contact Section */}
<section id="contact" className="contact">
  <h2>Contact Me</h2>
  <p>Email: azeemvalli843@gmail.com</p>
  <p>Phone: +91-9989829615</p>
  <div className="social-links">
    <a href="https://www.linkedin.com/in/shaik-azeem-valli-8053a4243/" target="_blank" rel="noopener noreferrer">
      <FaLinkedin className="social-icon linkedin" />
    </a>
    <a href="https://www.instagram.com/nature_lover_azeem/" target="_blank" rel="noopener noreferrer">
      <FaInstagram className="social-icon instagram" />
    </a>
  </div>
</section>
    </div>
  );
};

export default Homepage;
