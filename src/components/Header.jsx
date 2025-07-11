import { Link, useNavigate } from 'react-router-dom';
import './Header.css';

const Header = ({ onLogout }) => {
  const navigate = useNavigate();

  const handleLogout = () => {
    onLogout();
    navigate('/auth');
  };

  return (
    <header className="header">
      <div className="header-content">
        <div className="header-left">
          <Link to="/" className="logo">
            <img
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/72ee9c90c9e9cd9734ef64315a7dded456e6619a?width=244"
              alt="Bestbot"
              className="logo-img"
            />
          </Link>
          <nav className="main-nav">
            <Link to="/" className="nav-link">
              Dashboard
            </Link>
            <Link to="/projects" className="nav-link">
              Projects
            </Link>
            <Link to="/team" className="nav-link">
              Team
            </Link>
            <Link to="/ai-assistant" className="nav-link">
              AI Assistant
            </Link>
          </nav>
        </div>
        <div className="header-right">
          <div className="search-container">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="search-icon"
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <circle cx="11" cy="11" r="8" />
              <path d="m21 21-4.3-4.3" />
            </svg>
            <input placeholder="Search..." className="search-input" />
          </div>
          <button className="icon-button" onClick={handleLogout}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="icon"
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2" />
              <circle cx="12" cy="7" r="4" />
            </svg>
          </button>
          <div className="user-profile">
            <img
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/83e6d9d743074ea7a206b25a15a71a78928156a9?width=64"
              alt="John Smith"
              className="user-avatar"
            />
            <span className="user-name">John Smith</span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="dropdown-icon"
              width="12"
              height="12"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <polyline points="6 9 12 15 18 9" />
            </svg>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
