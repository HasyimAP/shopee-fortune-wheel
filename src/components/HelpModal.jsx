import './HelpModal.css';

function HelpModal({ onClose, currency = 'IDR' }) {
  return (
    <div className="help-modal-overlay" onClick={onClose}>
      <div className="help-modal-content" onClick={(e) => e.stopPropagation()}>
        <div className="help-modal-header">
          <h2>🎮 How to Play Shopee Fortune Wheel</h2>
          <button className="close-button" onClick={onClose}>✕</button>
        </div>
        
        <div className="help-modal-body">
          <section className="help-section">
            <h3>🎯 Game Objective</h3>
            <p>
              Guess the secret phrase by spinning the wheel and guessing letters. 
              Your final score becomes your Shopee shopping budget!
            </p>
          </section>

          <section className="help-section">
            <h3>🎡 How to Play</h3>
            <ol>
              <li><strong>Spin the Wheel:</strong> Click the "Spin" button to get a random value</li>
              <li><strong>Guess Consonants:</strong> Click on a consonant letter to guess it
                <ul>
                  <li>✅ Correct guess: <strong>ADD</strong> the spun value to your score</li>
                  <li>❌ Wrong guess: <strong>LOSE HALF</strong> of the spun value from your score</li>
                </ul>
              </li>
              <li><strong>Buy Vowels:</strong> Purchase vowels (A, E, I, O, U) using your score
                <ul>
                  <li>First vowel costs the initial price (e.g., {currency} 5,000)</li>
                  <li>Second vowel costs 2× the initial price</li>
                  <li>Third vowel costs 3× the initial price, and so on</li>
                </ul>
              </li>
              <li><strong>Solve the Phrase:</strong> When you think you know the answer, click "Guess Full Phrase"
                <ul>
                  <li>✅ Correct answer: Get bonus points for each unguessed letter</li>
                  <li>❌ Wrong answer: <strong>LOSE HALF</strong> your current score</li>
                </ul>
              </li>
            </ol>
          </section>

          <section className="help-section">
            <h3>💰 Scoring Tips</h3>
            <ul>
              <li>Higher wheel values give more points for correct guesses</li>
              <li>Vowels are revealed when purchased, whether they're in the phrase or not</li>
              <li>Solve the phrase early to maximize bonus points from unguessed letters</li>
              <li>Be careful! Wrong guesses and wrong phrase attempts can cost you points</li>
            </ul>
          </section>

          <section className="help-section">
            <h3>🎊 Winning Strategy</h3>
            <p>
              Balance between guessing common letters early and solving the phrase 
              before you reveal too many letters. Good luck! 🍀
            </p>
          </section>
        </div>

        <div className="help-modal-footer">
          <button className="close-footer-button" onClick={onClose}>
            Got it! Let's Play 🎮
          </button>
        </div>
      </div>
    </div>
  );
}

export default HelpModal;
