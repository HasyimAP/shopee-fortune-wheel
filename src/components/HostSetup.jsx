import { useState, useEffect } from 'react';
import './HostSetup.css';
import { useLanguage } from '../contexts/LanguageContext';
import { getTranslation } from '../translations';

function HostSetup({ onStart }) {
  const { language } = useLanguage();
  const t = getTranslation(language);
  const [phrase, setPhrase] = useState('');
  const [useCustomWheel, setUseCustomWheel] = useState(false);
  const [wheelConfig, setWheelConfig] = useState([]);
  const [defaultConfig, setDefaultConfig] = useState([]);
  const [vowelPrice, setVowelPrice] = useState(5000);
  const [bonusPerLetter, setBonusPerLetter] = useState(5000);
  const [currency, setCurrency] = useState('IDR');

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
        onStart(phrase.trim(), vowelPrice, bonusPerLetter, currency);
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
        <h1 className="title">{t.hostSetup.title}</h1>
        <p className="subtitle">{t.hostSetup.subtitle}</p>
        
        <form onSubmit={handleSubmit} className="setup-form">
          <label htmlFor="phrase">{t.hostSetup.secretPhraseLabel}</label>
          <input
            id="phrase"
            type="password"
            value={phrase}
            onChange={(e) => setPhrase(e.target.value)}
            placeholder={t.hostSetup.secretPhrasePlaceholder}
            className="phrase-input"
            autoFocus
          />

          <div className="config-input-group">
            <label htmlFor="currency">{t.hostSetup.currencyLabel}</label>
            <input
              id="currency"
              type="text"
              value={currency}
              onChange={(e) => setCurrency(e.target.value.toUpperCase())}
              placeholder={t.hostSetup.currencyPlaceholder}
              className="currency-input"
              maxLength="10"
            />
            <p className="config-hint">
              {t.hostSetup.currencyHint}
            </p>
          </div>

          <div className="wheel-config-section">
            <h3>{t.hostSetup.wheelConfigTitle}</h3>
            <div className="wheel-option">
              <label>
                <input
                  type="radio"
                  checked={!useCustomWheel}
                  onChange={() => setUseCustomWheel(false)}
                />
                <span>{t.hostSetup.useDefaultWheel}</span>
              </label>
            </div>
            <div className="wheel-option">
              <label>
                <input
                  type="radio"
                  checked={useCustomWheel}
                  onChange={() => setUseCustomWheel(true)}
                />
                <span>{t.hostSetup.customizeWheel}</span>
              </label>
            </div>

            {useCustomWheel && (
              <div className="custom-wheel-config">
                <p className="config-hint">
                  {t.hostSetup.configHint}
                </p>
                <div className="config-table">
                  <div className="config-header">
                    <span>{t.hostSetup.valueLabel} ({currency})</span>
                    <span>{t.hostSetup.weightLabel}</span>
                    <span>{t.hostSetup.actionLabel}</span>
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
                    {t.hostSetup.addValue}
                  </button>
                  <button type="button" onClick={resetToDefault} className="reset-button">
                    {t.hostSetup.resetToDefault}
                  </button>
                </div>
              </div>
            )}
          </div>

          <div className="game-config-section">
            <h3>{t.hostSetup.gameSettingsTitle}</h3>
            <div className="config-input-group">
              <label htmlFor="vowelPrice">{t.hostSetup.vowelPriceLabel} ({currency}):</label>
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
                {t.hostSetup.vowelPriceHint}
              </p>
            </div>
            <div className="config-input-group">
              <label htmlFor="bonusPerLetter">{t.hostSetup.bonusPerLetterLabel} ({currency}):</label>
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
                {t.hostSetup.bonusPerLetterHint}
              </p>
            </div>
          </div>

          <button type="submit" className="start-button" disabled={!phrase.trim()}>
            {t.hostSetup.startButton}
          </button>
        </form>

        <div className="rules">
          <h3>{t.hostSetup.rulesTitle}</h3>
          <ul>
            <li dangerouslySetInnerHTML={{ __html: t.hostSetup.rules.spinWheel }} />
            <li>
              <span dangerouslySetInnerHTML={{ __html: t.hostSetup.rules.guessConsonants }} />
              <ul style={{ marginTop: '5px', marginLeft: '20px' }}>
                <li>{t.hostSetup.rules.guessCorrect}</li>
                <li>{t.hostSetup.rules.guessWrong}</li>
              </ul>
            </li>
            <li>
              <span dangerouslySetInnerHTML={{ __html: t.hostSetup.rules.buyVowels }} />
              <ul style={{ marginTop: '5px', marginLeft: '20px' }}>
                <li>{t.hostSetup.rules.vowel1st}: {(vowelPrice / 1000).toFixed(0)}k {currency}</li>
                <li>{t.hostSetup.rules.vowel2nd}: {(vowelPrice * 2 / 1000).toFixed(0)}k {currency}</li>
                <li>{t.hostSetup.rules.vowel3rd}: {(vowelPrice * 3 / 1000).toFixed(0)}k {currency}, {t.hostSetup.rules.andSoOn}</li>
              </ul>
            </li>
            <li>
              <span dangerouslySetInnerHTML={{ __html: t.hostSetup.rules.solvePhrase }} />
              <ul style={{ marginTop: '5px', marginLeft: '20px' }}>
                <li>{t.hostSetup.rules.solveCorrect} +{(bonusPerLetter / 1000).toFixed(0)}k {currency} {t.hostSetup.rules.solveCorrectBonus}</li>
                <li>{t.hostSetup.rules.solveWrong}</li>
              </ul>
            </li>
            <li dangerouslySetInnerHTML={{ __html: t.hostSetup.rules.finalScore }} />
          </ul>
          <p style={{ marginTop: '15px', fontStyle: 'italic', fontSize: '0.9em' }} dangerouslySetInnerHTML={{ __html: t.hostSetup.rules.proTip }} />
        </div>
      </div>
    </div>
  );
}

export default HostSetup;
