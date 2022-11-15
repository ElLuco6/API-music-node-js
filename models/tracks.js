const { DataTypes } = require('sequelize');

module.exports = (instance) => {
    return instance.define('track', {
        trackId: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true,
            allowNull: false
        },
        trackName: {
            type: DataTypes.STRING,
        },
        author: {
            type: DataTypes.STRING,
        },
        fromAlbum: {
            type: DataTypes.STRING,
        },
        realeaseDate: {
            type: DataTypes.DATE,
        }
    }, {
        timestamps: false
    });
}