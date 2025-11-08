import { useState } from 'react';
import './App.css';
import HostSetup from './components/HostSetup';
import GameBoard from './components/GameBoard';
import FinalSummary from './components/FinalSummary';

function App() {
  const [gameState, setGameState] = useState('setup'); // setup, playing, finished
  const [secretPhrase, setSecretPhrase] = useState('');
  const [score, setScore] = useState(0);

  const startGame = (phrase) => {
    setSecretPhrase(phrase.toUpperCase());
    setScore(0);
    setGameState('playing');
  };

  const endGame = (finalScore) => {
    setScore(finalScore);
    setGameState('finished');
  };

  const resetGame = () => {
    setGameState('setup');
    setSecretPhrase('');
    setScore(0);
  };

  return (
    <div className="App">
      {gameState === 'setup' && <HostSetup onStart={startGame} />}
      {gameState === 'playing' && (
        <GameBoard 
          secretPhrase={secretPhrase} 
          onGameEnd={endGame}
        />
      )}
      {gameState === 'finished' && (
        <FinalSummary 
          score={score} 
          onRestart={resetGame}
        />
      )}
    </div>
  );
}

export default App;
