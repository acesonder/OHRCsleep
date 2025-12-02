import React, { useState } from 'react';
import './DelegationTools.css';

const speechTemplates = [
  {
    id: 'general',
    title: '3-Minute General Delegation',
    description: 'A balanced overview of the issue and proposed solutions',
    template: `Good evening, Mayor and Council members. My name is [YOUR NAME]. I'm here representing [NUMBER] community members who have shared their experiences through our platform.

Our data shows **217 incidents of people being displaced while trying to sleep** last month alone. The average person without housing reports getting just **3.2 hours of uninterrupted sleep per night**.

The Ontario Human Rights Commission is clear: municipalities must ensure people have legal places to exist and rest. Currently, there is **nowhere in Cobourg** where someone without housing can legally sleep without risk of being moved.

We are proposing three **temporary zoning changes** for 12 months:

1. Designate [SPECIFIC LOCATION] for overnight sleeping with basic services
2. Fast-track emergency shelter approvals in commercial zones  
3. Pilot a 20-unit tiny shelter village on [MUNICIPAL LAND]

These are evidence-based, temporary measures while permanent solutions develop. **Kingston, Peterborough, and Kitchener** have all implemented similar approaches successfully.

The cost of inaction is measured in lives lost, emergency room visits, and ongoing human rights violations.

I have [NUMBER] signatures from community members supporting these changes, and [NUMBER] stories from people directly affected.

We are ready to work with staff on implementation. Thank you.`
  },
  {
    id: 'sleep',
    title: 'Sleep Deprivation Focus',
    description: 'Emphasizes the sleep crisis and its human rights implications',
    template: `Good evening. My name is [YOUR NAME].

I want to talk about something we all take for granted: **sleep**.

Our community data shows that people living unsheltered in Northumberland get an average of **3.2 hours of uninterrupted sleep per night**. 

That's not a typo. Three point two hours.

**89%** of respondents report being woken up and told to move at least once per night - by police, by by-law officers, by security guards. 

Imagine trying to function on 3 hours of broken sleep. Every night. For months.

Sleep deprivation causes:
- Cognitive impairment similar to intoxication
- Weakened immune systems
- Increased risk of overdose
- Severe mental health impacts

The Ontario Human Rights Commission has made clear that forcing people into chronic sleep deprivation through enforcement, without providing alternatives, is a human rights issue.

**We are asking council to designate safe sleeping locations** - not because we think it's ideal, but because people need to sleep somewhere while we work on longer-term housing solutions.

Other municipalities have done this. We can too.

Thank you.`
  },
  {
    id: 'zoning',
    title: 'Zoning Focus',
    description: 'Focuses on specific zoning changes needed',
    template: `Good evening, Mayor and Council. My name is [YOUR NAME].

I'm here to ask for **three specific zoning changes** that could save lives this winter:

**First: Temporary Use By-law for Safe Sleeping**
Designate 2-3 sites where overnight sleeping is permitted for one year, with basic facilities. This is already done in Kingston, Toronto, and Peterborough.

**Second: Fast-Track Shelter Approvals**  
Currently, opening an emergency shelter can take 6+ months of zoning approvals. We're asking for a 30-day expedited process for emergency shelters in commercial and industrial zones.

**Third: Safe Parking Program**
Allow designated parking lots to host people living in vehicles, with washrooms and case management. This costs almost nothing to implement.

These are not radical ideas. They are **tested, temporary measures** used across Ontario.

The Planning Act specifically allows for temporary use by-laws. The OHRC expects municipalities to remove barriers to shelter access, not create them.

We have [NUMBER] community members who have signed in support of these changes.

The alternative is to continue displacing people every night with nowhere to go. That's not acceptable.

Thank you.`
  }
];

const ohrcCitations = [
  {
    topic: 'Sleep & Rest',
    citation: '"People must be allowed to sleep somewhere if no adequate shelter exists. Blanket bans on sleeping in public may violate constitutional rights when no realistic alternative exists."',
    source: 'OHRC Position on Housing as Human Right'
  },
  {
    topic: 'Addiction as Disability',
    citation: '"Addiction is recognized as a disability under the Human Rights Code. People with addictions must not be discriminated against in housing, services, or by-laws."',
    source: 'OHRC Policy on Disability and Human Rights'
  },
  {
    topic: 'Municipal Obligations',
    citation: '"Municipalities have a duty to accommodate people with mental health disabilities and addictions. By-laws and zoning that effectively target or harm homeless people may constitute discrimination."',
    source: 'OHRC Submission on Municipal Responses'
  },
  {
    topic: 'Zoning & Shelters',
    citation: '"NIMBY opposition cannot be the basis for discriminatory zoning decisions. Zoning that effectively excludes supportive housing from suitable locations is problematic."',
    source: 'OHRC Position on Human Rights in Housing'
  }
];

const keyStats = [
  { stat: '217', label: 'displacement incidents', detail: 'reported last month' },
  { stat: '3.2 hrs', label: 'average uninterrupted sleep', detail: 'per night' },
  { stat: '89%', label: 'report being moved', detail: 'while trying to sleep' },
  { stat: '62%', label: 'turned away from shelter', detail: 'in past month' },
  { stat: '0', label: 'legal sleeping locations', detail: 'in Cobourg' },
  { stat: '5+', label: 'municipalities with solutions', detail: 'in Ontario' }
];

