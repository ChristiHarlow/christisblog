import { Link } from 'react-router-dom';
import './styles/Header.css';

function Header() {
  return (
    <header className="header">
      <h1 className="header-title">
        <Link to="/">Welcome to My Blog</Link>
      </h1>
      <p className="header-subtitle">A Journey of Healing and Growth</p>
    </header>
  );
}

export default Header;


