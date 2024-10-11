import React from 'react';
import '../styles/Footer.css'; // Ensure correct path to CSS

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-content">
        <p>© 2024 Christi's Blog. All Rights Reserved.</p>
        <p className="footer-tagline">Healing and Growth Through Life's Challenges</p>
        <img src="/images/blog-art.png" alt="Blog Art" className="footer-art" /> {/* Use blog-art.png */}
      </div>
    </footer>
  );
}

export default Footer;