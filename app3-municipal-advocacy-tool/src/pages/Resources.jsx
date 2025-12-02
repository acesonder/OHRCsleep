import React from 'react';
import './Resources.css';

const fundingSources = [
  {
    name: 'Reaching Home (Federal)',
    description: 'Federal homelessness prevention funding',
    url: 'https://www.infrastructure.gc.ca/homelessness-sans-abri/index-eng.html',
    type: 'Government'
  },
  {
    name: 'Ontario Trillium Foundation',
    description: 'Community tech and capacity building projects',
    url: 'https://www.otf.ca/',
    type: 'Foundation'
  },
  {
    name: 'Law Foundation of Ontario',
    description: 'Access to justice and legal tech projects',
    url: 'https://lawfoundation.on.ca/',
    type: 'Foundation'
  },
  {
    name: 'United Way Northumberland',
    description: 'Local community building initiatives',
    url: 'https://www.uwlakeshore.ca/',
    type: 'Community'
  },
  {
    name: 'McConnell Foundation',
    description: 'Social innovation and systems change',
    url: 'https://mcconnellfoundation.ca/',
    type: 'Foundation'
  }
];

const legalResources = [
  {
    name: 'Ontario Human Rights Legal Support Centre',
    description: 'Free legal help for human rights issues',
    phone: '1-866-625-5179',
    url: 'https://www.hrlsc.on.ca/'
  },
  {
    name: 'Human Rights Tribunal of Ontario',
    description: 'File human rights complaints',
    phone: '1-866-598-0322',
    url: 'https://www.hrto.ca/'
  },
  {
    name: 'Community Legal Clinics',
    description: 'Free legal services for low-income individuals',
    url: 'https://www.legalaid.on.ca/services/legal-clinics/'
  },
  {
    name: 'Advocacy Centre for Tenants Ontario',
    description: 'Tenant rights and housing advocacy',
    phone: '416-597-5820',
    url: 'https://www.acto.ca/'
  }
];

const contacts = [
  {
    category: 'Local Government',
    items: [
      { name: 'Cobourg Town Council', email: 'clerk@cobourg.ca', phone: '905-372-4301' },
      { name: 'Northumberland County', email: 'info@northumberland.ca', phone: '905-372-3329' },
      { name: 'Cobourg Planning Department', email: 'planning@cobourg.ca', phone: '905-372-4301' }
    ]
  },
  {
    category: 'Provincial',
    items: [
      { name: 'MPP Office', note: 'Find your MPP at ola.org', url: 'https://www.ola.org/en/members/current' },
      { name: 'Ministry of Municipal Affairs', email: 'mininfo.mah@ontario.ca' },
      { name: 'Ontario Human Rights Commission', url: 'https://www.ohrc.on.ca/' }
    ]
  },
  {
    category: 'Federal',
    items: [
      { name: 'MP Office', note: 'Find your MP at ourcommons.ca', url: 'https://www.ourcommons.ca/members/en' },
      { name: 'CMHC', url: 'https://www.cmhc-schl.gc.ca/' }
    ]
  }
];

const keyDocuments = [
  { name: 'OHRC Policy on Housing Discrimination', type: 'PDF' },
  { name: 'OHRC Position on Homelessness', type: 'PDF' },
  { name: 'Ontario Planning Act - Temporary Use By-laws', type: 'Legislation' },
  { name: 'Northumberland County Housing Plan', type: 'PDF' },
  { name: 'Cobourg Zoning By-law', type: 'Document' }
];

