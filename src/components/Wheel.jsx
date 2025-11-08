import { useState } from 'react';
import './Wheel.css';

function Wheel({ onSpin, currentValue }) {
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
                <div className="wheel-label">You spun!</div>
              </>
            ) : (
              <>
                <div className="wheel-icon">🎡</div>
                <div className="wheel-label">Spin Me!</div>
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
        {isSpinning ? '🎡 Spinning...' : currentValue ? '✅ Spun!' : '🎯 Spin the Wheel!'}
      </button>

      {isSpinning && (
        <div className="spin-sound">🔊 Wheeeee!</div>
      )}
    </div>
  );
}

export default Wheel;
