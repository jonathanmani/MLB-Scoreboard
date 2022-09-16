const axios = require('axios').default;

const getLiveScores = async () => {
  console.log('get scores');
  const url =
    'https://api.sportsdata.io/v3/mlb/scores/json/GamesByDate/2022-SEP-15';
  const headers = {
    'Ocp-Apim-Subscription-Key': 'ba9964121aa440ca824e5a17b2aaa8bb',
  };
  // const response = await axios.get(url, {}, headers);
  console.log('test');
};

module.exports = { getLiveScores };
