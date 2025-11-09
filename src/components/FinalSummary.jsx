import './FinalSummary.css';
import { useLanguage } from '../contexts/LanguageContext';
import { getTranslation } from '../translations';

function FinalSummary({ score, onRestart, bonusDetails, currency = 'IDR' }) {
  const { language } = useLanguage();
  const t = getTranslation(language);

  return (
    <div className="final-summary">
      <div className="summary-container">
        <h1 className="summary-title">{t.finalSummary.title}</h1>
        
        <div className="final-score-display">
          <h2>{t.finalSummary.shopeeBudget}</h2>
          <div className="final-score">
            {currency} {score.toLocaleString()}
          </div>
        </div>

        {bonusDetails && (
          <div className="bonus-details">
            <h3>{t.finalSummary.bonusDetails}</h3>
            <div className="bonus-info">
              <p><strong>{t.finalSummary.scoreBeforeBonus}</strong> {currency} {bonusDetails.scoreBeforeBonus.toLocaleString()}</p>
              <p><strong>{t.finalSummary.unguessedCount}</strong> {bonusDetails.hiddenLettersCount}</p>
              {bonusDetails.hiddenLettersCount > 0 && (
                <p><strong>{t.finalSummary.unguessedLetters}</strong> {bonusDetails.hiddenLettersList.join(', ')}</p>
              )}
              <p><strong>{t.finalSummary.bonusPerLetter}</strong> {currency} {bonusDetails.bonusPerLetter.toLocaleString()}</p>
              <p className="total-bonus"><strong>{t.finalSummary.totalBonus}</strong> {currency} {bonusDetails.totalBonus.toLocaleString()}</p>
            </div>
          </div>
        )}

        <div className="celebration">
          {score >= 50000 ? (
            <>
              <div className="celebration-icon">🎉🎉🎉</div>
              <p className="celebration-message">
                {t.finalSummary.celebrations.amazing}
              </p>
            </>
          ) : score >= 20000 ? (
            <>
              <div className="celebration-icon">🎈🎈</div>
              <p className="celebration-message">
                {t.finalSummary.celebrations.great}
              </p>
            </>
          ) : score > 0 ? (
            <>
              <div className="celebration-icon">✨</div>
              <p className="celebration-message">
                {t.finalSummary.celebrations.notBad}
              </p>
            </>
          ) : (
            <>
              <div className="celebration-icon">💔</div>
              <p className="celebration-message">
                {t.finalSummary.celebrations.ohNo}
              </p>
            </>
          )}
        </div>

        <button className="restart-button" onClick={onRestart}>
          {t.finalSummary.playAgain}
        </button>

        <div className="shopee-message">
          <p>{t.finalSummary.shopeeMessage}</p>
          <p className="shopee-emoji">🧡</p>
        </div>
      </div>
    </div>
  );
}

export default FinalSummary;
