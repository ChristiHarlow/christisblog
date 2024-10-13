import React from 'react';
import '../styles/Header.css'; // Make sure your styles are correctly imported

function Header() {
  return (
    <header className="header">
      <div className="header-content">
        {/* Header Image */}
        <div className="header-art-container">
          <img src="/images/canva-header.png" alt="Blog Art" className="header-art" />
        </div>
        {/* Navbar */}
        <nav className="navbar">
          <a href="/about" className="nav-link">About</a>
          <a href="/team" className="nav-link">Team</a>
          <a href="/home" className="nav-link">Home</a>
          <button className="menu-button">☰</button> {/* Optional menu button */}
        </nav>
      </div>
    </header>
  );
}

export default Header;




