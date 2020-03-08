var createError = require('http-errors');
var express = require('express');
var router = express.Router();

// catch 404 and forward to error handler
router.use(function(req, res, next) {
  next(createError(404));
});

// Error handler
router.use(function(err, req, res, next) {
  res.status(err.status || 500);
  res.send(err);
});

module.exports = router;