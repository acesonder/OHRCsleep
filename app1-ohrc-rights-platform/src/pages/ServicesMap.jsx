import React, { useState } from 'react';
import './ServicesMap.css';

// Sample service data for Cobourg & Northumberland
const servicesData = [
  {
    id: 1,
    name: 'Transition House Emergency Shelter',
    type: 'shelter',
    address: '315 Division St, Cobourg, ON',
    phone: '905-372-0007',
    hours: '24/7',
    features: ['Emergency beds', 'Meals provided', 'Case management'],
    lowBarrier: true,
    coordinates: [43.9606, -78.1664]
  },
  {
    id: 2,
    name: 'Northumberland County Housing',
    type: 'housing',
    address: '860 William St, Cobourg, ON',
    phone: '905-372-6846',
    hours: 'Mon-Fri 8:30am-4:30pm',
    features: ['Housing applications', 'Rent supplements', 'Support services'],
    lowBarrier: false,
    coordinates: [43.9585, -78.1578]
  },
  {
    id: 3,
    name: 'Cornerstone Family Violence Prevention',
    type: 'shelter',
    address: 'Confidential Location',
    phone: '1-800-263-3757',
    hours: '24/7 Crisis Line',
    features: ['Emergency shelter', 'Counselling', 'Safety planning', 'Women & children'],
    lowBarrier: true,
    coordinates: [43.9550, -78.1700]
  },
  {
    id: 4,
    name: 'Community Care Northumberland',
    type: 'food',
    address: '905 Division St, Cobourg, ON',
    phone: '905-885-6542',
    hours: 'Mon-Fri 9am-4pm',
    features: ['Food bank', 'Meal programs', 'Transportation'],
    lowBarrier: true,
    coordinates: [43.9520, -78.1620]
  },
  {
    id: 5,
    name: 'Canadian Mental Health Association',
    type: 'health',
    address: '61 King St W, Cobourg, ON',
    phone: '905-377-1795',
    hours: 'Mon-Fri 8:30am-4:30pm',
    features: ['Mental health support', 'Crisis services', 'Housing support'],
    lowBarrier: false,
    coordinates: [43.9595, -78.1680]
  },
  {
    id: 6,
    name: 'Cobourg Public Library',
    type: 'resources',
    address: '200 Ontario St, Cobourg, ON',
    phone: '905-372-9271',
    hours: 'Mon-Sat 10am-8pm',
    features: ['Free internet', 'Warm space', 'Charging stations', 'Washrooms'],
    lowBarrier: true,
    coordinates: [43.9582, -78.1655]
  }
];

const serviceTypes = [
  { value: 'all', label: 'All Services', icon: '📍' },
  { value: 'shelter', label: 'Shelters', icon: '🏠' },
  { value: 'housing', label: 'Housing Services', icon: '🏢' },
  { value: 'food', label: 'Food & Meals', icon: '🍲' },
  { value: 'health', label: 'Health Services', icon: '🏥' },
  { value: 'resources', label: 'Community Resources', icon: '📚' }
];

function ServicesMap() {
  const [selectedType, setSelectedType] = useState('all');
  const [showLowBarrierOnly, setShowLowBarrierOnly] = useState(false);

  const filteredServices = servicesData.filter(service => {
    const typeMatch = selectedType === 'all' || service.type === selectedType;
    const barrierMatch = !showLowBarrierOnly || service.lowBarrier;
    return typeMatch && barrierMatch;
  });

  return (
    <div className="services-page">
      <header className="page-header">
        <h1>Services Map</h1>
        <p>
          Find shelters, food services, health resources, and community support
          in Cobourg &amp; Northumberland County.
        </p>
      </header>

      <section className="emergency-banner">
        <h2>Need Immediate Help?</h2>
        <div className="emergency-numbers">
          <a href="tel:211" className="emergency-link">
            <span className="number">211</span>
            <span className="label">Community Services</span>
          </a>
          <a href="tel:911" className="emergency-link emergency">
            <span className="number">911</span>
            <span className="label">Emergencies</span>
          </a>
          <a href="tel:1-866-531-2600" className="emergency-link">
            <span className="number">1-866-531-2600</span>
            <span className="label">Crisis Line</span>
          </a>
        </div>
      </section>

      <section className="filters-section">
        <div className="filter-group">
          <label htmlFor="service-type" className="form-label">
            Filter by Service Type:
          </label>
          <select
            id="service-type"
            className="form-select"
            value={selectedType}
            onChange={(e) => setSelectedType(e.target.value)}
          >
            {serviceTypes.map(type => (
              <option key={type.value} value={type.value}>
                {type.icon} {type.label}
              </option>
            ))}
          </select>
        </div>

        <div className="filter-checkbox">
          <input
            type="checkbox"
            id="low-barrier"
            checked={showLowBarrierOnly}
            onChange={(e) => setShowLowBarrierOnly(e.target.checked)}
          />
          <label htmlFor="low-barrier">
            Show only low-barrier services
          </label>
        </div>
      </section>

      <section className="map-container">
        <div className="map-placeholder" role="img" aria-label="Map of services in Cobourg and Northumberland">
          <div className="map-overlay">
            <p>Interactive map would display here</p>
            <p className="map-note">
              Integration with Leaflet/OpenStreetMap showing {filteredServices.length} services
            </p>
          </div>
        </div>
      </section>

      <section className="services-list section">
        <h2 className="section-title">
          Available Services ({filteredServices.length})
        </h2>

        {filteredServices.length === 0 ? (
          <div className="no-results">
            <p>No services match your current filters. Try adjusting your selection.</p>
          </div>
        ) : (
          <div className="services-grid">
            {filteredServices.map(service => (
              <article key={service.id} className="service-card">
                <div className="service-header">
                  <span className="service-icon">
                    {serviceTypes.find(t => t.value === service.type)?.icon || '📍'}
                  </span>
                  <div>
                    <h3>{service.name}</h3>
                    {service.lowBarrier && (
                      <span className="low-barrier-badge">Low Barrier</span>
                    )}
                  </div>
                </div>

                <div className="service-details">
                  <p className="service-address">
                    <strong>📍</strong> {service.address}
                  </p>
                  <p className="service-phone">
                    <strong>📞</strong>{' '}
                    <a href={`tel:${service.phone}`}>{service.phone}</a>
                  </p>
                  <p className="service-hours">
                    <strong>🕐</strong> {service.hours}
                  </p>
                </div>

                <div className="service-features">
                  {service.features.map((feature, index) => (
                    <span key={index} className="feature-tag">
                      {feature}
                    </span>
                  ))}
                </div>
              </article>
            ))}
          </div>
        )}
      </section>

      <section className="add-service section">
        <div className="card">
          <h2>Know of a service we're missing?</h2>
          <p>
            Help us keep this directory up to date by suggesting services that
            should be included.
          </p>
          <button className="btn btn-primary">
            Suggest a Service
          </button>
        </div>
      </section>
    </div>
  );
}

export default ServicesMap;
