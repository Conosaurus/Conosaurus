var User = require('../models/User');

var express = require('express');
var router = express.Router();

/* GET */
router.get('/', function(req, res, next) {
  res.send('Hello world!');
});

/* GET Users */
router.get('/user', function(req, res, next) {
  var users = [];
  
  users.push(new User({name: "John W"}));
  users.push(new User({name: "Steph Z"}));
  users.push(new User({name: "Cat"}));
  users.push(new User({name: "Lily"}));
  
  res.send(users);
});

module.exports = router;
