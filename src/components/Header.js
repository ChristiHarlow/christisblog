import React, { useState } from 'react';
import '../styles/Header.css'; // Ensure correct path to CSS file

function Header() {
  const [dropdownVisible, setDropdownVisible] = useState(false);

  const toggleDropdown = () => {
    setDropdownVisible(!dropdownVisible);
  };

  return (
    <header className="header">
      {/* Header with Banner */}
      <div className="header-banner-container">
        <img src="/images/your-banner.png" alt="Banner" className="header-banner" />
        {/* Navbar */}
        <nav className="navbar">
          <a href="/about" className="nav-link">About</a>
          <div className="dropdown">
            <button className="nav-link dropdown-button" onClick={toggleDropdown}>Blogs</button>
            {dropdownVisible && (
              <div className="dropdown-menu">
                <a href="/blogs/adversity" className="dropdown-item">Adversity</a>
                {/* Add more blogs here */}
              </div>
            )}
          </div>
          <a href="/contact" className="nav-link">Contact</a>
        </nav>
      </div>
    </header>
  );
}

export default Header;





