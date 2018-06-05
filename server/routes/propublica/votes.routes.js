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

module.exports = router;