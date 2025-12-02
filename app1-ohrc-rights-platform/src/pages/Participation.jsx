import React, { useState } from 'react';
import './Participation.css';

function Participation() {
  const [formData, setFormData] = useState({
    experienceType: '',
    description: '',
    location: '',
    wouldUse: '',
    suggestions: '',
    contactMethod: '',
    contact: ''
  });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // In a real app, this would send data to a server
    console.log('Form submitted:', formData);
    setSubmitted(true);
  };

  return (
    <div className="participation-page">
      <header className="page-header">
        <h1>Participate &amp; Share Your Experience</h1>
        <p>
          Your voice matters. Help us document the real impacts of housing, zoning,
          and enforcement decisions on people in Cobourg &amp; Northumberland.
        </p>
      </header>

      <section className="privacy-notice section">
        <div className="alert alert-info">
          <h3>🔒 Your Privacy is Protected</h3>
          <p>
            All submissions can be anonymous. We do not track your location or require
            personal information. Your stories may be used to advocate for change,
            but we will never share identifying details without your explicit consent.
          </p>
        </div>
      </section>

      {submitted ? (
        <section className="thank-you section">
          <div className="card success-card">
            <h2>✅ Thank You for Sharing</h2>
            <p>
              Your experience has been recorded. Your voice helps us advocate for
              better policies and services in Northumberland County.
            </p>
            <button 
              className="btn btn-primary"
              onClick={() => {
                setSubmitted(false);
                setFormData({
                  experienceType: '',
                  description: '',
                  location: '',
                  wouldUse: '',
                  suggestions: '',
                  contactMethod: '',
                  contact: ''
                });
              }}
            >
              Share Another Experience
            </button>
          </div>
        </section>
      ) : (
        <>
          <section className="story-form section" id="survey">
            <h2 className="section-title">Share Your Experience</h2>
            
            <form onSubmit={handleSubmit} className="participation-form">
              <div className="form-group">
                <label htmlFor="experienceType" className="form-label">
                  What would you like to share about? *
                </label>
                <select
                  id="experienceType"
                  name="experienceType"
                  className="form-select"
                  value={formData.experienceType}
                  onChange={handleChange}
                  required
                >
                  <option value="">Select a topic...</option>
                  <option value="sleep">Sleep & Rest - Where you try to sleep, what happens</option>
                  <option value="shelter">Shelters - Experiences with emergency shelters</option>
                  <option value="enforcement">Enforcement - Interactions with by-law or police</option>
                  <option value="housing">Housing - Difficulties finding or keeping housing</option>
                  <option value="services">Services - What's missing or helpful</option>
                  <option value="zoning">Zoning Ideas - Suggestions for safe spaces</option>
                  <option value="other">Other</option>
                </select>
              </div>

              <div className="form-group">
                <label htmlFor="description" className="form-label">
                  Tell us about your experience *
                </label>
                <p className="form-hint">
                  You don't need perfect spelling or grammar. Just share what happened.
                </p>
                <textarea
                  id="description"
                  name="description"
                  className="form-textarea"
                  value={formData.description}
                  onChange={handleChange}
                  placeholder="What happened? When? How did it affect you?"
                  rows="6"
                  required
                />
              </div>

              <div className="form-group">
                <label htmlFor="location" className="form-label">
                  General location (optional)
                </label>
                <p className="form-hint">
                  You can be as general as you like (e.g., "downtown Cobourg" or "near the lake")
                </p>
                <input
                  type="text"
                  id="location"
                  name="location"
                  className="form-input"
                  value={formData.location}
                  onChange={handleChange}
                  placeholder="General area where this happened"
                />
              </div>

              <fieldset className="form-fieldset">
                <legend>Quick Questions (optional)</legend>
                
                <div className="form-group">
                  <label htmlFor="wouldUse" className="form-label">
                    If there was a legal, safe place to sleep with washrooms and support,
                    would you use it?
                  </label>
                  <select
                    id="wouldUse"
                    name="wouldUse"
                    className="form-select"
                    value={formData.wouldUse}
                    onChange={handleChange}
                  >
                    <option value="">Select...</option>
                    <option value="yes">Yes, definitely</option>
                    <option value="probably">Probably</option>
                    <option value="maybe">Maybe, depends on the rules</option>
                    <option value="no">No</option>
                    <option value="unsure">Not sure</option>
                  </select>
                </div>

                <div className="form-group">
                  <label htmlFor="suggestions" className="form-label">
                    What would make sleeping/housing easier for you?
                  </label>
                  <textarea
                    id="suggestions"
                    name="suggestions"
                    className="form-textarea"
                    value={formData.suggestions}
                    onChange={handleChange}
                    placeholder="What services, locations, or changes would help you?"
                    rows="4"
                  />
                </div>
              </fieldset>

              <fieldset className="form-fieldset">
                <legend>Follow-up (optional)</legend>
                
                <p className="form-hint">
                  If you'd like to be contacted about your submission or future consultations,
                  you can provide contact information. This is completely optional.
                </p>

                <div className="form-group">
                  <label htmlFor="contactMethod" className="form-label">
                    Preferred contact method
                  </label>
                  <select
                    id="contactMethod"
                    name="contactMethod"
                    className="form-select"
                    value={formData.contactMethod}
                    onChange={handleChange}
                  >
                    <option value="">No contact needed</option>
                    <option value="email">Email</option>
                    <option value="phone">Phone</option>
                    <option value="text">Text message</option>
                  </select>
                </div>

                {formData.contactMethod && (
                  <div className="form-group">
                    <label htmlFor="contact" className="form-label">
                      {formData.contactMethod === 'email' ? 'Email address' : 'Phone number'}
                    </label>
                    <input
                      type={formData.contactMethod === 'email' ? 'email' : 'tel'}
                      id="contact"
                      name="contact"
                      className="form-input"
                      value={formData.contact}
                      onChange={handleChange}
                      placeholder={formData.contactMethod === 'email' 
                        ? 'your@email.com' 
                        : '(555) 123-4567'}
                    />
                  </div>
                )}
              </fieldset>

              <div className="form-actions">
                <button type="submit" className="btn btn-primary btn-large">
                  Submit Your Experience
                </button>
              </div>
            </form>
          </section>

          <section className="quick-polls section">
            <h2 className="section-title">Quick Polls</h2>
            <div className="polls-grid">
              <div className="poll-card">
                <h3>Safe Sleeping Locations</h3>
                <p>If a legal camping area was created, what matters most to you?</p>
                <div className="poll-options">
                  <label className="poll-option">
                    <input type="radio" name="poll1" value="downtown" />
                    <span>Close to downtown services</span>
                  </label>
                  <label className="poll-option">
                    <input type="radio" name="poll1" value="quiet" />
                    <span>In a quieter area</span>
                  </label>
                  <label className="poll-option">
                    <input type="radio" name="poll1" value="washrooms" />
                    <span>Having washrooms nearby</span>
                  </label>
                  <label className="poll-option">
                    <input type="radio" name="poll1" value="security" />
                    <span>Security presence</span>
                  </label>
                </div>
              </div>

              <div className="poll-card">
                <h3>Shelter Barriers</h3>
                <p>What makes it hardest to use shelters?</p>
                <div className="poll-options">
                  <label className="poll-option">
                    <input type="radio" name="poll2" value="rules" />
                    <span>Too many rules</span>
                  </label>
                  <label className="poll-option">
                    <input type="radio" name="poll2" value="hours" />
                    <span>Limited hours</span>
                  </label>
                  <label className="poll-option">
                    <input type="radio" name="poll2" value="safety" />
                    <span>Don't feel safe there</span>
                  </label>
                  <label className="poll-option">
                    <input type="radio" name="poll2" value="pets" />
                    <span>Can't bring pets/belongings</span>
                  </label>
                </div>
              </div>
            </div>
          </section>
        </>
      )}

      <section className="voice-option section">
        <div className="card">
          <h2>🎤 Prefer to Record Your Story?</h2>
          <p>
            If you find it easier to speak than write, you can record a voice message.
            Your audio will be transcribed and kept confidential.
          </p>
          <button className="btn btn-secondary">
            Record Voice Message
          </button>
          <p className="note">
            <em>Voice recording feature coming soon</em>
          </p>
        </div>
      </section>
    </div>
  );
}

export default Participation;
