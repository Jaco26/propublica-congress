const express = require('express');
const bodyParser = require('body-parser');
const morgan = require('morgan');
require('dotenv').config();

// Route includes
// Propublica Routes
const { 
  membersRouter, 
  billsRouter, 
  votesRouter,
  statementsRouter,
  committeesRouter  
} = require('./routes/propublica');

// My database routes
const myDatabaseRouter = require('./routes/database/database.routes')

const app = express();

// Use morgan and body-parser middleware
app.use(morgan('combined'));
app.use(bodyParser.json());

// Serve static files
app.use(express.static('dist'));

// Routes //
app.use('/api/congress/members', membersRouter);
app.use('/api/congress/bills', billsRouter);
app.use('/api/congress/votes', votesRouter);
app.use('/api/congress/statements', statementsRouter);
app.use('/api/congress/committees', committeesRouter);
app.use('/api/database', myDatabaseRouter);

const port = process.env.PORT || 8081
app.listen(port, () => console.log(`Server ready on port ${port}`))

app.get('/api/test', (req, res) => {
  res.send({success: 'YES!'});
});
