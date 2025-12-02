# OHRC Sleep Platform

A suite of web applications designed to help people experiencing homelessness in Cobourg and Northumberland County know their rights, find services, and advocate for housing solutions.

## 📱 Three Web App Designs

This repository contains three responsive web applications, each in its own folder:

### 1. Rights Platform (`app1-rights-platform/`)
A "Know Your Rights" focused platform for vulnerable populations.

**Features:**
- 📋 **Know Your Rights** - Information about OHRC protections, disability accommodation, and how to file complaints
- 🗺️ **Services Map** - Interactive directory of shelters, food banks, health services, and support
- 💬 **Share Your Story** - Anonymous submission forms for experiences with sleep deprivation, enforcement, and shelter
- 📊 **Community Data** - Statistics on displacement incidents and sleep hours
- 📅 **Meeting Calendar** - Upcoming council meetings with how to register and speak
- ⚙️ **Admin Console** - Full content management, story moderation, and notification system

**Accessibility Features:**
- Text-only mode
- High contrast mode  
- Large text mode
- Screen reader optimized
- WCAG 2.1 AA compliant

### 2. Municipal Advocacy (`app2-municipal-advocacy/`)
An advocacy-focused platform with delegation tools and municipal comparison.

**Features:**
- 📊 **Municipal Comparison** - Side-by-side view of what Kingston, Toronto, Kitchener, and Peterborough are doing
- ✅ **What We're Asking For** - Specific, actionable asks organized by timeline (urgent, short-term, medium-term)
- 🎤 **Speak at Council** - 3-minute speech templates, key statistics, and OHRC citations
- 🗓️ **Upcoming Meetings** - Council meeting dates with registration info
- 📈 **Implementation Roadmap** - Phased approach with deliverables
- 📁 **Resources & Downloads** - Templates, fact sheets, and case studies

**Key Advocacy Asks:**
1. Emergency Temporary Use Bylaw
2. Sleep Deprivation Moratorium
3. Fast-Track Shelter Zoning
4. Tiny Shelter Village Pilot
5. Safe Parking Program

### 3. Community Platform (`app3-community-platform/`)
A comprehensive platform combining all features for complete community engagement.

**Features:**
- 🚨 **Quick Access Cards** - Emergency contacts, shelter availability, meal times
- 🏥 **Services Directory** - Filterable list with real-time status
- ⚖️ **Know Your Rights** - Expandable cards with detailed information
- 💬 **Share Your Story** - Topic-based forms with voice recording option
- 📊 **Quick Polls** - Community input on proposed solutions
- ⚡ **Take Action** - Advocacy asks, speaking guides, and key statistics
- 📋 **Municipal Comparison** - Case studies from other Ontario cities
- ⚙️ **Full Admin Console** - Dashboard, story management, surveys, alerts, mapping, reports, settings

## 🛠️ Technical Stack

All apps are built with:
- **HTML5** - Semantic, accessible markup
- **CSS3** - Custom properties, CSS Grid, Flexbox
- **Vanilla JavaScript** - No dependencies, lightweight
- **Responsive Design** - Mobile-first, works on all devices
- **Progressive Enhancement** - Works without JavaScript

### Accessibility (WCAG 2.1 AA)
- Skip links for keyboard navigation
- Proper heading hierarchy
- Form labels and ARIA attributes
- Focus indicators
- Color contrast ratios
- Screen reader support

### Privacy & Security
- Anonymous submission options
- No tracking of anonymous users
- Clear data retention policies
- PIPEDA compliance ready

## 📂 Folder Structure

```
OHRCsleep/
├── app1-rights-platform/
│   ├── index.html          # Main public site
│   ├── admin.html          # Admin console
│   ├── css/
│   │   ├── styles.css      # Main styles
│   │   └── admin.css       # Admin styles
│   └── js/
│       ├── main.js         # Main functionality
│       └── admin.js        # Admin functionality
│
├── app2-municipal-advocacy/
│   ├── index.html          # Advocacy platform
│   ├── css/
│   │   └── styles.css      # All styles
│   └── js/
│       └── main.js         # All functionality
│
├── app3-community-platform/
│   ├── index.html          # Full community platform
│   ├── admin.html          # Complete admin console
│   ├── css/
│   │   ├── styles.css      # Main styles
│   │   └── admin.css       # Admin styles
│   └── js/
│       ├── main.js         # Main functionality
│       └── admin.js        # Admin functionality
│
└── README.md               # This file
```

## 🚀 Getting Started

Each app is a static HTML/CSS/JS site that can be opened directly in a browser:

```bash
# Open app1 in browser
open app1-rights-platform/index.html

# Open app2 in browser
open app2-municipal-advocacy/index.html

# Open app3 in browser
open app3-community-platform/index.html
```

Or serve locally with any static file server:

```bash
# Using Python
python -m http.server 8000

# Using Node.js
npx serve
```

## 📋 Key Features Summary

| Feature | App 1 | App 2 | App 3 |
|---------|-------|-------|-------|
| Know Your Rights | ✅ | | ✅ |
| Services Directory | ✅ | | ✅ |
| Share Your Story | ✅ | | ✅ |
| Municipal Comparison | | ✅ | ✅ |
| Advocacy Asks | | ✅ | ✅ |
| Delegation Templates | | ✅ | ✅ |
| Admin Console | ✅ | | ✅ |
| Quick Polls | ✅ | | ✅ |
| Meeting Calendar | ✅ | ✅ | ✅ |
| Accessibility Modes | ✅ | | ✅ |

## 📞 Crisis Resources

- **24/7 Crisis Line:** 1-800-263-2401
- **Human Rights Legal Support:** 1-866-625-5179
- **Northumberland Housing:** 905-372-6846
- **Emergency:** 911

## 📝 License

Created for community advocacy purposes. Information provided for educational use.

## 🤝 Contributing

This platform was designed with input from people with lived experience. Contributions welcome.

---

*Built to support temporary zoning changes and housing solutions for vulnerable populations in Cobourg and Northumberland County.*