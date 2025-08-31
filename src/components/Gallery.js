import React from 'react';
import Masonry from 'react-masonry-css';
import '../styles/Gallery.css';

function Gallery() {
  const breakpointColumnsObj = {
    default: 3,
    1100: 2,
    700: 1
  };

  const quotes = [
    { text: "Healing and growth often begin where comfort ends.", author: "Christi A. Harlow" },
    { text: "Self-advocacy isn’t noise; it’s the sound of dignity.", author: "Christi A. Harlow" },
    { text: "Design is care made visible. Code is care made reliable.", author: "Christi A. Harlow" },
    { text: "Peace of mind begins when comparison ends.", author: "Unknown" },
    { text: "Your voice matters. Don’t let anyone silence it.", author: "Christi A. Harlow" },
    // add more quotes here
  ];

  return (
    <div className="gallery-container">
      <Masonry
        breakpointCols={breakpointColumnsObj}
        className="my-masonry-grid"
        columnClassName="my-masonry-grid_column"
      >
        {quotes.map((quote, index) => (
          <div key={index} className="quote-card">
            <p className="quote-text">“{quote.text}”</p>
            <p className="quote-author">— {quote.author}</p>
          </div>
        ))}
      </Masonry>
    </div>
  );
}

export default Gallery;
