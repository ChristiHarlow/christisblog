import React from 'react';
import { useParams } from 'react-router-dom';

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
