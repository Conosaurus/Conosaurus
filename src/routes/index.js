var express = require('express');
var errorRouter = require('./error');
var userRouter = require('./user');

// Instantiate and apply sub-routers
var router = express.Router();
router.use('/user', userRouter);

// Error handler must come last
router.use(errorRouter);

module.exports = router;
