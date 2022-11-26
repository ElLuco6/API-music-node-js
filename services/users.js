//const reviewsService = require('./reviews');
const db = require('../models');

exports.getUsers = () => {
    return db.users.findAll();
}

exports.getUserById = (userId) => {
    return db.users.findAll({
        where: {
            userId
        }
    });
}

exports.addUser = (userName, password, isAdmin) => {
    return db.users.create({userName, password, isAdmin});
}

exports.updateUser = (userId ,userName, password, isAdmin) => {
    return db.users.update(
        {
          userName: userName,
          password: password,
          isAdmin : isAdmin
        },
        {
            where: { userId: userId },
        }
      );
}

exports.deleteUserById = (userId) => {
    return db.users.destroy({
        where: {
            userId
        }
    });
}