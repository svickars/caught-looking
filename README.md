# Caught Looking

![Caught Looking Logo](web_app/public/images/caughtlooking.svg)

A modern web application for viewing live baseball scorecards with real-time updates and interactive features.

🌐 **Live Website**: [caughtlooking.app](https://caughtlooking.app)

## About This Project

I've always loved baseball. Something about the numbers, the stats, the data. I find keeping score by hand, in my trusty scorebook from [Numbers Game](https://www.numbersgame.co/products/scorebook-22), gets me a lot more into the games I'm watching. I sometimes have trouble keeping up though and found myself flipping between different apps, trying to figure out what happened, keep track of pitch sequences, and get it written down, all while the games were still going on in front of me.

I found [livebaseballscorecards.com](https://livebaseballscorecards.com), which is an incredible resource and proved very helpful. It wasn't quite what I needed though. It was missing a few features, it used notation I wasn't used to, it didn't use native web elements, and it wasn't quite as aesthetically pleasing as my own hand-written scorecard (no shade though, I love that site!). So I decided to make my own, which is what you see here.

It follows my own notation style so some things may not be quite what you're used to. It has delay settings. I can go back in time. I can do my own scorecard then follow along here to double check things.

So please try it out and enjoy it!

Built using the MLB API. Design and layout heavily influenced by Scorebook #22 from [Numbers Game](https://www.numbersgame.co/products/scorebook-22).

## Features

### 🏟️ Game Browser

- Browse MLB games by date with a clean, responsive interface
- View live games.

### 📊 Interactive Scorecards

- View detailed scorecards with tooltips and intuitive notation
- Traditional baseball scorecard format
- Real-time play-by-play updates
- Visual indicators for runs, hits, errors, and more

### 🔴 Live Updates

- Real-time game updates with configurable delays
- Auto-refresh functionality for live games
- Configurable update intervals (0-10 minute delays)
- Buffer management for delayed viewing

### 🎛️ Customizable Controls

- Adjust detail level and view mode
- Toggle between different data displays
- Responsive design for all devices
- Dark/light theme support

### 📱 Modern UI/UX

- Responsive design works on desktop, tablet, and mobile
- Fast performance with Next.js 14
- Beautiful design with Tailwind CSS
- Intuitive navigation and controls

## How to Use

### Basic Usage

1. **Visit the website**: Go to [caughtlooking.app](https://caughtlooking.app)
2. **Select a date**: Use the date picker to choose which day's games to view
3. **Browse games**: Scroll through the list of games for that date
4. **View scorecard**: Click on any game to view its interactive scorecard
5. **Live updates**: Games automatically update if they're currently in progress

### Advanced Features

- **Live delay controls**: Adjust how far behind live the updates are (useful for watching with friends)
- **Detail levels**: Choose how much information to display on scorecards
- **Mobile optimization**: Full functionality on phones and tablets

## Technology Stack

- **Frontend**: Next.js 14 with React and TypeScript
- **Architecture**: Server-side rendering with App Router, feature-based component organization
- **State Management**: Zustand for client state, React Context for theme
- **Styling**: Tailwind CSS with custom design system
- **Icons**: Lucide React icon library
- **Data**: MLB Stats API for real-time game data
- **Deployment**: Vercel for hosting and CDN
- **Accessibility**: WCAG AA compliant with full keyboard and screen reader support

## Credits & Acknowledgments

### Data Sources

- **MLB Stats API** - Official Major League Baseball data and statistics
- **MLB.com** - Game schedules, scores, and live updates

### Libraries & Dependencies

- **Next.js** - React framework for production
- **React** - UI library for building user interfaces
- **TypeScript** - Type-safe JavaScript development
- **Tailwind CSS** - Utility-first CSS framework
- **Lucide React** - Beautiful icon library
- **Axios** - HTTP client for API requests
- **date-fns** - Modern JavaScript date utility library
- **Framer Motion** - Production-ready motion library
- **Luxon** - Powerful date/time manipulation library

### Development Tools

- **Vercel** - Deployment and hosting platform
- **ESLint** - Code linting and formatting
- **PostCSS** - CSS processing and optimization

## Development

### Prerequisites

- Node.js 18 or higher
- npm or yarn package manager

### Local Development Setup

```bash
# Clone the repository
git clone <repository-url>
cd baseball

# Navigate to web app directory
cd web_app

# Install dependencies
npm install

# Start development server
npm run dev

# Open browser to http://localhost:3000
```

### Available Scripts

```bash
npm run dev      # Start development server
npm run build    # Build for production
npm run start    # Start production server
npm run lint     # Run ESLint
npm run type-check # TypeScript type checking
```

## Browser Support

- Chrome 90+
- Firefox 88+
- Safari 14+
- Edge 90+

## License

Copyright (c) 2025 Sam Vickars

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## Support

For questions, issues, or feature requests:

- Create an issue in the GitHub repository
- Include detailed information about your request
- Provide browser console logs for debugging if applicable

---

**Caught Looking** - Bringing baseball scorecards into the digital age with real-time updates and modern design.
