import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/Navbar.css';

function Navbar() {
  return (
    <nav className="navbar">
      <ul className="navbar-list">
        <li><Link to="/about" className="nav-link">About</Link></li>
        <li><Link to="/blogs" className="nav-link">Blogs</Link></li> {/* No more Posts */}
        <li><Link to="/contact" className="nav-link">Contact</Link></li>
      </ul>
    </nav>
  );
}

export default Navbar;


