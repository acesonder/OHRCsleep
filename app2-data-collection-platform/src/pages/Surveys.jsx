import React, { useState } from 'react';
import './Surveys.css';

const surveys = [
  {
    id: 'sleep',
    title: 'Sleep & Rest Survey',
    description: 'Help us understand sleep conditions and barriers for people without stable housing.',
    questions: 8,
    time: '5 min',
    status: 'active',
    icon: '😴'
  },
  {
    id: 'shelter',
    title: 'Shelter Experience Survey',
    description: 'Share your experiences with emergency shelters - what works, what doesn\'t, and why.',
    questions: 10,
    time: '7 min',
    status: 'active',
    icon: '🏠'
  },
  {
    id: 'services',
    title: 'Services Needs Assessment',
    description: 'Tell us what services you need, what\'s missing, and how to improve access.',
    questions: 12,
    time: '8 min',
    status: 'active',
    icon: '🤝'
  },
  {
    id: 'safe-space',
    title: 'Safe Sleeping Locations',
    description: 'If a legal safe sleeping site was created, what would it need? Help us design it.',
    questions: 6,
    time: '4 min',
    status: 'active',
    icon: '⛺'
  }
];

const quickPolls = [
  {
    id: 'poll1',
    question: 'If a legal camping area was created, what matters most to you?',
    options: [
      'Close to downtown services',
      'In a quieter area',
      'Having washrooms nearby',
      'Security presence'
    ]
  },
  {
    id: 'poll2',
    question: 'How many hours of uninterrupted sleep did you get last night?',
    options: [
      'Less than 2 hours',
      '2-4 hours',
      '4-6 hours',
      'More than 6 hours'
    ]
  },
  {
    id: 'poll3',
    question: 'What\'s the biggest barrier to accessing shelters?',
    options: [
      'Too many rules',
      'Limited hours/capacity',
      'Don\'t feel safe',
      'Can\'t bring pets/belongings',
      'Location is too far'
    ]
  }
];

function Surveys() {
  const [activeSurvey, setActiveSurvey] = useState(null);
  const [pollAnswers, setPollAnswers] = useState({});

  const handlePollAnswer = (pollId, answer) => {
    setPollAnswers(prev => ({ ...prev, [pollId]: answer }));
    // In real app, this would submit to server
    console.log(`Poll ${pollId} answer:`, answer);
  };

  return (
    <div className="surveys-page">
      <header className="page-header">
        <h1>Surveys &amp; Quick Polls</h1>
        <p>
          Share your input through structured questions. Your responses help us
          understand community needs and advocate for better services.
        </p>
      </header>

      <section className="section">
        <h2 className="section-title">Available Surveys</h2>
        <div className="surveys-grid">
          {surveys.map(survey => (
            <article key={survey.id} className="survey-card">
              <div className="survey-icon">{survey.icon}</div>
              <h3>{survey.title}</h3>
              <p>{survey.description}</p>
              <div className="survey-meta">
                <span>📝 {survey.questions} questions</span>
                <span>⏱️ ~{survey.time}</span>
              </div>
              <button 
                className="btn btn-primary"
                onClick={() => setActiveSurvey(survey.id)}
              >
                Start Survey
              </button>
            </article>
          ))}
        </div>
      </section>

      <section className="section">
        <h2 className="section-title">Quick Polls</h2>
        <p className="section-intro">
          Don't have time for a full survey? Answer a quick poll to share your voice.
        </p>
        <div className="polls-grid">
          {quickPolls.map(poll => (
            <div key={poll.id} className="poll-card">
              <h3>{poll.question}</h3>
              <div className="poll-options">
                {poll.options.map((option, index) => (
                  <label 
                    key={index}
                    className={`poll-option ${pollAnswers[poll.id] === option ? 'selected' : ''}`}
                  >
                    <input
                      type="radio"
                      name={poll.id}
                      value={option}
                      checked={pollAnswers[poll.id] === option}
                      onChange={() => handlePollAnswer(poll.id, option)}
                    />
                    <span>{option}</span>
                  </label>
                ))}
              </div>
              {pollAnswers[poll.id] && (
                <div className="poll-thanks">
                  ✓ Thank you for your response!
                </div>
              )}
            </div>
          ))}
        </div>
      </section>

      <section className="section">
        <div className="card suggest-card">
          <h2>Have a question we should ask?</h2>
          <p>
            We want to ask the right questions. Suggest topics or questions
            that would help understand community needs.
          </p>
          <button className="btn btn-secondary">
            Suggest a Question
          </button>
        </div>
      </section>

      {/* Survey Modal */}
      {activeSurvey && (
        <div className="survey-modal-overlay" onClick={() => setActiveSurvey(null)}>
          <div className="survey-modal" onClick={e => e.stopPropagation()}>
            <button 
              className="modal-close"
              onClick={() => setActiveSurvey(null)}
              aria-label="Close survey"
            >
              ✕
            </button>
            <div className="survey-content">
              <h2>{surveys.find(s => s.id === activeSurvey)?.title}</h2>
              <p className="survey-notice">
                Survey form would load here. For now, this is a placeholder demonstrating
                the survey modal functionality.
              </p>
              <div className="survey-placeholder">
                <p>📝 Survey questions would appear here</p>
                <p>All responses are anonymous by default</p>
                <p>You can skip any question you don't want to answer</p>
              </div>
              <button 
                className="btn btn-primary"
                onClick={() => setActiveSurvey(null)}
              >
                Close Preview
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default Surveys;
