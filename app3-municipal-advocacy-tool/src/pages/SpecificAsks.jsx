import React from 'react';
import './SpecificAsks.css';

const immediateAsks = [
  {
    id: 1,
    title: 'Emergency Temporary Use Bylaw',
    timeline: '0-3 months',
    description: 'Designate 2-3 sites for legal overnight sleeping with basic facilities',
    details: [
      '1-year duration (renewable)',
      'Basic facilities: washrooms, water, garbage',
      'No enforcement for sleeping between 10pm-7am',
      'Outreach worker presence during evening hours'
    ],
    precedent: 'Kingston\'s Belle Park model',
    cost: 'Low ($25-50K setup + operating)',
    status: 'Proposed'
  },
  {
    id: 2,
    title: 'Sleep Deprivation Moratorium',
    timeline: '0-3 months',
    description: 'Pause on nighttime displacement by bylaw/police',
    details: [
      'Align with OHRC guidance on sleep as human right',
      'Training for enforcement on human rights obligations',
      'Clear guidelines for daytime vs nighttime approach',
      'Documentation of displacement incidents'
    ],
    precedent: 'Toronto emergency measures',
    cost: 'None (policy change)',
    status: 'Proposed'
  },
  {
    id: 3,
    title: 'Fast-Track Shelter Zoning',
    timeline: '0-3 months',
    description: 'Expedite approval process for emergency shelters',
    details: [
      'As-of-right permission in commercial/industrial zones',
      'Waive parking requirements for emergency shelters',
      '30-day approval process (vs 6+ months)',
      'Pre-approved designs for temporary structures'
    ],
    precedent: 'Kitchener proactive zoning',
    cost: 'None (process change)',
    status: 'Proposed'
  }
];

const shortTermAsks = [
  {
    id: 4,
    title: 'Tiny Shelter Village Pilot',
    timeline: '3-12 months',
    description: '20-30 unit tiny home village on municipal land',
    details: [
      'Temporary use bylaw (3 years)',
      'Shared washrooms and common space',
      'Wraparound support services on-site',
      'Resident input on rules and design'
    ],
    precedent: 'Kitchener\'s A Better Tent City',
    cost: 'Medium ($500K-1M setup)',
    status: 'Proposed'
  },
  {
    id: 5,
    title: 'Safe Parking Program',
    timeline: '3-12 months',
    description: 'Designated lots for people living in vehicles',
    details: [
      'Municipal or partner parking lots',
      'Security presence during night hours',
      'Portable washrooms and garbage service',
      'Case management and outreach'
    ],
    precedent: 'Toronto Safe Parking',
    cost: 'Low ($50-100K/year)',
    status: 'Proposed'
  },
  {
    id: 6,
    title: 'Harm Reduction Service Zoning',
    timeline: '3-12 months',
    description: 'Pre-approve zoning for consumption and treatment sites',
    details: [
      'Prepare for provincial approval process',
      'Identify suitable locations in advance',
      'Community consultation and education',
      'Integration with existing health services'
    ],
    precedent: 'Kingston integrated model',
    cost: 'None (preparation)',
    status: 'Future consideration'
  }
];

const mediumTermAsks = [
  {
    id: 7,
    title: 'Inclusionary Zoning Update',
    timeline: '1-2 years',
    description: 'Require affordable units in new developments',
    details: [
      'Minimum affordable unit requirements',
      'Bonusing for supportive housing',
      'Allow diverse housing forms (rooming houses, co-housing)',
      'Reduced fees for non-profit developers'
    ],
    precedent: 'Toronto inclusionary zoning',
    cost: 'None (developer requirement)',
    status: 'Future consideration'
  },
  {
    id: 8,
    title: 'Surplus Land Strategy',
    timeline: '1-2 years',
    description: 'Inventory and allocate municipal land for housing',
    details: [
      'Complete inventory of municipal/county land',
      'Identify sites suitable for supportive housing',
      'Streamlined approval for non-profit developers',
      'Long-term lease arrangements'
    ],
    precedent: 'Multiple Ontario municipalities',
    cost: 'Staff time only',
    status: 'Future consideration'
  }
];

