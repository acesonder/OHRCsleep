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
        <Link to="/" className="logo" aria-label="Advocacy Toolkit Home">
          <span className="logo-icon" aria-hidden="true">🏛️</span>
          <span className="logo-text">Advocacy Toolkit</span>
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
              <NavLink to="/compare" onClick={() => setIsMenuOpen(false)}>
                Compare Municipalities
              </NavLink>
            </li>
            <li>
              <NavLink to="/delegation" onClick={() => setIsMenuOpen(false)}>
                Delegation Tools
              </NavLink>
            </li>
            <li>
              <NavLink to="/asks" onClick={() => setIsMenuOpen(false)}>
                Specific Asks
              </NavLink>
            </li>
            <li>
              <NavLink to="/roadmap" onClick={() => setIsMenuOpen(false)}>
                Implementation
              </NavLink>
            </li>
            <li>
              <NavLink to="/resources" onClick={() => setIsMenuOpen(false)}>
                Resources
              </NavLink>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}

export default Header;
