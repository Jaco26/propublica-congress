const express = require('express');
const bodyParser = require('body-parser');
const morgan = require('morgan');
require('dotenv').config();

// Route includes



const app = express();

app.use(morgan('combined'));
app.use(bodyParser.json());


// Routes //

