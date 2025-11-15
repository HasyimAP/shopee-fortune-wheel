# 🎲 You & Me: Truth or Dare

A fun, interactive Truth or Dare game designed for couples! Spin the wheel to get random challenges that create unforgettable moments together.

## 🎮 Game Overview

**You & Me: Truth or Dare** is an engaging game where players spin a wheel that randomly selects between Truth questions or Dare challenges. The game includes smart caching mechanisms to ensure variety and prevent repetition.

## ✨ Game Features

- **🎡 Smart Spinning Wheel**: Dynamic wheel that adjusts probabilities based on recent results
- **💙 100 Truth Questions**: Carefully crafted questions ranging from romantic to funny to deep conversations
- **💗 100 Dare Challenges**: Fun, harmless, and silly challenges perfect for couples
- **🔄 Intelligent Caching**: 
  - Probability adjustment: If Truth appears often, Dare becomes more likely (and vice versa)
  - Challenge tracking: Each question/dare appears only once per week
  - Automatic reset after 7 days
- **🌍 Multilingual**: Available in English and Indonesian
- **📱 Responsive Design**: Works perfectly on all devices

## 🎯 How to Play

### Starting the Game

1. From the homepage, click on the **You & Me: Truth or Dare** card
2. You'll see a colorful wheel divided into two halves:
   - **Blue (Truth)**: Answer honest questions
   - **Pink (Dare)**: Complete fun challenges

### Playing

1. **Spin the Wheel**: Tap the "Spin the Wheel" button
2. **Watch it Spin**: The wheel will spin and land on either Truth or Dare
3. **Get Your Challenge**: A random question (Truth) or challenge (Dare) will appear
4. **Complete It**: Answer the question honestly or complete the dare
5. **Spin Again**: Tap "Spin Again" to continue playing

### Probability Display

- At the top of the game, you'll see a probability bar showing the current chances
- Starts at **50-50** for both Truth and Dare
- **Dynamic Adjustment**:
  - If Truth appears: Truth probability decreases by 5% (minimum 25%)
  - If Dare appears: Dare probability decreases by 5% (minimum 25%)
  - This ensures variety and prevents consecutive same results

### Challenge Caching

- Each Truth question and Dare challenge is **tracked for 1 week**
- Once a challenge appears, it won't appear again for 7 days
- Keeps the game fresh and exciting
- After all challenges are used, the cache automatically resets

## 🎊 Game Mechanics

### Truth Questions (100 Total)

Truth questions cover various themes:
- **Romantic**: Questions about your relationship, feelings, and memories
- **Deep**: Meaningful questions about values, fears, and dreams
- **Fun**: Light-hearted questions about preferences and silly topics
- **About Us**: Questions specific to your relationship together

Examples:
- "What was your first impression of me?"
- "What's your favorite memory of us together?"
- "What's one thing you've never told me but want to?"

### Dare Challenges (100 Total)

Dare challenges are all:
- **Harmless**: Safe and appropriate for all couples
- **Fun**: Designed to create laughter and joy
- **Silly**: Light-hearted activities that don't take themselves too seriously
- **Interactive**: Involve both partners

Examples:
- "Do your best impression of me"
- "Give me a 30-second massage on any body part I choose"
- "Make up a silly poem about us"
- "Dance with no music for 1 minute"

## 🔧 Features & Settings

### Probability Adjustment Logic

The game uses a smart algorithm to balance variety:

```
Initial State: Truth 50% | Dare 50%

After Truth appears:
- Truth: 45% | Dare: 55%

If Truth appears again:
- Truth: 40% | Dare: 60%

And so on...
(Minimum: 25% | Maximum: 75%)
```

This ensures you won't get the same type too many times in a row!

### Cache Management

**Automatic Caching:**
- Every challenge that appears is stored in localStorage
- Timestamp is recorded when cache is created
- Cache is checked before each challenge selection

**Cache Duration:**
- Challenges are cached for **7 days (1 week)**
- After 7 days, cache automatically expires
- Expired cache is cleared and reset to empty

**Manual Reset:**
- Use the "Reset All Progress" button to clear all cached data
- Resets probabilities to 50-50
- Clears all challenge history
- Fresh start for the game

