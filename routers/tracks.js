const express = require('express'),
      router = express.Router(),
      tracksController = require('../controller/tracks');
      //loginMiddleware = require();

router.get('/', tracksController.getTracks);
router.get('/:id', tracksController.getTrackById);
//router.get('/:id/review', reviewsController.getReviewById);
router.post('/', tracksController.addTrack);
//router.post('/',loginMiddleware, tracksController.addTrack);
router.put('/:id', tracksController.updateTrack);
router.delete('/:id', tracksController.deleteTrackById);
//router.delete('/:id',loginMiddleware, tracksController.deleteTrackById);

module.exports = router;