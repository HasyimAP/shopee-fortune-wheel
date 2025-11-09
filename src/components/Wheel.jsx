import { useState } from 'react';
import './Wheel.css';
import { useLanguage } from '../contexts/LanguageContext';
import { getTranslation } from '../translations';

function Wheel({ onSpin, currentValue }) {
  const { language } = useLanguage();
  const t = getTranslation(language);
  const [isSpinning, setIsSpinning] = useState(false);

  const handleSpin = async () => {
    if (isSpinning) return;
    
    setIsSpinning(true);
    await onSpin();
    
    // Animation duration
    setTimeout(() => {
      setIsSpinning(false);
    }, 2000);
  };

  const wheelValues = [1000, 2000, 5000, 10000, 15000, 20000, 25000, 30000, 35000, 40000, 45000, 50000];

  return (
    <div className="wheel-container">
      <div className={`wheel ${isSpinning ? 'spinning' : ''}`}>
        <div className="wheel-center">
          <div className="wheel-display">
            {currentValue ? (
              <>
                <div className="wheel-value">Rp {currentValue.toLocaleString()}</div>
                <div className="wheel-label">{t.wheel.youSpun}</div>
              </>
            ) : (
              <>
                <div className="wheel-icon">🎡</div>
                <div className="wheel-label">{t.wheel.spinMe}</div>
              </>
            )}
          </div>
        </div>
        <div className="wheel-segments">
          {wheelValues.map((value, index) => (
            <div 
              key={index} 
              className="wheel-segment"
              style={{
                transform: `rotate(${index * 30}deg)`,
                background: index % 2 === 0 ? '#ff6b6b' : '#ffd93d'
              }}
            >
              <span className="segment-value">{value / 1000}k</span>
            </div>
          ))}
        </div>
      </div>
      
      <button 
        className="spin-button" 
        onClick={handleSpin}
        disabled={isSpinning || currentValue > 0}
      >
        {isSpinning ? t.wheel.spinning : currentValue ? t.wheel.spun : t.wheel.spinWheel}
      </button>

      {isSpinning && (
        <div className="spin-sound">{t.wheel.sound}</div>
      )}
    </div>
  );
}

export default Wheel;
