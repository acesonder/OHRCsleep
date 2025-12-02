import React from 'react';
import './ImplementationRoadmap.css';

const phases = [
  {
    id: 1,
    name: 'Foundation',
    timeline: 'Months 1-2',
    status: 'current',
    tasks: [
      { task: 'Consultation with people with lived experience (pay stipends!)', done: false },
      { task: 'Legal review (OHRC compliance, privacy)', done: false },
      { task: 'Platform design mockups', done: false },
      { task: 'Zoning research (current bylaws, precedents)', done: false },
      { task: 'Identify 3 potential temporary sites', done: false },
      { task: 'Build coalition of supporting organizations', done: false }
    ],
    deliverables: ['Platform MVP', 'Initial advocacy brief', 'Site assessment report']
  },
  {
    id: 2,
    name: 'Launch',
    timeline: 'Months 3-4',
    status: 'upcoming',
    tasks: [
      { task: 'Beta testing with service providers', done: false },
      { task: 'Story collection begins', done: false },
      { task: 'Resource directory populated', done: false },
      { task: 'Mapping tool live with current zoning', done: false },
      { task: 'Admin training for partner organizations', done: false },
      { task: 'Media outreach and awareness campaign', done: false }
    ],
    deliverables: ['Public platform launch', 'First 50 stories collected', 'Media coverage']
  },
  {
    id: 3,
    name: 'Advocacy Push',
    timeline: 'Months 4-6',
    status: 'upcoming',
    tasks: [
      { task: 'Present data to council', done: false },
      { task: 'Coordinate delegation speakers', done: false },
      { task: 'Launch media campaign with stories', done: false },
      { task: 'Petition for temporary zoning changes', done: false },
      { task: 'Host community town halls', done: false },
      { task: 'Meet with individual councillors', done: false }
    ],
    deliverables: ['Council motion for temporary measures', 'Petition signatures', 'Town hall recordings']
  },
  {
    id: 4,
    name: 'Expansion',
    timeline: 'Months 6-12',
    status: 'future',
    tasks: [
      { task: 'Advanced features based on feedback', done: false },
      { task: 'Expand to neighboring municipalities', done: false },
      { task: 'Integration with service provider case management', done: false },
      { task: 'Research partnerships to document outcomes', done: false },
      { task: 'Sustainability planning (funding, governance)', done: false },
      { task: 'Create replicable toolkit for other communities', done: false }
    ],
    deliverables: ['Sustainable platform model', 'Replicable toolkit', 'Outcome documentation']
  }
];

const successMetrics = [
  { category: 'Platform', metrics: ['Stories collected', 'Unique voices', 'Council engagement', 'Media pickups'] },
  { category: 'Policy', metrics: ['Temporary zoning changes', 'Shelter bed increase', 'Fast-track approvals'] },
  { category: 'Outcomes', metrics: ['Displacement reduction', 'Sleep hours improvement', 'ER visit reduction'] }
];

function ImplementationRoadmap() {
  return (
    <div className="roadmap-page">
      <header className="page-header">
        <h1>Implementation Roadmap</h1>
        <p>
          A phased approach from platform development to policy change.
          Track progress and coordinate community advocacy efforts.
        </p>
      </header>

      <section className="section">
        <h2 className="section-title">Project Phases</h2>
        
        <div className="timeline">
          {phases.map(phase => (
            <div key={phase.id} className={`phase-card ${phase.status}`}>
              <div className="phase-header">
                <div className="phase-number">Phase {phase.id}</div>
                <h3>{phase.name}</h3>
                <span className="phase-timeline">{phase.timeline}</span>
              </div>
              
              <div className="phase-content">
                <div className="tasks-section">
                  <h4>Tasks</h4>
                  <ul className="task-list">
                    {phase.tasks.map((item, i) => (
                      <li key={i} className={item.done ? 'done' : ''}>
                        <input 
                          type="checkbox" 
                          checked={item.done}
                          readOnly
                          aria-label={item.task}
                        />
                        <span>{item.task}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                
                <div className="deliverables-section">
                  <h4>Deliverables</h4>
                  <ul>
                    {phase.deliverables.map((d, i) => (
                      <li key={i}>{d}</li>
                    ))}
                  </ul>
                </div>
              </div>
              
              <div className="phase-status">
                {phase.status === 'current' && <span className="status-current">In Progress</span>}
                {phase.status === 'upcoming' && <span className="status-upcoming">Upcoming</span>}
                {phase.status === 'future' && <span className="status-future">Future</span>}
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="section">
        <h2 className="section-title">Success Metrics</h2>
        
        <div className="metrics-grid">
          {successMetrics.map((group, i) => (
            <div key={i} className="metrics-card">
              <h3>{group.category}</h3>
              <ul>
                {group.metrics.map((metric, j) => (
                  <li key={j}>
                    <span className="metric-icon">📊</span>
                    {metric}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      <section className="section">
        <h2 className="section-title">Key Milestones</h2>
        
        <div className="milestones">
          <div className="milestone">
            <div className="milestone-marker">1</div>
            <div className="milestone-content">
              <h4>Platform Launch</h4>
              <p>Public platform live with story collection</p>
              <span className="milestone-date">Month 3</span>
            </div>
          </div>
          
          <div className="milestone">
            <div className="milestone-marker">2</div>
            <div className="milestone-content">
              <h4>First Council Presentation</h4>
              <p>Present data and specific asks to council</p>
              <span className="milestone-date">Month 4</span>
            </div>
          </div>
          
          <div className="milestone">
            <div className="milestone-marker">3</div>
            <div className="milestone-content">
              <h4>Temporary Zoning Motion</h4>
              <p>Council vote on temporary measures</p>
              <span className="milestone-date">Month 6</span>
            </div>
          </div>
          
          <div className="milestone">
            <div className="milestone-marker">4</div>
            <div className="milestone-content">
              <h4>First Safe Site Opens</h4>
              <p>Legal sleeping location operational</p>
              <span className="milestone-date">Month 8</span>
            </div>
          </div>
          
          <div className="milestone">
            <div className="milestone-marker">5</div>
            <div className="milestone-content">
              <h4>Pilot Village Approved</h4>
              <p>Tiny shelter village moves forward</p>
              <span className="milestone-date">Month 12</span>
            </div>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="cta-card">
          <h2>Get Involved</h2>
          <p>
            This roadmap is a community effort. We need volunteers, advocates,
            and supporters to make it happen.
          </p>
          <div className="cta-actions">
            <button className="btn btn-primary">Join the Coalition</button>
            <button className="btn btn-secondary">Volunteer</button>
            <button className="btn btn-secondary">Donate</button>
          </div>
        </div>
      </section>
    </div>
  );
}

export default ImplementationRoadmap;
