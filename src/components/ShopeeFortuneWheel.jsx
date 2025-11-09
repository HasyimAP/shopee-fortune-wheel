import { useState } from 'react';
import './ShopeeFortuneWheel.css';
import HostSetup from './HostSetup';
import GameBoard from './GameBoard';
import FinalSummary from './FinalSummary';
import { useLanguage } from '../contexts/LanguageContext';
import { getTranslation } from '../translations';

function ShopeeFortuneWheel({ onBackToHome }) {
  const { language } = useLanguage();
  const t = getTranslation(language);
  const [gameState, setGameState] = useState('setup'); // setup, playing, finished
  const [secretPhrase, setSecretPhrase] = useState('');
  const [score, setScore] = useState(0);
  const [vowelPrice, setVowelPrice] = useState(5000);
  const [bonusPerLetter, setBonusPerLetter] = useState(5000);
  const [bonusDetails, setBonusDetails] = useState(null);
  const [currency, setCurrency] = useState('IDR');

  const startGame = (phrase, vowelPriceConfig, bonusPerLetterConfig, currencyConfig) => {
    setSecretPhrase(phrase.toUpperCase());
    setScore(0);
    setVowelPrice(vowelPriceConfig || 5000);
    setBonusPerLetter(bonusPerLetterConfig || 5000);
    setCurrency(currencyConfig || 'IDR');
    setBonusDetails(null);
    setGameState('playing');
  };

  const endGame = (finalScore, bonusInfo) => {
    setScore(finalScore);
    setBonusDetails(bonusInfo);
    setGameState('finished');
  };

  const resetGame = () => {
    setGameState('setup');
    setSecretPhrase('');
    setScore(0);
    setVowelPrice(5000);
    setBonusPerLetter(5000);
    setCurrency('IDR');
    setBonusDetails(null);
  };

  return (
    <div className="shopee-fortune-wheel">
      <button className="back-to-home" onClick={onBackToHome}>
        {t.finalSummary.backToHome}
      </button>
      {gameState === 'setup' && <HostSetup onStart={startGame} />}
      {gameState === 'playing' && (
        <GameBoard 
          secretPhrase={secretPhrase} 
          onGameEnd={endGame}
          vowelPrice={vowelPrice}
          bonusPerLetter={bonusPerLetter}
          currency={currency}
        />
      )}
      {gameState === 'finished' && (
        <FinalSummary 
          score={score} 
          onRestart={resetGame}
          bonusDetails={bonusDetails}
          currency={currency}
        />
      )}
    </div>
  );
}

export default ShopeeFortuneWheel;
