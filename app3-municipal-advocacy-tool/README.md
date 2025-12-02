# Municipal Comparison & Advocacy Tool - App 3

A responsive web application providing delegation tools, municipal comparison features, and advocacy implementation resources for housing and homelessness advocacy in Northumberland County.

## Features

### 📊 Municipal Comparison
- Side-by-side comparison of Ontario municipalities
- Status indicators for various approaches (shelters, zoning, harm reduction)
- Detailed information on each municipality's approach
- Key lessons and contact information

### 🎤 Delegation Tools
- Ready-to-use 3-minute speech templates
- Key statistics with copy-to-clipboard functionality
- OHRC citation snippets for legal backing
- Delegation preparation checklist

### 📋 Specific Asks
- Organized by timeline (immediate, short-term, medium-term)
- Implementation details for each proposal
- Cost estimates and precedents
- Status tracking for advocacy goals

### 🗺️ Implementation Roadmap
- Phased project plan (Foundation, Launch, Advocacy, Expansion)
- Task checklists for each phase
- Key milestones and success metrics
- Volunteer and coalition building tools

### 📚 Resources & Funding
- Funding source directory
- Legal resources and contacts
- Government representative contacts
- OHRC guidance summary
- Key document repository

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
cd app3-municipal-advocacy-tool
npm install
npm run dev
```

The app will be available at `http://localhost:3003`

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

## Data Tables

### Municipal Comparison Data
The comparison table includes:
- Kingston, Toronto, Peterborough, Kitchener
- Proposed solutions for Northumberland
- Six approach categories tracked

### Speech Templates
Three ready-to-use templates:
1. General 3-minute delegation
2. Sleep deprivation focus
3. Zoning focus

## Project Structure

```
app3-municipal-advocacy-tool/
├── public/
├── src/
│   ├── components/
│   │   ├── Header.jsx
│   │   ├── Header.css
│   │   ├── Footer.jsx
│   │   └── Footer.css
│   ├── pages/
│   │   ├── Home.jsx
│   │   ├── MunicipalComparison.jsx
│   │   ├── DelegationTools.jsx
│   │   ├── SpecificAsks.jsx
│   │   ├── ImplementationRoadmap.jsx
│   │   └── Resources.jsx
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
