import React from "react";
import azeem from "./images/Azeem.jpg";

const Homepage = () => {
  return (
    <>
      <div className="intro">
        <h1>SHAIK AZEEM VALLI</h1>
        <h3>Front-End Developer</h3>
      </div>

      <div className="about-section">
        <article>About Me</article>
        <img src={azeem} alt="Shaik Azeem Valli" className="profile-pic" />

        <p>
          I am Shaik Azeem Valli, a passionate Front-End Developer based in
          Bangalore with a B.Sc. in Biotechnology from Shri Gnanambica Degree
          College, Madanapalli. My technical expertise includes HTML, CSS,
          JavaScript, ReactJS, and Bootstrap, along with basic knowledge of Core
          Java, Java AWT, and Python. I have gained experience through
          internships in Power BI (Business Analysis) and HR, which have helped
          me develop analytical and problem-solving skills. I have worked on
          projects like a Fashion Billing System and a React-based Women's
          Collection Display, focusing on creating responsive and user-friendly
          web applications. Currently, I am working on a front-end development
          project and am always eager to learn new technologies and improve my
          abilities to create seamless web experiences.
        </p>
      </div>
    </>
  );
};

export default Homepage;
