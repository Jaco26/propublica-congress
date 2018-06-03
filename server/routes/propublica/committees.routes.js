const express = require('express');
const router = express.Router();
const Propublica = require('../../modules/Propublica');

// A list of Senate, House or joint committees, including their subcommittees
router.get('/list/:congress/:chamber', (req, res) => {
  let {congress, chamber} = req.params;
  Propublica().get(`/${congress}/${chamber}/committees.json`)
    .then(response => res.send(response.daa))
    .catch(err => {
      console.log(err);
      res.sendStatus(500);
    });
});

// Information about a single Senate or House committee, including the members of that committee
router.get('/:congress/:chamber/:committeeId', (req, res) => {
  let {congress, chamber, committeeId} = req.params;
  console.log('CONGRESS ******** ', congress);
  console.log('CHAMBER ******** ', chamber);
  console.log('COMMITTEEID ******** ', committeeId);
  
  Propublica().get(`/${congress}/${chamber}/committees/${committeeId}.json`)
    .then(response => res.send(response.data))
    .catch(err => {
      console.log(err);
      res.sendStatus(500);
    });
});

module.exports = router;