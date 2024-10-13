import React from 'react';
import '../styles/Header.css'; // Ensure the path to your CSS file is correct

function Header() {
  return (
    <header className="header">
      <div className="header-banner-container">
        {/* Ensure the path to the banner image is correct */}
        <img src={process.env.PUBLIC_URL + '/images/header-banner.png'} alt="Banner" className="header-banner" />

        {/* Navbar positioned in the top-right of the banner */}
        <nav className="navbar">
          <a href="/about" className="nav-link">About</a>
          <div className="dropdown">
            <button className="nav-link dropdown-button">Blogs</button>
            <div className="dropdown-menu">
              <a href="/blogs/adversity" className="dropdown-item">Adversity</a>
              {/* Add more blog items here */}
            </div>
          </div>
          <a href="/contact" className="nav-link">Contact</a>
        </nav>
      </div>
    </header>
  );
}

export default Header;








