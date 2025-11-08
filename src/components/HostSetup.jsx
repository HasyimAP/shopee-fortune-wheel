import { useState } from 'react';
import './HostSetup.css';

function HostSetup({ onStart }) {
  const [phrase, setPhrase] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (phrase.trim()) {
      onStart(phrase.trim());
    }
  };

  return (
    <div className="host-setup">
      <div className="host-setup-container">
        <h1 className="title">🎡 Wheel of Love 💕</h1>
        <p className="subtitle">Shopee Challenge Edition</p>
        
        <form onSubmit={handleSubmit} className="setup-form">
          <label htmlFor="phrase">Enter the Secret Phrase:</label>
          <input
            id="phrase"
            type="text"
            value={phrase}
            onChange={(e) => setPhrase(e.target.value)}
            placeholder="e.g., I LOVE YOU SO MUCH"
            className="phrase-input"
            autoFocus
          />
          <button type="submit" className="start-button" disabled={!phrase.trim()}>
            Start Game 🎮
          </button>
        </form>

        <div className="rules">
          <h3>Game Rules:</h3>
          <ul>
            <li>🎯 Spin the wheel to get a random value (1k-50k)</li>
            <li>✅ Correct consonant guess: ADD the value to score</li>
            <li>❌ Wrong consonant guess: SUBTRACT the value from score</li>
            <li>💰 Vowels cost 5k, 10k, 15k... (increasing by 5k each time)</li>
            <li>🎊 Guess the full phrase correctly: +5k per remaining hidden consonant</li>
            <li>💔 Wrong full phrase guess: LOSE HALF your score</li>
            <li>🛍️ Final score = Your Shopee budget!</li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default HostSetup;
