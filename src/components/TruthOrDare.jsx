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

  // Cache keys for asked questions only
  const TRUTH_CACHE_KEY = 'truthordare_asked_truth';
  const DARE_CACHE_KEY = 'truthordare_asked_dare';
  const CACHE_TIMESTAMP_KEY = 'truthordare_cache_timestamp';

  // Initialize cache timestamp on mount
  useEffect(() => {
    const cacheTimestamp = localStorage.getItem(CACHE_TIMESTAMP_KEY);
    const oneWeekInMs = 7 * 24 * 60 * 60 * 1000;
    const now = Date.now();

    if (cacheTimestamp) {
      const timestamp = parseInt(cacheTimestamp, 10);
      if (now - timestamp >= oneWeekInMs) {
        // Cache expired, reset
        resetCache();
      }
    } else {
      // Initialize timestamp if not exists
      localStorage.setItem(CACHE_TIMESTAMP_KEY, now.toString());
    }
  }, []);

  const resetCache = () => {
    localStorage.removeItem(TRUTH_CACHE_KEY);
    localStorage.removeItem(DARE_CACHE_KEY);
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

  const spinWheel = () => {
    if (isSpinning) return;

    setIsSpinning(true);
    setResult(null);
    setCurrentChallenge(null);

    // Randomize spin duration between 3-5 seconds
    const spinDuration = 3000 + Math.random() * 2000; // 3000-5000ms
    
    // Calculate rotation (multiple full spins + random landing position)
    const fullSpins = 5 + Math.floor(Math.random() * 3); // 5-7 full spins
    const randomAngle = Math.random() * 360; // Random angle between 0-360
    const totalRotation = wheelRotation + (fullSpins * 360) + randomAngle;

    // Store spin duration for CSS transition
    const wheelElement = document.querySelector('.wheel');
    if (wheelElement) {
      wheelElement.style.setProperty('--spin-duration', `${spinDuration / 1000}s`);
    }

    setWheelRotation(totalRotation);

    // After spinning animation completes
    setTimeout(() => {
      // Determine result based on where wheel landed
      // Wheel has 4 sections: Truth (0-90°), Dare (90-180°), Truth (180-270°), Dare (270-360°)
      const finalAngle = totalRotation % 360;
      const chosenResult = (finalAngle >= 0 && finalAngle < 90) || (finalAngle >= 180 && finalAngle < 270) 
        ? 'truth' 
        : 'dare';
      
      setResult(chosenResult);
      
      // Select a random challenge
      const available = getAvailableChallenges(chosenResult);
      if (available.length > 0) {
        const randomIndex = Math.floor(Math.random() * available.length);
        const selected = available[randomIndex];
        setCurrentChallenge(selected.challenge);
        markChallengeAsAsked(chosenResult, selected.originalIndex);
      }

      setIsSpinning(false);
    }, spinDuration);
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

        {/* Spinning Wheel */}
        <div className="wheel-container">
          <div className="wheel-pointer">▼</div>
          <div 
            className={`wheel ${isSpinning ? 'spinning' : ''}`}
            style={{ transform: `rotate(${wheelRotation}deg)` }}
          >
            <div className="wheel-quarter truth-quarter-1">
              <span className="wheel-text">Truth</span>
            </div>
            <div className="wheel-quarter dare-quarter-1">
              <span className="wheel-text">Dare</span>
            </div>
            <div className="wheel-quarter truth-quarter-2">
              <span className="wheel-text">Truth</span>
            </div>
            <div className="wheel-quarter dare-quarter-2">
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
      </div>
    </div>
  );
}

export default TruthOrDare;
