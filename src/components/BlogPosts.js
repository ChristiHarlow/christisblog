import React from 'react';
import { Link, useParams } from 'react-router-dom'; // Import useParams
import '../styles/BlogPosts.css';
import blogPosts from './BlogPostDetails';

function BlogPosts() {
  const { slug } = useParams(); // Get the slug from the URL
  const categories = [...new Set(blogPosts.map(post => post.category))];

  // Find the current post based on the slug (if there is one)
  const currentPost = slug? blogPosts.find(post => post.slug === slug): null;

  return (
    <div className="blog-posts-container">
      <h1>Blog Posts</h1>

      {/* Conditionally render content */}
      {currentPost? ( // If a slug is in the URL, show only that post
        <div className="blog-post">
          <h3>{currentPost.title}</h3>
          <p>{currentPost.content}</p>
        </div>
      ): ( // Otherwise, show all posts categorized
        categories.map(category => (
          <div key={category}>
            <h2>{category}</h2>
            {blogPosts
            .filter(post => post.category === category)
            .map(post => (
                <div key={post.id} className="blog-post">
                  <Link to={`/posts/${post.slug}`} className="post-title-link"> {/* Link to individual post */}
                    <h3>{post.title}</h3>
                  </Link>
                  <p>{post.content.slice(0, 200)}...</p> {/* Shortened content */}
                </div>
              ))}
          </div>
        ))
      )}
    </div>
  );
}

export default BlogPosts;