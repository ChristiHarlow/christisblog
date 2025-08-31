import React, { useState } from "react";
import Masonry from "react-masonry-css";
import "../styles/Gallery.css";

export default function Gallery() {
  const breakpointColumnsObj = { default: 3, 1100: 2, 700: 1 };

  const [copiedId, setCopiedId] = useState(null);
  const quotes = [
    { id: "q1", text: "Healing and growth often begin where comfort ends.", author: "Christi A. Harlow", tags: ["growth","resilience"] },
    { id: "q2", text: "Self-advocacy isn’t noise; it’s the sound of dignity.", author: "Christi A. Harlow", tags: ["advocacy","equity"] },
    { id: "q3", text: "Design is care made visible. Code is care made reliable.", author: "Christi A. Harlow", tags: ["frontend","craft"] },
    { id: "q4", text: "Peace of mind begins when comparison ends.", author: "Unknown", tags: ["mindset"] },
  ];

  const copyQuote = async (q) => {
    try {
      await navigator.clipboard.writeText(`"${q.text}" — ${q.author || "Unknown"}`);
      setCopiedId(q.id);
      setTimeout(() => setCopiedId(null), 1200);
    } catch (e) {}
  };

  return (
    <div className="gallery-container">
      <Masonry
        breakpointCols={breakpointColumnsObj}
        className="my-masonry-grid"
        columnClassName="my-masonry-grid_column"
      >
        {quotes.map((q) => (
          <article key={q.id} className="quote-card card" role="figure" aria-label="Quote">
            <blockquote className="quote-text">“{q.text}”</blockquote>
            {q.author && <figcaption className="quote-author">— {q.author}</figcaption>}

            {!!(q.tags?.length) && (
              <ul className="quote-tags" aria-label="Tags">
                {q.tags.map((t) => <li key={t}>{t}</li>)}
              </ul>
            )}

            <div className="quote-actions">
              <button
                className="btn-ghost"
                onClick={() => copyQuote(q)}
                aria-label="Copy quote to clipboard"
              >
                {copiedId === q.id ? "Copied!" : "Copy"}
              </button>
            </div>
          </article>
        ))}
      </Masonry>
    </div>
  );
}
