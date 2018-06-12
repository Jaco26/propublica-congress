const express = require('express');
const router = express.Router();
const nodemailer = require('nodemailer');

let transporter = nodemailer.createTransport({
  service: 'gmail',
  secure: false,
  port: 25,
  auth: {
    user: 'knowthycongress631@gmail.com',
    pass: process.env.EMAIL_PASSWORD,
  },
  tls: {
    rejectUnauthorized: false,
  }
});

router.post('/submit/comment', (req, res) => {
  const {email, message} = req.body
  const helperOptions = {
    from: 'knowthycongress631@gmail.com',
    to: 'knowthycongress631@gmail.com',
    subject: 'KnowThyCongress Comment',
    text: message + ' <FROM> ' + email,
  }
  transporter.sendMail(helperOptions, (err, info) => {
    if (err) {
      console.log(err);
      res.sendStatus(403);
    } else {
      res.sendStatus(200);
    }
  });
});

module.exports = router;
