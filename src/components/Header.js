import React from 'react';
import '../styles/Header.css'; // Ensure the path is correct

function Header() {
  return (
    <header className="header">
    <img src="/images/blog-art.png" alt="Blog Art" className="header-art" /> {/* Use blog-art.png */}
      <h1 className="header-title">Christi's Blog</h1> {/* Keep it simple */}
    </header>
  );
}

export default Header;




