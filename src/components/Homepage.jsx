import './Homepage.css';

function Homepage({ onSelectGame }) {
  const games = [
    {
      id: 'shopee-fortune-wheel',
      name: 'Shopee Fortune Wheel',
      description: 'Spin the wheel, guess letters, and win your shopping budget! A fun Wheel of Fortune-inspired game.',
      emoji: '🎡'
    }
  ];

  return (
    <div className="homepage">
      <div className="homepage-container">
        <h1 className="homepage-title">🎮 Couple Fun Games 💕</h1>
        <p className="homepage-intro">
          Welcome to Couple Fun Games! A collection of fun, interactive games designed for couples to enjoy together. 
          Pick a game below and start having fun!
        </p>

        <div className="games-list">
          <h2>Available Games:</h2>
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
                  Play Now 🎮
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
