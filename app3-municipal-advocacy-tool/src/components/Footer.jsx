import React from 'react';
import { Link } from 'react-router-dom';
import './Footer.css';

function Footer() {
  return (
    <footer className="footer" role="contentinfo">
      <div className="footer-container">
        <div className="footer-section">
          <h3>Advocacy Toolkit</h3>
          <p>
            Tools and resources to advocate for housing and homelessness
            solutions in Northumberland County through evidence-based approaches.
          </p>
        </div>

        <div className="footer-section">
          <h4>Tools</h4>
          <ul>
            <li><Link to="/compare">Municipal Comparison</Link></li>
            <li><Link to="/delegation">Delegation Scripts</Link></li>
            <li><Link to="/asks">Specific Asks</Link></li>
            <li><Link to="/roadmap">Implementation Roadmap</Link></li>
          </ul>
        </div>

        <div className="footer-section">
          <h4>Contact Councils</h4>
          <ul>
            <li>
              <a href="mailto:clerk@cobourg.ca">Cobourg Town Council</a>
            </li>
            <li>
              <a href="mailto:info@northumberland.ca">Northumberland County</a>
            </li>
          </ul>
        </div>

        <div className="footer-section">
          <h4>Key Resources</h4>
          <ul>
            <li>
              <a href="https://www.ohrc.on.ca/" target="_blank" rel="noopener noreferrer">
                Ontario Human Rights Commission
              </a>
            </li>
            <li>
              <a href="https://www.hrto.ca/" target="_blank" rel="noopener noreferrer">
                Human Rights Tribunal
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div className="footer-bottom">
        <p>
          © {new Date().getFullYear()} Advocacy Toolkit. 
          Created for community advocacy in Northumberland County.
        </p>
      </div>
    </footer>
  );
}

export default Footer;
