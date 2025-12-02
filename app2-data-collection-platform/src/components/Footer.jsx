import React from 'react';
import { Link } from 'react-router-dom';
import './Footer.css';

function Footer() {
  return (
    <footer className="footer" role="contentinfo">
      <div className="footer-container">
        <div className="footer-section">
          <h3>Northumberland Stories</h3>
          <p>
            A platform for collecting and amplifying voices of people experiencing
            homelessness, addiction, and housing insecurity in Northumberland County.
          </p>
        </div>

        <div className="footer-section">
          <h4>Quick Links</h4>
          <ul>
            <li><Link to="/share">Share Your Story</Link></li>
            <li><Link to="/stories">Read Stories</Link></li>
            <li><Link to="/surveys">Take a Survey</Link></li>
            <li><Link to="/data">View Data</Link></li>
          </ul>
        </div>

        <div className="footer-section">
          <h4>Crisis Support</h4>
          <ul>
            <li>
              <a href="tel:211" aria-label="Call 211">
                211 - Community Services
              </a>
            </li>
            <li>
              <a href="tel:1-866-531-2600" aria-label="Call crisis line">
                1-866-531-2600 - Crisis Line
              </a>
            </li>
          </ul>
        </div>

        <div className="footer-section">
          <h4>Privacy</h4>
          <p>
            All submissions can be anonymous. We protect your privacy and only
            share anonymized data. You control your story.
          </p>
        </div>
      </div>

      <div className="footer-bottom">
        <p>
          © {new Date().getFullYear()} Northumberland Stories. 
          Created for community advocacy.
        </p>
      </div>
    </footer>
  );
}

export default Footer;