## 🎨 Visual Design

### Color Scheme

- **Truth (Blue)**: Gradient from #56CCF2 to #2F80ED
- **Dare (Pink)**: Gradient from #F093FB to #F5576C
- **Background**: Gradient from #667eea to #764ba2
- **Accents**: White with semi-transparent overlays

### Wheel Animation

- Smooth 3-second spinning animation
- 5-7 full rotations before stopping
- Cubic-bezier easing for natural deceleration
- Visual pointer shows the selected result

### Responsive Layout

- **Desktop**: Large wheel (300px), spacious layout
- **Tablet**: Medium wheel (250px), comfortable viewing
- **Mobile**: Smaller wheel (200px), optimized touch targets

## 💡 Tips for Maximum Fun

1. **Be Honest**: Truth questions work best when answered genuinely
2. **Embrace the Silly**: Dares are meant to be fun and goofy
3. **Take Turns**: Let both partners spin the wheel
4. **Set the Mood**: Play in a comfortable, private setting
5. **No Pressure**: Skip any challenge that makes you uncomfortable
6. **Capture Moments**: Take photos/videos of funny dare moments
7. **Keep Playing**: The more you play, the more variety you'll see

## 🌟 Why This Game is Special

### For Couples

- **Deepens Connection**: Truth questions spark meaningful conversations
- **Creates Laughter**: Silly dares make you laugh together
- **Builds Memories**: Unforgettable moments you'll remember
- **Safe Space**: All content is appropriate and relationship-focused
- **Variety**: 200 total challenges ensure hours of entertainment

### Smart Design

- **Never Boring**: Intelligent caching prevents repetition
- **Balanced**: Probability system ensures mix of Truth and Dare
- **Private**: All data stored locally, nothing sent to servers
- **Multilingual**: Same great experience in English or Indonesian

## 📱 Technical Details

### Local Storage Keys

The game uses these localStorage keys:
- `truthordare_truth_probability`: Current Truth probability (25-75)
- `truthordare_asked_truth`: Array of used Truth question indices
- `truthordare_asked_dare`: Array of used Dare challenge indices
- `truthordare_cache_timestamp`: Cache creation timestamp

### Browser Compatibility

- Works in all modern browsers (Chrome, Firefox, Safari, Edge)
- Requires localStorage support
- Responsive design for all screen sizes
- Touch-friendly for mobile devices

## 🎯 Game Strategy

While there's no "winning" in Truth or Dare, here are some ideas:

1. **Start Light**: Begin with easier challenges to warm up
2. **Mix It Up**: Try to get a good balance of Truth and Dare
3. **Be Creative**: Add your own twist to dare challenges
4. **Go Deep**: Use truth questions to have meaningful conversations
5. **Have Fun**: The goal is to enjoy time together!

## 🔄 Compared to Other Games

### vs. Shopee Fortune Wheel
- **Fortune Wheel**: Competitive, points-based, puzzle-solving
- **Truth or Dare**: Casual, conversation-focused, challenge-based

### vs. TalkDeck
- **TalkDeck**: Deep conversations, question-focused, reflective
- **Truth or Dare**: Mix of conversation and action, interactive, playful

## 🎁 Perfect For

- **Date Nights**: Add excitement to your evening together
- **Long Drives**: Keep conversations interesting
- **Lazy Weekends**: Fun way to spend time at home
- **Getting to Know Each Other**: For newer couples
- **Rekindling Romance**: For established relationships
- **Breaking the Ice**: When you want to try something new

## 🚀 Future Enhancements

Potential features for future updates:
- Custom challenge creation
- Different difficulty levels
- Category selection (romantic, funny, deep, etc.)
- Challenge history view
- Share favorite challenges
- Couple achievement system

## 📝 Language Support

The game name remains consistent across all languages:
- **English**: You & Me: Truth or Dare
- **Indonesian**: You & Me: Truth or Dare

Both languages have fully translated:
- Interface elements
- Instructions
- All 100 Truth questions
- All 100 Dare challenges

---

**Have fun and create unforgettable moments together! 🎲💕**