function DelegationTools() {
  const [selectedTemplate, setSelectedTemplate] = useState(null);
  const [copied, setCopied] = useState(false);
  const [copyError, setCopyError] = useState(false);

  const copyToClipboard = async (text) => {
    try {
      if (navigator.clipboard && navigator.clipboard.writeText) {
        await navigator.clipboard.writeText(text);
        setCopied(true);
        setCopyError(false);
        setTimeout(() => setCopied(false), 2000);
      } else {
        // Fallback for older browsers
        const textArea = document.createElement('textarea');
        textArea.value = text;
        textArea.style.position = 'fixed';
        textArea.style.left = '-999999px';
        document.body.appendChild(textArea);
        textArea.select();
        document.execCommand('copy');
        document.body.removeChild(textArea);
        setCopied(true);
        setCopyError(false);
        setTimeout(() => setCopied(false), 2000);
      }
    } catch (error) {
      console.error('Failed to copy to clipboard:', error);
      setCopyError(true);
      setTimeout(() => setCopyError(false), 3000);
    }
  };

  return (
    <div className="delegation-page">
      <header className="page-header">
        <h1>Delegation Tools</h1>
        <p>
          Ready-to-use templates, statistics, and OHRC citations to prepare
          your presentation to council. Customize and make your voice heard.
        </p>
      </header>

      <section className="section">
        <h2 className="section-title">Speech Templates</h2>
        <p className="section-intro">
          Choose a template that fits your focus. Each is designed for a 3-minute delegation.
          Click to view and copy.
        </p>
        
        <div className="templates-grid">
          {speechTemplates.map(template => (
            <article 
              key={template.id}
              className={`template-card ${selectedTemplate === template.id ? 'selected' : ''}`}
              onClick={() => setSelectedTemplate(selectedTemplate === template.id ? null : template.id)}
            >
              <h3>{template.title}</h3>
              <p>{template.description}</p>
              <button className="btn btn-secondary">
                {selectedTemplate === template.id ? 'Hide Template' : 'View Template'}
              </button>
            </article>
          ))}
        </div>

        {selectedTemplate && (
          <div className="template-viewer">
            <div className="template-header">
              <h3>{speechTemplates.find(t => t.id === selectedTemplate).title}</h3>
              <button 
                className={`btn ${copyError ? 'btn-error' : 'btn-primary'}`}
                onClick={() => copyToClipboard(speechTemplates.find(t => t.id === selectedTemplate).template)}
              >
                {copied ? '✓ Copied!' : copyError ? '❌ Copy Failed' : '📋 Copy to Clipboard'}
              </button>
            </div>
            <div className="template-content">
              <pre>{speechTemplates.find(t => t.id === selectedTemplate).template}</pre>
            </div>
            <div className="template-tips">
              <h4>Tips for Delivery:</h4>
              <ul>
                <li>Replace [BRACKETED] items with your specific details</li>
                <li>Practice reading aloud - aim for 3 minutes</li>
                <li>Speak slowly and clearly</li>
                <li>Make eye contact with councillors</li>
                <li>Bring printed copies for councillors</li>
              </ul>
            </div>
          </div>
        )}
      </section>

      <section className="section">
        <h2 className="section-title">Key Statistics</h2>
        <p className="section-intro">
          Data points to strengthen your presentation. Click any stat to copy.
        </p>
        
        <div className="stats-grid">
          {keyStats.map((item, index) => (
            <div 
              key={index}
              className="stat-card"
              onClick={() => copyToClipboard(`${item.stat} ${item.label} ${item.detail}`)}
              role="button"
              tabIndex={0}
            >
              <div className="stat-value">{item.stat}</div>
              <div className="stat-label">{item.label}</div>
              <div className="stat-detail">{item.detail}</div>
            </div>
          ))}
        </div>
      </section>

      <section className="section">
        <h2 className="section-title">OHRC Citation Snippets</h2>
        <p className="section-intro">
          Official positions from the Ontario Human Rights Commission to cite in your delegation.
        </p>
        
        <div className="citations-list">
          {ohrcCitations.map((item, index) => (
            <div key={index} className="citation-card">
              <div className="citation-topic">{item.topic}</div>
              <blockquote className="citation-text">{item.citation}</blockquote>
              <div className="citation-source">— {item.source}</div>
              <button 
                className="btn btn-secondary btn-small"
                onClick={() => copyToClipboard(`"${item.citation}" - ${item.source}`)}
              >
                Copy Citation
              </button>
            </div>
          ))}
        </div>
      </section>

      <section className="section">
        <div className="card checklist-card">
          <h2>Delegation Checklist</h2>
          <ul className="checklist">
            <li><input type="checkbox" /> Register as a delegation (check deadline)</li>
            <li><input type="checkbox" /> Prepare 3-minute speech</li>
            <li><input type="checkbox" /> Practice reading aloud</li>
            <li><input type="checkbox" /> Print copies for councillors</li>
            <li><input type="checkbox" /> Gather supporting signatures if possible</li>
            <li><input type="checkbox" /> Arrive 15-20 minutes early</li>
            <li><input type="checkbox" /> Bring identification</li>
            <li><input type="checkbox" /> Dress appropriately (casual is fine)</li>
            <li><input type="checkbox" /> Bring water</li>
            <li><input type="checkbox" /> Plan transportation and parking</li>
          </ul>
        </div>
      </section>
    </div>
  );
}

export default DelegationTools;
