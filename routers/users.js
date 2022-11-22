const express = require('express'),
      router = express.Router(),
      usersController = require('../controller/users');



router.get('/', usersController.getUsers);
router.get('/:id', usersController.getUsers);
router.post('/', usersController.addUser);
router.put('/', usersController.updateUser);

module.exports = router;