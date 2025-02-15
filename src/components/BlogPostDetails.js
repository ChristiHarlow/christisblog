import React from 'react';
import { useParams } from 'react-router-dom';

const blogPosts = [
  {
    id: 1,
    title: 'Healing and Growth Through Adversity',
    category: 'Personal Growth'
  },
  {
    id: 2,
    title: 'The Cost of Self-Advocacy: My Fight for Justice',
    category: 'Racism & Discrimination'
  },
  //... more posts
];

function BlogPostDetails() {
  const { id } = useParams();  // Get the ID from the URL
  const post = blogPosts.find(post => post.id === parseInt(id));

  if (!post) {
    return <h2>Post not found</h2>;
  }

  return (
    <div>
      <h1>{post.title}</h1>
      <p>{post.content}</p>
    </div>
  );
}

export default BlogPostDetails;



