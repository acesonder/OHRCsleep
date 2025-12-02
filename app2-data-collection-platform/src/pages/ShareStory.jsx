import React, { useState } from 'react';
import './ShareStory.css';

function ShareStory() {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    category: '',
    title: '',
    story: '',
    impact: '',
    suggestion: '',
    location: '',
    timeframe: '',
    consent: {
      anonymous: true,
      share: false,
      contact: false
    },
    contactInfo: ''
  });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    if (name.startsWith('consent.')) {
      const consentKey = name.split('.')[1];
      setFormData(prev => ({
        ...prev,
        consent: { ...prev.consent, [consentKey]: checked }
      }));
    } else {
      setFormData(prev => ({ ...prev, [name]: type === 'checkbox' ? checked : value }));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Note: In production, implement server-side validation and sanitization
    // to prevent XSS attacks. This is a front-end demonstration only.
    // Server should: validate all fields, sanitize HTML/scripts, 
    // implement rate limiting, and use CSRF tokens.
    console.log('Story submitted:', formData);
    setSubmitted(true);
  };

  const nextStep = () => setStep(prev => Math.min(prev + 1, 4));
  const prevStep = () => setStep(prev => Math.max(prev - 1, 1));

  if (submitted) {
    return (
      <div className="share-story-page">
        <div className="success-message">
          <div className="success-icon">💜</div>
          <h1>Thank You for Sharing</h1>
          <p>
            Your story has been recorded. Thank you for your courage in sharing
            your experience. Your voice helps create change in our community.
          </p>
          <div className="success-actions">
            <button 
              className="btn btn-primary"
              onClick={() => {
                setSubmitted(false);
                setStep(1);
                setFormData({
                  category: '',
                  title: '',
                  story: '',
                  impact: '',
                  suggestion: '',
                  location: '',
                  timeframe: '',
                  consent: { anonymous: true, share: false, contact: false },
                  contactInfo: ''
                });
              }}
            >
              Share Another Story
            </button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="share-story-page">
      <header className="page-header">
        <h1>Share Your Story</h1>
        <p>
          Tell us about your experiences. Everything you share is confidential
          and can be anonymous. Take your time.
        </p>
      </header>

      <div className="privacy-notice">
        <h3>🔒 Privacy Promise</h3>
        <ul>
          <li>Your story can be completely anonymous</li>
          <li>We never share identifying information without your consent</li>
          <li>You can stop at any time</li>
          <li>You control how your story is used</li>
        </ul>
      </div>

      <div className="progress-bar">
        <div className="progress-steps">
          {[1, 2, 3, 4].map(num => (
            <div 
              key={num}
              className={`progress-step ${step >= num ? 'active' : ''} ${step === num ? 'current' : ''}`}
            >
              <span className="step-dot">{step > num ? '✓' : num}</span>
              <span className="step-label">
                {num === 1 && 'Topic'}
                {num === 2 && 'Your Story'}
                {num === 3 && 'Details'}
                {num === 4 && 'Consent'}
              </span>
            </div>
          ))}
        </div>
        <div className="progress-line">
          <div className="progress-fill" style={{ width: `${((step - 1) / 3) * 100}%` }}></div>
        </div>
      </div>

      <form onSubmit={handleSubmit} className="story-form">
        {step === 1 && (
          <div className="form-step">
            <h2>What would you like to share about?</h2>
            <div className="category-grid">
              {[
                { value: 'sleep', icon: '😴', label: 'Sleep & Rest', desc: 'Where you try to sleep, interruptions, safety' },
                { value: 'shelter', icon: '🏠', label: 'Shelter Experiences', desc: 'Access, conditions, what works/doesn\'t' },
                { value: 'housing', icon: '🏢', label: 'Housing Challenges', desc: 'Finding housing, discrimination, affordability' },
                { value: 'enforcement', icon: '🚔', label: 'Enforcement', desc: 'Interactions with by-law, police' },
                { value: 'services', icon: '🤝', label: 'Services', desc: 'What\'s helpful, what\'s missing' },
                { value: 'health', icon: '💊', label: 'Health & Wellbeing', desc: 'Physical, mental health, addiction' },
                { value: 'community', icon: '👥', label: 'Community', desc: 'Positive experiences, connections' },
                { value: 'other', icon: '💬', label: 'Other', desc: 'Something else on your mind' }
              ].map(cat => (
                <label 
                  key={cat.value}
                  className={`category-card ${formData.category === cat.value ? 'selected' : ''}`}
                >
                  <input
                    type="radio"
                    name="category"
                    value={cat.value}
                    checked={formData.category === cat.value}
                    onChange={handleChange}
                  />
                  <span className="category-icon">{cat.icon}</span>
                  <span className="category-label">{cat.label}</span>
                  <span className="category-desc">{cat.desc}</span>
                </label>
              ))}
            </div>
          </div>
        )}

        {step === 2 && (
          <div className="form-step">
            <h2>Tell Your Story</h2>
            <p className="form-hint">
              Share as much or as little as you feel comfortable with.
              Don't worry about spelling or grammar - just tell it how you want to.
            </p>

            <div className="form-group">
              <label htmlFor="title" className="form-label">
                Give your story a title (optional)
              </label>
              <input
                type="text"
                id="title"
                name="title"
                className="form-input"
                value={formData.title}
                onChange={handleChange}
                placeholder="e.g., 'Nowhere to go' or 'A night in the cold'"
              />
            </div>

            <div className="form-group">
              <label htmlFor="story" className="form-label">
                Your story *
              </label>
              <textarea
                id="story"
                name="story"
                className="form-textarea"
                value={formData.story}
                onChange={handleChange}
                placeholder="What happened? How did it affect you? What do you want people to know?"
                rows="8"
                required
              />
            </div>

            <div className="voice-option">
              <h3>🎤 Prefer to speak?</h3>
              <p>Record your story as an audio message instead.</p>
              <button type="button" className="btn btn-secondary">
                Record Audio
              </button>
              <span className="coming-soon">(Coming soon)</span>
            </div>
          </div>
        )}

        {step === 3 && (
          <div className="form-step">
            <h2>A Few More Details</h2>
            <p className="form-hint">
              This helps us understand patterns and advocate more effectively.
              All fields are optional.
            </p>

            <div className="form-group">
              <label htmlFor="impact" className="form-label">
                How has this affected you?
              </label>
              <textarea
                id="impact"
                name="impact"
                className="form-textarea"
                value={formData.impact}
                onChange={handleChange}
                placeholder="Physical health, mental health, relationships, work, daily life..."
                rows="4"
              />
            </div>

            <div className="form-group">
              <label htmlFor="suggestion" className="form-label">
                What would help? What should change?
              </label>
              <textarea
                id="suggestion"
                name="suggestion"
                className="form-textarea"
                value={formData.suggestion}
                onChange={handleChange}
                placeholder="What do you wish existed? What should decision-makers know?"
                rows="4"
              />
            </div>

            <div className="form-row">
              <div className="form-group">
                <label htmlFor="location" className="form-label">
                  General area (optional)
                </label>
                <select
                  id="location"
                  name="location"
                  className="form-select"
                  value={formData.location}
                  onChange={handleChange}
                >
                  <option value="">Select...</option>
                  <option value="cobourg-downtown">Cobourg - Downtown</option>
                  <option value="cobourg-waterfront">Cobourg - Waterfront</option>
                  <option value="cobourg-other">Cobourg - Other</option>
                  <option value="port-hope">Port Hope</option>
                  <option value="brighton">Brighton</option>
                  <option value="other-northumberland">Other Northumberland</option>
                  <option value="prefer-not">Prefer not to say</option>
                </select>
              </div>

              <div className="form-group">
                <label htmlFor="timeframe" className="form-label">
                  When did this happen?
                </label>
                <select
                  id="timeframe"
                  name="timeframe"
                  className="form-select"
                  value={formData.timeframe}
                  onChange={handleChange}
                >
                  <option value="">Select...</option>
                  <option value="current">Ongoing</option>
                  <option value="week">This week</option>
                  <option value="month">This month</option>
                  <option value="6months">Last 6 months</option>
                  <option value="year">This year</option>
                  <option value="older">More than a year ago</option>
                </select>
              </div>
            </div>
          </div>
        )}

        {step === 4 && (
          <div className="form-step">
            <h2>Your Choices</h2>
            <p className="form-hint">
              You control how your story is used. Read each option carefully.
            </p>

            <div className="consent-options">
              <div className="consent-card">
                <label className="consent-label">
                  <input
                    type="checkbox"
                    name="consent.anonymous"
                    checked={formData.consent.anonymous}
                    onChange={handleChange}
                  />
                  <div className="consent-content">
                    <strong>Keep me anonymous</strong>
                    <p>
                      No identifying information will be attached to your story.
                      We won't know who you are.
                    </p>
                  </div>
                </label>
              </div>

              <div className="consent-card">
                <label className="consent-label">
                  <input
                    type="checkbox"
                    name="consent.share"
                    checked={formData.consent.share}
                    onChange={handleChange}
                  />
                  <div className="consent-content">
                    <strong>Share my story publicly</strong>
                    <p>
                      Allow an anonymized version of your story to be displayed
                      on our website and shared with decision-makers.
                    </p>
                  </div>
                </label>
              </div>

              <div className="consent-card">
                <label className="consent-label">
                  <input
                    type="checkbox"
                    name="consent.contact"
                    checked={formData.consent.contact}
                    onChange={handleChange}
                  />
                  <div className="consent-content">
                    <strong>I'd like to be contacted</strong>
                    <p>
                      We may reach out about follow-up, advocacy opportunities,
                      or to clarify your story (with your permission).
                    </p>
                  </div>
                </label>
              </div>

              {formData.consent.contact && (
                <div className="form-group">
                  <label htmlFor="contactInfo" className="form-label">
                    How can we reach you?
                  </label>
                  <input
                    type="text"
                    id="contactInfo"
                    name="contactInfo"
                    className="form-input"
                    value={formData.contactInfo}
                    onChange={handleChange}
                    placeholder="Email, phone, or other way to contact you"
                  />
                </div>
              )}
            </div>

            <div className="final-note">
              <p>
                <strong>Remember:</strong> You can stop at any time. Your story
                matters and we're grateful you're sharing it with us. 💜
              </p>
            </div>
          </div>
        )}

        <div className="form-navigation">
          {step > 1 && (
            <button type="button" className="btn btn-secondary" onClick={prevStep}>
              ← Back
            </button>
          )}
          {step < 4 ? (
            <button 
              type="button" 
              className="btn btn-primary"
              onClick={nextStep}
              disabled={step === 1 && !formData.category}
            >
              Continue →
            </button>
          ) : (
            <button type="submit" className="btn btn-accent btn-large">
              Submit Your Story
            </button>
          )}
        </div>
      </form>
    </div>
  );
}

export default ShareStory;
