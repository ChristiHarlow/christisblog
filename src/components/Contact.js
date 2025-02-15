import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import '../styles/Contact.css';
  
  return (
    <div className="contact-container">
      <div className="contact-info"> {/* Container for contact info */}
        <h2 className="contact-title">Contact Me</h2>
        <a href="mailto:christiaharlow@outlook.com" className="contact-link">
          <FontAwesomeIcon icon={faEnvelope} />
          Email Me
        </a>
      </div>

      
    </div>
  );
}

export default Contact;

