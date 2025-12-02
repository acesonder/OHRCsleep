import React from 'react';
import './Advocacy.css';

const upcomingMeetings = [
  {
    id: 1,
    title: 'Cobourg Town Council Meeting',
    date: 'December 12, 2024',
    time: '7:00 PM',
    location: 'Victoria Hall, Cobourg',
    type: 'Town Council',
    registrationDeadline: 'December 10, 2024',
    topics: ['Housing updates', 'By-law review']
  },
  {
    id: 2,
    title: 'Northumberland County Housing Committee',
    date: 'December 18, 2024',
    time: '1:00 PM',
    location: 'County Building, Cobourg',
    type: 'County Committee',
    registrationDeadline: 'December 15, 2024',
    topics: ['Homelessness plan review', 'Emergency shelter capacity']
  },
  {
    id: 3,
    title: 'Public Planning Meeting - Zoning Amendment',
    date: 'January 8, 2025',
    time: '6:00 PM',
    location: 'Cobourg Community Centre',
    type: 'Public Hearing',
    registrationDeadline: 'January 5, 2025',
    topics: ['Proposed supportive housing zoning', 'Public comments']
  }
];

function Advocacy() {
  return (
    <div className="advocacy-page">
      <header className="page-header">
        <h1>Take Action</h1>
        <p>
          Your voice can change policy. Learn how to participate in council meetings,
          contact your representatives, and advocate for change in Cobourg &amp; Northumberland.
        </p>
      </header>

      <section className="section" id="meetings">
        <h2 className="section-title">📅 Upcoming Council Meetings</h2>
        
        <div className="meetings-list">
          {upcomingMeetings.map(meeting => (
            <article key={meeting.id} className="meeting-card">
              <div className="meeting-header">
                <span className="meeting-type">{meeting.type}</span>
                <h3>{meeting.title}</h3>
              </div>
              <div className="meeting-details">
                <p><strong>📅 Date:</strong> {meeting.date}</p>
                <p><strong>🕐 Time:</strong> {meeting.time}</p>
                <p><strong>📍 Location:</strong> {meeting.location}</p>
                <p><strong>⏰ Register by:</strong> {meeting.registrationDeadline}</p>
              </div>
              <div className="meeting-topics">
                <strong>Topics:</strong>
                <ul>
                  {meeting.topics.map((topic, index) => (
                    <li key={index}>{topic}</li>
                  ))}
                </ul>
              </div>
              <div className="meeting-actions">
                <button className="btn btn-primary">Register to Speak</button>
                <button className="btn btn-secondary">Get Preparation Tips</button>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="section" id="howto">
        <h2 className="section-title">How to Speak at a Council Meeting</h2>
        
        <div className="steps-container">
          <div className="step">
            <div className="step-number">1</div>
            <div className="step-content">
              <h3>Register in Advance</h3>
              <p>
                Most councils require you to register as a "delegation" before the meeting.
                Check the deadline for registration (usually 3-5 days before).
              </p>
            </div>
          </div>
          
          <div className="step">
            <div className="step-number">2</div>
            <div className="step-content">
              <h3>Prepare Your Speaking Points</h3>
              <p>
                You usually have 3-5 minutes to speak. Focus on 2-3 key points.
                Personal stories are powerful. Be respectful but clear about what you're asking for.
              </p>
            </div>
          </div>
          
          <div className="step">
            <div className="step-number">3</div>
            <div className="step-content">
              <h3>Arrive Early</h3>
              <p>
                Get to the meeting 15-20 minutes early to sign in and find your seat.
                Bring copies of any written materials to leave with councillors.
              </p>
            </div>
          </div>
          
          <div className="step">
            <div className="step-number">4</div>
            <div className="step-content">
              <h3>Present Your Case</h3>
              <p>
                Speak clearly and address the chair. Stick to your time limit.
                Be prepared for questions, but you don't have to answer if you're uncomfortable.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="section" id="templates">
        <h2 className="section-title">Speaking Templates &amp; Scripts</h2>
        
        <div className="templates-grid">
          <div className="template-card">
            <h3>🎤 3-Minute Delegation Script</h3>
            <p>A ready-to-use template for speaking at council meetings about housing and sleep deprivation.</p>
            <button className="btn btn-primary">View Template</button>
          </div>
          
          <div className="template-card">
            <h3>✉️ Letter to Councillors</h3>
            <p>Email template to send to your local councillors about zoning changes and housing.</p>
            <button className="btn btn-primary">View Template</button>
          </div>
          
          <div className="template-card">
            <h3>📝 Letter to MPP/MP</h3>
            <p>Template for writing to provincial or federal representatives about housing rights.</p>
            <button className="btn btn-primary">View Template</button>
          </div>
          
          <div className="template-card">
            <h3>⚖️ OHRC Complaint Guide</h3>
            <p>Step-by-step guide for filing a human rights complaint with the OHRC.</p>
            <button className="btn btn-primary">View Guide</button>
          </div>
        </div>
      </section>

      <section className="section" id="contact">
        <h2 className="section-title">Contact Your Representatives</h2>
        
        <div className="grid grid-2">
          <div className="card">
            <h3>Local Representatives</h3>
            <ul className="contact-list">
              <li>
                <strong>Cobourg Town Council</strong>
                <a href="mailto:clerk@cobourg.ca">clerk@cobourg.ca</a>
                <span>905-372-4301</span>
              </li>
              <li>
                <strong>Northumberland County Council</strong>
                <a href="mailto:info@northumberland.ca">info@northumberland.ca</a>
                <span>905-372-3329</span>
              </li>
            </ul>
          </div>
          
          <div className="card">
            <h3>Provincial &amp; Federal</h3>
            <ul className="contact-list">
              <li>
                <strong>MPP - Northumberland-Peterborough South</strong>
                <a href="https://www.ola.org/en/members/current" target="_blank" rel="noopener noreferrer">
                  Find your MPP
                </a>
              </li>
              <li>
                <strong>MP - Northumberland-Peterborough South</strong>
                <a href="https://www.ourcommons.ca/members/en" target="_blank" rel="noopener noreferrer">
                  Find your MP
                </a>
              </li>
            </ul>
          </div>
        </div>
      </section>

      <section className="section" id="ohrc-complaint">
        <h2 className="section-title">⚖️ Filing an OHRC Complaint</h2>
        
        <div className="card">
          <p>
            If you believe your human rights have been violated related to housing, services,
            or by-law enforcement, you can file a complaint with the Human Rights Tribunal of Ontario.
          </p>
          
          <div className="complaint-steps">
            <h4>Who Can Help You:</h4>
            <ul>
              <li>
                <strong>Human Rights Legal Support Centre:</strong>{' '}
                <a href="tel:1-866-625-5179">1-866-625-5179</a> (free legal assistance)
              </li>
              <li>
                <strong>Community Legal Clinics:</strong> Free help for low-income individuals
              </li>
              <li>
                <strong>Advocacy Centre for Tenants Ontario:</strong>{' '}
                <a href="tel:416-597-5820">416-597-5820</a>
              </li>
            </ul>
          </div>
          
          <a 
            href="https://www.hrto.ca/" 
            target="_blank" 
            rel="noopener noreferrer"
            className="btn btn-primary"
          >
            Visit Human Rights Tribunal of Ontario
          </a>
        </div>
      </section>

      <section className="section" id="success-stories">
        <h2 className="section-title">What Other Communities Have Achieved</h2>
        
        <div className="success-grid">
          <div className="success-card">
            <h3>🏕️ Kingston - Safe Camping Pilot</h3>
            <p>
              Kingston implemented a supervised camping site with washrooms and outreach services,
              providing a legal place for people to sleep.
            </p>
          </div>
          <div className="success-card">
            <h3>🏠 Kitchener - A Better Tent City</h3>
            <p>
              A community-led tiny shelter village providing dignified housing with wraparound
              supports for people experiencing homelessness.
            </p>
          </div>
          <div className="success-card">
            <h3>🚗 Toronto - Safe Parking Program</h3>
            <p>
              Designated parking lots for people living in vehicles, with security, washrooms,
              and case management services.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Advocacy;
