import React from 'react';
import './GameCard.css';

const GameCard = ({ game, logos }) => {
  // console.log('logos', logos)
  // const teamLogo = (teamName) => {
  //   const obj = logos.filter(logo => logo.key === teamName)[0]
  //   return obj.url;
  // }
  // const homeTeamLogo = teamLogo(game.HomeTeam);
  // const awayTeamLogo = teamLogo(game.AwayTeam);
  // console.log(homeTeamLogo, awayTeamLogo)
  return (
    <div className='gameCard'>
      <img href='' alt='teamLogo' />
      <div>{game.HomeTeam}</div>
      <div>{game.HomeTeamRuns}</div>
      <div>{game.AwayTeam}</div>
      <div>{game.AwayTeamRuns}</div>
    </div>
  );
};

export default GameCard;
