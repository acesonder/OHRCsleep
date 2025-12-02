# OHRC Rights Platform - App 1

A responsive web application for Cobourg & Northumberland residents to understand their rights under the Ontario Human Rights Code, access services, and participate in community advocacy.

## Features

### 🏠 Know Your Rights
- Information about rights under the Ontario Human Rights Code
- Sleep deprivation as a human rights issue
- Zoning and by-law information
- Quick reference cards for common situations

### 📍 Services Map
- Interactive map of shelters, food services, health resources
- Filtering by service type and low-barrier status
- Real-time availability (planned)
- Emergency contact numbers

### 🗣️ Participate
- Share your experience (anonymous option available)
- Quick polls on community priorities
- Voice recording option (planned)
- Privacy-focused data collection

### ⚖️ Advocacy
- Upcoming council meetings calendar
- How-to guides for delegations
- Template letters and scripts
- OHRC complaint guidance
- Success stories from other municipalities

## Technology Stack

- **Frontend**: React.js 18
- **Routing**: React Router v6
- **Mapping**: Leaflet / React-Leaflet
- **Styling**: Custom CSS with CSS Variables
- **Build Tool**: Vite
- **Accessibility**: WCAG 2.1 AA compliant

## Getting Started

### Prerequisites
- Node.js 18+ 
- npm 9+

### Installation

```bash
cd app1-ohrc-rights-platform
npm install
npm run dev
```

The app will be available at `http://localhost:3001`

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

## Project Structure

```
app1-ohrc-rights-platform/
├── public/
├── src/
│   ├── components/
│   │   ├── Header.jsx
│   │   ├── Header.css
│   │   ├── Footer.jsx
│   │   └── Footer.css
│   ├── pages/
│   │   ├── Home.jsx
│   │   ├── KnowYourRights.jsx
│   │   ├── ServicesMap.jsx
│   │   ├── Participation.jsx
│   │   ├── Advocacy.jsx
│   │   └── About.jsx
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
