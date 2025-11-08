import './PhraseBoard.css';

function PhraseBoard({ secretPhrase, guessedLetters }) {
  const renderPhrase = () => {
    // Split the phrase into words and non-letter segments
    const words = secretPhrase.split(/(\s+)/);
    
    return words.map((word, wordIndex) => {
      // Check if this segment is whitespace or special characters
      if (/^\s+$/.test(word)) {
        return (
          <div key={`word-${wordIndex}`} className="phrase-word-space">
            {word}
          </div>
        );
      }
      
      // Render each word as a group of letters
      const letters = word.split('').map((char, charIndex) => {
        const isLetter = /[A-Z]/.test(char);
        const isRevealed = guessedLetters.has(char);
        
        if (!isLetter) {
          return (
            <div key={`char-${charIndex}`} className="phrase-space">
              {char}
            </div>
          );
        }

        return (
          <div key={`char-${charIndex}`} className={`phrase-letter ${isRevealed ? 'revealed' : 'hidden'}`}>
            {isRevealed ? char : ''}
          </div>
        );
      });
      
      return (
        <div key={`word-${wordIndex}`} className="phrase-word">
          {letters}
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
