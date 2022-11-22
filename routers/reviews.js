const express = require('express'),
      router = express.Router(),
      reviewsController = require('../controller/reviews');
      //loginMiddleware = require();

router.get('/', reviewsController.getReviews);
router.get('/:id', reviewsController.getReviewById);
router.post('/', reviewsController.addReview);
router.put('/', reviewsController.updateReview);
//router.post('/',loginMiddleware, reviewsController.addReview);
router.delete('/:id', reviewsController.deleteReviewById);
//router.delete('/:id',loginMiddleware, reviewsController.deleteReviewById);

module.exports = router;