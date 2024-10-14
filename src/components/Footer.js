import React from 'react';
import '../styles/Footer.css'; // Ensure the path is correct

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-art-container">
        <img src="/images/canva-footer.png" alt="Footer Banner" className="footer-art" />
      </div>
      <p className="footer-tagline">© 2024 Christi's Blog</p>
    </footer>
  );
}

export default Footer;

