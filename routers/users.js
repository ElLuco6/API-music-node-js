const express = require('express'),
      router = express.Router(),
      usersController = require('../controller/users');


router.post('/', usersController.addUser);
router.put('/', usersController.updateUser);

module.exports = router;