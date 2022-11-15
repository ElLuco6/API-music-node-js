const { DataTypes } = require('sequelize');

module.exports = (instance) => {
    return instance.define('album', {
        albumId: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true,
            allowNull: false
        },
        albumName: {
            type: DataTypes.STRING,
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