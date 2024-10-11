import React from 'react';
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import About from './components/About';
import Adversity from './components/Adversity';
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
          <Route path="/blog/adversity" element={<Adversity />} /> {/* Route for Adversity.js */}
        </Routes>
      </div>
    </Router>
  );
}

export default App;

