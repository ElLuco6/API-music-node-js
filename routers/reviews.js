const express = require('express'),
      router = express.Router(),
      reviewsController = require('../controller/reviews');
      //loginMiddleware = require();

router.get('/', reviewsController.getreviews);
router.get('/:id', reviewsController.getReviewById);
router.post('/', reviewsController.addReview);
//router.post('/',loginMiddleware, reviewsController.addReview);
router.delete('/:id', reviewsController.deleteReviewById);
//router.delete('/:id',loginMiddleware, reviewsController.deleteReviewById);

module.exports = router;