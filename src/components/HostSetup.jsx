import { useState, useEffect } from 'react';
import './HostSetup.css';

function HostSetup({ onStart }) {
  const [phrase, setPhrase] = useState('');
  const [useCustomWheel, setUseCustomWheel] = useState(false);
  const [wheelConfig, setWheelConfig] = useState([]);
  const [defaultConfig, setDefaultConfig] = useState([]);
  const [vowelPrice, setVowelPrice] = useState(5000);
  const [bonusPerLetter, setBonusPerLetter] = useState(5000);

  useEffect(() => {
    // Load default configuration
    fetch('/api/wheel-config/default')
      .then(res => res.json())
      .then(data => {
        setDefaultConfig(data.config);
        setWheelConfig(data.config);
      })
      .catch(err => console.error('Error loading default config:', err));
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (phrase.trim()) {
      // Set wheel configuration before starting the game
      try {
        await fetch('/api/wheel-config', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({
            useDefault: !useCustomWheel,
            config: useCustomWheel ? wheelConfig : undefined
          })
        });
        onStart(phrase.trim(), vowelPrice, bonusPerLetter);
      } catch (error) {
        console.error('Error setting wheel config:', error);
        alert('Error configuring the wheel. Please try again.');
      }
    }
  };

  const handleWheelConfigChange = (index, field, value) => {
    const newConfig = [...wheelConfig];
    newConfig[index][field] = parseFloat(value) || 0;
    setWheelConfig(newConfig);
  };

  const addWheelValue = () => {
    setWheelConfig([...wheelConfig, { value: 1000, weight: 1 }]);
  };

  const removeWheelValue = (index) => {
    const newConfig = wheelConfig.filter((_, i) => i !== index);
    setWheelConfig(newConfig);
  };

  const resetToDefault = () => {
    setWheelConfig(defaultConfig);
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

          <div className="wheel-config-section">
            <h3>Wheel Configuration:</h3>
            <div className="wheel-option">
              <label>
                <input
                  type="radio"
                  checked={!useCustomWheel}
                  onChange={() => setUseCustomWheel(false)}
                />
                <span>Use Default Wheel (Recommended)</span>
              </label>
            </div>
            <div className="wheel-option">
              <label>
                <input
                  type="radio"
                  checked={useCustomWheel}
                  onChange={() => setUseCustomWheel(true)}
                />
                <span>Customize Wheel Values and Weights</span>
              </label>
            </div>

            {useCustomWheel && (
              <div className="custom-wheel-config">
                <p className="config-hint">
                  💡 Tip: Lower weight = rarer value. Weights are relative to each other.
                </p>
                <div className="config-table">
                  <div className="config-header">
                    <span>Value (Rp)</span>
                    <span>Weight (Rarity)</span>
                    <span>Action</span>
                  </div>
                  {wheelConfig.map((item, index) => (
                    <div key={index} className="config-row">
                      <input
                        type="number"
                        value={item.value}
                        onChange={(e) => handleWheelConfigChange(index, 'value', e.target.value)}
                        min="100"
                        step="100"
                        className="value-input"
                      />
                      <input
                        type="number"
                        value={item.weight}
                        onChange={(e) => handleWheelConfigChange(index, 'weight', e.target.value)}
                        min="0.1"
                        step="0.1"
                        className="weight-input"
                      />
                      <button
                        type="button"
                        onClick={() => removeWheelValue(index)}
                        className="remove-button"
                        disabled={wheelConfig.length <= 2}
                      >
                        ❌
                      </button>
                    </div>
                  ))}
                </div>
                <div className="config-actions">
                  <button type="button" onClick={addWheelValue} className="add-button">
                    ➕ Add Value
                  </button>
                  <button type="button" onClick={resetToDefault} className="reset-button">
                    🔄 Reset to Default
                  </button>
                </div>
              </div>
            )}
          </div>

          <div className="game-config-section">
            <h3>Game Settings:</h3>
            <div className="config-input-group">
              <label htmlFor="vowelPrice">Initial Vowel Price (Rp):</label>
              <input
                id="vowelPrice"
                type="number"
                value={vowelPrice}
                onChange={(e) => setVowelPrice(parseInt(e.target.value) || 5000)}
                min="1000"
                step="1000"
                className="config-input"
              />
              <p className="config-hint">
                💡 1st vowel costs this amount, 2nd costs 2x, 3rd costs 3x, etc.
              </p>
            </div>
            <div className="config-input-group">
              <label htmlFor="bonusPerLetter">Bonus Points per Unguessed Letter (Rp):</label>
              <input
                id="bonusPerLetter"
                type="number"
                value={bonusPerLetter}
                onChange={(e) => setBonusPerLetter(parseInt(e.target.value) || 5000)}
                min="1000"
                step="1000"
                className="config-input"
              />
              <p className="config-hint">
                💡 Bonus awarded for each letter not guessed when solving the phrase correctly.
              </p>
            </div>
          </div>

          <button type="submit" className="start-button" disabled={!phrase.trim()}>
            Start Game 🎮
          </button>
        </form>

        <div className="rules">
          <h3>Game Rules:</h3>
          <ul>
            <li>🎯 Spin the wheel to get a random value (based on configured weights)</li>
            <li>✅ Correct consonant guess: ADD the value to score</li>
            <li>❌ Wrong consonant guess: SUBTRACT the value from score</li>
            <li>💰 Vowels cost {(vowelPrice / 1000).toFixed(0)}k, {(vowelPrice * 2 / 1000).toFixed(0)}k, {(vowelPrice * 3 / 1000).toFixed(0)}k... (multiplier increases each time)</li>
            <li>🎊 Guess the full phrase correctly: +{(bonusPerLetter / 1000).toFixed(0)}k per remaining hidden consonant</li>
            <li>💔 Wrong full phrase guess: LOSE HALF your score</li>
            <li>🛍️ Final score = Your Shopee budget!</li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default HostSetup;
