import React from 'react';
import '../styles/Footer.css'; // Ensure the path is correct

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-banner-container">
        <img src="/images/footer-banner.png" alt="Footer Banner" className="footer-banner" />
        <p className="footer-tagline">© 2024 Christi's Blog</p>
      </div>
    </footer>
  );
}

export default Footer;



