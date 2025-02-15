import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import Masonry from 'react-masonry-css'; // Install: npm install react-masonry-css
import '../styles/Contact.css';

function Contact() {
  const breakpointColumnsObj = {
    default: 3, // 3 columns on large screens
    1100: 2, // 2 columns on medium screens
    700: 1, // 1 column on small screens
  };

  const images = [
      {src: "/images/image1.png", alt: "Image 1"},
      {src: "/images/image2.png", alt: "Image 2"},
      {src: "/images/image3.png", alt: "Image 3"},
      //... more images
  ];

  return (
    <div className="contact-container">
      <div className="contact-info"> {/* Container for contact info */}
        <h2 className="contact-title">Contact Me</h2>
        <a href="mailto:christiaharlow@outlook.com" className="contact-link">
          <FontAwesomeIcon icon={faEnvelope} />
          Email Me
        </a>
      </div>

      <Masonry
        breakpointCols={breakpointColumnsObj}
        className="my-masonry-grid"
        columnClassName="my-masonry-grid_column">
        {images.map((image, index) => (
          <div key={index}> {/* Important: Add a unique key */}
            <img src={image.src} alt={image.alt} style={{ width: '100%', display: 'block' }} />
          </div>
        ))}
      </Masonry>
    </div>
  );
}

export default Contact;

