import React, { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import './Header.css';

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="header" role="banner">
      <div className="header-container">
        <Link to="/" className="logo" aria-label="Northumberland Stories Home">
          <span className="logo-icon" aria-hidden="true">📝</span>
          <span className="logo-text">Northumberland Stories</span>
        </Link>

        <button
          className="menu-toggle"
          onClick={toggleMenu}
          aria-expanded={isMenuOpen}
          aria-controls="main-nav"
          aria-label={isMenuOpen ? 'Close menu' : 'Open menu'}
        >
          <span className="menu-icon" aria-hidden="true">
            {isMenuOpen ? '✕' : '☰'}
          </span>
        </button>

        <nav
          id="main-nav"
          className={`main-nav ${isMenuOpen ? 'is-open' : ''}`}
          role="navigation"
          aria-label="Main navigation"
        >
          <ul className="nav-list">
            <li>
              <NavLink to="/" onClick={() => setIsMenuOpen(false)}>
                Home
              </NavLink>
            </li>
            <li>
              <NavLink to="/share" onClick={() => setIsMenuOpen(false)}>
                Share Your Story
              </NavLink>
            </li>
            <li>
              <NavLink to="/stories" onClick={() => setIsMenuOpen(false)}>
                Read Stories
              </NavLink>
            </li>
            <li>
              <NavLink to="/surveys" onClick={() => setIsMenuOpen(false)}>
                Surveys
              </NavLink>
            </li>
            <li>
              <NavLink to="/data" onClick={() => setIsMenuOpen(false)}>
                Data Insights
              </NavLink>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}

export default Header;
