import React from "react";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import About from "./components/About";
// You don't need to import Adversity and SelfAdvocacy separately
import BlogPosts from "./components/BlogPosts";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Navbar from "./components/Navbar";

function App() {
  return (
    <Router>
      <Header />
      <Navbar />
      <Routes>
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/posts" element={<BlogPosts />} /> {/* For the blog post list */}
        <Route path="/posts/:slug" element={<BlogPosts />} /> {/* For individual posts */}
        {/* You don't need separate routes for Adversity and SelfAdvocacy */}
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;