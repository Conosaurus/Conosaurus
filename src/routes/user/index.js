const { UserService } = require('../../services');
const createError = require('http-errors');
const express = require('express');
const router = express.Router();

/* GET Users */
router.get('/', async function(req, res, next) {
  const service = new UserService();
  const users = await service.query();
  
  res.send(users);
});

/* GET User */
router.get('/:id', async function(req, res, next) {
  const service = new UserService();
  service.get(req.params.id).then(user => {
    let response = user;
    
    if (user === undefined) {
      response = createError(404);
    }
    
    res.send(response);      
  }).catch(next);
});

module.exports = router;
