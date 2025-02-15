import React from 'react';
import { useNavigate, useParams } from 'react-router-dom';

const blogPosts = [
  {
    id: 1,
    title: 'Healing and Growth Through Adversity',
    content: 'Adversity often manifests in various forms, and recognizing it is the first step toward addressing its impact....',
    category: 'Personal Growth',
    slug: 'healing-and-growth' // Added slug
  },
  {
    id: 2,
    title: 'The Cost of Self-Advocacy: My Fight for Justice',
    content: 'Self-Advocacy is about standing up even when the odds are against you...',
    category: 'Racism & Discrimination',
    slug: 'cost-of-self-advocacy' // Added slug
  },
  //... more posts
];

function BlogPostDetails() {
  const { slug } = useParams(); // Get the slug from the URL
  const navigate = useNavigate(); // For redirection

  const post = blogPosts.find(post => post.slug === slug);

  if (!post) {
    return (
      <div>
        <h2>Post Not Found</h2>
        <p>Sorry, the post you are looking for does not exist.</p>
        <button onClick={() => navigate('/blogs')}>Go back to Blogs</button> 
      </div>
    );
  }

  return (
    <div>
      <h1>{post.title}</h1>
      <p>{post.content}</p>
      {/* Add any other details you want to display, e.g., category, date, author */}
      <p>Category: {post.category}</p> {/* Example */}
    </div>
  );
}

export default BlogPostDetails;




