const express = require('express'),
      router = express.Router(),
      albumsController = require('../controller/albums');
      //loginMiddleware = require();

router.get('/', albumsController.getalbums);
router.get('/:id', albumsController.getBookById);
router.post('/', albumsController.addBook);
//router.post('/',loginMiddleware, albumsController.addBook);
router.delete('/:id', albumsController.deleteBookById);
//router.delete('/:id',loginMiddleware, albumsController.deleteBookById);

module.exports = router;