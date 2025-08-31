import React from 'react';
import '../styles/Footer.css';

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-banner-container">
        {/* Optional: add a footer image just like header */}
        {/* <img 
          src={process.env.PUBLIC_URL + '/images/footer-banner.png'} 
          alt="Footer Banner" 
          className="footer-banner" 
        /> */}
        <div className="footer-text-overlay">
          <p className="footer-tagline">© 2025 Christi's Blog</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;





