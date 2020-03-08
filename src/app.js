// Run dotenv as early as possible
require('dotenv').config()
var express = require('express');

// API Middleware Setup
var app = express();
app.use(express.json());

// Service Routes
app.use('/api', require('./routes'));

app.listen(3000, function() {
  console.log("Listening on port 3000");
});

module.exports = app;
