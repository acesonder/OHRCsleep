import React from 'react';
import { Link } from 'react-router-dom';
import './Home.css';

function Home() {
  return (
    <div className="home-page">
      <section className="hero">
        <div className="hero-content">
          <h1>Advocacy Toolkit for Northumberland</h1>
          <p className="hero-subtitle">
            Evidence-based tools and resources to advocate for housing, shelter,
            and homelessness solutions. Compare what other municipalities have done,
            prepare your delegation, and make your voice heard.
          </p>
          <div className="hero-actions">
            <Link to="/compare" className="btn btn-primary btn-large">
              Compare Municipalities
            </Link>
            <Link to="/delegation" className="btn btn-secondary btn-large">
              Prepare Your Delegation
            </Link>
          </div>
        </div>
      </section>

      <section className="quick-stats section">
        <h2 className="section-title">The Case for Action</h2>
        <div className="stats-grid">
          <div className="stat-card">
            <div className="stat-icon">😴</div>
            <div className="stat-value">3.2 hrs</div>
            <div className="stat-label">Average uninterrupted sleep</div>
            <div className="stat-context">Reported by unsheltered individuals</div>
          </div>
          <div className="stat-card">
            <div className="stat-icon">🚫</div>
            <div className="stat-value">Zero</div>
            <div className="stat-label">Legal places to sleep</div>
            <div className="stat-context">In Cobourg for people without housing</div>
          </div>
          <div className="stat-card">
            <div className="stat-icon">📉</div>
            <div className="stat-value">62%</div>
            <div className="stat-label">Turned away from shelter</div>
            <div className="stat-context">In the past month due to capacity</div>
          </div>
          <div className="stat-card">
            <div className="stat-icon">✅</div>
            <div className="stat-value">5+</div>
            <div className="stat-label">Ontario municipalities</div>
            <div className="stat-context">Have implemented temporary solutions</div>
          </div>
        </div>
      </section>

      <section className="toolkit-overview section">
        <h2 className="section-title">What's in the Toolkit</h2>
        <div className="grid grid-3">
          <Link to="/compare" className="tool-card">
            <div className="tool-icon">📊</div>
            <h3>Municipal Comparison</h3>
            <p>
              See how Kingston, Toronto, Peterborough and other Ontario municipalities
              have addressed homelessness. Learn what works and what we can propose.
            </p>
          </Link>

          <Link to="/delegation" className="tool-card">
            <div className="tool-icon">🎤</div>
            <h3>Delegation Tools</h3>
            <p>
              Ready-to-use templates for council delegations. 3-minute speech templates,
              key statistics, and OHRC citations to support your presentation.
            </p>
          </Link>

          <Link to="/asks" className="tool-card">
            <div className="tool-icon">📋</div>
            <h3>Specific Asks</h3>
            <p>
              Concrete policy proposals for Northumberland Council: immediate actions,
              short-term projects, and medium-term planning goals.
            </p>
          </Link>

          <Link to="/roadmap" className="tool-card">
            <div className="tool-icon">🗺️</div>
            <h3>Implementation Roadmap</h3>
            <p>
              A phased implementation plan from platform development to policy change.
              Track progress and coordinate advocacy efforts.
            </p>
          </Link>

          <Link to="/resources" className="tool-card">
            <div className="tool-icon">📚</div>
            <h3>Resources & Funding</h3>
            <p>
              Funding sources, legal resources, contact information for representatives,
              and links to key documents and organizations.
            </p>
          </Link>

          <div className="tool-card highlight">
            <div className="tool-icon">⚖️</div>
            <h3>OHRC Guidance</h3>
            <p>
              Key positions from the Ontario Human Rights Commission on homelessness,
              addiction, and municipal obligations.
            </p>
            <span className="tool-tag">Reference</span>
          </div>
        </div>
      </section>

      <section className="ohrc-highlight section">
        <div className="ohrc-card">
          <div className="ohrc-icon">⚖️</div>
          <div className="ohrc-content">
            <h2>What OHRC Says</h2>
            <blockquote>
              "Municipalities must ensure that by-laws, zoning changes, and enforcement
              do not discriminate against protected groups, including people with mental
              health disabilities and addictions."
            </blockquote>
            <p>
              <strong>Key principle:</strong> People must be allowed to sleep somewhere
              if no adequate shelter exists. Blanket bans on sleeping in public may
              violate constitutional rights.
            </p>
            <Link to="/resources#ohrc" className="btn btn-secondary">
              Read Full OHRC Guidance
            </Link>
          </div>
        </div>
      </section>

      <section className="cta-section section">
        <div className="cta-card">
          <h2>Ready to Take Action?</h2>
          <p>
            The next council meeting is an opportunity to speak up. Prepare your
            delegation with our templates and make your voice heard.
          </p>
          <div className="cta-actions">
            <Link to="/delegation" className="btn btn-primary btn-large">
              Get Delegation Templates
            </Link>
            <Link to="/asks" className="btn btn-secondary">
              View Specific Asks for Council
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Home;
