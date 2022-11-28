const express = require('express');
      router = express.Router();
const apicache = require('apicache');
      cache = apicache.middleware;
tracksController = require('../controller/tracks');
const auth = require('../controller/login')

router.get('/clear', tracksController.clearCache);
router.get('/',cache('5 minutes'), tracksController.getTracks);
router.get('/:id', tracksController.getTrackById);
router.post('/',auth.authMiddlewareAdmin, tracksController.addTrack);
router.put('/:id',auth.authMiddlewareAdmin, tracksController.updateTrack);
router.delete('/:id',auth.authMiddlewareAdmin, tracksController.deleteTrackById);

module.exports = router;