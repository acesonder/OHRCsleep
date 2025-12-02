import React, { useState } from 'react';
import './MunicipalComparison.css';

const municipalData = [
  {
    id: 'kingston',
    name: 'Kingston',
    population: '132,000',
    approaches: {
      temporarySleepingSites: { status: 'yes', details: 'Belle Park supervised camping site with outreach' },
      lowBarrierShelter: { status: 'yes', details: '24/7 low-barrier emergency shelter' },
      safeConsumptionSite: { status: 'yes', details: 'Integrated with health services' },
      tinyHomes: { status: 'partial', details: 'Pilot program in development' },
      safeParking: { status: 'partial', details: 'Informal, exploring formal program' },
      fastTrackZoning: { status: 'yes', details: 'Expedited approval for emergency shelters' }
    },
    lessons: 'Community engagement was key. Started small, scaled based on outcomes.',
    contact: 'city@cityofkingston.ca'
  },
  {
    id: 'toronto',
    name: 'Toronto',
    population: '2.9M',
    approaches: {
      temporarySleepingSites: { status: 'yes', details: 'Multiple supervised sites during COVID' },
      lowBarrierShelter: { status: 'yes', details: 'Extensive low-barrier shelter network' },
      safeConsumptionSite: { status: 'yes', details: 'Multiple sites across city' },
      tinyHomes: { status: 'yes', details: 'Tiny shelter villages in multiple locations' },
      safeParking: { status: 'yes', details: 'Formal safe parking program' },
      fastTrackZoning: { status: 'yes', details: 'Emergency measures during COVID' }
    },
    lessons: 'Scale and resources are different, but approaches can be adapted to smaller communities.',
    contact: 'info@toronto.ca'
  },
  {
    id: 'peterborough',
    name: 'Peterborough',
    population: '83,000',
    approaches: {
      temporarySleepingSites: { status: 'yes', details: 'Designated areas with services' },
      lowBarrierShelter: { status: 'partial', details: 'Working toward 24/7 access' },
      safeConsumptionSite: { status: 'no', details: 'Not currently available' },
      tinyHomes: { status: 'partial', details: 'Exploring pilot projects' },
      safeParking: { status: 'no', details: 'Not currently available' },
      fastTrackZoning: { status: 'yes', details: 'Expedited process for supportive housing' }
    },
    lessons: 'Similar size to Northumberland. Phased approach with community buy-in.',
    contact: 'info@peterborough.ca'
  },
  {
    id: 'kitchener',
    name: 'Kitchener',
    population: '256,000',
    approaches: {
      temporarySleepingSites: { status: 'yes', details: 'A Better Tent City model' },
      lowBarrierShelter: { status: 'yes', details: 'Multiple low-barrier options' },
      safeConsumptionSite: { status: 'yes', details: 'Consumption and treatment site' },
      tinyHomes: { status: 'yes', details: 'A Better Tent City - community-led' },
      safeParking: { status: 'partial', details: 'In development' },
      fastTrackZoning: { status: 'yes', details: 'Proactive zoning for supportive housing' }
    },
    lessons: 'A Better Tent City shows community-led solutions can work with municipal support.',
    contact: 'info@kitchener.ca'
  },
  {
    id: 'northumberland',
    name: 'Northumberland (Proposed)',
    population: '89,000',
    approaches: {
      temporarySleepingSites: { status: 'pending', details: 'In discussion' },
      lowBarrierShelter: { status: 'pending', details: 'Advocating for expansion' },
      safeConsumptionSite: { status: 'no', details: 'No current plans' },
      tinyHomes: { status: 'pending', details: 'Proposed in advocacy asks' },
      safeParking: { status: 'pending', details: 'Proposed in advocacy asks' },
      fastTrackZoning: { status: 'pending', details: 'Key advocacy priority' }
    },
    lessons: 'Opportunity to learn from other municipalities and implement proven solutions.',
    contact: 'info@northumberland.ca'
  }
];

