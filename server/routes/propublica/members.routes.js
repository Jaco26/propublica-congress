const express = require('express');
const router = express.Router();
const axios = require('axios');
const { members } = require('../../services/propublica');

router.get('/list/:congress/:chamber', async (req, res) => {
  try {
    let congress = req.params.congress,
      chamber = req.params.chamber,
      result = await members.getListOfMembers(congress, chamber);
    res.send(result);
  } catch (err) {
    console.log(err);
    res.sendStatus(500);
  }
});

router.get('/:memberId', async (req, res) => {
  try {
    let memberId = req.params.memberId,
      result = await members.getSpecificMember(memberId);
    res.send(result);
  } catch (err) {
    console.log(err);
    res.sendStatus(500);
  }
});

router.get('/list/new', async (req, res) => {
  try {
    let result = await members.getNewMembers();
    res.send(result);
  } catch (err) {
    console.log(err);
    res.sendStatus(500);
  }
});

router.get('/:chamber/:state/:district', async (req, res) => {
  try {
    let chamber = req.params.chamber,
      state = req.params.state,
      district = req.params.district,
      result = await members.getCurrentMembersByStateOrDistrict(chamber, state, district);
    res.send(result);
  } catch (err) {
    console.log(err);
    res.sendStatus(500);
  }
});

router.get('/list/leaving_office/:congress/:chamber', async (req, res) => {
  try {
    let congress = req.params.congress,
      chamber = req.params.chamber,
      result = await members.getMembersLeavingOffice();
    res.send(result);
  } catch (err) {
    console.log(err);
    res.sendStatus(500);
  }
});

router.get('/:memberId/votes', async (req, res) => {
  try {
    let memberId = req.params.memberId,
      result = await members.getSpecificMembersVotePositions(memberId);
    res.send(result);
  } catch (err) {
    console.log(err);
    res.sendStatus(500);
  }
});

router.get('/:congress/:chamber/:memberIdOne/:memberIdTwo/compare/votes', async (req, res) => {
  try {
    let congress = req.params.congress,
      chamber = req.params.chamber,
      memberIdOne = req.params.memberIdOne,
      memberIdTwo = req.params.memberIdTwo,
      result = await members.compareTwoMembersVotePositions(memberIdOne, memberIdTwo, congress, chamber);
    res.send(result);
  } catch (err) {
    console.log(err);
    res.sendStatus(500);
  }
});

router.get('/:congress/:chamber/:memberIdOne/:memberIdTwo/compare/bills', async (req, res) => {
  try {
    let congress = req.params.congress,
      chamber = req.params.chamber,
      memberIdOne = req.params.memberIdOne,
      memberIdTwo = req.params.memberIdTwo,
      result = await members.compareTwoMembersBillSponsorships(memberIdOne, memberIdTwo, congress, chamber);
    res.send(result);
  } catch (err) {
    console.log(err);
    res.sendStatus(500);
  }
});


router.get('/bills/:memberId/:type', async (req, res) => {
  try {
    let memberId = req.params.memberId,
      type = req.params.type,
      result = await members.getBillsSponsoredBySpecificMember(memberId, type);
    res.send(result);
  } catch (err) {
    console.log(err);
    res.sendStatus(500);
  }
});

router.get('/expenses/:houseMemberId/:year/:quarter', async (req, res) => {
  try {
    let houseMemberId = req.params.houseMemberId,
      year = req.params.year,
      quarter = req.params.quarter,
      result = await members.getQuarterlyOfficeExpensesForSpecificHouseMember(houseMemberId, year, quarter);
    res.send(result);
  } catch (err) {
    console.log(err);
    res.sendStatus(500);
  }
});

router.get('/expenses/:houseMemberId/:category', async (req, res) => {
  try {
    let houseMemberId = req.params.houseMemberId,
      category = req.params.category,
      result = await members.getQuarterlyOfficeExpensesForSpecificHouseMember(houseMemberId, category);
    res.send(result);
  } catch (err) {
    console.log(err);
    res.sendStatus(500);
  }
});

router.get('/expenses/:category/:year/:quarter', async (req, res) => {
  try {
    let category = req.params.category,
      year = req.params.year,
      quarter = req.params.quarter,
      result = await members.getQuarterlyOfficeExpensesForSpecificHouseMember(houseMemberId, year, quarter);
    res.send(result);
  } catch (err) {
    console.log(err);
    res.sendStatus(500);
  }
});



module.exports = router;