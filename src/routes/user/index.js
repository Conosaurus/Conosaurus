var { User } = require('../../models');

var express = require('express');
var router = express.Router();

/* GET Users */
router.get('/', function(req, res, next) {
  var users = [];
  
  users.push(new User({name: "John W"}));
  users.push(new User({name: "Steph Z"}));
  users.push(new User({name: "Cat"}));
  users.push(new User({name: "Lily"}));
  
  res.send(users);
});

module.exports = router;
