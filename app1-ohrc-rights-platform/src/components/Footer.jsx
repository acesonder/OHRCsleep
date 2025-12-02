import React from 'react';
import { Link } from 'react-router-dom';
import './Footer.css';

function Footer() {
  return (
    <footer className="footer" role="contentinfo">
      <div className="footer-container">
        <div className="footer-section">
          <h3>OHRC Rights Platform</h3>
          <p>
            Empowering Cobourg &amp; Northumberland residents to understand their rights,
            access services, and participate in community advocacy.
          </p>
        </div>

        <div className="footer-section">
          <h4>Quick Links</h4>
          <ul>
            <li><Link to="/rights">Know Your Rights</Link></li>
            <li><Link to="/services">Find Services</Link></li>
            <li><Link to="/participate">Share Your Story</Link></li>
            <li><Link to="/advocacy">Take Action</Link></li>
          </ul>
        </div>

        <div className="footer-section">
          <h4>Emergency Resources</h4>
          <ul>
            <li>
              <a href="tel:211" aria-label="Call 211 for community services">
                211 - Community Services
              </a>
            </li>
            <li>
              <a href="tel:911" aria-label="Call 911 for emergencies">
                911 - Emergencies
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
          <h4>Accessibility</h4>
          <p>
            This site is designed to meet WCAG 2.1 AA standards.
            If you experience any accessibility issues, please contact us.
          </p>
        </div>
      </div>

      <div className="footer-bottom">
        <p>
          © {new Date().getFullYear()} OHRC Rights Platform. 
          Created to support human rights advocacy in Northumberland County.
        </p>
        <p className="disclaimer">
          This platform is for informational purposes. For legal advice, consult a licensed professional.
        </p>
      </div>
    </footer>
  );
}

export default Footer;
