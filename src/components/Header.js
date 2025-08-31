import React from 'react';
import '../styles/Header.css';

function Header() {
  return (
    <header className="header">
      
        <img 
          src={process.env.PUBLIC_URL + '/images/image.png'} 
          alt="Header Banner" 
          className="header-banner" 
        />
        <div className="header-text-overlay">
          <h1 className="blog-title">Christi’s Blog</h1>
        </div>
      
    </header>
  );
}

export default Header;










