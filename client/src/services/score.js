const axios = require('axios').default;

const getLiveScores = async () => {
  const url =
    'https://api.sportsdata.io/v3/mlb/scores/json/GamesByDate/2022-SEP-15?key=ba9964121aa440ca824e5a17b2aaa8bb';

  try {
    const response = await fetch(url);
    const json = await response.json();
    console.log(json);
    return json;
  } catch (error) {
    console.log('error', error);
  }
};

module.exports = { getLiveScores };
