import React from 'react';
import '../styles/Header.css'; // Ensure the path to CSS is correct

function Header() {
  return (
    <header className="header">
      {/* Correct path to your header image */}
      <div className="header-banner-container">
        <img src={process.env.PUBLIC_URL + '/images/header-banner.png'} alt="Banner" className="header-banner" />
        {/* Navbar */}
        <nav className="navbar">
          <a href="/about" className="nav-link">About</a>
          <div className="dropdown">
            <button className="nav-link dropdown-button">Blogs</button>
            <div className="dropdown-menu">
              <a href="/blogs/adversity" className="dropdown-item">Adversity</a>
              {/* Add more blog links here */}
            </div>
          </div>
          <a href="/contact" className="nav-link">Contact</a>
        </nav>
      </div>
    </header>
  );
}

export default Header;






