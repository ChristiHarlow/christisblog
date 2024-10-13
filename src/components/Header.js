import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/Header.css'; // Ensure the path to your CSS is correct

function Header() {
  return (
    <header className="header">
      <div className="header-banner-container">
        <img src={process.env.PUBLIC_URL + '/images/header-banner.png'} alt="Banner" className="header-banner" />
        {/* Navbar inside the header */}
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
      </div>
    </header>
  );
}

export default Header;










