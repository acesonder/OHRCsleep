import React, { useState } from 'react';
import './StoryGallery.css';

const sampleStories = [
  {
    id: 1,
    title: "Nowhere to Go",
    category: "sleep",
    excerpt: "I just want somewhere safe to sleep. Last week I was woken up four times in one night and told to move. How is anyone supposed to survive like that?",
    fullStory: "I just want somewhere safe to sleep. Last week I was woken up four times in one night and told to move. First by police at midnight, then by by-law at 3am, then again at 5am. How is anyone supposed to survive like that? I'm so tired I can barely think straight. My mental health is getting worse every day because I can't rest. All I'm asking for is a few hours of peace.",
    date: "2 weeks ago",
    tags: ["Sleep", "Enforcement"],
    location: "Cobourg Downtown"
  },
  {
    id: 2,
    title: "The Coldest Night",
    category: "shelter",
    excerpt: "The shelter was full. The warming centre was closed. I walked around all night in -15°C because there was nowhere to go.",
    fullStory: "The shelter was full. The warming centre was closed at 10pm. I walked around all night in -15°C because there was literally nowhere to go. I tried the hospital but they told me I wasn't sick enough. I tried the Tim Hortons but they kicked me out after an hour. By morning, my hands and feet were so cold I couldn't feel them. This shouldn't happen to anyone.",
    date: "3 weeks ago",
    tags: ["Shelter Access", "Cold Weather"],
    location: "Cobourg"
  },
  {
    id: 3,
    title: "Judged Before I Speak",
    category: "housing",
    excerpt: "Every landlord takes one look at me and says the apartment is already taken. I'm clean, I have references, but they see 'homeless' and that's it.",
    fullStory: "Every landlord takes one look at me and says the apartment is already taken. I called about a place and they said come see it. But when I showed up, they took one look at me and suddenly 'someone just signed the lease.' I'm clean, I have references from my last place before I lost my job, but they see 'homeless' and that's it. I've been trying for 8 months. The discrimination is real.",
    date: "1 month ago",
    tags: ["Housing", "Discrimination"],
    location: "Northumberland"
  },
  {
    id: 4,
    title: "The Good Days",
    category: "community",
    excerpt: "Not everything is bad. There are people who help. The outreach team checks on me. Some strangers bring coffee. I want to share the good too.",
    fullStory: "I wanted to share something positive. Not everything is bad. There are people who help. The outreach team checks on me every few days. Some strangers bring coffee and don't expect anything in return. A local church lets us use their washroom during the day. Small kindnesses matter when you have nothing. I want people to know there are good folks out there too.",
    date: "1 week ago",
    tags: ["Community", "Support"],
    location: "Cobourg"
  },
  {
    id: 5,
    title: "What We Really Need",
    category: "services",
    excerpt: "Everyone wants to help but nobody asks what we actually need. We need lockers. We need 24-hour washrooms. We need places that accept pets.",
    fullStory: "Everyone wants to help but nobody asks what we actually need. I'll tell you: We need lockers to store our things so we're not carrying everything everywhere. We need 24-hour washrooms because nature doesn't care about business hours. We need places that accept pets because my dog is the only thing keeping me alive some days. We need low-barrier services that don't require ID or sobriety. Simple things that would make such a difference.",
    date: "2 weeks ago",
    tags: ["Services", "Suggestions"],
    location: "Port Hope"
  }
];

function StoryGallery() {
  const [selectedStory, setSelectedStory] = useState(null);
  const [filter, setFilter] = useState('all');

  const categories = [
    { value: 'all', label: 'All Stories' },
    { value: 'sleep', label: 'Sleep & Rest' },
    { value: 'shelter', label: 'Shelter' },
    { value: 'housing', label: 'Housing' },
    { value: 'services', label: 'Services' },
    { value: 'community', label: 'Community' },
    { value: 'enforcement', label: 'Enforcement' }
  ];

  const filteredStories = filter === 'all' 
    ? sampleStories 
    : sampleStories.filter(s => s.category === filter);

  return (
    <div className="story-gallery-page">
      <header className="page-header">
        <h1>Community Stories</h1>
        <p>
          Real experiences from people in Northumberland County.
          These stories are shared with permission to help create awareness and change.
        </p>
      </header>

      <div className="content-note">
        <p>
          <strong>⚠️ Content Note:</strong> Some stories describe difficult experiences
          including homelessness, displacement, and discrimination. Read at your own pace.
        </p>
      </div>

      <div className="filters">
        <label htmlFor="category-filter" className="form-label">Filter by topic:</label>
        <select
          id="category-filter"
          className="form-select"
          value={filter}
          onChange={(e) => setFilter(e.target.value)}
        >
          {categories.map(cat => (
            <option key={cat.value} value={cat.value}>{cat.label}</option>
          ))}
        </select>
      </div>

      <div className="stories-grid">
        {filteredStories.map(story => (
          <article key={story.id} className="story-card">
            <div className="story-header">
              <h2>{story.title}</h2>
              <span className="story-date">{story.date}</span>
            </div>
            <blockquote className="story-excerpt">
              "{story.excerpt}"
            </blockquote>
            <div className="story-meta">
              <div className="story-tags">
                {story.tags.map((tag, i) => (
                  <span key={i} className="tag">{tag}</span>
                ))}
              </div>
              <span className="story-location">📍 {story.location}</span>
            </div>
            <button 
              className="btn btn-secondary"
              onClick={() => setSelectedStory(story)}
            >
              Read Full Story
            </button>
          </article>
        ))}
      </div>

      {filteredStories.length === 0 && (
        <div className="no-stories">
          <p>No stories found for this category.</p>
        </div>
      )}

      {/* Story Modal */}
      {selectedStory && (
        <div className="story-modal-overlay" onClick={() => setSelectedStory(null)}>
          <div className="story-modal" onClick={e => e.stopPropagation()}>
            <button 
              className="modal-close"
              onClick={() => setSelectedStory(null)}
              aria-label="Close story"
            >
              ✕
            </button>
            <article className="full-story">
              <header>
                <h2>{selectedStory.title}</h2>
                <div className="story-info">
                  <span>{selectedStory.date}</span>
                  <span>•</span>
                  <span>📍 {selectedStory.location}</span>
                </div>
              </header>
              <blockquote>
                "{selectedStory.fullStory}"
              </blockquote>
              <footer>
                <div className="story-tags">
                  {selectedStory.tags.map((tag, i) => (
                    <span key={i} className="tag">{tag}</span>
                  ))}
                </div>
              </footer>
            </article>
          </div>
        </div>
      )}
    </div>
  );
}

export default StoryGallery;
