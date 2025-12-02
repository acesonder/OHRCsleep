# Data Collection & Story Platform - App 2

A responsive web application for collecting experiences, stories, and feedback from vulnerable populations in Northumberland County. This platform focuses on amplifying voices and collecting data to support advocacy efforts.

## Features

### 📝 Share Your Story
- Multi-step story submission process
- Category selection (sleep, shelter, housing, enforcement, services, etc.)
- Voice recording option (planned)
- Anonymous submission support
- Consent and privacy controls

### 📖 Story Gallery
- Browse community stories by topic
- Content warnings for sensitive material
- Modal view for full stories
- Anonymous attribution

### 📊 Surveys
- Structured survey collection
- Quick polls for rapid feedback
- Multiple topic areas (sleep, shelter, services, safe spaces)
- Progress tracking

### 📈 Data Dashboard
- Key findings visualization
- Topic breakdown charts
- Statistics overview
- Quote highlights
- Export functionality (PDF/CSV)

### 🔐 Admin Console
- Submission moderation queue
- Survey management
- Content management
- Privacy and security settings
- Analytics and reporting

## Technology Stack

- **Frontend**: React.js 18
- **Routing**: React Router v6
- **Styling**: Custom CSS with CSS Variables
- **Build Tool**: Vite
- **Accessibility**: WCAG 2.1 AA compliant

## Getting Started

### Prerequisites
- Node.js 18+ 
- npm 9+

### Installation

```bash
cd app2-data-collection-platform
npm install
npm run dev
```

The app will be available at `http://localhost:3002`

### Build for Production

```bash
npm run build
```

## Accessibility Features

- Skip navigation link
- Semantic HTML structure
- ARIA labels and roles
- Keyboard navigation support
- High contrast mode support
- Reduced motion support
- Screen reader optimized
- Mobile-first responsive design
- Large touch targets (44px minimum)

## Privacy & Security

- Anonymous submissions by default
- User-controlled consent options
- No tracking of anonymous users
- Encrypted contact information storage
- PIPEDA compliance ready
- Data export controls

## Project Structure

```
app2-data-collection-platform/
├── public/
├── src/
│   ├── components/
│   │   ├── Header.jsx
│   │   ├── Header.css
│   │   ├── Footer.jsx
│   │   └── Footer.css
│   ├── pages/
│   │   ├── Home.jsx
│   │   ├── ShareStory.jsx
│   │   ├── StoryGallery.jsx
│   │   ├── Surveys.jsx
│   │   ├── DataDashboard.jsx
│   │   └── AdminPanel.jsx
│   ├── styles/
│   │   └── global.css
│   ├── App.jsx
│   └── main.jsx
├── index.html
├── package.json
├── vite.config.js
└── README.md
```

## License

Created for community advocacy in Northumberland County, Ontario.
