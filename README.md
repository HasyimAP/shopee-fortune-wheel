# 🎮 Couple Fun Games 💕

A collection of fun, interactive web games designed for couples to enjoy together!

## 🎯 What is Couple Fun Games?

**Couple Fun Games** is a platform that hosts multiple browser-based games for couples. Each game is designed to be fun, interactive, and engaging, perfect for quality time together or friendly challenges.

## 🎡 Available Games

### 🎰 Shopee Fortune Wheel
A fun, interactive Wheel of Fortune-inspired game! Spin the wheel, guess letters, and win your Shopee shopping budget!

**Game Features:**
- Spin a colorful wheel to get random values (customizable by host)
- Guess consonant letters to reveal a secret phrase
- Purchase vowels using accumulated points
- Solve the full phrase for bonus points
- Final score becomes the Shopee shopping budget!

**[📖 Full Game Documentation](docs/games/shopee-fortune-wheel.md)** - Detailed rules, strategies, and tips

### 💬 TalkDeck
An engaging conversation game designed to spark meaningful discussions between couples!

**Game Features:**
- Curated conversation prompts and questions
- Different categories to explore various topics
- Multilingual support (English and Indonesian)
- Perfect for date nights and deeper connections

### 🎲 You & Me: Truth or Dare
An interactive Truth or Dare game with a spinning wheel mechanic designed for couples!

**Game Features:**
- Smart spinning wheel that adjusts probabilities dynamically
- 100 carefully crafted truth questions
- 100 fun, harmless, and silly dare challenges
- Intelligent caching prevents repetition for 1 week
- Name stays consistent across all languages: "You & Me: Truth or Dare"

**[📖 Full Game Documentation](docs/games/truth-or-dare.md)** - Complete rules and challenge lists

## 🎨 Platform Features

- ✨ **Multiple Games** - Collection of different games to choose from
- 🎮 **Easy Navigation** - Simple homepage to select and launch games
- 📱 **Responsive Design** - Works on laptops, tablets, and mobile devices
- 🎯 **Game-Specific Features** - Each game has its own unique mechanics and customization options
- 🔄 **Seamless Switching** - Return to the homepage anytime to try different games
- 🌍 **Multilingual Support** - Available in multiple languages (English, Indonesian)
- 🔍 **SEO Optimized** - Enhanced discoverability with proper meta tags, sitemap, and robots.txt
- 📊 **Analytics Integration** - Google Analytics for tracking usage and improvements

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
│   │   ├── TalkDeck.jsx       # TalkDeck conversation game
│   │   ├── TruthOrDare.jsx    # Truth or Dare game
│   │   ├── LanguageSwitcher.jsx    # Language toggle component
│   │   ├── HostSetup.jsx      # Game setup screen
│   │   ├── GameBoard.jsx      # Main game interface
│   │   ├── Wheel.jsx          # Spinning wheel component
│   │   ├── PhraseBoard.jsx    # Letter display board
│   │   ├── FinalSummary.jsx   # End game summary
│   │   ├── HelpModal.jsx      # Help and instructions
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
│   ├── README.md              # Documentation index
│   ├── SETUP-WINDOWS.md       # Windows setup guide
│   ├── SETUP-LINUX.md         # Linux setup guide
│   ├── SETUP-MACOS.md         # macOS setup guide
│   ├── DEPLOYMENT-LINUX.md    # Linux deployment guide
│   ├── UPDATE-DEPLOYMENT.md   # Update deployment guide
│   └── games/
│       ├── shopee-fortune-wheel.md  # Shopee game docs
│       └── truth-or-dare.md         # Truth or Dare game docs
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
- **[Deployment Guides](docs/README.md#deployment)** - Production deployment instructions

## 🔍 SEO & Web Optimization

The platform includes comprehensive SEO optimization for better search engine discoverability:

### Built-in SEO Features:
- **Meta Tags**: Comprehensive meta tags including title, description, keywords, and author
- **Open Graph Tags**: Optimized previews for Facebook, LinkedIn, and social media sharing
- **Twitter Card**: Enhanced previews when shared on Twitter
- **Robots.txt**: Search engine crawler directives at `/robots.txt` (allows all crawlers)
- **Sitemap**: XML sitemap at `/sitemap.xml` for better indexing
- **Favicon**: Custom web icon using the `web_icon.png` asset
- **Semantic HTML**: Proper HTML5 structure for better crawling
- **Analytics**: Google Analytics integration for tracking

## 🎨 Game Descriptions

### How Each Game Works

**Shopee Fortune Wheel** is a customizable Wheel of Fortune-style game where one player acts as the host, setting up a secret phrase and configuring the wheel values. The other player spins the wheel and guesses letters to reveal the phrase, earning points that become their shopping budget.

**TalkDeck** provides thoughtfully curated conversation starters across different categories (romantic, serious, funny, dreamy, future, and past). Players tap cards to reveal questions that spark meaningful discussions and deeper connections.

**You & Me: Truth or Dare** brings a fresh twist to the classic game with a spinning wheel mechanic. The wheel intelligently adjusts probabilities—if Truth appears frequently, Dare becomes more likely next time. With 200 total challenges (100 truths + 100 dares), the game keeps track of what's been asked to ensure variety and freshness for up to one week.

## 💝 Made with Love

This platform was created to host fun, interactive games for couples. Have fun playing and enjoy quality time together! 💕

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