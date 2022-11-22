const express = require('express'),
      router = express.Router(),
      albumsController = require('../controller/albums');
      //loginMiddleware = require();

router.get('/', albumsController.getAlbums);
router.get('/:id', albumsController.getAlbumById);
router.post('/', albumsController.addAlbum);
//router.post('/',loginMiddleware, albumsController.addAlbum);
router.delete('/:id', albumsController.deleteAlbumById);
//router.delete('/:id',loginMiddleware, albumsController.deleteAlbumById);

module.exports = router;