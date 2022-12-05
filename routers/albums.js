const express = require('express'),
      router = express.Router(),
      albumsController = require('../controller/albums');
const apicache = require('apicache');
      cache = apicache.middleware;

router.get('/clear', albumsController.clearCache);
router.get('/',cache('5 minutes'), albumsController.getAlbums);
router.get('/:id', albumsController.getAlbumById);
router.post('/', albumsController.addAlbum);
//router.post('/',loginMiddleware, albumsController.addAlbum);
router.delete('/:id', albumsController.deleteAlbumById);
router.put('/:id', albumsController.updateAlbum);
//router.delete('/:id',loginMiddleware, albumsController.deleteAlbumById);

module.exports = router;