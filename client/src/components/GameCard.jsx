import React from 'react';
import './GameCard.css';

const GameCard = ({ game, logos }) => {
  const homeObj = logos.filter((e) => e.key === game.HomeTeam)[0];
  const homeLogo = homeObj.logo;
  const awayObj = logos.filter((e) => e.key === game.AwayTeam)[0];
  const awayLogo = awayObj.logo;

  if (!(awayLogo && homeLogo)) return <div></div>;

  return (
    <div className='gameCard'>
      <img
        src={homeLogo}
        alt=''
      />
      <div>{game.HomeTeam}</div>
      <div>{game.HomeTeamRuns}</div>
      <img
        src={awayLogo}
        alt=''
      />
      <div>{game.AwayTeam}</div>
      <div>{game.AwayTeamRuns}</div>
    </div>
  );
};

export default GameCard;
