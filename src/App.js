import React from 'react';
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import About from './components/About';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Header from './components/Header';
import Navbar from './components/Navbar';
// Import the missing components
import Adversity from './components/Adversity'; // Make sure this file exists
import BlogPosts from './components/BlogPosts'; // Make sure this file exists
function App() {
  return (
    <Router>
      <Header />
      <Navbar />
      <Routes>
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/posts/adversity" element={<Adversity />} /> {/* Adversity Route */}
        <Route path="/blogs" element={<BlogPosts />} /> {/* Blogs Route */}
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;










