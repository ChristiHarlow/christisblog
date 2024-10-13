import React from 'react';
import '../styles/Header.css'; // Ensure the path is correct

function Header() {
  return (
    <header className="header">
     <div className="header-art-container">
        <img src="/images/canva-header.png" alt="Blog Art" className="header-art" />
      </div>
    </header>
  );
}

export default Header;




