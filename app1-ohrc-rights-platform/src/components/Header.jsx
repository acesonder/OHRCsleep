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
        <Link to="/" className="logo" aria-label="OHRC Rights Platform Home">
          <span className="logo-icon" aria-hidden="true">⚖️</span>
          <span className="logo-text">OHRC Rights Platform</span>
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
              <NavLink to="/rights" onClick={() => setIsMenuOpen(false)}>
                Know Your Rights
              </NavLink>
            </li>
            <li>
              <NavLink to="/services" onClick={() => setIsMenuOpen(false)}>
                Services Map
              </NavLink>
            </li>
            <li>
              <NavLink to="/participate" onClick={() => setIsMenuOpen(false)}>
                Participate
              </NavLink>
            </li>
            <li>
              <NavLink to="/advocacy" onClick={() => setIsMenuOpen(false)}>
                Advocacy
              </NavLink>
            </li>
            <li>
              <NavLink to="/about" onClick={() => setIsMenuOpen(false)}>
                About
              </NavLink>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}

export default Header;
