import React from "react";
import profileImage from '../assets/images/profile_image.jpg';


const About = () => {
  return (
    <div className="about-container">
      <h1 data-aos="fade-up" className="title">About Me</h1>
      <img src={profileImage} alt="Profile" className="profile-image" />
      <p data-aos="fade-left" className="about-text">
        I am Pasha Pashazade, a dynamic and results-driven software engineer with extensive experience in software development 
        and project management. My deep knowledge of .NET, Azure, and associated technologies is backed by Microsoft certifications.
        I specialize in automating development processes and implementing CI/CD, significantly improving product efficiency and quality.
        My strong collaboration skills allow me to effectively lead projects to successful completion, even in international teams.
      </p>
      <h3 data-aos="fade-up" className="subtitle">Work Experience</h3>
      <p data-aos="fade-left" className="experience-text">Currently working as a Software Engineer at Novum LS, providing full-spectrum software support using .NET and Azure.</p>
      <p data-aos="fade-left" className="experience-text">Past experiences include positions at Matrix Training Center and Azerconnect LLC.</p>
      <h3 data-aos="fade-up" className="subtitle">Skills</h3>
      <p data-aos="fade-right" className="skills-text">Here are some of the skills I bring to my projects:</p>
      <ul data-aos="fade-up" className="skills-list">
        <li>C#, Java, JavaScript, TypeScript</li>
        <li>.NET, ASP.NET Core, React, Redux, Spring Boot</li>
        <li>Azure Services: App Services, Azure DevOps, Functions</li>
        <li>Experience with CI/CD automation, unit testing, and Docker</li>
      </ul>
    </div>
  );
};

export default About;