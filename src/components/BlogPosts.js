import { Link } from 'react-router-dom';

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
                <p>{filteredPost.content.substring(0, 100)}...</p> {/* Limit content length */}
                <Link to={`/blog/${filteredPost.id}`}>Read More</Link>
              </div>
            ))}
        </div>
      ))}
    </div>
  );
}

export default BlogPosts;

