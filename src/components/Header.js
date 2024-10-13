import React from 'react';
import '../styles/Header.css'; // Ensure correct path to CSS file

function Header() {
  return (
    <header className="header">
      {/* Banner Image */}
      <div className="header-banner-container">
        <img src="/images/headernpr-banner.png" alt="Banner" className="header-banner" />

        {/* Overlaying Navbar Links */}
        <nav className="overlay-navbar">
          <a href="/about" className="overlay-link" style={{ top: '50px', left: '100px' }}>About</a>
          <a href="/team" className="overlay-link" style={{ top: '50px', left: '250px' }}>Team</a>
          <a href="/home" className="overlay-link" style={{ top: '50px', left: '400px' }}>Home</a>
        </nav>
      </div>
    </header>
  );
}

export default Header;




