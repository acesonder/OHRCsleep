import React from 'react';
import { Link } from 'react-router-dom';
import './Home.css';

function Home() {
  return (
    <div className="home-page">
      <section className="hero">
        <div className="hero-content">
          <h1>Your Story Matters</h1>
          <p className="hero-subtitle">
            Share your experiences with housing, homelessness, and sleep deprivation
            in Northumberland County. Your voice helps create change.
          </p>
          <div className="hero-actions">
            <Link to="/share" className="btn btn-accent btn-large">
              Share Your Story
            </Link>
            <Link to="/stories" className="btn btn-secondary btn-large">
              Read Community Stories
            </Link>
          </div>
        </div>
      </section>

      <section className="trust-banner">
        <div className="trust-items">
          <div className="trust-item">
            <span className="trust-icon">🔒</span>
            <span>Anonymous Options</span>
          </div>
          <div className="trust-item">
            <span className="trust-icon">🛡️</span>
            <span>Privacy Protected</span>
          </div>
          <div className="trust-item">
            <span className="trust-icon">💜</span>
            <span>Trauma-Informed</span>
          </div>
          <div className="trust-item">
            <span className="trust-icon">🗣️</span>
            <span>Your Control</span>
          </div>
        </div>
      </section>

      <section className="ways-to-share section">
        <h2 className="section-title">Ways to Share</h2>
        <div className="grid grid-3">
          <div className="share-card">
            <div className="share-icon">📝</div>
            <h3>Write Your Story</h3>
            <p>
              Tell us about your experiences in your own words. Share as much or
              as little as you feel comfortable with.
            </p>
            <Link to="/share" className="btn btn-primary">
              Start Writing
            </Link>
          </div>

          <div className="share-card">
            <div className="share-icon">🎤</div>
            <h3>Record Your Voice</h3>
            <p>
              Prefer to speak? Record an audio message and we'll transcribe it
              for you. Sometimes talking is easier than typing.
            </p>
            <Link to="/share#voice" className="btn btn-primary">
              Record Audio
            </Link>
          </div>

          <div className="share-card">
            <div className="share-icon">📊</div>
            <h3>Quick Surveys</h3>
            <p>
              Not ready for a full story? Answer a few quick questions to help
              us understand community needs and priorities.
            </p>
            <Link to="/surveys" className="btn btn-primary">
              Take a Survey
            </Link>
          </div>
        </div>
      </section>

      <section className="impact section">
        <h2 className="section-title">How Your Story Creates Change</h2>
        <div className="impact-flow">
          <div className="impact-step">
            <div className="step-number">1</div>
            <h3>You Share</h3>
            <p>Your experience is recorded safely and confidentially</p>
          </div>
          <div className="impact-arrow">→</div>
          <div className="impact-step">
            <div className="step-number">2</div>
            <h3>We Analyze</h3>
            <p>Stories are combined to show patterns and priorities</p>
          </div>
          <div className="impact-arrow">→</div>
          <div className="impact-step">
            <div className="step-number">3</div>
            <h3>We Advocate</h3>
            <p>Data is presented to council and decision-makers</p>
          </div>
          <div className="impact-arrow">→</div>
          <div className="impact-step">
            <div className="step-number">4</div>
            <h3>Change Happens</h3>
            <p>Policy decisions informed by real community voices</p>
          </div>
        </div>
      </section>

      <section className="stats section">
        <h2 className="section-title">Community Data</h2>
        <div className="stats-grid">
          <div className="stat-card">
            <div className="stat-number">217</div>
            <div className="stat-label">Stories Shared</div>
          </div>
          <div className="stat-card">
            <div className="stat-number">3.2 hrs</div>
            <div className="stat-label">Average Uninterrupted Sleep</div>
          </div>
          <div className="stat-card">
            <div className="stat-number">89%</div>
            <div className="stat-label">Report Being Moved While Sleeping</div>
          </div>
          <div className="stat-card">
            <div className="stat-number">156</div>
            <div className="stat-label">Survey Responses</div>
          </div>
        </div>
        <div className="stats-action">
          <Link to="/data" className="btn btn-secondary">
            View Full Data Dashboard
          </Link>
        </div>
      </section>

      <section className="featured-stories section">
        <h2 className="section-title">Recent Stories</h2>
        <div className="stories-preview">
          <article className="story-preview-card">
            <blockquote>
              "I just want somewhere safe to sleep. Last week I was woken up
              four times in one night and told to move. How is anyone supposed
              to survive like that?"
            </blockquote>
            <footer>
              <span className="story-meta">Anonymous • 2 weeks ago</span>
              <span className="tag">Sleep</span>
            </footer>
          </article>
          <article className="story-preview-card">
            <blockquote>
              "The shelter was full. The warming centre was closed. I walked
              around all night in -15°C because there was nowhere to go."
            </blockquote>
            <footer>
              <span className="story-meta">Anonymous • 3 weeks ago</span>
              <span className="tag">Shelter Access</span>
            </footer>
          </article>
        </div>
        <div className="stories-action">
          <Link to="/stories" className="btn btn-primary">
            Read More Stories
          </Link>
        </div>
      </section>
    </div>
  );
}

export default Home;
