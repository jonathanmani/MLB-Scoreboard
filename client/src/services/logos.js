const getLogos = async () => {
    const url =
      ' https://api.sportsdata.io/v3/mlb/scores/json/teams?key=ba9964121aa440ca824e5a17b2aaa8bb';
  
    try {
      const response = await fetch(url);
      const json = await response.json();
      const logos = json.map(team => ({'logo': team.WikipediaLogoUrl, 'key': team.Key}))
      console.log(logos);
      return logos;
    } catch (error) {
      console.log('error', error);
    }
  };
  
  module.exports = { getLogos };
  