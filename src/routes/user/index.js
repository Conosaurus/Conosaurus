const { UserService } = require('../../services');
const express = require('express');
const router = express.Router();

/* GET Users */
router.get('/', async function(req, res, next) {
  const service = new UserService();
  const users = await service.query();
  
  res.send(users);
});

module.exports = router;
