// src/components/Navbar.js
import React, { useState } from "react";
import { Link } from "react-router-dom";
import "../styles/Navbar.css";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="navbar" role="navigation" aria-label="Main">
      <ul className="navbar-list">
        <li>
          <Link to="/about" className="nav-link">About</Link>
        </li>

        <li className={`dropdown ${open ? "open" : ""}`}>
          <button
            className="nav-link dropdown-button"
            aria-expanded={open}
            aria-controls="posts-menu"
            onClick={() => setOpen(v => !v)}
          >
            Posts
          </button>
          <div id="posts-menu" className="dropdown-menu">
            <Link to="/posts/adversity" className="dropdown-item" onClick={() => setOpen(false)}>
              Adversity
            </Link>
            <Link to="/posts/self-advocacy" className="dropdown-item" onClick={() => setOpen(false)}>
              Self-Advocacy
            </Link>
          </div>
        </li>

        <li>
          <Link to="/contact" className="nav-link">Contact</Link>
        </li>
      </ul>
    </nav>
  );
}



