import './PhraseBoard.css';

function PhraseBoard({ secretPhrase, guessedLetters }) {
  const renderPhrase = () => {
    return secretPhrase.split('').map((char, index) => {
      const isLetter = /[A-Z]/.test(char);
      const isRevealed = guessedLetters.has(char);
      
      if (!isLetter) {
        return (
          <div key={index} className="phrase-space">
            {char === ' ' ? ' ' : char}
          </div>
        );
      }

      return (
        <div key={index} className={`phrase-letter ${isRevealed ? 'revealed' : 'hidden'}`}>
          {isRevealed ? char : ''}
        </div>
      );
    });
  };

  return (
    <div className="phrase-board">
      <h3 className="phrase-title">The Secret Phrase:</h3>
      <div className="phrase-display">
        {renderPhrase()}
      </div>
    </div>
  );
}

export default PhraseBoard;
