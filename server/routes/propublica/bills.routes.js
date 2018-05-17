const express = require('express');
const router = express.Router();
const axios = require('axios');
const Propublica = require('../../modules/Propublica');

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


module.exports = router;