import React from "react";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import About from "./components/About";
import Adversity from "./components/Adversity";
import BlogPosts from "./components/BlogPosts";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Navbar from "./components/Navbar";
import SelfAdvocacy from "./components/SelfAdvocacy";

function App() {
  return (
    <Router>
      <Header />
      <Navbar />
      <Gallery />
      <Routes>
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/posts/adversity" element={<Adversity />} /> {/* Adversity Route */}
        <Route path="/posts/self-advocacy" element={<SelfAdvocacy />} /> {/* Self-Advocacy Route */}
        <Route path="/blogs" element={<BlogPosts />} /> {/* Blogs Route */}
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;