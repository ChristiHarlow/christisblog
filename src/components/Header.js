import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/Header.css'; // Ensure the path is correct

function Header() {
  return (
    <header className="header">
      <h1 className="header-title">Christi's Blog</h1>
      <nav className="navbar">
        <ul>
          <li><Link to="/">About</Link></li>
          <li><Link to="/blog">Blog</Link></li>
          <li><Link to="/blog/adversity">Adversity</Link></li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;




