const db = require('../models');

exports.getReviews = () => {
    return db.reviews.findAll();
}

exports.getReviewById = (reviewId) => {
    return db.reviews.findAll({
        where: {
            reviewId
        }
    });
}

exports.addReview = (trackId, userId, rating, ratingDate) => {
    return db.reviews.create({trackId, userId, rating, ratingDate});
}

exports.deleteReviewById = (trackId, userId) => {
    return db.reviews.destroy({
        where: {
            trackId,
            userId
        }
    });
}