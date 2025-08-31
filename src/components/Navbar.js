
import React from "react";
import "../styles/Navbar.css";

function Navbar() {
  return (
    <nav className="navbar">
      <ul className="navbar-list">
        <li><Link to="/about" className="nav-link">About</Link></li>

        <li className="dropdown">
          <button className="nav-link dropdown-button">Posts</button>
          <div className="dropdown-menu">
            <Link to="/posts/adversity" className="dropdown-item">Adversity</Link>
            <Link to="/posts/self-advocacy" className="dropdown-item">Self-Advocacy</Link>
          </div>
        </li>
         
        <li><Link to="/contact" className="nav-link">Contact</Link></li>
      </ul>
    </nav>
  );
}



