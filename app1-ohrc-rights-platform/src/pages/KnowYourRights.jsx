import React from 'react';
import './KnowYourRights.css';

function KnowYourRights() {
  return (
    <div className="rights-page">
      <header className="page-header">
        <h1>Know Your Rights</h1>
        <p>
          Understanding your rights under the Ontario Human Rights Code and how zoning
          and by-laws affect people experiencing homelessness, addiction, and housing insecurity.
        </p>
      </header>

      <section className="section" id="ohrc">
        <h2 className="section-title">Your Rights Under the Ontario Human Rights Code</h2>
        
        <div className="rights-grid">
          <article className="rights-card">
            <h3>🏠 Right to Housing</h3>
            <p>
              Under the Ontario Human Rights Code, you cannot be discriminated against in housing
              based on disability, including mental health conditions and addictions.
            </p>
            <ul>
              <li>Landlords cannot refuse to rent to you because of addiction or mental health</li>
              <li>Housing providers must make reasonable accommodations</li>
              <li>NIMBY opposition cannot be the basis for denying supportive housing</li>
            </ul>
          </article>

          <article className="rights-card">
            <h3>🛡️ Protection from Discrimination</h3>
            <p>
              Addiction is recognized as a disability under the Human Rights Code. This means:
            </p>
            <ul>
              <li>You have the right to access services without discrimination</li>
              <li>Municipalities cannot create by-laws that target you based on disability</li>
              <li>Employers and service providers must accommodate your needs</li>
            </ul>
          </article>

          <article className="rights-card">
            <h3>⚖️ Duty to Accommodate</h3>
            <p>
              Organizations have a legal duty to accommodate people with disabilities:
            </p>
            <ul>
              <li>They must remove barriers unless it causes "undue hardship"</li>
              <li>Undue hardship means excessive cost or serious health/safety risks</li>
              <li>The burden is on them to prove undue hardship, not on you</li>
            </ul>
          </article>
        </div>
      </section>

      <section className="section" id="sleep">
        <h2 className="section-title">Sleep as a Human Right</h2>
        
        <div className="card highlight-card">
          <h3>Why Sleep Matters</h3>
          <p>
            Sleep is a basic biological need. When people experiencing homelessness are
            constantly forced to move, they cannot get adequate rest. This leads to:
          </p>
          <ul className="impact-list">
            <li>Worsening mental and physical health</li>
            <li>Increased risk of overdose and accidents</li>
            <li>Greater vulnerability to crisis situations</li>
            <li>Difficulty accessing services and maintaining appointments</li>
          </ul>
        </div>

        <div className="info-box">
          <h4>What Courts Have Said</h4>
          <p>
            Canadian courts have increasingly recognized that:
          </p>
          <ul>
            <li>People must be allowed to sleep somewhere if no adequate shelter exists</li>
            <li>Blanket bans on sleeping in public may violate constitutional rights</li>
            <li>Enforcement without providing alternatives can be cruel and discriminatory</li>
          </ul>
        </div>
      </section>

      <section className="section" id="zoning">
        <h2 className="section-title">Zoning and By-laws: What You Should Know</h2>
        
        <div className="grid grid-2">
          <div className="card">
            <h3>Zoning By-laws</h3>
            <p>Zoning controls what types of buildings and uses are allowed in different areas:</p>
            <ul>
              <li><strong>Positive use:</strong> Enabling shelters, supportive housing, treatment facilities</li>
              <li><strong>Negative use:</strong> Restricting services to remote areas, imposing barriers</li>
            </ul>
            <p className="warning">
              Zoning that effectively excludes shelters or treatment facilities from suitable
              locations may be discriminatory.
            </p>
          </div>

          <div className="card">
            <h3>Public Space By-laws</h3>
            <p>Rules about camping, loitering, and public spaces:</p>
            <ul>
              <li>Cannot be used to target people with nowhere else to go</li>
              <li>May amount to indirect discrimination</li>
              <li>OHRC expects municipalities to ensure people can exist and rest somewhere</li>
            </ul>
          </div>
        </div>
      </section>

      <section className="section" id="info-cards">
        <h2 className="section-title">Quick Reference Cards</h2>
        
        <div className="info-cards-grid">
          <div className="quick-card">
            <h4>If You Are Told to Move</h4>
            <ul>
              <li>Stay calm and respectful</li>
              <li>Ask where you are legally allowed to go</li>
              <li>Ask for the officer's name and badge number</li>
              <li>Document the interaction (time, location, what was said)</li>
              <li>Contact an advocate or legal clinic if your rights were violated</li>
            </ul>
          </div>

          <div className="quick-card">
            <h4>If Refused Housing or Shelter</h4>
            <ul>
              <li>Ask for the reason in writing</li>
              <li>If the reason relates to addiction or mental health, this may be discrimination</li>
              <li>Contact the Ontario Human Rights Legal Support Centre</li>
              <li>File a complaint with the Human Rights Tribunal of Ontario</li>
            </ul>
          </div>

          <div className="quick-card">
            <h4>Know Your Rights During Enforcement</h4>
            <ul>
              <li>By-law officers are not police - different rules apply</li>
              <li>You have the right to know what by-law you allegedly violated</li>
              <li>You can dispute tickets and fines</li>
              <li>Taking your belongings without notice may be illegal</li>
            </ul>
          </div>
        </div>
      </section>

      <section className="section" id="resources">
        <h2 className="section-title">Get Help</h2>
        
        <div className="resources-list">
          <div className="resource-item">
            <h4>Ontario Human Rights Legal Support Centre</h4>
            <p>Free legal help for human rights issues</p>
            <a href="tel:1-866-625-5179" className="btn btn-secondary">
              1-866-625-5179
            </a>
          </div>

          <div className="resource-item">
            <h4>Community Legal Clinics</h4>
            <p>Free legal services for low-income individuals</p>
            <a href="https://www.legalaid.on.ca/" target="_blank" rel="noopener noreferrer" className="btn btn-secondary">
              Find a Clinic
            </a>
          </div>

          <div className="resource-item">
            <h4>Advocacy Centre for Tenants Ontario</h4>
            <p>Tenant rights and housing advocacy</p>
            <a href="tel:416-597-5820" className="btn btn-secondary">
              416-597-5820
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}

export default KnowYourRights;
