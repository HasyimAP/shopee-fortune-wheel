import './Homepage.css';
import { useLanguage } from '../contexts/LanguageContext';
import { getTranslation } from '../translations';

function Homepage({ onSelectGame }) {
  const { language } = useLanguage();
  const t = getTranslation(language);

  const games = [
    {
      id: 'shopee-fortune-wheel',
      name: t.homepage.shopeeFortuneWheel.name,
      description: t.homepage.shopeeFortuneWheel.description,
      emoji: '🎡'
    }
  ];

  return (
    <div className="homepage">
      <div className="homepage-container">
        <h1 className="homepage-title">{t.homepage.title}</h1>
        <p className="homepage-intro">
          {t.homepage.intro}
        </p>

        <div className="games-list">
          <h2>{t.homepage.availableGames}</h2>
          <div className="games-grid">
            {games.map((game) => (
              <div key={game.id} className="game-card">
                <div className="game-emoji">{game.emoji}</div>
                <h3>{game.name}</h3>
                <p>{game.description}</p>
                <button 
                  onClick={() => onSelectGame(game.id)}
                  className="play-button"
                >
                  {t.homepage.playNow}
                </button>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Homepage;
