import React from 'react';
import '../styles/Header.css'; // Ensure the path to your CSS is correct

function Header() {
  return (
    <header className="header">
      <div className="header-banner-container">
        <img src={process.env.PUBLIC_URL + '/images/header-banner.png'} alt="Banner" className="header-banner" />
      </div>
    </header>
  );
}

export default Header;










