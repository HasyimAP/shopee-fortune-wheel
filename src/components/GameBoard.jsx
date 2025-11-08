import { useState, useEffect } from 'react';
import './GameBoard.css';
import Wheel from './Wheel';
import PhraseBoard from './PhraseBoard';

function GameBoard({ secretPhrase, onGameEnd, vowelPrice = 5000, bonusPerLetter = 5000 }) {
  const [score, setScore] = useState(0);
  const [guessedLetters, setGuessedLetters] = useState(new Set());
  const [currentSpinValue, setCurrentSpinValue] = useState(0);
  const [vowelsPurchased, setVowelsPurchased] = useState(0);
  const [message, setMessage] = useState('Spin the wheel to start!');
  const [messageType, setMessageType] = useState('info'); // success, error, info
  const [fullPhraseGuess, setFullPhraseGuess] = useState('');
  const [showFullPhraseInput, setShowFullPhraseInput] = useState(false);

  const vowels = new Set(['A', 'E', 'I', 'O', 'U']);
  const consonants = new Set('BCDFGHJKLMNPQRSTVWXYZ'.split(''));

  const getVowelCost = () => (vowelsPurchased + 1) * vowelPrice;

  const showMessage = (msg, type) => {
    setMessage(msg);
    setMessageType(type);
  };

  const handleSpin = async () => {
    try {
      const response = await fetch('/api/spin', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' }
      });
      const data = await response.json();
      setCurrentSpinValue(data.value);
      showMessage(`You spun: Rp ${data.value.toLocaleString()}! Now guess a consonant.`, 'info');
    } catch (error) {
      showMessage('Error spinning the wheel. Please try again.', 'error');
    }
  };

  const handleConsonantGuess = (letter) => {
    if (!currentSpinValue) {
      showMessage('Please spin the wheel first!', 'error');
      return;
    }

    if (guessedLetters.has(letter)) {
      showMessage('You already guessed that letter!', 'error');
      return;
    }

    if (!consonants.has(letter)) {
      showMessage('Please guess a consonant!', 'error');
      return;
    }

    setGuessedLetters(new Set([...guessedLetters, letter]));

    const isCorrect = secretPhrase.includes(letter);
    
    if (isCorrect) {
      const newScore = score + currentSpinValue;
      setScore(newScore);
      showMessage(`Correct! "${letter}" is in the phrase. +Rp ${currentSpinValue.toLocaleString()}`, 'success');
    } else {
      const newScore = Math.max(0, score - currentSpinValue);
      setScore(newScore);
      showMessage(`Wrong! "${letter}" is not in the phrase. -Rp ${currentSpinValue.toLocaleString()}`, 'error');
    }
    
    setCurrentSpinValue(0);
  };

  const handleVowelPurchase = (letter) => {
    if (guessedLetters.has(letter)) {
      showMessage('You already guessed that letter!', 'error');
      return;
    }

    if (!vowels.has(letter)) {
      showMessage('That is not a vowel!', 'error');
      return;
    }

    const cost = getVowelCost();
    
    if (score < cost) {
      showMessage(`Not enough money! You need Rp ${cost.toLocaleString()}`, 'error');
      return;
    }

    setGuessedLetters(new Set([...guessedLetters, letter]));
    const newScore = score - cost;
    setScore(newScore);
    setVowelsPurchased(vowelsPurchased + 1);

    const isInPhrase = secretPhrase.includes(letter);
    if (isInPhrase) {
      showMessage(`You purchased "${letter}" for Rp ${cost.toLocaleString()}. It's in the phrase!`, 'success');
    } else {
      showMessage(`You purchased "${letter}" for Rp ${cost.toLocaleString()}. It's not in the phrase.`, 'info');
    }
  };

  const handleFullPhraseGuess = () => {
    const cleanedGuess = fullPhraseGuess.trim().toUpperCase().replace(/\s+/g, ' ');
    const cleanedPhrase = secretPhrase.trim().replace(/\s+/g, ' ');

    if (cleanedGuess === cleanedPhrase) {
      // Count remaining hidden consonants
      const uniqueConsonants = new Set(
        secretPhrase.split('').filter(char => consonants.has(char))
      );
      const revealedConsonants = new Set(
        [...guessedLetters].filter(char => consonants.has(char))
      );
      const hiddenConsonantsList = [...uniqueConsonants].filter(
        c => !revealedConsonants.has(c)
      );
      const hiddenConsonantsCount = hiddenConsonantsList.length;
      
      const bonus = hiddenConsonantsCount * bonusPerLetter;
      const finalScore = score + bonus;
      setScore(finalScore);
      
      const bonusInfo = {
        hiddenConsonantsCount,
        hiddenConsonantsList,
        bonusPerLetter,
        totalBonus: bonus,
        scoreBeforeBonus: score
      };
      
      showMessage(`🎉 CORRECT! You won! Bonus: Rp ${bonus.toLocaleString()}`, 'success');
      
      setTimeout(() => onGameEnd(finalScore, bonusInfo), 2000);
    } else {
      const newScore = Math.floor(score / 2);
      setScore(newScore);
      showMessage(`❌ Wrong phrase! You lose half your score.`, 'error');
      setShowFullPhraseInput(false);
      setFullPhraseGuess('');
    }
  };

  return (
    <div className="game-board">
      <div className="game-container">
        <h1 className="game-title">🎡 Wheel of Love 💕</h1>
        
        <div className={`message-banner ${messageType}`}>
          {message}
        </div>

        <div className="score-display">
          <h2>Current Score: Rp {score.toLocaleString()}</h2>
          <p>Vowels Purchased: {vowelsPurchased}</p>
          <p>Next Vowel Cost: Rp {getVowelCost().toLocaleString()}</p>
        </div>

        <Wheel onSpin={handleSpin} currentValue={currentSpinValue} />

        <PhraseBoard 
          secretPhrase={secretPhrase}
          guessedLetters={guessedLetters}
        />

        <div className="game-controls">
          <div className="letter-input">
            <h3>Guess a Consonant</h3>
            <div className="consonant-grid">
              {[...'BCDFGHJKLMNPQRSTVWXYZ'].map(letter => (
                <button
                  key={letter}
                  className={`letter-button ${guessedLetters.has(letter) ? 'used' : ''}`}
                  onClick={() => handleConsonantGuess(letter)}
                  disabled={guessedLetters.has(letter) || currentSpinValue === 0}
                >
                  {letter}
                </button>
              ))}
            </div>
          </div>

          <div className="vowel-purchase">
            <h3>Buy a Vowel (Rp {getVowelCost().toLocaleString()})</h3>
            <div className="vowel-grid">
              {[...'AEIOU'].map(letter => (
                <button
                  key={letter}
                  className={`vowel-button ${guessedLetters.has(letter) ? 'used' : ''}`}
                  onClick={() => handleVowelPurchase(letter)}
                  disabled={guessedLetters.has(letter) || score < getVowelCost()}
                >
                  {letter}
                </button>
              ))}
            </div>
          </div>

          <div className="full-phrase-section">
            {!showFullPhraseInput ? (
              <button 
                className="guess-phrase-button"
                onClick={() => setShowFullPhraseInput(true)}
              >
                🎯 Guess the Full Phrase
              </button>
            ) : (
              <div className="phrase-guess-input">
                <input
                  type="text"
                  value={fullPhraseGuess}
                  onChange={(e) => setFullPhraseGuess(e.target.value)}
                  placeholder="Type the full phrase..."
                  className="phrase-input"
                  autoFocus
                />
                <div className="phrase-buttons">
                  <button onClick={handleFullPhraseGuess} className="submit-button">
                    Submit Guess
                  </button>
                  <button 
                    onClick={() => {
                      setShowFullPhraseInput(false);
                      setFullPhraseGuess('');
                    }}
                    className="cancel-button"
                  >
                    Cancel
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default GameBoard;
