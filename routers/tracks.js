const express = require('express');
      router = express.Router();
const apicache = require('apicache');
      cache = apicache.middleware;
tracksController = require('../controller/tracks');

router.get('/clear', tracksController.clearCache);
router.get('/',cache('1 minute'), tracksController.getTracks);
router.get('/:id', tracksController.getTrackById);
router.post('/', tracksController.addTrack);
router.put('/:id', tracksController.updateTrack);
router.delete('/:id', tracksController.deleteTrackById);

module.exports = router;