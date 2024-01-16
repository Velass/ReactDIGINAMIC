import { Link } from 'react-router-dom';
import './Header.css';

function Header() {
  return (
    <div className="header">
      <Link to="/" className="nav-link">
        Accueil
      </Link>
      <Link to="/livres" className="nav-link">
        Livres
      </Link>
      <Link to="/contact" className="nav-link">
        Contact
      </Link>
    </div>
  );
}

export default Header;