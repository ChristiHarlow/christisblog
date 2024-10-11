import React from 'react';
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import './App.css';
import About from './components/About';
import Adversity from './components/Adversity';
import BlogPostDetails from './components/BlogPostDetails'; // New component for post details
import BlogPosts from './components/BlogPosts';
import Header from './components/Header';

function App() {
  return (
    <Router basename="/blog"> {/* Your app code */}
      <div className="App">
        <Header />
        <Routes>
          <Route path="/" element={<About />} />
          <Route path="/blog" element={<BlogPosts />} />
          <Route path="/blog/:id" element={<BlogPostDetails />} /> {/* Dynamic route for individual blog posts */}
          <Route path="/blog/adversity" element={<Adversity />} /> {/* Route for Adversity */}
        </Routes>
      </div>
    </Router>
  );
}

export default App;


