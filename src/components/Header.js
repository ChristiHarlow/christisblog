import React from 'react';
import '../styles/Header.css'; // Ensure the path is correct

function Header() {
  return (
    <header className="header">
    <h1 className="header-title">Christi's Blog</h1> {/* Keep it simple */}
     <div className="header-art-container">
        <img src="/images/canva-header.png" alt="Blog Art" className="header-art" />
      </div>
    <p className="header-tagline">Sharing experiences on healing, growth, and life challenges</p>
    </header>
  );
}

export default Header;




