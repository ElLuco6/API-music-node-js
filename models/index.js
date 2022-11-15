const { Sequelize } = require('sequelize');
const dbConfig = require('../db.config');

const instance = new Sequelize(dbConfig.database, dbConfig.username, dbConfig.password, {
        host: dbConfig.hostname,
        dialect: "mysql"
});

module.exports = {
    instance,
    albums: require('./albums')(instance),
    tracks: require('./tracks')(instance),
    users: require('./users')(instance),
    reviews: require('./reviews')(instance)
};

// Define associations between models
instance.models.review.belongsTo(instance.models.user);
instance.models.review.belongsTo(instance.models.track);