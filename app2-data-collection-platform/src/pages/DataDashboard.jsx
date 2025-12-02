import React from 'react';
import './DataDashboard.css';

function DataDashboard() {
  return (
    <div className="data-dashboard-page">
      <header className="page-header">
        <h1>Data Insights</h1>
        <p>
          Community data collected from stories and surveys. This information
          is used to advocate for better policies and services.
        </p>
      </header>

      <section className="overview-stats section">
        <h2 className="section-title">Overview</h2>
        <div className="stats-grid">
          <div className="stat-card primary">
            <div className="stat-icon">📝</div>
            <div className="stat-value">217</div>
            <div className="stat-label">Stories Collected</div>
          </div>
          <div className="stat-card secondary">
            <div className="stat-icon">📊</div>
            <div className="stat-value">156</div>
            <div className="stat-label">Survey Responses</div>
          </div>
          <div className="stat-card accent">
            <div className="stat-icon">🗓️</div>
            <div className="stat-value">6</div>
            <div className="stat-label">Months of Data</div>
          </div>
          <div className="stat-card">
            <div className="stat-icon">👥</div>
            <div className="stat-value">312</div>
            <div className="stat-label">Unique Voices</div>
          </div>
        </div>
      </section>

      <section className="key-findings section">
        <h2 className="section-title">Key Findings</h2>
        <div className="findings-grid">
          <div className="finding-card">
            <div className="finding-header">
              <span className="finding-icon">😴</span>
              <h3>Sleep Deprivation</h3>
            </div>
            <div className="finding-stat">3.2 hours</div>
            <p>Average uninterrupted sleep reported per night</p>
            <div className="finding-context">
              89% of respondents report being woken and told to move at least once per night
            </div>
          </div>

          <div className="finding-card">
            <div className="finding-header">
              <span className="finding-icon">🏠</span>
              <h3>Shelter Access</h3>
            </div>
            <div className="finding-stat">62%</div>
            <p>Report being turned away from shelter in past month</p>
            <div className="finding-context">
              Top reasons: capacity full (78%), intake hours missed (45%), rules/restrictions (38%)
            </div>
          </div>

          <div className="finding-card">
            <div className="finding-header">
              <span className="finding-icon">🚔</span>
              <h3>Enforcement Interactions</h3>
            </div>
            <div className="finding-stat">4.7 times</div>
            <p>Average weekly interactions with by-law or police</p>
            <div className="finding-context">
              Most common locations: downtown parks, waterfront, Tim Hortons parking lots
            </div>
          </div>

          <div className="finding-card">
            <div className="finding-header">
              <span className="finding-icon">🤝</span>
              <h3>Service Gaps</h3>
            </div>
            <div className="finding-stat">Top 3 Needs</div>
            <p>Most requested services not currently available</p>
            <ul className="finding-list">
              <li>24-hour washrooms (92%)</li>
              <li>Pet-friendly shelters (78%)</li>
              <li>Secure storage/lockers (71%)</li>
            </ul>
          </div>
        </div>
      </section>

      <section className="topic-breakdown section">
        <h2 className="section-title">Stories by Topic</h2>
        <div className="topics-chart">
          {[
            { topic: 'Sleep & Rest', count: 67, percent: 31 },
            { topic: 'Shelter Experiences', count: 54, percent: 25 },
            { topic: 'Housing Challenges', count: 38, percent: 18 },
            { topic: 'Enforcement', count: 28, percent: 13 },
            { topic: 'Services', count: 18, percent: 8 },
            { topic: 'Community/Positive', count: 12, percent: 5 }
          ].map((item, index) => (
            <div key={index} className="topic-row">
              <span className="topic-name">{item.topic}</span>
              <div className="topic-bar-container">
                <div 
                  className="topic-bar" 
                  style={{ width: `${item.percent}%` }}
                ></div>
              </div>
              <span className="topic-count">{item.count}</span>
            </div>
          ))}
        </div>
      </section>

      <section className="quotes section">
        <h2 className="section-title">In Their Words</h2>
        <div className="quotes-grid">
          <blockquote className="quote-card">
            "I haven't slept more than 3 hours straight in six months. My brain doesn't work anymore."
            <footer>— On sleep deprivation</footer>
          </blockquote>
          <blockquote className="quote-card">
            "The shelter has a 6pm cutoff. If you're working a late shift, you lose your bed."
            <footer>— On shelter rules</footer>
          </blockquote>
          <blockquote className="quote-card">
            "We need a place where we can just exist without being moved every hour."
            <footer>— On what would help</footer>
          </blockquote>
        </div>
      </section>

      <section className="export section">
        <div className="card export-card">
          <h2>Use This Data</h2>
          <p>
            This data is collected to create change. Download summary reports
            to share with council, media, or advocacy groups.
          </p>
          <div className="export-actions">
            <button className="btn btn-primary">
              Download Summary Report (PDF)
            </button>
            <button className="btn btn-secondary">
              Export Data (CSV)
            </button>
          </div>
          <p className="privacy-note">
            <strong>Privacy:</strong> All exports are fully anonymized with no
            identifying information.
          </p>
        </div>
      </section>
    </div>
  );
}

export default DataDashboard;
