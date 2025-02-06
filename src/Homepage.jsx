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
        <h3>Front-End Developer</h3>
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
<section id="experience" className="experience">
  <h2>Experience</h2>
  <div className="timeline">
    <div className="experience-item">
      <h3>Front-End Developer Intern</h3>
      <p>XYZ Company (2023 - Present)</p>
    </div>
    <div className="experience-item">
      <h3>Web Developer Intern</h3>
      <p>ABC Tech Solutions (2022 - 2023)</p>
    </div>
    <div className="experience-item">
      <h3>Freelance Developer</h3>
      <p>Worked on multiple projects (2021 - Present)</p>
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
  <h2>Contact</h2>
  <p>Email: azeemvalli843@gmail.com</p>
  <p>Phone: +91-9989829615</p>
  <div className="social-links">
    <a href="https://www.linkedin.com/in/shaik-azeem-valli-8053a4243/" target="_blank" rel="noopener noreferrer">
      <FaLinkedin className="social-icon linkedin" />
    </a>
    <a href="https://www.instagram.com/your_instagram" target="_blank" rel="noopener noreferrer">
      <FaInstagram className="social-icon instagram" />
    </a>
  </div>
</section>
    </div>
  );
};

export default Homepage;
