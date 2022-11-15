const { DataTypes } = require('sequelize');

module.exports = (instance) => {
    return instance.define('track', {
        albumId: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true,
            allowNull: false
        },
        albumName: {
            type: DataTypes.STRING,
            primaryKey: true,
        },
        author: {
            type: DataTypes.STRING,
        },
        realeaseDate: {
            type: DataTypes.DATE,
        }
    }, {
        timestamps: false
    });
}