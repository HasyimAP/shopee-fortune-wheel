# 📚 Couple Fun Games - Documentation

Welcome to the comprehensive documentation for Couple Fun Games! This guide will help you set up, run, and understand the entire game collection platform.

## 📖 Table of Contents

### Getting Started
- [Main README](../README.md) - Overview of the project and quick start guide
- [Setup Guides](#setup-guides) - Platform-specific installation instructions
- [Deployment Guide](#deployment) - Production deployment instructions

### Setup Guides

Choose your operating system for detailed setup instructions:

- **🪟 [Windows Setup Guide](SETUP-WINDOWS.md)** - Complete guide for Windows 10/11 users
- **🐧 [Linux Setup Guide](SETUP-LINUX.md)** - Guide for Ubuntu, Debian, Fedora, Arch, and more
- **🍎 [macOS Setup Guide](SETUP-MACOS.md)** - Complete guide for Mac users

All setup guides include:
- Installing Node.js and npm from scratch
- Cloning the repository
- Installing dependencies
- Running the application
- Troubleshooting common issues

### Deployment

- **🚀 [Linux Server Deployment Guide](DEPLOYMENT-LINUX.md)** - Complete production deployment with Nginx, PM2, SSL, and monitoring
- **🔄 [Update Deployment Guide](UPDATE-DEPLOYMENT.md)** - Instructions for updating deployed applications, handling conflicts, and rollback procedures

### Individual Game Documentation

Learn about each game in detail:

- **🎡 [Shopee Fortune Wheel](games/shopee-fortune-wheel.md)** - Wheel of Fortune-inspired game for couples
  - Game rules and scoring
  - How to play (host and player guides)
  - Features and customization options
  - Game strategy tips
- **💬 TalkDeck** - Conversation game for couples (documentation coming soon)
  - Curated conversation prompts
  - Multiple categories and topics
  - Multilingual support
- **🎲 [You & Me: Truth or Dare](games/truth-or-dare.md)** - Interactive Truth or Dare game for couples
  - 100 truth questions and 100 dare challenges
  - Smart wheel with probability adjustment
  - Intelligent caching system
  - Perfect for date nights and fun moments

## 🎮 Available Games

Currently, the platform includes:

1. **Shopee Fortune Wheel** - A fun, interactive Wheel of Fortune-inspired game where players spin a wheel, guess letters, and win shopping budgets!
2. **TalkDeck** - An engaging conversation game designed to spark meaningful discussions between couples with curated prompts and questions.
3. **You & Me: Truth or Dare** - A playful game where you spin the wheel to get random truth questions or dare challenges, with smart caching to ensure variety and fresh gameplay.

More games coming soon! 🚀

## 🏗️ Project Structure

```
couple-fun-games/
├── backend/
│   └── server.js              # Express backend server
├── src/
│   ├── components/
│   │   ├── Homepage.jsx       # Main menu for game selection
│   │   ├── ShopeeFortuneWheel.jsx  # Shopee game wrapper
│   │   ├── TalkDeck.jsx       # TalkDeck conversation game
│   │   ├── TruthOrDare.jsx    # Truth or Dare game
│   │   ├── LanguageSwitcher.jsx    # Language toggle component
│   │   ├── HostSetup.jsx      # Game setup screen
│   │   ├── GameBoard.jsx      # Main game interface
│   │   ├── Wheel.jsx          # Spinning wheel component
│   │   ├── PhraseBoard.jsx    # Letter display board
│   │   ├── FinalSummary.jsx   # End game summary
│   │   └── *.css              # Component styles
│   ├── contexts/
│   │   └── LanguageContext.jsx # Language state management
│   ├── translations/          # Language translation files
│   ├── App.jsx                # Main app component
│   ├── main.jsx               # React entry point
│   └── index.css              # Global styles
├── public/
│   ├── favicon.png            # Web icon/favicon
│   ├── robots.txt             # Search engine crawler rules
│   └── sitemap.xml            # Site structure for SEO
├── assets/
│   └── web_icon.png           # Original web icon source
├── docs/
│   ├── README.md              # This file
│   ├── SETUP-WINDOWS.md       # Windows setup guide
│   ├── SETUP-LINUX.md         # Linux setup guide
│   ├── SETUP-MACOS.md         # macOS setup guide
│   ├── DEPLOYMENT-LINUX.md    # Linux deployment guide
│   ├── UPDATE-DEPLOYMENT.md   # Update deployment guide
│   └── games/
│       ├── shopee-fortune-wheel.md  # Shopee game docs
│       └── truth-or-dare.md         # Truth or Dare game docs
├── index.html                 # HTML template with SEO meta tags
├── package.json               # Dependencies and scripts
├── vite.config.js             # Vite configuration
└── README.md                  # Main project README
```

## 🛠️ Technology Stack

### Frontend:
- **React 18** - UI framework for building interactive components
- **Vite** - Fast build tool and dev server
- **CSS3** - Styling with animations and responsive design

### Backend:
- **Node.js** - JavaScript runtime
- **Express** - Web server framework for API endpoints
- **CORS** - Cross-origin resource sharing support

### SEO & Optimization:
- **Meta Tags** - Comprehensive SEO meta tags including Open Graph and Twitter Card
- **Sitemap** - XML sitemap for search engine crawling
- **Robots.txt** - Search engine crawler directives
- **Favicon** - Custom web icon for branding
- **Google Analytics** - Traffic and usage analytics

## 🔍 SEO Features

The platform includes comprehensive SEO optimization:

- **Meta Tags**: Title, description, keywords, author, and canonical URL
- **Open Graph**: Optimized for sharing on Facebook, LinkedIn, and other social platforms
- **Twitter Card**: Enhanced previews when shared on Twitter
- **Sitemap**: XML sitemap at `/sitemap.xml` for search engine discovery
- **Robots.txt**: Crawler directives at `/robots.txt` allowing all search engines
- **Favicon**: Custom favicon and Apple touch icon using the web_icon.png
- **Semantic HTML**: Proper HTML5 structure for better indexing
- **Analytics**: Google Analytics integration for tracking and insights

## 🚀 Quick Reference

### Common Commands

```bash
# Install dependencies
npm install

# Run frontend and backend together (development)
npm run dev

# Run backend only
npm run server

# Run frontend only
npm run client

# Build for production
npm run build

# Preview production build
npm run preview
```

### Default URLs

- Frontend (development): `http://localhost:5173`
- Backend API: `http://localhost:3000`

## 📝 Contributing

When adding new games or features:

1. Create game-specific documentation in `docs/games/`
2. Update this README to include the new game
3. Update the main README if needed
4. Follow the existing code structure and style
5. Test thoroughly on all platforms

## 🐛 Troubleshooting

Common issues and solutions:

### Port Already in Use
See the setup guide for your platform for specific instructions on freeing up ports.

### Dependencies Not Installing
```bash
npm cache clean --force
rm -rf node_modules package-lock.json
npm install
```

### Browser Doesn't Open Automatically
Manually navigate to `http://localhost:5173` in your browser.

For more troubleshooting tips, see your platform-specific setup guide.

## 📧 Getting Help

If you encounter issues:

1. Check the relevant setup guide for your platform
2. Review the troubleshooting sections
3. Look at error messages carefully
4. Search for similar issues online
5. Open an issue on GitHub with:
   - Your operating system and version
   - Node.js version (`node --version`)
   - npm version (`npm --version`)
   - Complete error message
   - Steps to reproduce

## 🎯 What's Next?

- [Get Started](../README.md) - Set up and run the platform
- [Choose Your Setup Guide](#setup-guides) - Platform-specific instructions
- [Explore Individual Games](#individual-game-documentation) - Learn game rules and features
- [Deploy to Production](DEPLOYMENT-LINUX.md) - Host your own game server

---

**Happy Gaming! 🎮💕**
