import './FinalSummary.css';

function FinalSummary({ score, onRestart, bonusDetails }) {
  return (
    <div className="final-summary">
      <div className="summary-container">
        <h1 className="summary-title">🎊 Game Over! 🎊</h1>
        
        <div className="final-score-display">
          <h2>Your Shopee Budget</h2>
          <div className="final-score">
            Rp {score.toLocaleString()}
          </div>
        </div>

        {bonusDetails && (
          <div className="bonus-details">
            <h3>🎁 Bonus Details</h3>
            <div className="bonus-info">
              <p><strong>Score before bonus:</strong> Rp {bonusDetails.scoreBeforeBonus.toLocaleString()}</p>
              <p><strong>Unguessed letters count:</strong> {bonusDetails.hiddenConsonantsCount}</p>
              {bonusDetails.hiddenConsonantsCount > 0 && (
                <p><strong>Unguessed letters:</strong> {bonusDetails.hiddenConsonantsList.join(', ')}</p>
              )}
              <p><strong>Bonus per letter:</strong> Rp {bonusDetails.bonusPerLetter.toLocaleString()}</p>
              <p className="total-bonus"><strong>Total bonus:</strong> Rp {bonusDetails.totalBonus.toLocaleString()}</p>
            </div>
          </div>
        )}

        <div className="celebration">
          {score >= 50000 ? (
            <>
              <div className="celebration-icon">🎉🎉🎉</div>
              <p className="celebration-message">
                Amazing! You're ready for a shopping spree! 🛍️
              </p>
            </>
          ) : score >= 20000 ? (
            <>
              <div className="celebration-icon">🎈🎈</div>
              <p className="celebration-message">
                Great job! That's a nice budget! 💰
              </p>
            </>
          ) : score > 0 ? (
            <>
              <div className="celebration-icon">✨</div>
              <p className="celebration-message">
                Not bad! Every rupiah counts! 💕
              </p>
            </>
          ) : (
            <>
              <div className="celebration-icon">💔</div>
              <p className="celebration-message">
                Oh no! Better luck next time! 🎯
              </p>
            </>
          )}
        </div>

        <button className="restart-button" onClick={onRestart}>
          🔄 Play Again
        </button>

        <div className="shopee-message">
          <p>Time to go shopping on Shopee! 🛒</p>
          <p className="shopee-emoji">🧡</p>
        </div>
      </div>
    </div>
  );
}

export default FinalSummary;
