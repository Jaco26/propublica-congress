const axios = require('axios');

module.exports = () => {
  return axios.create({
    baseURL: 'https://api.propublica.org/congress/v1',
    headers: {
      "X-API-Key": process.env.PROPUBLICA_CONGRESS_KEY,
    }
  });
}