const approaches = [
  { key: 'temporarySleepingSites', label: 'Temporary Sleeping Sites' },
  { key: 'lowBarrierShelter', label: 'Low-Barrier Shelter' },
  { key: 'safeConsumptionSite', label: 'Safe Consumption Site' },
  { key: 'tinyHomes', label: 'Tiny Homes/Shelters' },
  { key: 'safeParking', label: 'Safe Parking Program' },
  { key: 'fastTrackZoning', label: 'Fast-Track Shelter Zoning' }
];

function StatusBadge({ status }) {
  const labels = {
    yes: '✅ Yes',
    partial: '🟡 Partial',
    no: '❌ No',
    pending: '⏳ Pending'
  };
  
  return (
    <span className={`status-badge status-${status}`}>
      {labels[status] || status}
    </span>
  );
}

function MunicipalComparison() {
  const [selectedMunicipality, setSelectedMunicipality] = useState(null);

  return (
    <div className="comparison-page">
      <header className="page-header">
        <h1>Municipal Comparison Tool</h1>
        <p>
          See how other Ontario municipalities have addressed homelessness and housing.
          Learn from what works and advocate for similar solutions in Northumberland.
        </p>
      </header>

      <section className="section">
        <h2 className="section-title">Side-by-Side Comparison</h2>
        
        <div className="table-container">
          <table className="comparison-table">
            <thead>
              <tr>
                <th>Approach</th>
                {municipalData.map(m => (
                  <th key={m.id} className={m.id === 'northumberland' ? 'highlight-col' : ''}>
                    {m.name}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {approaches.map(approach => (
                <tr key={approach.key}>
                  <td className="approach-label">{approach.label}</td>
                  {municipalData.map(m => (
                    <td 
                      key={`${m.id}-${approach.key}`}
                      className={m.id === 'northumberland' ? 'highlight-col' : ''}
                    >
                      <StatusBadge status={m.approaches[approach.key].status} />
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      <section className="section">
        <h2 className="section-title">Municipality Details</h2>
        
        <div className="municipality-cards">
          {municipalData.filter(m => m.id !== 'northumberland').map(municipality => (
            <article 
              key={municipality.id} 
              className={`municipality-card ${selectedMunicipality === municipality.id ? 'expanded' : ''}`}
            >
              <div className="card-header" onClick={() => setSelectedMunicipality(
                selectedMunicipality === municipality.id ? null : municipality.id
              )}>
                <h3>{municipality.name}</h3>
                <span className="population">Pop: {municipality.population}</span>
                <button className="expand-btn" aria-label="Expand details">
                  {selectedMunicipality === municipality.id ? '−' : '+'}
                </button>
              </div>
              
              {selectedMunicipality === municipality.id && (
                <div className="card-details">
                  <h4>Approaches</h4>
                  <ul className="approach-list">
                    {approaches.map(approach => (
                      <li key={approach.key}>
                        <strong>{approach.label}:</strong>{' '}
                        <StatusBadge status={municipality.approaches[approach.key].status} />
                        <p>{municipality.approaches[approach.key].details}</p>
                      </li>
                    ))}
                  </ul>
                  
                  <div className="lessons-box">
                    <h4>💡 Key Lessons</h4>
                    <p>{municipality.lessons}</p>
                  </div>
                  
                  <a href={`mailto:${municipality.contact}`} className="btn btn-secondary">
                    Contact {municipality.name}
                  </a>
                </div>
              )}
            </article>
          ))}
        </div>
      </section>

      <section className="section">
        <div className="takeaway-card">
          <h2>Key Takeaway</h2>
          <p>
            <strong>Municipalities of similar size to Northumberland have implemented these solutions.</strong>
          </p>
          <p>
            Kingston, Peterborough, and Kitchener show that temporary zoning changes,
            low-barrier shelters, and supervised camping sites can work in smaller Ontario
            communities. These are not Toronto-only solutions.
          </p>
          <div className="takeaway-actions">
            <a href="/asks" className="btn btn-primary">
              View Specific Asks for Northumberland
            </a>
            <a href="/delegation" className="btn btn-secondary">
              Prepare Your Delegation
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}

export default MunicipalComparison;
