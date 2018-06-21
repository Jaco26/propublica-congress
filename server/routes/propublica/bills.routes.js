const express = require('express');
const router = express.Router();
const axios = require('axios');
// const Propublica = require('../../modules/Propublica');
const PropublicaAPI = require('../../modules/propub-api');

// RETURN LIST OF BILLS MATCHING SEARCH PHRASE
router.get(`/subjects/bills/search`, (req, res) => {
  let {searchPhrase, offset, sort, dir} = req.query;
  let url;
  if (searchPhrase && sort && dir) {
    url = `/bills/search.json?query=${searchPhrase}&sort=${sort}&dir=${dir}&offset=${offset}`;
  } else if (searchPhrase && sort) {
    url = `/bills/search.json?query=${searchPhrase}&sort=${sort}&offset=${offset}`;
  } else if (searchPhrase && dir) {
    url = `/bills/search.json?query=${searchPhrase}&dir=${dir}&offset=${offset}`;
  } else {
    url = `/bills/search.json?query=${searchPhrase}&offset=${offset}`;
  }  
  PropublicaAPI.get(url)
    .then(response => res.send(response.data))
    .catch(err => {
      console.log(err);
      res.sendStatus(500);
    });
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

// Get a list of upcoming bills
router.get('/upcoming/:chamber', (req, res) => {
  let {chamber} = req.params;
  PropublicaAPI.get(`/bills/upcoming/${chamber}.json`)
    .then(response => res.send(response.data))
    .catch(err => {
      console.log(err);
      res.sendStatus(500);
    });
});


/**
 * Use this request type to get details about a particular bill, including actions taken 
 * and votes. The attributes house_passage_vote and senate_passage_vote are populated 
 * (with the date of passage) only upon successful passage of the bill. Bills before the 
 * 113th Congress (prior to 2013) have fewer attribute values than those from the 113th 
 * Congress onward, because the more recent bill data comes from the bulk data provided by 
 * the Government Publishing Office. Details for the older bills came from scraping Thomas.gov, 
 * the former congressional site of the Library of Congress.
 */
router.get('/specific/:billId', (req, res) => {
  let [billId, congress] = req.params.billId.split('-');  
  console.log('************', billId, '**********', congress );
  
  PropublicaAPI.get(`/${congress}/bills/${billId}.json`)
    .then(response => res.send(response.data))
    .catch(err => {
      console.log(err);
      res.sendStatus(500);
    });
});



module.exports = router;