const { DataTypes } = require('sequelize');

module.exports = (instance) => {
    return instance.define('track', {
        trackId: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            allowNull: false
        },
        userId: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            allowNull: false
        },
        rating: {
            type: DataTypes.INTEGER,
        },
        ratingDate: {
            type: DataTypes.DATE,
        }
    }, {
        timestamps: false
    });
}