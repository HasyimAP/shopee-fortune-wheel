# 🎡 Shopee Fortune Wheel

A fun, interactive Wheel of Fortune-inspired game for couples! Spin the wheel, guess letters, and win your Shopee shopping budget!

## 🎮 Game Overview

**Shopee Fortune Wheel** is a browser-based game where players can:
- Spin a colorful wheel to get random values (customizable by host)
- Guess consonant letters to reveal a secret phrase
- Purchase vowels using accumulated points
- Try to solve the full phrase for bonus points
- The final score becomes the Shopee shopping budget!

## 🎯 Game Rules

1. **Spin the Wheel**: Get a random value based on weighted probabilities
2. **Guess Consonants**: 
   - ✅ Correct guess → ADD the spun value to your score
   - ❌ Wrong guess → SUBTRACT the spun value from your score
3. **Buy Vowels**: 
   - Cost increases with each purchase (1x, 2x, 3x, etc. of the initial vowel price)
   - Default: First vowel costs Rp 5,000, second Rp 10,000, third Rp 15,000...
   - The host can adjust the initial vowel price
4. **Solve the Phrase**:
   - ✅ Correct answer → Get bonus for each unguessed letter (default: 5k per letter)
   - The game shows exactly how many letters you didn't guess and the total bonus
   - The host can adjust the bonus per letter
   - ❌ Wrong answer → LOSE HALF your score
5. **Final Score** = Your Shopee Budget! 🛍️

## 📖 How to Play

### For the Host:

1. From the homepage, select "Shopee Fortune Wheel"
2. Enter a secret phrase in the input field (e.g., "I LOVE YOU SO MUCH")
3. **Choose your wheel configuration:**
   - **Use Default Wheel**: Standard settings with balanced probabilities
   - **Customize Wheel**: Set your own values and weights
     - Add or remove values
     - Adjust weights (lower weight = rarer value)
     - Preview the probability distribution
4. **Configure game settings:**
   - **Initial Vowel Price**: Set the base cost for vowels (default: 5,000)
     - Each subsequent vowel costs 2x, 3x, 4x, etc. of this amount
   - **Bonus per Unguessed Letter**: Set reward for each letter not guessed when solving correctly (default: 5,000)
5. Click **"Start Game"** to begin

### For the Player:

1. Click **"Spin the Wheel"** to get a random value
2. Choose to either:
   - **Guess a consonant** (B, C, D, F, G, H, J, K, L, M, N, P, Q, R, S, T, V, W, X, Y, Z)
   - **Buy a vowel** (A, E, I, O, U) - if you have enough money
   - **Guess the full phrase** - risky but can win big!
3. Keep playing until you solve the phrase
4. See your final Shopee budget with detailed bonus breakdown!
   - View how many letters you didn't guess
   - See which letters those were
   - Check your bonus calculation

## 🎨 Features

- ✨ **Colorful, animated wheel** that spins with smooth animations
- 🎯 **Interactive letter board** that reveals guessed letters
- 💰 **Real-time score tracking** with clear visual feedback
- 🔊 **Visual feedback** for spins, correct/wrong guesses
- 📱 **Responsive design** that works on laptops and tablets
- 🎊 **Celebration screen** showing final Shopee budget with detailed bonus breakdown
- ⚙️ **Customizable wheel values and weights** - Host can control the game difficulty
- 🎲 **Weighted random selection** - Rare values are harder to get
- 💵 **Adjustable vowel pricing** - Host can set initial vowel price (increases multiplicatively)
- 🎁 **Configurable bonus points** - Host can customize bonus per unguessed letter
- 📊 **Detailed bonus information** - See exactly what letters weren't guessed and total bonus earned

## 🛠️ Technical Components

### Frontend Components:
- **HostSetup.jsx** - Initial setup screen for configuring the game
- **GameBoard.jsx** - Main game interface
- **Wheel.jsx** - Spinning wheel component with animations
- **PhraseBoard.jsx** - Letter display board
- **FinalSummary.jsx** - End game summary with bonus breakdown

### Game Logic:
- Weighted random wheel spinning
- Letter guessing validation
- Score calculation and tracking
- Phrase solving with bonus calculation

## 🎨 Customization

You can customize various aspects of the game through the host setup screen:

1. **Wheel Values and Weights**: Create your own wheel configuration with custom values and probabilities
2. **Vowel Pricing**: Adjust the base cost for purchasing vowels
3. **Bonus Points**: Set the reward per unguessed letter when solving the phrase
4. **Secret Phrase**: Use any phrase you want - romantic messages, inside jokes, or challenges

## 💡 Tips for Hosts

- Use phrases with common letters to make the game easier
- Use phrases with rare letters (Q, X, Z) to make it more challenging
- Adjust wheel values based on your budget
- Set higher vowel prices to make the game more strategic
- The bonus per letter can significantly boost the final score - adjust accordingly!

## 🎮 Game Strategy (For Players)

- Start with common consonants (R, S, T, N, L)
- Buy vowels strategically when you have enough points
- Try to solve early if you're confident - the bonus can be huge!
- Remember: wrong solve attempts cost you half your score

---

**Back to:** [Main Documentation](../../README.md) | [All Games](../README.md)
