import { useState, useEffect } from 'react';
import './TruthOrDare.css';
import { useLanguage } from '../contexts/LanguageContext';
import { getTranslation } from '../translations';

function TruthOrDare({ onBackToHome }) {
  const { language } = useLanguage();
  const t = getTranslation(language);
  const [isSpinning, setIsSpinning] = useState(false);
  const [result, setResult] = useState(null); // 'truth' or 'dare'
  const [currentChallenge, setCurrentChallenge] = useState(null);
  const [wheelRotation, setWheelRotation] = useState(0);
  const [truthProbability, setTruthProbability] = useState(50); // Start at 50-50

  // Cache keys
  const TRUTH_PROBABILITY_KEY = 'truthordare_truth_probability';
  const TRUTH_CACHE_KEY = 'truthordare_asked_truth';
  const DARE_CACHE_KEY = 'truthordare_asked_dare';
  const CACHE_TIMESTAMP_KEY = 'truthordare_cache_timestamp';

  // Initialize probabilities and cache on mount
  useEffect(() => {
    loadCachedProbability();
  }, []);

  const loadCachedProbability = () => {
    const cachedProb = localStorage.getItem(TRUTH_PROBABILITY_KEY);
    const cacheTimestamp = localStorage.getItem(CACHE_TIMESTAMP_KEY);
    const oneWeekInMs = 7 * 24 * 60 * 60 * 1000;
    const now = Date.now();

    if (cachedProb && cacheTimestamp) {
      const timestamp = parseInt(cacheTimestamp, 10);
      if (now - timestamp < oneWeekInMs) {
        // Cache is valid
        setTruthProbability(parseInt(cachedProb, 10));
      } else {
        // Cache expired, reset
        resetCache();
      }
    } else {
      // Initialize timestamp if not exists
      localStorage.setItem(CACHE_TIMESTAMP_KEY, now.toString());
    }
  };

  const resetCache = () => {
    localStorage.removeItem(TRUTH_PROBABILITY_KEY);
    localStorage.removeItem(TRUTH_CACHE_KEY);
    localStorage.removeItem(DARE_CACHE_KEY);
    localStorage.removeItem(CACHE_TIMESTAMP_KEY);
    setTruthProbability(50);
    localStorage.setItem(CACHE_TIMESTAMP_KEY, Date.now().toString());
  };

  const getAvailableChallenges = (type) => {
    const challenges = type === 'truth' ? t.truthOrDare.truths : t.truthOrDare.dares;
    const cacheKey = type === 'truth' ? TRUTH_CACHE_KEY : DARE_CACHE_KEY;
    
    // Get asked challenges from cache
    const cachedAsked = localStorage.getItem(cacheKey);
    let asked = cachedAsked ? JSON.parse(cachedAsked) : [];

    // Filter available challenges
    const available = challenges.filter((_, index) => !asked.includes(index));

    // If all have been asked, reset the cache for this type
    if (available.length === 0) {
      asked = [];
      localStorage.removeItem(cacheKey);
      return challenges;
    }

    return available.map((challenge, originalIndex) => ({
      challenge,
      originalIndex: challenges.indexOf(challenge)
    }));
  };

  const markChallengeAsAsked = (type, originalIndex) => {
    const cacheKey = type === 'truth' ? TRUTH_CACHE_KEY : DARE_CACHE_KEY;
    const cachedAsked = localStorage.getItem(cacheKey);
    let asked = cachedAsked ? JSON.parse(cachedAsked) : [];
    
    if (!asked.includes(originalIndex)) {
      asked.push(originalIndex);
      localStorage.setItem(cacheKey, JSON.stringify(asked));
    }
  };

  const updateProbability = (resultType) => {
    let newProb = truthProbability;
    
    if (resultType === 'truth') {
      // Truth showed up, decrease its probability
      newProb = Math.max(25, truthProbability - 5); // Minimum 25%
    } else {
      // Dare showed up, increase truth probability
      newProb = Math.min(75, truthProbability + 5); // Maximum 75%
    }

    setTruthProbability(newProb);
    localStorage.setItem(TRUTH_PROBABILITY_KEY, newProb.toString());
  };

  const spinWheel = () => {
    if (isSpinning) return;

    setIsSpinning(true);
    setResult(null);
    setCurrentChallenge(null);

    // Determine result based on probability
    const random = Math.random() * 100;
    const chosenResult = random < truthProbability ? 'truth' : 'dare';

    // Calculate rotation (multiple full spins + landing position)
    const fullSpins = 5 + Math.floor(Math.random() * 3); // 5-7 full spins
    const landingAngle = chosenResult === 'truth' ? 90 : 270; // Truth at top, Dare at bottom
    const totalRotation = wheelRotation + (fullSpins * 360) + landingAngle;

    setWheelRotation(totalRotation);

    // After spinning animation completes
    setTimeout(() => {
      setResult(chosenResult);
      updateProbability(chosenResult);
      
      // Select a random challenge
      const available = getAvailableChallenges(chosenResult);
      if (available.length > 0) {
        const randomIndex = Math.floor(Math.random() * available.length);
        const selected = available[randomIndex];
        setCurrentChallenge(selected.challenge);
        markChallengeAsAsked(chosenResult, selected.originalIndex);
      }

      setIsSpinning(false);
    }, 3000); // Match CSS animation duration
  };

  const resetGame = () => {
    setResult(null);
    setCurrentChallenge(null);
  };

  return (
    <div className="truthordare">
      <div className="truthordare-container">
        <button className="back-button" onClick={onBackToHome}>
          ← {t.truthOrDare.backToHome}
        </button>

        <h1 className="truthordare-title">{t.truthOrDare.title}</h1>
        <p className="truthordare-subtitle">{t.truthOrDare.subtitle}</p>

        {/* Probability Display */}
        <div className="probability-display">
          <div className="prob-bar">
            <div 
              className="prob-truth" 
              style={{ width: `${truthProbability}%` }}
            >
              Truth {truthProbability}%
            </div>
            <div 
              className="prob-dare" 
              style={{ width: `${100 - truthProbability}%` }}
            >
              Dare {100 - truthProbability}%
            </div>
          </div>
        </div>

        {/* Spinning Wheel */}
        <div className="wheel-container">
          <div className="wheel-pointer">▼</div>
          <div 
            className={`wheel ${isSpinning ? 'spinning' : ''}`}
            style={{ transform: `rotate(${wheelRotation}deg)` }}
          >
            <div className="wheel-half truth-half">
              <span className="wheel-text">Truth</span>
            </div>
            <div className="wheel-half dare-half">
              <span className="wheel-text">Dare</span>
            </div>
          </div>
        </div>

        {/* Spin Button */}
        {!result && (
          <button 
            className="spin-button" 
            onClick={spinWheel}
            disabled={isSpinning}
          >
            {isSpinning ? t.truthOrDare.spinning : t.truthOrDare.spinWheel}
          </button>
        )}

        {/* Result Display */}
        {result && currentChallenge && (
          <div className={`result-card ${result}`}>
            <h2 className="result-type">
              {result === 'truth' ? t.truthOrDare.truthLabel : t.truthOrDare.dareLabel}
            </h2>
            <p className="challenge-text">{currentChallenge}</p>
            <button className="spin-again-button" onClick={resetGame}>
              {t.truthOrDare.spinAgain}
            </button>
          </div>
        )}

        {/* Instructions */}
        <div className="instructions">
          <h3>{t.truthOrDare.howToPlay}</h3>
          <ul>
            <li>{t.truthOrDare.instruction1}</li>
            <li>{t.truthOrDare.instruction2}</li>
            <li>{t.truthOrDare.instruction3}</li>
            <li>{t.truthOrDare.instruction4}</li>
          </ul>
        </div>

        {/* Reset Cache Button */}
        <button className="reset-cache-button" onClick={resetCache}>
          {t.truthOrDare.resetCache}
        </button>
      </div>
    </div>
  );
}

export default TruthOrDare;
