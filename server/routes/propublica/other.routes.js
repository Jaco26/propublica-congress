const express = require('express');
const router = express.Router();
const PropublicaAPI = require('../../modules/propub-api');

router.get('/specific/:id', (req, res) => {
  PropublicaAPI.get(`/lobbying/${req.params.id}.json`)
    .then(response => res.send(response.data))
    .catch(err => {
      console.log(err);
      res.sendStatus(500);
    });
});

module.exports = router;