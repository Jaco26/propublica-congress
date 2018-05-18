const express = require('express');
const router = express.Router();
const axios = require('axios');
const Propublica = require('../../modules/Propublica');

// RETURN LIST OF BILLS MATCHING SEARCH PHRASE
router.get(`/subjects/bills/search`, (req, res) => {
  let phrase = req.query.searchPhrase,
      offset = req.query.offset,
      sort = req.query.sortBy,
      dir = req.query.direction,
      url;
  if(phrase && sort && dir) {
    url = `/bills/search.json?query=${phrase}&sort=${sort}&dir=${dir}&offset=${offset}`;
  } else if (phrase && sort) {
    url = `/bills/search.json?query=${phrase}&sort=${sort}&offset=${offset}`;
  } else if (phrase && dir) {
    url = `/bills/search.json?query=${phrase}&dir=${dir}&offset=${offset}`;
  } else {
    url = `/bills/search.json?query=${phrase}&offset=${offset}`;
  }
  Propublica().get(url)
    .then(response => res.send(response.data))
    .catch(err => console.log(err));
});

// RETURN LIST OF RECENT BILLS
router.get(`/recent/:type/:congress/:chamber`, (req, res) => {
  let type = req.params.type,
      congress = req.params.congress,
      chamber = req.params.chamber;
  Propublica().get(`/${congress}/${chamber}/bills/${type}.json`)
    .then(response => res.send(response.data))
    .catch(err => {
      console.log(err);
      res.sendStatus(500);
    });
});



module.exports = router;