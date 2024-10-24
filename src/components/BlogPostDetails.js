import { buildQueries } from '@testing-library/react';
import React from 'react';
import { useParams } from 'react-router-dom';

const blogPosts = [
  {
    id: 1,
    title: 'Healing and Growth Through Adversity',
    content: 'Adversity often manifests in various forms, and recognizing it is the first step toward addressing its impact. ...',
    category: 'Personal Growth'
  },
  {
    id: 2,
    title: 'Touched by Racism and Discrimination',
    content: 'Self-Advocacy is about standing up even when the odds are against you...',
    category: 'Racism & Discrimination'
  },Queries
];

function BlogPostDetails() {
  const { id } = useParams();
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
