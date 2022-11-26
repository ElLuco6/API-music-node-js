const express = require('express'),
      router = express.Router(),
      usersController = require('../controller/users');



router.get('/', usersController.getUsers);
router.get('/:id', usersController.getUserById);
router.post('/', usersController.addUser);
router.put('/:id', usersController.updateUser);
router.delete('/:id', usersController.deleteUserById);
module.exports = router;