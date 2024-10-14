import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Navbar from './components/Navbar';
import About from './components/About';
import Contact from './components/Contact';
// Import the missing components
import Adversity from './components/Adversity'; // Make sure this file exists
import Blogs from './components/Blogs'; // Make sure this file exists

function App() {
  return (
    <Router>
      <Header />
      <Navbar />
      <Routes>
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/posts/adversity" element={<Adversity />} /> {/* Adversity Route */}
        <Route path="/blogs" element={<Blogs />} /> {/* Blogs Route */}
      </Routes









