const reviewsService = require('../services/reviews');
const createError = require('http-errors');

exports.getReviews = async (req, res) => {
   const review = await reviewsService.getReviews();
   res.set('Cache-Control', 'max-age=30'); // Using client cache
   res.json({success: true, data: review});
}

exports.getReviewById = async (req, res, next) => {
   let reviewId = parseInt(req.params.id); // We are sure here by using validator that we have a valid number, we can parseInt
   const reviews = await reviewsService.getReviewById(reviewId);
   if (reviews && reviews.length === 1) {
      res.json({success: true, data: reviews[0]});
   } else {
      next(createError(404, "no review found for this id"));
   }
}

exports.addReview = async (req, res, next) => {
   if (req.body && req.body.rating && req.body.ratingDate) {
      const reviewCreated = await reviewsService.addReview(req.body.rating, req.body.ratingDate);
      if (reviewCreated) {
         res.status(201).json({success: true, trackId: reviewCreated.trackid, userId:reviewCreated.userId});
      } else {
         next(createError(400, "Error when creating this review, verify your args"));
      }
   } else {
      next(createError(400, "Cannot add this review, make sure all args has been sent"));
   }
}

exports.deleteReviewById = async (req, res, next) => {
   if (req.params.id) {
      const id = parseInt(req.params.id);
      const reviews = await reviewsService.getReviewById(id);
      if (reviews.length === 1) {
         const nbOfDeletion = await reviewsService.deleteReviewById(id);
         if (nbOfDeletion === 1) {
            res.json({success: true});
         } else {
            next(createError(500, 'Unknown error when trying to delete this review, maybe it\'s already deleted'));
         }
      } else {
         next(createError(404, `The review with id '${id}' doesn't exists, it cannot be deleted`));
      }
   } else {
      next(createError(400, "The reviewId is required"));
   }
}

exports.updateReview = async (req, res, next) => {
    if (req.params.id) {
       const id = parseInt(req.params.id);
       const reviews = await reviewsService.getReviewById(id);
       if (reviews.length === 1) {
          const nbOfUpdate = await reviewsService.updateReview(id,req.body.rating, req.body.ratingDate);
          if (nbOfUpdate === 1) {
             res.json({success: true});
          } else {
             next(createError(500, 'Unknown error when trying to update this review, maybe it\'s already deleted'));
          }
       } else {
          next(createError(404, `The review with id '${id}' doesn't exists, it cannot be deleted`));
       }
    } else {
       next(createError(400, "The reviewId is required"));
    }
 }