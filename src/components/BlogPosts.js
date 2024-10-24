import React from 'react';
import '../styles/BlogPosts.css'; // Ensure the path to the CSS is correct

// Define blogPosts array
const blogPosts = [
  {
    id: 1,
    title: 'Healing and Growth Through Adversity',
    content: 'This post explores how my experiences have led to personal growth and healing...',
    category: 'Personal Growth'
  },
  {
    id: 2,
    title: 'The Cost of Self-Advocacy: My Fight for Justice',
    content: 'Black women who assert themselves are seen as difficult, combative, or insubordinate....',
    category: 'Racism & Discrimination'
  },
  
];

function BlogPosts() {
  const categories = [...new Set(blogPosts.map(post => post.category))];

  return (
    <div>
      {categories.map(category => (
        <div key={category}>
          <h2>{category}</h2>
          {blogPosts
            .filter(post => post.category === category)
            .map(filteredPost => (
              <div key={filteredPost.id}>
                <h3>{filteredPost.title}</h3>
                <p>{filteredPost.content}</p>
              </div>
            ))}
        </div>
      ))}
    </div>
  );
}

export default BlogPosts;


