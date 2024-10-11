import React from 'react';
import '../styles/Header.css'; // Ensure the path is correct

function Header() {
  return (
    <header className="header">
     <div className="header-art-container">
        <img src="/images/blog-art.png" alt="Blog Art" className="header-art" />
      </div>
      <h1 className="header-title">Christi's Blog</h1> {/* Keep it simple */}
      <p className="header-tagline">Sharing experiences on healing, growth, and life challenges</p>
    </header>
  );
}

export default Header;




