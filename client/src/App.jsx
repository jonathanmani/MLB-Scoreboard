import { useEffect } from 'react';
import './App.css';
import { getLiveScores } from './services/score';

function App() {
  useEffect(() => {
    getLiveScores();
  }, []);

  return (
    <div className='App'>
      <h1>MLB Live Stats</h1>
    </div>
  );
}

export default App;
