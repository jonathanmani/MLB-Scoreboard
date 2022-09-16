import React from 'react';
import './GameCard.css';

const GameCard = ({ game }) => {
  return (
    <div className='gameCard'>
      <div>{game.HomeTeam}</div>
      <div>{game.HomeTeamRuns}</div>
      <div>{game.AwayTeam}</div>
      <div>{game.AwayTeamRuns}</div>
    </div>
  );
};

export default GameCard;
