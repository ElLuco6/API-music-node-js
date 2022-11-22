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

exports.addUser = (username, password, isAdmin) => {
    return db.users.create({username, password, isAdmin});
}

exports.updateUser = (username, password, isAdmin) => {
    return db.users.update(
        {
          username: username,
          password: password,
          isAdmin : isAdmin
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