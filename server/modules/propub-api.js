const axios = require('axios');

const propubApi = axios.create({
  baseURL: 'https://api.propublica.org/congress/v1',
  headers: {
    "X-API-Key": process.env.PROPUBLICA_CONGRESS_KEY,
  }
});

module.exports = propubApi;