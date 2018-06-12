const express = require('express');
const router = express.Router();
const axios = require('axios');
const PropublicaAPI = require('../../modules/propub-api');

// GET LIST OF RECENT PERSONAL EXPLANATIONS FOR MISSED OR MISTAKEN VOTES
router.get('/explanations/:congress', (req, res) => {
  let congress = req.params.congress;
  PropublicaAPI.get(`/${congress}/explanations/votes.json`)
    .then(response => res.send(response.data))
    .catch(err => {
      console.log(err);
      res.sendStatus(500);
    });
});

// Get a specific roll-call vote, including a complete list of member positions
router.get('/specific/:rollCall/:sessionNumber/:congress/:chamber', (req, res) => {
  const {rollCall, sessionNumber, congress, chamber} = req.params;
  PropublicaAPI.get(`/${congress}/${chamber}/sessions/${sessionNumber}/votes/${rollCall}.json`)
    .then(response => res.send(response.data))
    .catch(err => {
      console.log(err);
      res.sendStatus(500);
    });
});

module.exports = router;