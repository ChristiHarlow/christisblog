import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import '../styles/Contact.css'; // Ensure the path to your CSS is correct

function Contact() {
  return (
    <div className="contact-container">
      <h2 className="contact-title">Contact Me</h2>
      <a href="mailto:christiharlow@outlook.com" className="contact-link">
        <FontAwesomeIcon icon={faEnvelope} />
        Email Me
      </a>
    </div>
  );
}

export default Contact;

