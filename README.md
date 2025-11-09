# 🎮 Couple Fun Games 💕

A collection of fun, interactive web games designed for couples to enjoy together!

## 🎯 What is Couple Fun Games?

**Couple Fun Games** is a platform that hosts multiple browser-based games for couples. Each game is designed to be fun, interactive, and engaging, perfect for quality time together or friendly challenges.

## 🎡 Available Games

### Shopee Fortune Wheel
A fun, interactive Wheel of Fortune-inspired game! Spin the wheel, guess letters, and win your Shopee shopping budget!

**Game Features:**
- Spin a colorful wheel to get random values (customizable by host)
- Guess consonant letters to reveal a secret phrase
- Purchase vowels using accumulated points
- Solve the full phrase for bonus points
- Final score becomes the Shopee shopping budget!

**[📖 Full Game Documentation](docs/games/shopee-fortune-wheel.md)** - Detailed rules, strategies, and tips

More games coming soon! 🚀

## 🚀 Getting Started

### Platform-Specific Setup Guides

Choose your operating system for detailed setup instructions from scratch:

- 🐧 **[Linux Setup Guide](docs/SETUP-LINUX.md)** - Ubuntu, Debian, Fedora, Arch, and more
- 🪟 **[Windows Setup Guide](docs/SETUP-WINDOWS.md)** - Windows 10, 11, and comprehensive troubleshooting
- 🍎 **[macOS Setup Guide](docs/SETUP-MACOS.md)** - Complete guide for Mac users

### Production Deployment

For deploying to a production Linux server:

- 🚀 **[Linux Server Deployment Guide](docs/DEPLOYMENT-LINUX.md)** - Complete production deployment with Nginx, PM2, SSL, and monitoring
- 🔄 **[Update Deployment Guide](docs/UPDATE-DEPLOYMENT.md)** - Instructions for updating deployed applications, handling conflicts, and rollback procedures

### Quick Start (If you already have Node.js)

#### Prerequisites

Make sure you have **Node.js** installed on your laptop:
- Download from: https://nodejs.org/ (LTS version recommended)
- Check installation: `node --version` and `npm --version`

#### Installation

1. **Clone or download this repository**:
   ```bash
   git clone https://github.com/HasyimAP/couple-fun-games.git
   cd couple-fun-games
   ```

2. **Install dependencies**:
   ```bash
   npm install
   ```

#### Running the Application

**Start both frontend and backend together**:
```bash
npm run dev
```

This will:
- Start the Express backend server on `http://localhost:3000`
- Start the Vite frontend dev server on `http://localhost:5173`
- Open your browser automatically to `http://localhost:5173`

#### Alternative: Run Frontend and Backend Separately

**Terminal 1 - Backend Server**:
```bash
npm run server
```

**Terminal 2 - Frontend**:
```bash
npm run client
```

## 📖 How to Use the Platform

1. Open the application at `http://localhost:5173`
2. You'll see the **Couple Fun Games** homepage with all available games
3. Click on any game card to start playing that game
4. Follow the game-specific instructions (see individual game documentation)
5. Use the back button to return to the game selection menu

## 🎨 Platform Features

- ✨ **Multiple Games** - Collection of different games to choose from
- 🎮 **Easy Navigation** - Simple homepage to select and launch games
- 📱 **Responsive Design** - Works on laptops, tablets, and mobile devices
- 🎯 **Game-Specific Features** - Each game has its own unique mechanics and customization options
- 🔄 **Seamless Switching** - Return to the homepage anytime to try different games

## 🛠️ Technology Stack

### Frontend:
- **React 18** - UI framework
- **Vite** - Fast build tool and dev server
- **CSS3** - Styling with animations

### Backend:
- **Node.js** - JavaScript runtime
- **Express** - Web server framework

## 📁 Project Structure

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
│   │   ├── HelpModal.jsx      # Help and instructions
│   │   └── *.css              # Component styles
│   ├── App.jsx                # Main app component
│   ├── main.jsx               # React entry point
│   └── index.css              # Global styles
├── docs/
│   ├── README.md              # Documentation index
│   ├── SETUP-WINDOWS.md       # Windows setup guide
│   ├── SETUP-LINUX.md         # Linux setup guide
│   ├── SETUP-MACOS.md         # macOS setup guide
│   ├── DEPLOYMENT-LINUX.md    # Linux deployment guide
│   └── games/
│       └── shopee-fortune-wheel.md  # Individual game docs
├── index.html                 # HTML template
├── package.json               # Dependencies and scripts
├── vite.config.js             # Vite configuration
└── README.md                  # This file
```

## 📚 Documentation

For comprehensive documentation, see:

- **[Documentation Index](docs/README.md)** - Complete documentation overview
- **[Setup Guides](docs/README.md#setup-guides)** - Platform-specific installation instructions
- **[Individual Game Docs](docs/README.md#individual-game-documentation)** - Detailed game rules and features

## 🎨 Customization Ideas

### Adding New Games:

1. Create a new game component in `src/components/`
2. Add the game to the `games` array in `Homepage.jsx`
3. Update the router in `App.jsx` to handle the new game
4. Create game-specific documentation in `docs/games/`
5. Update `docs/README.md` to include the new game

### Styling:

1. **Modify colors**: Update CSS gradient values in component CSS files
2. **Add animations**: Enhance existing CSS animations or add new ones
3. **Customize themes**: Create game-specific color schemes

### Future Enhancements:

- 🎵 Add sound effects (wheel spin, ding for correct, buzz for wrong)
- 💾 Add localStorage to save game history and preferences
- 🎨 Integrate Tailwind CSS for easier styling
- 🌐 Deploy to Vercel/Netlify for online play (or use the [deployment guide](docs/DEPLOYMENT-LINUX.md))
- 📊 Add statistics and achievements across all games
- 🎭 Add more games to the collection
- 👥 Add multiplayer support
- 🔐 Add user authentication and profiles

## 🐛 Troubleshooting

### Port already in use
If you see "Port 3000 already in use":
```bash
# Find and kill the process using port 3000
# On Windows:
netstat -ano | findstr :3000
taskkill /PID [PID_NUMBER] /F

# On Mac/Linux:
lsof -ti:3000 | xargs kill
```

### Dependencies not installing
```bash
# Clear npm cache and reinstall
npm cache clean --force
rm -rf node_modules package-lock.json
npm install
```

### Browser doesn't open automatically
Manually open your browser and go to: `http://localhost:5173`

For more detailed troubleshooting, see your [platform-specific setup guide](docs/README.md#setup-guides).

## 📝 Development Tips

### Build for Production:
```bash
npm run build
```
This creates a `dist/` folder with optimized files.

### Preview Production Build:
```bash
npm run preview
```

### Adding New Games:

See the [Customization section](#customization-ideas) and [Documentation Guide](docs/README.md) for details on adding new games to the platform.

## 💝 Made with Love

This platform was created to host fun, interactive games for couples. Have fun playing and enjoy quality time together! 🛍️

## 📄 License

This project is open source and available for personal use.

## 🤝 Contributing

Feel free to fork this project and add your own features! Some ideas:
- Add new games to the collection
- Improve the UI/UX of the game selection menu
- Add mobile-optimized versions
- Create game variants and difficulty levels
- Add multiplayer features
- Integrate social sharing features

When contributing:
- Follow the existing code structure
- Create documentation for new games in `docs/games/`
- Update the relevant README files
- Test on multiple platforms

---

**Happy Gaming! 🎮💕**