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

### Individual Game Documentation

Learn about each game in detail:

- **🎡 [Shopee Fortune Wheel](games/shopee-fortune-wheel.md)** - Wheel of Fortune-inspired game for couples
  - Game rules and scoring
  - How to play (host and player guides)
  - Features and customization options
  - Game strategy tips

## 🎮 Available Games

Currently, the platform includes:

1. **Shopee Fortune Wheel** - A fun, interactive Wheel of Fortune-inspired game where players spin a wheel, guess letters, and win shopping budgets!

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
│   │   ├── HostSetup.jsx      # Game setup screen
│   │   ├── GameBoard.jsx      # Main game interface
│   │   ├── Wheel.jsx          # Spinning wheel component
│   │   ├── PhraseBoard.jsx    # Letter display board
│   │   ├── FinalSummary.jsx   # End game summary
│   │   └── *.css              # Component styles
│   ├── App.jsx                # Main app component
│   ├── main.jsx               # React entry point
│   └── index.css              # Global styles
├── docs/
│   ├── README.md              # This file
│   ├── SETUP-WINDOWS.md       # Windows setup guide
│   ├── SETUP-LINUX.md         # Linux setup guide
│   ├── SETUP-MACOS.md         # macOS setup guide
│   ├── DEPLOYMENT-LINUX.md    # Linux deployment guide
│   └── games/
│       └── shopee-fortune-wheel.md  # Individual game docs
├── index.html                 # HTML template
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
