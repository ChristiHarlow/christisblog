import { Link } from 'react-router-dom';

function Header() {
  return (
    <header className="header">
      <div className="header-banner-container">
        <img src={process.env.PUBLIC_URL + '/images/header-banner.png'} alt="Banner" className="header-banner" />
        <nav className="navbar">
          <Link to="/about" className="nav-link">About</Link>
          <div className="dropdown">
            <button className="nav-link dropdown-button">Blogs</button>
            <div className="dropdown-menu">
              <Link to="/blogs/adversity" className="dropdown-item">Adversity</Link>
            </div>
          </div>
          <Link to="/contact" className="nav-link">Contact</Link> {/* Add Contact link */}
        </nav>
      </div>
    </header>
  );
}

export default Header;









