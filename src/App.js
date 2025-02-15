import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import About from './components/About';
import BlogPosts from './components/BlogPosts'; // Make sure this file exists
import Contact from './components/Contact';
import Footer from './components/Footer';
import Navbar from './components/Navbar';


function App() {
  return (
    <Router>
      <div>
        <Navbar />

        <Routes>
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/posts" element={<BlogPosts />} /> {/* Blog post list */}
          <Route path="/posts/:slug" element={<BlogPosts />} /> {/* Individual posts */}
          {/*... other routes... */}
          <Route path="*" element={<NotFound />} /> {/* Catch-all route */}
        </Routes>

        <Footer />
      </div>
    </Router>
  );
}

export default App;