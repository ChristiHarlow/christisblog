import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import About from './components/About';
import Adversity from './components/Adversity';
import BlogPosts from './components/BlogPosts';
import Footer from './components/Footer'; // Import Footer if added
import Header from './components/Header';
import Navbar from './components/Navbar'; // Import Navbar if added

function App() {
  return (
    <Router>
      <Header /> {/* Display header */}
      <Navbar /> {/* Display navbar for navigation */}
      <div className="App">
        <Routes>
          <Route path="/" element={<Header />} />
          <Route path="/about" element={<About />} />
          <Route path="/adversity" element={<Adversity />} />
          <Route path="/blog" element={<BlogPosts />} />
        </Routes>
      </div>
      <Footer /> {/* Make sure the footer is here */}
    </Router>
  );
}

export default App;



