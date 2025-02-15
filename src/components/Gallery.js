import React from 'react';
import Masonry from 'react-masonry-css';
import '../styles/Gallery.css'; // Create this CSS file for styling

function Gallery() {
  const breakpointColumnsObj = {
    default: 3,
    1100: 2,
    700: 1
  };

  // Replace with your actual image paths and alt text
  const images = [

    { src: '/images/png', alt: '' },
    { src: '/images/png', alt: '' },
    {src: '/images/png', alt: '' },
    {src: '/images/png', alt: '' },
    {src: '/images/png', alt: '' },
    
    //... more images
  ];

  return (
    <div className="gallery-container">
      <Masonry
        breakpointCols={breakpointColumnsObj}
        className="my-masonry-grid"
        columnClassName="my-masonry-grid_column"
      >
        {images.map((image, index) => (
          <div key={index}>
            <img src={image.src} alt={image.alt} style={{ width: '100%' }} />
          </div>
        ))}
      </Masonry>
    </div>
  );
}

export default Gallery;