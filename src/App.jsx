import { useState } from 'react';
import './App.css';
import Homepage from './components/Homepage';
import ShopeeFortuneWheel from './components/ShopeeFortuneWheel';

function App() {
  const [currentView, setCurrentView] = useState('home'); // home, shopee-fortune-wheel
  const [selectedGame, setSelectedGame] = useState(null);

  const handleSelectGame = (gameId) => {
    setSelectedGame(gameId);
    setCurrentView('game');
  };

  const handleBackToHome = () => {
    setCurrentView('home');
    setSelectedGame(null);
  };

  return (
    <div className="App">
      {currentView === 'home' && <Homepage onSelectGame={handleSelectGame} />}
      {currentView === 'game' && selectedGame === 'shopee-fortune-wheel' && (
        <ShopeeFortuneWheel onBackToHome={handleBackToHome} />
      )}
    </div>
  );
}

export default App;
