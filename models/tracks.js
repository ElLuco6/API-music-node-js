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
            primaryKey: true,
        },
        fromAlbum: {
            type: DataTypes.INTEGER,
        },
        realeaseDate: {
            type: DataTypes.DATE,
        }
    }, {
        timestamps: false
    });
}