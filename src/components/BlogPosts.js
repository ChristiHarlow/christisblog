import React from 'react';
import { Link } from 'react-router-dom'; // Import Link
import '../styles/BlogPosts.css';
import blogPosts from './BlogPostDetails'; // Import your blog post data (from blogData.js)

function BlogPosts() {
  const categories = [...new Set(blogPosts.map(post => post.category))];

  return (
    <div className="blog-posts-container"> {/* Updated container class name */}
      <h1>Blog Posts</h1> {/* Main heading */}

      {/* Links to specific posts (if needed) */}
      <div className="post-links"> {/* Container for direct post links */}
        <Link to="/posts/adversity" className="post-link">Adversity</Link>
        <Link to="/posts/self-advocacy" className="post-link">Self-Advocacy</Link>
      </div>

      {categories.map(category => (
        <div key={category}>
          <h2>{category}</h2>
          {blogPosts
          .filter(post => post.category === category)
          .map(post => ( // No need for filteredPost anymore
              <div key={post.id} className="blog-post"> {/* Added blog-post class */}
                <h3>{post.title}</h3>
                <p>{post.content}</p> {/* Display full content here */}
              </div>
            ))}
        </div>
      ))}
    </div>
  );
}

export default BlogPosts;


