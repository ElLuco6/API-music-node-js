const express = require('express');
      router = express.Router();
const apicache = require('apicache');
      cache = apicache.middleware;
tracksController = require('../controller/tracks');
const auth = require('../controller/login')

router.get('/clear', tracksController.clearCache);
router.get('/',cache('5 minutes'), tracksController.getTracks);
router.get('/:id', tracksController.getTrackById);
//router.get('/:id/review', reviewsController.getReviewById);
router.post('/', tracksController.addTrack);
//router.post('/',loginMiddleware, tracksController.addTrack);
router.put('/:id', tracksController.updateTrack);
router.delete('/:id', tracksController.deleteTrackById);
//router.delete('/:id',loginMiddleware, tracksController.deleteTrackById);

module.exports = router;