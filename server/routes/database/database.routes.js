const express = require('express');
const router = express.Router();
const pool = require('../../modules/pool');

router.get('/bill-subjects/keyword', (req, res) => {
  // console.log(req.query);
  
  const { query, offset} = req.query;
  // For multiple words not inside double quotes:
  // Search for match to any
  if (query.split(' ').length > 1 && !query.startsWith('"')) {
    let searchWords = query.split(' ').reduce( (a, b, index) => {
      if (index == 0) {
        a = `$${index+1}`;
        return a;
      } 
      a += ` OR name ILIKE $${index+1}`;
      return a;
    }, '');
    const sqlText = `SELECT * FROM bill_subjects WHERE name ILIKE ${searchWords} OFFSET $${query.split(' ').length + 1}`;
    pool.query(sqlText, [...query.split(' ').map(word => '%'+word+'%'), offset])
      .then(response => {
        res.send(response.rows)
      })
      .catch(err => {
        console.log(err);
        res.sendStatus(500);
      })
  // For single keyword queries or ones bound inside double quotes
  } else {
    let q = query.replace(/[""]/g, '');   
    const sqlText = `SELECT * FROM bill_subjects WHERE name ILIKE $1`;    
    pool.query(sqlText, ['%'+q+'%'])
      .then(response => {
        res.send(response.rows)
      })
      .catch(err => {
        throw err;
      });
  }
  
});

router.get('/bill-subjects/:letter', (req, res) => {

});

router.get('/bill-subjects/:popularity/:offset', (req, res) => {

});

module.exports = router;