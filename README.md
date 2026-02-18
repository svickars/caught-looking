![Caught Looking Logo](public/images/caughtlooking.svg)

# Caught Looking

A modern web application for viewing live baseball scorecards with real-time updates and interactive features.

🌐 **Live Website**: [caughtlooking.app](https://caughtlooking.app)

## About This Project

I've always loved baseball. Something about the numbers, the stats, the data. I find keeping score by hand, in my trusty scorebook from [Numbers Game](https://www.numbersgame.co/products/scorebook-22), gets me a lot more into the games I'm watching. I sometimes have trouble keeping up though and found myself flipping between different apps, trying to figure out what happened, keep track of pitch sequences, and get it written down, all while the game was still going on in front of me.

I found [livebaseballscorecards.com](https://livebaseballscorecards.com), which is an incredible resource and proved very helpful. It wasn't quite what I needed though. It was missing a few features, it used notation I wasn't used to, it didn't use native web elements, and it wasn't quite as aesthetically pleasing as my own hand-written scorecard (no shade though, I love that site!). So I decided to make my own, which is what you see here.

It follows my own notation style so some things may not be quite what you're used to. It has delay settings and populates with lineups and other details before game time, helping me get set up. Then I can do my own scorecard then follow along here to double check things.

So please try it out and enjoy!

Built using the MLB API. Design and layout heavily influenced by Scorebook #22 from [Numbers Game](https://www.numbersgame.co/products/scorebook-22).

## Features

### 🏟️ Game Browser

- Browse MLB games by date with a clean, responsive interface
- Scores update in real time on game day

### 📊 Interactive Scorecards

- View detailed scorecards with tooltips and intuitive notation
- Traditional baseball scorecard format
- Pitch sequence indicators, baserunning notation, at-bat results, and hit direction available in the scorecard grid
- More details available by hovering on or clicking an at-bat cell
- Click the live scorebug in the bottom right to see more details on the current at-bat
- **Export PDF** – Download the scorecard as a two-page landscape letter PDF (away team on page 1, home team on page 2)
- Roster and play-by-play tabs with more stats coming soon
- An AI_powered color commentator that sometimes works!

### 🔴 Live Updates

- Real-time updates with play-by-play data directly from the MLB API
- Configurable spoiler and delay settings (helpful if you're SN feed is sometimes 30 seconds behind MLB)
- Auto-refresh functionality for live games
- Buffer management for delayed viewing

### 📱 Modern UI/UX

- Responsive design works on desktop, tablet, and mobile
- Fast performance with Next.js 14
- Beautiful design with Tailwind CSS
- Intuitive navigation and controls
- Responsive design for all devices
- Dark/light theme support

## How to Use

### Basic Usage

1. **Visit the website**: Go to [caughtlooking.app](https://caughtlooking.app)
2. **Select a date**: Use the date picker to choose which day's games to view
3. **Browse games**: Scroll through the list of games for that date
4. **View scorecard**: Click on any game to view its interactive scorecard
5. **Live updates**: Games automatically update if they're currently in progress

### Advanced Features

- **Export PDF**: On the Scorecard tab, expand the left navigation and click "Export PDF" to download the scorecard as a two-page landscape letter PDF
- **Copy link**: Copy the game URL to clipboard (or use the native share sheet on mobile)
- **Save chart images**: Download spray chart and pitch chart views as PNG from their respective tabs
- **Live delay controls**: Adjust how far behind live the updates are (useful for watching with friends)
- **Mobile optimization**: Full functionality on phones and tablets

## Updating Historical Manager Data

Historical games (yesterday and earlier) display manager names from Retrosheet data. To refresh this data:

1. **Navigate to the web app**:
   ```bash
   cd web_app
   ```

2. **Run the build script**:
   ```bash
   npm run build:historical-managers
   ```

The script downloads `teamstats.zip` and `biodata.zip` from Retrosheet, parses manager data per game, and writes `web_app/data/historical-managers.ts`. Downloaded files are cached in `web_app/.retrosheet-cache` (gitignored). Today's games use the MLB API for manager names; only historical games use this generated file.

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

- Built by [**Sam Vickars**](https://samvickars.com)
- Email [sam@caughtlooking.app](mailto:sam@caughtlooking.app) with feedback or questions.

### Data Sources

- **MLB Stats API** - Official Major League Baseball data and statistics

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

## License

Copyright (c) 2025 Sam Vickars

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Support

For questions, issues, or feature requests:

- Create an issue in the GitHub repository
- Include detailed information about your request
- Provide browser console logs for debugging if applicable

---

**Caught Looking** - Bringing baseball scorecards into the digital age with real-time updates and modern design.
