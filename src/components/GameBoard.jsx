import { useState, useEffect } from 'react';
import './GameBoard.css';
import Wheel from './Wheel';
import PhraseBoard from './PhraseBoard';
import HelpModal from './HelpModal';
import { useLanguage } from '../contexts/LanguageContext';
import { getTranslation } from '../translations';

function GameBoard({ secretPhrase, onGameEnd, vowelPrice = 5000, bonusPerLetter = 5000, currency = 'IDR' }) {
  const { language } = useLanguage();
  const t = getTranslation(language);
  const [score, setScore] = useState(0);
  const [guessedLetters, setGuessedLetters] = useState(new Set());
  const [currentSpinValue, setCurrentSpinValue] = useState(0);
  const [vowelsPurchased, setVowelsPurchased] = useState(0);
  const [message, setMessage] = useState(t.gameBoard.initialMessage);
  const [messageType, setMessageType] = useState('info'); // success, error, info
  const [fullPhraseGuess, setFullPhraseGuess] = useState('');
  const [showFullPhraseInput, setShowFullPhraseInput] = useState(false);
  const [showHelp, setShowHelp] = useState(false);

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
      showMessage(`${t.gameBoard.spinResult}: ${currency} ${data.value.toLocaleString()}! ${t.gameBoard.nowGuessConsonant}`, 'info');
    } catch (error) {
      showMessage(t.gameBoard.errorSpinning, 'error');
    }
  };

  const handleConsonantGuess = (letter) => {
    if (!currentSpinValue) {
      showMessage(t.gameBoard.spinFirst, 'error');
      return;
    }

    if (guessedLetters.has(letter)) {
      showMessage(t.gameBoard.alreadyGuessed, 'error');
      return;
    }

    if (!consonants.has(letter)) {
      showMessage(t.gameBoard.guessConsonant, 'error');
      return;
    }

    setGuessedLetters(new Set([...guessedLetters, letter]));

    const isCorrect = secretPhrase.includes(letter);
    
    if (isCorrect) {
      const newScore = score + currentSpinValue;
      setScore(newScore);
      showMessage(`${t.gameBoard.correct} "${letter}" ${t.gameBoard.inPhrase} +${currency} ${currentSpinValue.toLocaleString()}`, 'success');
    } else {
      const penalty = Math.floor(currentSpinValue / 2);
      const newScore = Math.max(0, score - penalty);
      setScore(newScore);
      showMessage(`${t.gameBoard.wrong} "${letter}" ${t.gameBoard.notInPhrase} -${currency} ${penalty.toLocaleString()}`, 'error');
    }
    
    setCurrentSpinValue(0);
  };

  const handleVowelPurchase = (letter) => {
    if (guessedLetters.has(letter)) {
      showMessage(t.gameBoard.alreadyGuessed, 'error');
      return;
    }

    if (!vowels.has(letter)) {
      showMessage(t.gameBoard.guessConsonant, 'error');
      return;
    }

    const cost = getVowelCost();
    
    if (score < cost) {
      showMessage(`${t.gameBoard.cannotAfford} ${currency} ${cost.toLocaleString()}`, 'error');
      return;
    }

    setGuessedLetters(new Set([...guessedLetters, letter]));
    const newScore = score - cost;
    setScore(newScore);
    setVowelsPurchased(vowelsPurchased + 1);

    const isInPhrase = secretPhrase.includes(letter);
    if (isInPhrase) {
      showMessage(`${t.gameBoard.vowelPurchased} "${letter}" ${t.gameBoard.vowelInPhrase}`, 'success');
    } else {
      showMessage(`${t.gameBoard.vowelPurchased} "${letter}" ${t.gameBoard.vowelNotInPhrase}`, 'info');
    }
  };

  const handleFullPhraseGuess = () => {
    const cleanedGuess = fullPhraseGuess.trim().toUpperCase().replace(/\s+/g, ' ');
    const cleanedPhrase = secretPhrase.trim().replace(/\s+/g, ' ');

    if (cleanedGuess === cleanedPhrase) {
      // Count remaining hidden letters (both consonants and vowels)
      const uniqueLetters = new Set(
        secretPhrase.split('').filter(char => consonants.has(char) || vowels.has(char))
      );
      const hiddenLettersList = [...uniqueLetters].filter(
        letter => !guessedLetters.has(letter)
      );
      const hiddenLettersCount = hiddenLettersList.length;
      
      const bonus = hiddenLettersCount * bonusPerLetter;
      const finalScore = score + bonus;
      setScore(finalScore);
      
      const bonusInfo = {
        hiddenLettersCount,
        hiddenLettersList,
        bonusPerLetter,
        totalBonus: bonus,
        scoreBeforeBonus: score
      };
      
      showMessage(`${t.gameBoard.congratulations} ${t.gameBoard.bonusAwarded} ${hiddenLettersCount} ${t.gameBoard.unguessedLetters}`, 'success');
      
      setTimeout(() => onGameEnd(finalScore, bonusInfo), 2000);
    } else {
      const newScore = Math.floor(score / 2);
      setScore(newScore);
      showMessage(t.gameBoard.incorrectPhrase, 'error');
      setShowFullPhraseInput(false);
      setFullPhraseGuess('');
    }
  };

  return (
    <div className="game-board">
      <button className="help-button" onClick={() => setShowHelp(true)} title={language === 'en' ? 'How to Play' : 'Cara Bermain'}>
        {t.gameBoard.helpButton}
      </button>
      
      <div className="game-container">
        <h1 className="game-title">🎡 Shopee Fortune Wheel 💕</h1>
        
        <div className={`message-banner ${messageType}`}>
          {message}
        </div>

        <div className="score-display">
          <h2>{t.gameBoard.score}: {currency} {score.toLocaleString()}</h2>
          <p>{t.gameBoard.buyVowel}: {vowelsPurchased}</p>
          <p>{t.gameBoard.cost}: {currency} {getVowelCost().toLocaleString()}</p>
        </div>

        <Wheel onSpin={handleSpin} currentValue={currentSpinValue} />

        <PhraseBoard 
          secretPhrase={secretPhrase}
          guessedLetters={guessedLetters}
        />

        <div className="game-controls">
          <div className="letter-input">
            <h3>{t.gameBoard.consonants}</h3>
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
            <h3>{t.gameBoard.vowels} ({currency} {getVowelCost().toLocaleString()})</h3>
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
                {t.gameBoard.guessPhraseButton}
              </button>
            ) : (
              <div className="phrase-guess-input">
                <input
                  type="text"
                  value={fullPhraseGuess}
                  onChange={(e) => setFullPhraseGuess(e.target.value)}
                  placeholder={t.gameBoard.yourGuess}
                  className="phrase-input"
                  autoFocus
                />
                <div className="phrase-buttons">
                  <button onClick={handleFullPhraseGuess} className="submit-button">
                    {t.gameBoard.submitButton}
                  </button>
                  <button 
                    onClick={() => {
                      setShowFullPhraseInput(false);
                      setFullPhraseGuess('');
                    }}
                    className="cancel-button"
                  >
                    {t.gameBoard.cancelButton}
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>

        <div className="game-bottom-controls">
          <button className="help-button" onClick={() => setShowHelp(true)}>
            {t.gameBoard.helpButton}
          </button>
          <button className="end-game-button" onClick={() => onGameEnd(score, null)}>
            {t.gameBoard.endGameButton}
          </button>
        </div>
      </div>
      
      {showHelp && <HelpModal onClose={() => setShowHelp(false)} currency={currency} />}
    </div>
  );
}

export default GameBoard;
