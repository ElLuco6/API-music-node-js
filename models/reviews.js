const { DataTypes } = require('sequelize');
const tracks = require('../models/tracks');
const users = require('../models/users');
module.exports = (instance) => {
    return instance.define('review', {
        trackId: {
            references: {
                model: tracks.tracks, 
                key: 'trackId'
              },
            type: DataTypes.INTEGER,
            foreignKey: true,
            allowNull: false
        },
        userId: {
            references: {
                model: users.users, 
                key: 'userId'
              },
            type: DataTypes.INTEGER,
            foreignKey: true,
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
