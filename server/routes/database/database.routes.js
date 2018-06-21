const express = require('express');
const router = express.Router();
const pool = require('../../modules/pool');

router.get('/bill-subjects/keyword', (req, res) => {
  const { query, offset} = req.query;
  // For multiple words not inside double quotes: Search for match to any
  if (query.split(' ').length > 1 && !query.startsWith('"')) {
    let searchWords = query.split(' ').reduce( (a, b, index) => {
      index == 0 
        ? a = `$${index + 1}`
        : a += ` OR name ILIKE $${index + 1}`;
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
    const sqlText = `SELECT * FROM bill_subjects WHERE name ILIKE $1;`;    
    pool.query(sqlText, ['%'+q+'%'])
      .then(response => {
        res.send(response.rows)
      })
      .catch(err => {
        console.log(err);
        res.sendStatus(500);
      });
  }
  
});

router.get('/bill-subjects/:letter', (req, res) => {
  const {letter} = req.params;
  const sqlText = `SELECT * FROM bill_subjects WHERE name ILIKE $1;`;
  pool.query(sqlText, [letter+'%'])
    .then(response => {
      res.send(response.rows);
    })
    .catch(err => {
      console.log(err);
      res.sendStatus(500);
    });
});

router.get('/bill-subjects/order-by/:order/:offset', (req, res) => {
  const {order, offset} = req.params;  
  const sqlText = order == 'desc' 
    ? 'SELECT * FROM bill_subjects ORDER BY number_of_bills DESC LIMIT 20 OFFSET $1;'
    : 'SELECT * FROM bill_subjects ORDER BY number_of_bills ASC LIMIT 20 OFFSET $1;'
  pool.query(sqlText, [offset])
    .then(response => {
      res.send(response.rows)
    })
    .catch(err => {
      console.log(err);
      res.sendStatus(500);
    });
});

module.exports = router;