import React from 'react';
import '../styles/Header.css';

function Header() {
  return (
    <header className="header">
      <div className="header-banner-container">
        <img src={process.env.PUBLIC_URL + '/images/image.png'} alt="Header Banner" className="header-banner" /> {/* Add the image */}
        <h1 className="blog-title"></h1>
      </div>
    </header>
  );
}

export default Header;










