import React from 'react';
import './About.css';

function About() {
  return (
    <div className="about-page">
      <header className="page-header">
        <h1>About This Platform</h1>
        <p>
          A community-driven resource for human rights advocacy in Cobourg &amp; Northumberland County.
        </p>
      </header>

      <section className="section">
        <h2 className="section-title">Our Mission</h2>
        <div className="mission-statement">
          <p>
            The OHRC Rights Platform was created to empower people experiencing homelessness,
            addiction, and housing insecurity in Cobourg and Northumberland County. We believe that:
          </p>
          <ul className="mission-points">
            <li>Everyone deserves a safe place to sleep</li>
            <li>Human rights apply to everyone, regardless of housing status</li>
            <li>Community voices must be heard in policy decisions</li>
            <li>Access to information should be simple and barrier-free</li>
          </ul>
        </div>
      </section>

      <section className="section">
        <h2 className="section-title">What We Do</h2>
        <div className="grid grid-3">
          <div className="about-card">
            <h3>📚 Inform</h3>
            <p>
              Provide clear, accessible information about rights under the Ontario Human Rights Code,
              local by-laws, and available services.
            </p>
          </div>
          <div className="about-card">
            <h3>🗣️ Amplify</h3>
            <p>
              Collect and share stories from people with lived experience to inform policy makers
              and the public about real impacts of housing and zoning decisions.
            </p>
          </div>
          <div className="about-card">
            <h3>🤝 Connect</h3>
            <p>
              Help community members participate in council meetings, consultations, and advocacy
              efforts to create meaningful change.
            </p>
          </div>
        </div>
      </section>

      <section className="section">
        <h2 className="section-title">The Ontario Human Rights Commission</h2>
        <div className="card">
          <p>
            The <strong>Ontario Human Rights Commission (OHRC)</strong> was established in 1961
            under the Ontario Human Rights Code. Its mandate is to prevent and address discrimination
            in areas including housing, services, employment, and contracts.
          </p>
          <p>
            The OHRC has repeatedly stated that homelessness, addiction, and mental health are
            <strong> human rights issues</strong>, not just social problems. Municipalities must ensure
            that by-laws, zoning changes, and enforcement do not discriminate against protected groups.
          </p>
          <a 
            href="https://www.ohrc.on.ca/" 
            target="_blank" 
            rel="noopener noreferrer"
            className="btn btn-primary"
          >
            Visit OHRC Website
          </a>
        </div>
      </section>

      <section className="section">
        <h2 className="section-title">Accessibility Commitment</h2>
        <div className="card">
          <p>
            This platform is designed with accessibility as a core principle. We are committed to:
          </p>
          <ul>
            <li>Meeting <strong>WCAG 2.1 AA standards</strong> at minimum</li>
            <li>Using plain language (Grade 6 reading level where possible)</li>
            <li>Supporting screen readers and keyboard navigation</li>
            <li>Working on low-bandwidth connections and older devices</li>
            <li>Offering multiple ways to submit information (text, voice)</li>
          </ul>
          <p>
            If you experience any accessibility barriers, please let us know so we can improve.
          </p>
        </div>
      </section>

      <section className="section">
        <h2 className="section-title">Privacy &amp; Data Protection</h2>
        <div className="card">
          <p>We take your privacy seriously:</p>
          <ul>
            <li><strong>Anonymous submissions</strong> are always accepted</li>
            <li>We do not track your location or require personal information</li>
            <li>Contact information is optional and stored securely</li>
            <li>Stories are anonymized before being shared publicly</li>
            <li>We comply with Canadian privacy laws (PIPEDA)</li>
            <li>You can request deletion of your data at any time</li>
          </ul>
        </div>
      </section>

      <section className="section">
        <h2 className="section-title">Get Involved</h2>
        <div className="grid grid-2">
          <div className="card">
            <h3>Lived Experience Advisory</h3>
            <p>
              We're building an advisory group of people with current or recent lived experience
              of homelessness or housing insecurity. Your expertise is valued and compensated.
            </p>
            <button className="btn btn-primary">Learn More</button>
          </div>
          <div className="card">
            <h3>Partner Organizations</h3>
            <p>
              If you're a service provider, advocate, or community organization interested in
              partnering with us, we'd love to hear from you.
            </p>
            <button className="btn btn-secondary">Contact Us</button>
          </div>
        </div>
      </section>

      <section className="section">
        <h2 className="section-title">Disclaimer</h2>
        <div className="alert alert-warning">
          <p>
            This platform is for <strong>informational purposes only</strong>. The information
            provided does not constitute legal advice. For legal assistance, please consult with
            a licensed legal professional or contact the Human Rights Legal Support Centre at
            <a href="tel:1-866-625-5179"> 1-866-625-5179</a>.
          </p>
        </div>
      </section>
    </div>
  );
}

export default About;
