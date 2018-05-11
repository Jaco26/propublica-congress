const express = require('express');
const router = express.Router();
const axios = require('axios');
const pool = require('../../modules/pool');
// const database = require('../../services/database/database.service');

router.post('/members', async (req, res) => {
  let { id, chamber, first_name, last_name, in_office, party } = req.body;
  console.log('CHAMMMMMMBER', chamber);
  
  const sqlText = `INSERT INTO bookmarks (member_id, chamber, first_name, last_name, in_office, current_party)
  VALUES($1, $2, $3, $4, $5, $6);`;
  pool.query(sqlText, [id, chamber, first_name, last_name, in_office, party])
    .then(response => res.sendStatus(200))
    .catch(err => {
      console.log(err);
      res.sendStatus(500);
    });
});

router.get('/members', async (req, res) => {
  const sqlText = `SELECT * FROM bookmarks ORDER BY id;`;
  pool.query(sqlText, [])
    .then(response => res.send(response.rows))
    .catch(err => {
      console.log(err);      
      res.sendStatus(500);
    });
});

module.exports = router;