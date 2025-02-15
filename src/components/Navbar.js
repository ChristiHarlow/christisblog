import React from 'react';
import { NavLink } from 'react-router-dom'; // Import NavLink
import '../styles/Navbar.css';

function Navbar() {
  return (
    <nav className="navbar">
      <ul className="navbar-list">
        <li>
          <NavLink to="/about" className="nav-link">  {/* Use NavLink */}
            About
          </NavLink>
        </li>
        <li>
          <NavLink to="/blogs" className="nav-link">  {/* Use NavLink */}
            Blogs
          </NavLink>
        </li>
        <li>
          <NavLink to="/contact" className="nav-link"> {/* Use NavLink */}
            Contact
          </NavLink>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;


