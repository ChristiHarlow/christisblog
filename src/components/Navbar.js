import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/Navbar.css'; // Ensure the path to the CSS is correct

function Navbar() {
  return (
    <nav className="navbar">
      <ul className="navbar-list">
        <li><Link to="/about" className="navbar-link">About</Link></li>
        <li><Link to="/blog" className="navbar-link">Blog</Link></li>
        <li><Link to="/adversity" className="navbar-link">Adversity</Link></li>
      </ul>
    </nav>
  );
}

export default Navbar;

