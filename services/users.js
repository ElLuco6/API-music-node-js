//const reviewsService = require('./reviews');
const db = require('../models');
const bcrypt = require('bcrypt');

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
    console.log(userName, password, isAdmin)
    bcrypt.hash(password, 15, function(err, hashed) {
        console.log(hashed)
        return db.users.create({userName, hashed  , isAdmin});
    })
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