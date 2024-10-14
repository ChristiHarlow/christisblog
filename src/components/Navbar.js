import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/Navbar.css'; // Ensure the path to the CSS is correct

function Navbar() {
  return (
    <nav className="navbar">
      <Link to="/about" className="nav-link">About</Link>
      <div className="dropdown">
        <button className="nav-link dropdown-button">Blogs</button>
        <div className="dropdown-menu">
          <Link to="/blogs/adversity" className="dropdown-item">Adversity</Link>
          {/* Add more blog links here */}
        </div>
      </div>
      <Link to="/contact" className="nav-link">Contact</Link>
    </nav>
  );
}

export default Navbar;
