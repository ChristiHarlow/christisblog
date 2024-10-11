import React from 'react';

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
    title: 'Touched by Racism and Discrimination',
    content: 'In 2018, I faced an experience that changed my perspective...',
    category: 'Racism & Discrimination'
  },
  {
    id: 3,
    title: 'New Beginnings',
    content: 'After years of working in different fields, I decided to make a career change...',
    category: 'Other Life Experiences'
  }
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


