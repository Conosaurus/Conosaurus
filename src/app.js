var createError = require('http-errors');
var express = require('express');

var indexRouter = require('./routes/index');

var app = express();
app.use(express.json());

app.use('/api', indexRouter);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // render the error page
  res.status(err.status || 500);
  res.send(err);
});

app.listen(3000, function() {
  console.log("Listening on port 3000");
});

module.exports = app;
