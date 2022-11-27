const express = require('express'),
      router = express.Router(),
      loginController = require('../controller/login');
      usersController = require('../controller/users');

router.post('/login', loginController.login);
router.post('/register', usersController.addUser);

module.exports = router;