import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import '../styles/Navbar.css'; // Ensure the path to the CSS is correct

function Navbar() {
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setDropdownOpen(!dropdownOpen);
  };

  return (
    <nav className="navbar">
      <ul className="navbar-list">
        <li><Link to="/about" className="nav-link">About</Link></li>
        
        {/* Posts with dropdown for Adversity */}
        <li className="dropdown" onMouseEnter={toggleDropdown} onMouseLeave={toggleDropdown}>
          <button className="nav-link dropdown-button">Posts</button>
          {dropdownOpen && (
            <div className="dropdown-menu">
              <Link to="/posts/adversity" className="dropdown-item">Adversity</Link>
              {/* Add more blog post links here as needed */}
            </div>
          )}
        </li>

        <li><Link to="/blogs" className="nav-link">Blogs</Link></li>
        <li><Link to="/contact" className="nav-link">Contact</Link></li>
      </ul>
    </nav>
  );
}

export default Navbar;