function Resources() {
  return (
    <div className="resources-page">
      <header className="page-header">
        <h1>Resources & Funding</h1>
        <p>
          Funding sources, legal resources, contact information, and key documents
          to support your advocacy efforts.
        </p>
      </header>

      <section className="section" id="funding">
        <h2 className="section-title">Funding Sources</h2>
        
        <div className="funding-grid">
          {fundingSources.map((source, i) => (
            <article key={i} className="funding-card">
              <span className="funding-type">{source.type}</span>
              <h3>{source.name}</h3>
              <p>{source.description}</p>
              <a href={source.url} target="_blank" rel="noopener noreferrer" className="btn btn-secondary">
                Visit Website
              </a>
            </article>
          ))}
        </div>
      </section>

      <section className="section" id="legal">
        <h2 className="section-title">Legal Resources</h2>
        
        <div className="legal-grid">
          {legalResources.map((resource, i) => (
            <article key={i} className="legal-card">
              <h3>{resource.name}</h3>
              <p>{resource.description}</p>
              <div className="contact-info">
                {resource.phone && (
                  <a href={`tel:${resource.phone}`} className="contact-link">
                    📞 {resource.phone}
                  </a>
                )}
                {resource.url && (
                  <a href={resource.url} target="_blank" rel="noopener noreferrer" className="contact-link">
                    🔗 Website
                  </a>
                )}
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="section" id="contacts">
        <h2 className="section-title">Contact Representatives</h2>
        
        <div className="contacts-grid">
          {contacts.map((group, i) => (
            <div key={i} className="contact-group">
              <h3>{group.category}</h3>
              <ul>
                {group.items.map((contact, j) => (
                  <li key={j} className="contact-item">
                    <strong>{contact.name}</strong>
                    {contact.email && (
                      <a href={`mailto:${contact.email}`}>{contact.email}</a>
                    )}
                    {contact.phone && (
                      <a href={`tel:${contact.phone}`}>{contact.phone}</a>
                    )}
                    {contact.note && <span className="note">{contact.note}</span>}
                    {contact.url && !contact.email && (
                      <a href={contact.url} target="_blank" rel="noopener noreferrer">
                        Visit Website
                      </a>
                    )}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      <section className="section" id="ohrc">
        <h2 className="section-title">OHRC Guidance</h2>
        
        <div className="ohrc-section">
          <div className="ohrc-intro">
            <h3>Key OHRC Positions on Homelessness</h3>
            <p>
              The Ontario Human Rights Commission has issued clear guidance on municipal
              obligations regarding homelessness and housing. Key points include:
            </p>
          </div>
          
          <div className="ohrc-points">
            <div className="ohrc-point">
              <h4>Addiction as Disability</h4>
              <p>
                Addiction is recognized as a disability under the Human Rights Code.
                People with addictions are entitled to protection from discrimination.
              </p>
            </div>
            <div className="ohrc-point">
              <h4>Right to Sleep</h4>
              <p>
                When no adequate shelter exists, people must be allowed to sleep somewhere.
                Blanket bans on sleeping in public may violate rights.
              </p>
            </div>
            <div className="ohrc-point">
              <h4>Zoning Obligations</h4>
              <p>
                Zoning that effectively excludes shelters or supportive housing may
                constitute discrimination. NIMBY opposition is not justification.
              </p>
            </div>
            <div className="ohrc-point">
              <h4>Duty to Accommodate</h4>
              <p>
                Municipalities must remove barriers unless doing so causes "undue hardship."
                The burden is on them to prove hardship.
              </p>
            </div>
          </div>
          
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

      <section className="section" id="documents">
        <h2 className="section-title">Key Documents</h2>
        
        <div className="documents-list">
          {keyDocuments.map((doc, i) => (
            <div key={i} className="document-item">
              <span className="doc-icon">📄</span>
              <span className="doc-name">{doc.name}</span>
              <span className="doc-type">{doc.type}</span>
              <button className="btn btn-secondary btn-small">Download</button>
            </div>
          ))}
        </div>
      </section>

      <section className="section">
        <div className="help-card">
          <h2>Need Help?</h2>
          <p>
            If you need assistance navigating these resources or preparing your
            advocacy materials, reach out to us.
          </p>
          <div className="help-actions">
            <button className="btn btn-primary">Contact Us</button>
            <button className="btn btn-secondary">Join Our Newsletter</button>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Resources;
