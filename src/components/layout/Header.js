import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header className="header">
      <nav className="navbar">
        <ul className="nav-list">
          <li><Link to="/" data-aos="fade-down">Home</Link></li>
          <li><Link to="/about" data-aos="fade-down">About Me</Link></li>
          <li><Link to="/projects" data-aos="fade-down">Projects</Link></li>
          <li><Link to="/certificates" data-aos="fade-down">Certificates</Link></li>
          <li><Link to="/contact" data-aos="fade-down">Contact</Link></li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;