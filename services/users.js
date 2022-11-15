//const reviewsService = require('./reviews');
const db = require('../models');

exports.getUsers = () => {
    return db.users.findAll();
}

exports.getUserById = (id) => {
    return db.users.findAll({
        where: {
            id
        }
    });
}

exports.addUser = (userName, password, isAdmin) => {
    return db.users.create({userName, password, isAdmin});
}

exports.updateUser = (userName, password, isAdmin) => {
    return db.users.update(
        {
          username: userName,
          password: password,
          isadmin : isAdmin
        }
      );
}

exports.deleteUserById = (id) => {
    return db.users.destroy({
        where: {
            id
        }
    });
}