const express = require('express');
const router = express.Router();
// const axios = require('axios');
const Propublica = require('../../modules/Propublica');

// GET LIST OF MEMBERS
router.get('/list/:congress/:chamber', async (req, res) => {
  let congress = req.params.congress,
      chamber = req.params.chamber;
  Propublica().get(`/${congress}/${chamber}/members.json`)
    .then(response => res.send(response.data))
    .catch(err => {
      console.log(err);
      res.sendStatus(500);
    });
});

// GET SPECIFIC MEMBER
router.get('/:memberId', async (req, res) => {
  let memberId = req.params.memberId;
  Propublica().get(`/members/${memberId}.json`)
    .then(response => res.send(response.data))
    .catch(err => {
      console.log(err);
      res.sendStatus(500);
    });
});

// GET LIST OF NEW MEMBERS
router.get('/list/new', async (req, res) => {
  Propublica().get(`/members/new.json`)
    .then(response => res.send(response.data))
    .catch(err => {
      console.log(err);
      res.sendStatus(500);
    });
});


// GET LIST OF MEMBERS LEAVING OFFICE
router.get('/list/leaving_office/:congress/:chamber', async (req, res) => {
  let congress = req.params.congress,
      chamber = req.params.chamber;
  Propublica().get(`/${congress}/${chamber}/members/leaving.json`)
    .then(response => res.send(response.data))
    .catch(err => {
      console.log(err);
      res.sendStatus(500);
    });
});

// GET MEMBER'S SPECIFIC VOTE POSITIONS
router.get('/:memberId/votes', async (req, res) => {
  let memberId = req.params.memberId;
  Propublica().get(`/members/${memberId}/votes.json`)
    .then(response => res.send(response.data))
    .catch(err => {
      console.log(err);
      res.sendStatus(500);
    });
  
});

// COMPARE TWO MEMBERS' VOTE POSITIONS
router.get('/:congress/:chamber/:memberIdOne/:memberIdTwo/compare/votes', async (req, res) => {
  let congress = req.params.congress,
      chamber = req.params.chamber,
      memberIdOne = req.params.memberIdOne,
      memberIdTwo = req.params.memberIdTwo;
  Propublica().get(`/members/${firstMemberId}/votes/${secondMemberId}/${congress}/${chamber}.json`)
    .then(response => res.send(response.data))
    .catch(err => {
      console.log(err);
      res.sendStatus(500);
    });
});

// COMPARE TWO MEMBERS' BILL SPONSORSHIPS
router.get('/:congress/:chamber/:memberIdOne/:memberIdTwo/compare/bills', async (req, res) => {
  let congress = req.params.congress,
      chamber = req.params.chamber,
      memberIdOne = req.params.memberIdOne,
      memberIdTwo = req.params.memberIdTwo;
  Propublica().get(`/members/${firstMemberId}/bills/${secondMemberId}/${congress}/${chamber}.json`)
    .then(response => res.send(response.data))
    .catch(err => {
      console.log(err);
      res.sendStatus(500);
    });
});

// GET BILL SPONSORSHIPS FOR A SPECIFIC MEMBER
router.get('/bills/:memberId/:type', async (req, res) => {
  let memberId = req.params.memberId,
      type = req.params.type;
      console.log('####################', type);
      
  Propublica().get(`/members/${memberId}/bills/${type}.json`)
    .then(response => res.send(response.data))
    .catch(err => {
      console.log('**************************************************',err);
      res.sendStatus(500);
    });
});

// GET CONGRESSIONAL STATEMENTS BY A SPECIFIC MEMBER
router.get('/statements/:memberId/:congress', (req, res) => {
  let memberId = req.params.memberId,
      congress = req.params.congress;
  Propublica().get(`/members/${memberId}/statements/${congress}.json`)
    .then(response => res.send(response.data))
    .catch(err => {
      console.log(err);
      res.sendStatus(500);
    });
});

// GET LIST OF CURRENT MEMBERS BY STATE/DISTRICT
router.get('/:chamber/:state/:district', async (req, res) => {
  let chamber = req.params.chamber,
    state = req.params.state,
    district = req.params.district,
    url;
  if (chamber == 'house') {
    url = `/members/${chamber}/${state}/${dstrict}/current.json`;
  } else if (chamber == 'senate') {
    url = `/members/${chamber}/${state}/current.json`;
  }
  Propublica().get(url)
    .then(response => res.send(response.data))
    .catch(err => {
      console.log('*******IN GET LIST OF CURRENT MEMBERS', err);
      res.sendStatus(500);
    });
});

// GET QUARTERLY OFFICE EXPENSES FOR A SPECIFIC HOUSE MEMBER
router.get('/expenses/:houseMemberId/:year/:quarter', async (req, res) => {
  let houseMemberId = req.params.houseMemberId,
      year = req.params.year,
      quarter = req.params.quarter;
  Propublica().get(`/members/${memberId}/office_expenses/${year}/${quarter}.json`)
    .then(response => res.send(response.data))
    .catch(err => {
      console.log(err)
      res.sendStatus(500);
    });
});

// GET QUARTERLY OFFICE EXPENSES BY CATEGORY FOR A SPECIFIC HOUSE MEMBER
router.get('/expenses/:houseMemberId/:category', async (req, res) => {
  let houseMemberId = req.params.houseMemberId,
      category = req.params.category;
  Propublica().get(`/members/${memberId}/office_expenses/category/${category}.json`)
    .then(response => res.send(response.data))
    .catch(err => {
      console.log(err);
      res.sendStatus(500);
    });
});

// GET QUARTERLY OFFICE EXPENSES FOR SPECIFIED CATEGORY
router.get('/expenses/:category/:year/:quarter', async (req, res) => {
  let category = req.params.category,
      year = req.params.year,
      quarter = req.params.quarter;
  Propublica().get(`/office_expenses/category/${category}/${year}/${quarter}.json`)
    .then(response => res.send(response.data))
    .catch(err => {
      console.log(err);
      res.sendStatus(500);
    });
});



module.exports = router;