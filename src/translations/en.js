export const en = {
  // Homepage
  homepage: {
    title: '🎮 Couple Fun Games 💕',
    intro: 'Welcome to Couple Fun Games! A collection of fun, interactive games designed for couples to enjoy together. Pick a game below and start having fun!',
    availableGames: 'Available Games:',
    playNow: 'Play Now 🎮',
    shopeeFortuneWheel: {
      name: 'Shopee Fortune Wheel',
      description: 'Spin the wheel, guess letters, and win your shopping budget! A fun Wheel of Fortune-inspired game.'
    }
  },

  // Host Setup
  hostSetup: {
    title: '🎡 Shopee Fortune Wheel 💕',
    subtitle: 'Spin, Guess, and Win!',
    secretPhraseLabel: 'Enter the Secret Phrase:',
    secretPhrasePlaceholder: 'e.g., I LOVE YOU SO MUCH',
    currencyLabel: 'Currency Code:',
    currencyPlaceholder: 'e.g., IDR, USD, EUR',
    currencyHint: '💡 Set the currency code for displaying values (e.g., IDR, USD, EUR)',
    wheelConfigTitle: 'Wheel Configuration:',
    useDefaultWheel: 'Use Default Wheel (Recommended)',
    customizeWheel: 'Customize Wheel Values and Weights',
    configHint: '💡 Tip: Lower weight = rarer value. Weights are relative to each other.',
    valueLabel: 'Value',
    weightLabel: 'Weight (Rarity)',
    actionLabel: 'Action',
    addValue: '➕ Add Value',
    resetToDefault: '🔄 Reset to Default',
    gameSettingsTitle: 'Game Settings:',
    vowelPriceLabel: 'Initial Vowel Price',
    vowelPriceHint: '💡 1st vowel costs this amount, 2nd costs 2x, 3rd costs 3x, etc.',
    bonusPerLetterLabel: 'Bonus Points per Unguessed Letter',
    bonusPerLetterHint: '💡 Bonus awarded for each letter not guessed when solving the phrase correctly.',
    startButton: 'Start Game 🎮',
    rulesTitle: '📖 How to Play:',
    rules: {
      spinWheel: '🎡 <strong>Spin the Wheel:</strong> Click "Spin" to get a random value that determines your potential points',
      guessConsonants: '🔤 <strong>Guess Consonants:</strong> After spinning, select a consonant letter',
      guessCorrect: '✅ If correct: ADD the spun value to your score',
      guessWrong: '❌ If wrong: LOSE HALF of the spun value from your score',
      buyVowels: '💰 <strong>Buy Vowels:</strong> Purchase vowels (A, E, I, O, U) using your points',
      vowel1st: '1st vowel',
      vowel2nd: '2nd vowel',
      vowel3rd: '3rd vowel',
      andSoOn: 'and so on...',
      solvePhrase: '🎯 <strong>Solve the Phrase:</strong> When you know the answer, click "Guess Full Phrase"',
      solveCorrect: '✅ If correct: Earn',
      solveCorrectBonus: 'bonus for each unguessed consonant!',
      solveWrong: '❌ If wrong: LOSE HALF of your current score',
      finalScore: '🛍️ <strong>Your Final Score = Your Shopee Shopping Budget!</strong>',
      proTip: '💡 <strong>Pro Tip:</strong> Balance between revealing letters and solving early to maximize your bonus points. Good luck! 🍀'
    }
  },

  // Game Board
  gameBoard: {
    initialMessage: 'Spin the wheel to start!',
    spinResult: 'You spun',
    nowGuessConsonant: 'Now guess a consonant.',
    errorSpinning: 'Error spinning the wheel. Please try again.',
    spinFirst: 'Please spin the wheel first!',
    alreadyGuessed: 'You already guessed that letter!',
    guessConsonant: 'Please guess a consonant!',
    correct: 'Correct!',
    inPhrase: 'is in the phrase.',
    wrong: 'Wrong!',
    notInPhrase: 'is not in the phrase.',
    cannotAfford: 'Not enough points! You need',
    vowelPurchased: 'Vowel purchased!',
    vowelInPhrase: 'is in the phrase.',
    vowelNotInPhrase: 'is not in the phrase (but still revealed).',
    congratulations: '🎉 Congratulations! You solved it!',
    bonusAwarded: 'Bonus awarded for',
    unguessedLetters: 'unguessed letters!',
    incorrectPhrase: '❌ Incorrect! Lost half your score. Try again!',
    spinButton: 'Spin',
    score: 'Score',
    buyVowel: 'Buy Vowel',
    cost: 'Cost',
    consonants: 'Consonants',
    vowels: 'Vowels',
    guessPhraseButton: 'Guess Full Phrase',
    cancelButton: 'Cancel',
    submitButton: 'Submit',
    yourGuess: 'Your guess:',
    helpButton: '❓ Help',
    endGameButton: '🏁 End Game'
  },

  // Help Modal
  helpModal: {
    title: '🎮 How to Play Shopee Fortune Wheel',
    objective: '🎯 Game Objective',
    objectiveText: 'Guess the secret phrase by spinning the wheel and guessing letters. Your final score becomes your Shopee shopping budget!',
    howToPlayTitle: '🎡 How to Play',
    steps: {
      step1: '<strong>Spin the Wheel:</strong> Click the "Spin" button to get a random value',
      step2: '<strong>Guess Consonants:</strong> Click on a consonant letter to guess it',
      step2a: '✅ Correct guess: <strong>ADD</strong> the spun value to your score',
      step2b: '❌ Wrong guess: <strong>LOSE HALF</strong> of the spun value from your score',
      step3: '<strong>Buy Vowels:</strong> Purchase vowels (A, E, I, O, U) using your score',
      step3a: 'First vowel costs the initial price (e.g., {currency} 5,000)',
      step3b: 'Second vowel costs 2× the initial price',
      step3c: 'Third vowel costs 3× the initial price, and so on',
      step4: '<strong>Solve the Phrase:</strong> When you think you know the answer, click "Guess Full Phrase"',
      step4a: '✅ Correct answer: Get bonus points for each unguessed letter',
      step4b: '❌ Wrong answer: <strong>LOSE HALF</strong> your current score'
    },
    scoringTipsTitle: '💰 Scoring Tips',
    scoringTips: {
      tip1: 'Higher wheel values give more points for correct guesses',
      tip2: 'Vowels are revealed when purchased, whether they\'re in the phrase or not',
      tip3: 'Solve the phrase early to maximize bonus points from unguessed letters',
      tip4: 'Be careful! Wrong guesses and wrong phrase attempts can cost you points'
    },
    strategyTitle: '🎊 Winning Strategy',
    strategyText: 'Balance between guessing common letters early and solving the phrase before you reveal too many letters. Good luck! 🍀',
    closeButton: 'Got it! Let\'s Play 🎮'
  },

  // Final Summary
  finalSummary: {
    title: '🎊 Game Over! 🎊',
    shopeeBudget: 'Your Shopee Budget',
    bonusDetails: '🎁 Bonus Details',
    scoreBeforeBonus: 'Score before bonus:',
    unguessedCount: 'Unguessed letters count:',
    unguessedLetters: 'Unguessed letters:',
    bonusPerLetter: 'Bonus per letter:',
    totalBonus: 'Total bonus:',
    celebrations: {
      amazing: 'Amazing! You\'re ready for a shopping spree! 🛍️',
      great: 'Great job! That\'s a nice budget! 💰',
      notBad: 'Not bad! Every rupiah counts! 💕',
      ohNo: 'Oh no! Better luck next time! 🎯'
    },
    playAgain: '🔄 Play Again',
    shopeeMessage: 'Time to go shopping on Shopee! 🛒',
    backToHome: '🏠 Back to Home'
  },

  // Language Switcher
  language: {
    english: 'English',
    indonesian: 'Indonesian'
  },

  // Wheel Component
  wheel: {
    youSpun: 'You spun!',
    spinMe: 'Spin Me!',
    spinning: '🎡 Spinning...',
    spun: '✅ Spun!',
    spinWheel: '🎯 Spin the Wheel!',
    sound: '🔊 Wheeeee!'
  }
};
