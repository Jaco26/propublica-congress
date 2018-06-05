const express = require('express');
const router = express.Router();
const axios = require('axios');
// const Propublica = require('../../modules/Propublica');
const PropublicaAPI = require('../../modules/propub-api');

// RETURN LIST OF BILLS MATCHING SEARCH PHRASE
router.get(`/subjects/bills/search`, (req, res) => {
  let {phrase, offset, sort, dir} = req.query;
  let url;
  if(phrase && sort && dir) {
    url = `/bills/search.json?query=${phrase}&sort=${sort}&dir=${dir}&offset=${offset}`;
  } else if (phrase && sort) {
    url = `/bills/search.json?query=${phrase}&sort=${sort}&offset=${offset}`;
  } else if (phrase && dir) {
    url = `/bills/search.json?query=${phrase}&dir=${dir}&offset=${offset}`;
  } else {
    url = `/bills/search.json?query=${phrase}&offset=${offset}`;
  }
  PropublicaAPI.get(url)
    .then(response => res.send(response.data))
    .catch(err => console.log(err));
});

// RETURN LIST OF RECENT BILLS
router.get(`/recent/:type/:congress/:chamber`, (req, res) => {
  let { type, congress, chamber } = req.params,
      offset = req.query.offset;
  PropublicaAPI.get(`/${congress}/${chamber}/bills/${type}.json?offset=${offset}`)
    .then(response => res.send(response.data))
    .catch(err => {
      console.log(err);
      res.sendStatus(500);
    });
});



module.exports = router;