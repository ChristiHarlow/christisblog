import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/Navbar.css'; // Ensure the path is correct

function Navbar() {
  return (
    <nav>
      <ul>
        <li><Link to="/">Header</Link></li> {/* Changed Home to Header */}
        <li><Link to="/about">About</Link></li>
        <li><Link to="/blog">Blog</Link></li>
        <li><Link to="/adversity">Adversity</Link></li>
      </ul>
    </nav>
  );
}

export default Navbar;

