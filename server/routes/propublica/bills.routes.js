const express = require('express');
const router = express.Router();
const axios = require('axios');
const Propublica = require('../../modules/Propublica');

// RETURN LIST OF BILLS MATCHING SEARCH PHRASE
router.get(`/subjects/bills/search`, (req, res) => {
  let phrase = req.query.searchPhrase,
      sort = req.query.sortBy,
      dir = req.query.direction,
      url;
  if(phrase && sort && dir) {
    url = `/bills/search.json?query=${phrase}&sort=${sort}&dir=${dir}`;
  } else if (phrase && sort) {
    url = `/bills/search.json?query=${phrase}&sort=${sort}`;
  } else if (phrase && dir) {
    url = `/bills/search.json?query=${phrase}&dir=${dir}`;
  } else {
    url = `/bills/search.json?query=${phrase}`;
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