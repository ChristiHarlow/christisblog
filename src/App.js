import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import About from './components/About';
import Adversity from './components/Adversity';
import BlogPosts from './components/BlogPosts';
import Footer from './components/Footer'; // Import Footer if added
import Header from './components/Header';

function App() {
  return (
    <Router>
      <Header /> {/* Header includes the navbar */}
      <div className="App">
        <Routes>
          <Route path="/about" element={<About />} />
          <Route path="/adversity" element={<Adversity />} />
          <Route path="/blog" element={<BlogPosts />} />
        </Routes>
      </div>
      <Footer /> {/* Footer remains intact */}
    </Router>
  );
}

export default App;