function SpecificAsks() {
  return (
    <div className="asks-page">
      <header className="page-header">
        <h1>Specific Asks for Northumberland Council</h1>
        <p>
          Concrete, evidence-based policy proposals organized by timeline.
          Each ask includes implementation details, precedents, and estimated costs.
        </p>
      </header>

      <section className="section">
        <div className="timeline-header immediate">
          <h2>Immediate Actions (0-3 months)</h2>
          <span className="timeline-tag">Priority</span>
        </div>
        
        <div className="asks-grid">
          {immediateAsks.map(ask => (
            <article key={ask.id} className="ask-card priority">
              <div className="ask-header">
                <h3>{ask.title}</h3>
                <span className="timeline-badge">{ask.timeline}</span>
              </div>
              <p className="ask-description">{ask.description}</p>
              
              <div className="ask-details">
                <h4>Implementation Details:</h4>
                <ul>
                  {ask.details.map((detail, i) => (
                    <li key={i}>{detail}</li>
                  ))}
                </ul>
              </div>
              
              <div className="ask-meta">
                <div className="meta-item">
                  <strong>Precedent:</strong> {ask.precedent}
                </div>
                <div className="meta-item">
                  <strong>Est. Cost:</strong> {ask.cost}
                </div>
              </div>
              
              <span className={`status-tag ${ask.status.toLowerCase().replace(' ', '-')}`}>
                {ask.status}
              </span>
            </article>
          ))}
        </div>
      </section>

      <section className="section">
        <div className="timeline-header short-term">
          <h2>Short-Term (3-12 months)</h2>
        </div>
        
        <div className="asks-grid">
          {shortTermAsks.map(ask => (
            <article key={ask.id} className="ask-card">
              <div className="ask-header">
                <h3>{ask.title}</h3>
                <span className="timeline-badge">{ask.timeline}</span>
              </div>
              <p className="ask-description">{ask.description}</p>
              
              <div className="ask-details">
                <h4>Implementation Details:</h4>
                <ul>
                  {ask.details.map((detail, i) => (
                    <li key={i}>{detail}</li>
                  ))}
                </ul>
              </div>
              
              <div className="ask-meta">
                <div className="meta-item">
                  <strong>Precedent:</strong> {ask.precedent}
                </div>
                <div className="meta-item">
                  <strong>Est. Cost:</strong> {ask.cost}
                </div>
              </div>
              
              <span className={`status-tag ${ask.status.toLowerCase().replace(' ', '-')}`}>
                {ask.status}
              </span>
            </article>
          ))}
        </div>
      </section>

      <section className="section">
        <div className="timeline-header medium-term">
          <h2>Medium-Term (1-2 years)</h2>
        </div>
        
        <div className="asks-grid">
          {mediumTermAsks.map(ask => (
            <article key={ask.id} className="ask-card">
              <div className="ask-header">
                <h3>{ask.title}</h3>
                <span className="timeline-badge">{ask.timeline}</span>
              </div>
              <p className="ask-description">{ask.description}</p>
              
              <div className="ask-details">
                <h4>Implementation Details:</h4>
                <ul>
                  {ask.details.map((detail, i) => (
                    <li key={i}>{detail}</li>
                  ))}
                </ul>
              </div>
              
              <div className="ask-meta">
                <div className="meta-item">
                  <strong>Precedent:</strong> {ask.precedent}
                </div>
                <div className="meta-item">
                  <strong>Est. Cost:</strong> {ask.cost}
                </div>
              </div>
              
              <span className={`status-tag ${ask.status.toLowerCase().replace(' ', '-')}`}>
                {ask.status}
              </span>
            </article>
          ))}
        </div>
      </section>

      <section className="section">
        <div className="summary-card">
          <h2>Summary: The Core Asks</h2>
          <div className="summary-grid">
            <div className="summary-item">
              <div className="summary-number">1</div>
              <div className="summary-content">
                <h4>Legal Sleeping Locations</h4>
                <p>Designate sites where people can legally sleep</p>
              </div>
            </div>
            <div className="summary-item">
              <div className="summary-number">2</div>
              <div className="summary-content">
                <h4>Fast-Track Approvals</h4>
                <p>30-day process for emergency shelter zoning</p>
              </div>
            </div>
            <div className="summary-item">
              <div className="summary-number">3</div>
              <div className="summary-content">
                <h4>Tiny Shelter Pilot</h4>
                <p>20-30 unit village with support services</p>
              </div>
            </div>
          </div>
          <div className="summary-action">
            <a href="/delegation" className="btn btn-primary btn-large">
              Prepare Your Delegation
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}

export default SpecificAsks;
