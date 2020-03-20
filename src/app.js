// Run dotenv as early as possible
require('dotenv').config()
const express = require('express');

const app = express();

// Middleware Setup
app.use(express.json());

// Routes
app.use('/', express.static(__dirname + '/client'));
app.use('/api', require('./routes'));

app.listen(3000, function() {
  console.log("Listening on port 3000");
});

module.exports = app;
