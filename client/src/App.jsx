import './App.css';
import { getLiveScores } from './services/score';

function App() {

  
  return (
    <div className='App'>
      <h1>MLB Live Stats</h1>
      <button onClick={getLiveScores}>Get Scores</button>
    </div>
  );
}

export default App;
