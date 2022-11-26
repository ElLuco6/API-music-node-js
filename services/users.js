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
    console.log(username, password, isAdmin)
    return db.users.create({username, password, isAdmin});
}

exports.updateUser = (id, username, password, isadmin) => {
    return db.users.update(
        {
          userName: username,
          password: password,
          isAdmin : isadmin
        },
        {
            where: { userId: id },
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