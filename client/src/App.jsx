import { useState, useEffect } from 'react';
import './App.css';
import GameCard from './components/GameCard';
import { getLiveScores } from './services/score';
import { getLogos } from './services/logos';

function App() {
  const [games, setGames] = useState([]);
  const [logos, setLogos] = useState([]);

  useEffect(() => {
    updateGames();
    getTeamLogos();
  }, []);

  const updateGames = async () => {
    const scores = await getLiveScores();
    setGames(scores);
  };

  const getTeamLogos = async () => {
    const logos = await getLogos();
    setLogos(logos);
  };

  if (!logos.length) return <div></div>;

  return (
    <div className='App'>
      <h1>MLB Live Stats</h1>
      <div className='games-container'>
        {games.map((game, index) => {
          return (
            <div key={index}>
              <GameCard
                game={game}
                logos={logos}
              />
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default App;
