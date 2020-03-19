// Run dotenv as early as possible
require('dotenv').config()
const express = require('express');

// API Middleware Setup
const app = express();
app.use(express.json());

// Service Routes
app.use('/api', require('./routes'));

app.listen(3000, function() {
  console.log("Listening on port 3000");
});

module.exports = app;
