import { useState } from 'react';
import './App.css';
import Homepage from './components/Homepage';
import ShopeeFortuneWheel from './components/ShopeeFortuneWheel';
import LanguageSwitcher from './components/LanguageSwitcher';
import { LanguageProvider } from './contexts/LanguageContext';

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
    <LanguageProvider>
      <div className="App">
        <LanguageSwitcher />
        {currentView === 'home' && <Homepage onSelectGame={handleSelectGame} />}
        {currentView === 'game' && selectedGame === 'shopee-fortune-wheel' && (
          <ShopeeFortuneWheel onBackToHome={handleBackToHome} />
        )}
      </div>
    </LanguageProvider>
  );
}

export default App;
