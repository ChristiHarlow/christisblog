import React from 'react';
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import BlogPosts from './BlogPosts';
import Footer from './Footer';
import Header from './Header';
import Navbar from './Navbar';

function App() {
  return (
    <Router>
      <Header />
      <Navbar /> {/* Navbar is now between the header and footer */}
      <Routes>
        <Route path="/about" element={<About />} />
        <Route path="/blogs/adversity" element={<BlogPosts />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;







