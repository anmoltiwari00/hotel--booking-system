var express = require('express');
var router = express.Router();

var user = require('../controllers/userController');

//create user
router.post('/v0/user', user.create);

//update user
router.put('/v0/user/:id', user.update);

//delete user
router.delete('/v0/user/:id', user.delete);

module.exports = router;
