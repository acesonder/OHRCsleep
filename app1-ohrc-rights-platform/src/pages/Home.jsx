import React from 'react';
import { Link } from 'react-router-dom';
import './Home.css';

function Home() {
  return (
    <div className="home-page">
      <section className="hero">
        <div className="hero-content">
          <h1>Know Your Rights. Access Services. Make Your Voice Heard.</h1>
          <p className="hero-subtitle">
            A platform for Cobourg &amp; Northumberland residents experiencing homelessness,
            addiction, or housing insecurity to understand their rights and participate in
            community advocacy.
          </p>
          <div className="hero-actions">
            <Link to="/rights" className="btn btn-primary btn-large">
              Know Your Rights
            </Link>
            <Link to="/services" className="btn btn-secondary btn-large">
              Find Services Near You
            </Link>
          </div>
        </div>
      </section>

      <section className="quick-info section">
        <h2 className="section-title">Quick Information</h2>
        <div className="grid grid-3">
          <div className="info-card">
            <h3>🏠 Your Right to Housing</h3>
            <p>
              Under the Ontario Human Rights Code, you cannot be discriminated against
              in housing because of addiction, mental health, or other disabilities.
            </p>
            <Link to="/rights" className="btn btn-secondary">Learn More</Link>
          </div>

          <div className="info-card">
            <h3>😴 Sleep is a Human Right</h3>
            <p>
              When no adequate shelter exists, you have the right to sleep somewhere.
              Blanket bans on sleeping in public may violate your constitutional rights.
            </p>
            <Link to="/rights#sleep" className="btn btn-secondary">Learn More</Link>
          </div>

          <div className="info-card">
            <h3>📍 Find Help Now</h3>
            <p>
              Locate shelters, drop-ins, food services, harm reduction sites, and
              other resources in Cobourg &amp; Northumberland County.
            </p>
            <Link to="/services" className="btn btn-secondary">Find Services</Link>
          </div>
        </div>
      </section>

      <section className="cta-section section">
        <div className="card">
          <h2>Share Your Experience</h2>
          <p>
            Your story matters. Help us document the real impacts of zoning decisions,
            enforcement, and service gaps on people experiencing homelessness and addiction.
          </p>
          <div className="cta-actions">
            <Link to="/participate" className="btn btn-primary">
              Share Your Story
            </Link>
            <Link to="/participate#survey" className="btn btn-secondary">
              Take a Quick Survey
            </Link>
          </div>
        </div>
      </section>

      <section className="ohrc-section section">
        <h2 className="section-title">What OHRC Says</h2>
        <div className="alert alert-info">
          <strong>Ontario Human Rights Commission Position:</strong>
          <p>
            "Homelessness, addiction, and mental health are human rights issues, not just
            social problems. Municipalities must ensure by-laws, zoning changes, and
            enforcement do not discriminate against protected groups."
          </p>
        </div>
        <p>
          The OHRC has repeatedly stated that people with addictions and mental health
          disabilities are protected under the Human Rights Code. Municipalities like
          Cobourg and Northumberland County must accommodate these individuals and
          cannot use zoning or by-laws to discriminate against them.
        </p>
        <Link to="/rights" className="btn btn-primary">
          Understand Your Rights Under OHRC
        </Link>
      </section>

      <section className="upcoming-section section">
        <h2 className="section-title">Take Action</h2>
        <div className="grid grid-2">
          <div className="card">
            <h3>📅 Upcoming Council Meetings</h3>
            <p>
              Make your voice heard at local council meetings. We provide guidance on
              how to register to speak and sample delegation scripts.
            </p>
            <Link to="/advocacy#meetings" className="btn btn-secondary">
              View Meetings
            </Link>
          </div>
          <div className="card">
            <h3>✉️ Contact Representatives</h3>
            <p>
              Use our templates to write to councillors, MPPs, MPs, and the OHRC
              about zoning and housing issues in your community.
            </p>
            <Link to="/advocacy#contact" className="btn btn-secondary">
              Contact Officials
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Home;
