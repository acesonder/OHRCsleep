# OHRC Sleep - Housing & Homelessness Advocacy Platform

A collection of three web applications designed to support housing, homelessness, and human rights advocacy in Cobourg & Northumberland County, Ontario.

## Overview

These platforms are designed to:
- Inform residents about their rights under the Ontario Human Rights Code
- Collect stories and data from people experiencing homelessness
- Provide tools for effective advocacy at municipal council meetings
- Compare approaches used by other Ontario municipalities
- Support temporary zoning changes to address sleep deprivation

## Applications

### 📚 App 1: OHRC Rights Platform
**Location:** `app1-ohrc-rights-platform/`

A comprehensive platform for understanding rights, finding services, and participating in community advocacy.

**Features:**
- Know Your Rights section (OHRC guidance, zoning info, quick reference cards)
- Interactive Services Map (shelters, food services, health resources)
- Participation tools (share experiences, surveys, polls)
- Advocacy resources (council meetings, templates, OHRC complaint guidance)

**Run:** `cd app1-ohrc-rights-platform && npm install && npm run dev` (Port 3001)

---

### 📝 App 2: Data Collection & Story Platform
**Location:** `app2-data-collection-platform/`

A trauma-informed platform for collecting and amplifying voices of people experiencing housing insecurity.

**Features:**
- Multi-step story submission with privacy controls
- Voice recording option (planned)
- Story gallery with anonymous sharing
- Surveys and quick polls
- Data dashboard with key findings
- Admin console for moderation and reporting

**Run:** `cd app2-data-collection-platform && npm install && npm run dev` (Port 3002)

---

### 🏛️ App 3: Municipal Comparison & Advocacy Tool
**Location:** `app3-municipal-advocacy-tool/`

Evidence-based tools for preparing effective council delegations and tracking advocacy progress.

**Features:**
- Municipal comparison tool (Kingston, Toronto, Peterborough, Kitchener vs Northumberland)
- Ready-to-use delegation speech templates
- Key statistics and OHRC citations
- Specific asks organized by timeline (immediate, short-term, medium-term)
- Implementation roadmap with task tracking
- Funding and legal resources directory

**Run:** `cd app3-municipal-advocacy-tool && npm install && npm run dev` (Port 3003)

---

## Technology Stack

All three applications use:
- **Frontend:** React.js 18 with React Router v6
- **Build Tool:** Vite
- **Styling:** Custom CSS with CSS Variables
- **Accessibility:** WCAG 2.1 AA compliant

## Accessibility Features

All platforms include:
- Skip navigation links
- Semantic HTML structure
- ARIA labels and roles
- Keyboard navigation support
- High contrast mode support
- Reduced motion preferences
- Screen reader optimization
- Mobile-first responsive design
- Large touch targets (44px minimum)

## Key Principles

### Privacy & Trust
- Anonymous submissions supported
- No tracking of anonymous users
- User-controlled consent options
- PIPEDA compliance ready

### Accessibility & Inclusion
- Works on low-end devices and slow connections
- Plain language throughout
- Multiple input methods (text, voice)
- Available on mobile and desktop

### Evidence-Based Advocacy
- Data collection to support policy asks
- Precedents from other municipalities
- OHRC citations and legal backing
- Clear, specific proposals

## Context

### Ontario Human Rights Commission (OHRC)
The OHRC has stated that homelessness, addiction, and mental health are human rights issues. Municipalities must ensure by-laws and zoning do not discriminate against protected groups.

### Key OHRC Positions
- Addiction is recognized as a disability under the Human Rights Code
- People must be allowed to sleep somewhere if no adequate shelter exists
- NIMBY opposition cannot justify discriminatory zoning
- Municipalities have a duty to accommodate

## Proposed Solutions for Northumberland

### Immediate (0-3 months)
1. Temporary Use Bylaw for legal sleeping sites
2. Sleep deprivation moratorium (pause nighttime displacement)
3. Fast-track shelter zoning approvals

### Short-Term (3-12 months)
4. Tiny shelter village pilot (20-30 units)
5. Safe parking program
6. Harm reduction service zoning preparation

### Medium-Term (1-2 years)
7. Inclusionary zoning update
8. Surplus land strategy for housing

## Getting Started

1. Clone the repository
2. Navigate to the desired app folder
3. Install dependencies: `npm install`
4. Start development server: `npm run dev`
5. Open in browser at the specified port

## Contributing

This is a community advocacy project. Contributions welcome in the form of:
- Code improvements
- Accessibility enhancements
- Content updates
- Translation support
- Design improvements

## License

Created for community advocacy in Northumberland County, Ontario.

---

*"Everyone deserves a safe place to sleep."*