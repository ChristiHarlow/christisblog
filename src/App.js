import React from 'react';
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import About from './components/About'; // Ensure this is imported
import BlogPosts from './components/BlogPosts';
import Contact from './components/Contact'; // Ensure this is imported
import Footer from './components/Footer';
import Header from './components/Header';
import Navbar from './components/Navbar';

function App() {
  return (
    <Router>
      <Header />
      <Navbar />
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








