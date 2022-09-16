import { useState, useEffect } from 'react';
import './App.css';
import GameCard from './components/GameCard';
import { getLiveScores } from './services/score';

function App() {
  const [games, setGames] = useState([]);

  useEffect(() => {
    updateGames();
  }, []);

  const updateGames = async () => {
    const scores = await getLiveScores();
    setGames(scores);
  };

  return (
    <div className='App'>
      <h1>MLB Live Stats</h1>
      {games.map((game) => {
        return (
          <div>
            <GameCard game={game} />
          </div>
        );
      })}
    </div>
  );
}

export default App;
