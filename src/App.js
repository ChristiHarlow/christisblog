import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import About from './components/About';
import Adversity from './components/Adversity';
import BlogPosts from './components/BlogPosts';
import Footer from './components/Footer';
import Header from './components/Header';

function App() {
  return (
    <Router>
      <Header /> {/* Navbar should be inside Header */}
      <div className="App">
        <Routes>
          <Route path="/about" element={<About />} />
          <Route path="/blogs/adversity" element={<Adversity />} />
          <Route path="/blogs" element={<BlogPosts />} />
          {/* Add more routes as necessary */}
        </Routes>
      </div>
      <Footer />
    </Router>
  );
}

export default App;





