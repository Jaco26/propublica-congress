const express = require('express');
const router = express.Router();
const { transporter, helperOptions } = require('../../modules/transporter');

router.post('/submit/comment', (req, res) => {
  const {email, message} = req.body
  const options = helperOptions(message, email);
  transporter.sendMail(options, (err, info) => {
    if (err) {
      console.log(err);
      res.sendStatus(403);
    } else {
      res.sendStatus(200);
    }
  });
});

module.exports = router;
