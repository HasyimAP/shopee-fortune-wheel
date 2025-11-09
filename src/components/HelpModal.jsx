import './HelpModal.css';
import { useLanguage } from '../contexts/LanguageContext';
import { getTranslation } from '../translations';

function HelpModal({ onClose, currency = 'IDR' }) {
  const { language } = useLanguage();
  const t = getTranslation(language);

  return (
    <div className="help-modal-overlay" onClick={onClose}>
      <div className="help-modal-content" onClick={(e) => e.stopPropagation()}>
        <div className="help-modal-header">
          <h2>{t.helpModal.title}</h2>
          <button className="close-button" onClick={onClose}>✕</button>
        </div>
        
        <div className="help-modal-body">
          <section className="help-section">
            <h3>{t.helpModal.objective}</h3>
            <p>{t.helpModal.objectiveText}</p>
          </section>

          <section className="help-section">
            <h3>{t.helpModal.howToPlayTitle}</h3>
            <ol>
              <li dangerouslySetInnerHTML={{ __html: t.helpModal.steps.step1 }} />
              <li>
                <span dangerouslySetInnerHTML={{ __html: t.helpModal.steps.step2 }} />
                <ul>
                  <li dangerouslySetInnerHTML={{ __html: t.helpModal.steps.step2a }} />
                  <li dangerouslySetInnerHTML={{ __html: t.helpModal.steps.step2b }} />
                </ul>
              </li>
              <li>
                <span dangerouslySetInnerHTML={{ __html: t.helpModal.steps.step3 }} />
                <ul>
                  <li>{t.helpModal.steps.step3a.replace('{currency}', currency)}</li>
                  <li>{t.helpModal.steps.step3b}</li>
                  <li>{t.helpModal.steps.step3c}</li>
                </ul>
              </li>
              <li>
                <span dangerouslySetInnerHTML={{ __html: t.helpModal.steps.step4 }} />
                <ul>
                  <li dangerouslySetInnerHTML={{ __html: t.helpModal.steps.step4a }} />
                  <li dangerouslySetInnerHTML={{ __html: t.helpModal.steps.step4b }} />
                </ul>
              </li>
            </ol>
          </section>

          <section className="help-section">
            <h3>{t.helpModal.scoringTipsTitle}</h3>
            <ul>
              <li>{t.helpModal.scoringTips.tip1}</li>
              <li>{t.helpModal.scoringTips.tip2}</li>
              <li>{t.helpModal.scoringTips.tip3}</li>
              <li>{t.helpModal.scoringTips.tip4}</li>
            </ul>
          </section>

          <section className="help-section">
            <h3>{t.helpModal.strategyTitle}</h3>
            <p>{t.helpModal.strategyText}</p>
          </section>
        </div>

        <div className="help-modal-footer">
          <button className="close-footer-button" onClick={onClose}>
            {t.helpModal.closeButton}
          </button>
        </div>
      </div>
    </div>
  );
}

export default HelpModal;
