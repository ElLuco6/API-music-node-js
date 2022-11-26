const apicache = require('apicache')
      cache = apicache.middleware;
const express = require('express'),
      router = express.Router(),
      usersController = require('../controller/users');



router.get('/clear', usersController.clearCache);
router.get('/',cache('1 minute'), usersController.getUsers);
router.get('/:id', usersController.getUserById);
router.post('/', usersController.addUser);
router.put('/:id', usersController.updateUser);
router.delete('/:id', usersController.deleteUserById);
module.exports = router;