import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/Navbar.css'; // Ensure the path to the CSS is correct

function Navbar() {
  return (
    <nav className="navbar">
      <ul className="navbar-list">
        <li><Link to="/about" className="nav-link">About</Link></li>
        
        {/* Posts with dropdown for Adversity */}
        <li className="dropdown">
          <button className="nav-link dropdown-button">Posts</button>
          <div className="dropdown-menu">
            <Link to="/posts/adversity" className="dropdown-item">Adversity</Link>
            <Link to="/posts/self-advocacy" className="dropdown-item">Self-Advocacy</Link>
            {/* Add more blog post links here as needed */}
          </div>
        </li>

        <li><Link to="/blogs" className="nav-link">Blogs</Link></li>
        <li><Link to="/contact" className="nav-link">Contact</Link></li>
      </ul>
    </nav>
  );
}

export default Navbar;


