import React from 'react';
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import './App.css';
import About from './components/About';
import BlogPostDetails from './components/BlogPostDetails'; // New component for post details
import BlogPosts from './components/BlogPosts';
import Header from './components/Header';

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <Routes>
          <Route path="/" element={<About />} />
          <Route path="/blog" element={<BlogPosts />} />
          <Route path="/blog/:id" element={<BlogPostDetails />} /> {/* Dynamic route for individual blog posts */}
        </Routes>
      </div>
    </Router>
  );
}

export default App;


