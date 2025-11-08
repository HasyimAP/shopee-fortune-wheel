# 🎡 Wheel of Love - Shopee Challenge Edition 💕

A fun, interactive Wheel of Fortune-inspired web game for couples! Spin the wheel, guess letters, and win your Shopee shopping budget!

## 🎮 Game Overview

**Wheel of Love** is a browser-based game where your girlfriend can:
- Spin a colorful wheel to get random values (1k-50k Rupiah)
- Guess consonant letters to reveal a secret phrase
- Purchase vowels using accumulated points
- Try to solve the full phrase for bonus points
- The final score becomes the Shopee shopping budget!

## 🎯 Game Rules

1. **Spin the Wheel**: Get a random value between Rp 1,000 and Rp 50,000
2. **Guess Consonants**: 
   - ✅ Correct guess → ADD the spun value to your score
   - ❌ Wrong guess → SUBTRACT the spun value from your score
3. **Buy Vowels**: 
   - First vowel costs Rp 5,000
   - Each subsequent vowel costs Rp 5,000 more (5k, 10k, 15k, 20k, 25k)
4. **Solve the Phrase**:
   - ✅ Correct answer → Get bonus (5k × remaining hidden consonants)
   - ❌ Wrong answer → LOSE HALF your score
5. **Final Score** = Your Shopee Budget! 🛍️

## 🚀 Getting Started

### Prerequisites

Make sure you have **Node.js** installed on your laptop:
- Download from: https://nodejs.org/ (LTS version recommended)
- Check installation: `node --version` and `npm --version`

### Installation

1. **Clone or download this repository**:
   ```bash
   git clone https://github.com/HasyimAP/shopee-fortune-wheel.git
   cd shopee-fortune-wheel
   ```

2. **Install dependencies**:
   ```bash
   npm install
   ```

### Running the Application

**Start both frontend and backend together**:
```bash
npm run dev
```

This will:
- Start the Express backend server on `http://localhost:3000`
- Start the Vite frontend dev server on `http://localhost:5173`
- Open your browser automatically to `http://localhost:5173`

### Alternative: Run Frontend and Backend Separately

**Terminal 1 - Backend Server**:
```bash
npm run server
```

**Terminal 2 - Frontend**:
```bash
npm run client
```

## 📖 How to Play

### For the Host (You):

1. Open the game at `http://localhost:5173`
2. Enter a secret phrase in the input field (e.g., "I LOVE YOU SO MUCH")
3. Click **"Start Game"** to begin

### For the Player (Your Girlfriend):

1. Click **"Spin the Wheel"** to get a random value
2. Choose to either:
   - **Guess a consonant** (B, C, D, F, G, H, J, K, L, M, N, P, Q, R, S, T, V, W, X, Y, Z)
   - **Buy a vowel** (A, E, I, O, U) - if you have enough money
   - **Guess the full phrase** - risky but can win big!
3. Keep playing until you solve the phrase
4. See your final Shopee budget!

## 🎨 Features

- ✨ **Colorful, animated wheel** that spins with smooth animations
- 🎯 **Interactive letter board** that reveals guessed letters
- 💰 **Real-time score tracking** with clear visual feedback
- 🔊 **Visual feedback** for spins, correct/wrong guesses
- 📱 **Responsive design** that works on laptops and tablets
- 🎊 **Celebration screen** showing final Shopee budget

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
shopee-fortune-wheel/
├── backend/
│   └── server.js          # Express backend server
├── src/
│   ├── components/
│   │   ├── HostSetup.jsx      # Initial setup screen
│   │   ├── GameBoard.jsx      # Main game interface
│   │   ├── Wheel.jsx          # Spinning wheel component
│   │   ├── PhraseBoard.jsx    # Letter display board
│   │   ├── FinalSummary.jsx   # End game summary
│   │   └── *.css              # Component styles
│   ├── App.jsx            # Main app component
│   ├── main.jsx           # React entry point
│   └── index.css          # Global styles
├── index.html             # HTML template
├── package.json           # Dependencies and scripts
├── vite.config.js         # Vite configuration
└── README.md              # This file
```

## 🎨 Customization Ideas

### Easy Modifications:

1. **Change wheel values**: Edit `backend/server.js` line 11
2. **Modify colors**: Update CSS gradient values in component CSS files
3. **Add sound effects**: Include audio files and play on events
4. **Change vowel pricing**: Edit `GameBoard.jsx` line 18

### Future Enhancements:

- 🎵 Add real sound effects (wheel spin, ding for correct, buzz for wrong)
- 💾 Add localStorage to save high scores
- 🎨 Integrate Tailwind CSS for easier styling
- 🌐 Deploy to Vercel/Netlify for online play
- 📊 Add statistics and game history
- 🎭 Multiple phrase categories
- ⏱️ Add timer for extra challenge

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

## 💝 Made with Love

This game was created for a special couple's Shopee challenge. Have fun playing and enjoy your shopping! 🛍️

## 📄 License

This project is open source and available for personal use.

## 🤝 Contributing

Feel free to fork this project and add your own features! Some ideas:
- Add different game modes
- Create mobile-responsive design
- Add multiplayer support
- Integrate with actual Shopee API
- Add authentication and user profiles

---

**Happy Spinning! 🎡💕**