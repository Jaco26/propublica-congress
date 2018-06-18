const nodemailer = require('nodemailer');

const transporter = nodemailer.createTransport({
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

const helperOptions = (message, email) => ({
  from: 'knowthycongress631@gmail.com',
  to: 'knowthycongress631@gmail.com',
  subject: 'KnowThyCongress Comment',
  text: message + ' <FROM> ' + email,
})

module.exports = {
  transporter,
  helperOptions,
}