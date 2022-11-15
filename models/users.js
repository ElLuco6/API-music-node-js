const { DataTypes } = require('sequelize');

module.exports = (instance) => {
    return instance.define('user', {
        userId: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true,
            allowNull: false
        },
        userName: {
            type: DataTypes.STRING,
        },
        password: {
            type: DataTypes.STRING,
        },
        isAdmin: {
            type: DataTypes.BOOLEAN,
        }
    }, {
        timestamps: false
    });
}