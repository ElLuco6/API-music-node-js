const usersService = require('../services/users');
const createError = require('http-errors');

exports.getUsers = async (req, res) => {
   const user = await usersService.getUsers();
   res.set('Cache-Control', 'max-age=30'); // Using client cache
   res.json({success: true, data: users});
}

exports.getUserById = async (req, res, next) => {
   let userId = parseInt(req.params.id); // We are sure here by using validator that we have a valid number, we can parseInt
   const users = await usersService.getUserById(userId);
   if (users && users.length === 1) {
      res.json({success: true, data: users[0]});
   } else {
      next(createError(404, "no user found for this id"));
   }
}

exports.addUser = async (req, res, next) => {
   if (req.body && req.body.title && req.body.date) {
      const userCreated = await usersService.addUser(req.body.userName, req.body.password, req.body.isAdmin);
      if (userCreated) {
         res.status(201).json({success: true, userId: userCreated.id});
      } else {
         next(createError(400, "Error when creating this user, verify your args"));
      }
   } else {
      next(createError(400, "Cannot add this user, make sure all args has been sent"));
   }
}

exports.deleteUserById = async (req, res, next) => {
   if (req.params.id) {
      const id = parseInt(req.params.id);
      const users = await usersService.getUserById(id);
      if (users.length === 1) {
         const nbOfDeletion = await usersService.deleteUserById(id);
         if (nbOfDeletion === 1) {
            res.json({success: true});
         } else {
            next(createError(500, 'Unknown error when trying to delete this user, maybe it\'s already deleted'));
         }
      } else {
         next(createError(404, `The user with id '${id}' doesn't exists, it cannot be deleted`));
      }
   } else {
      next(createError(400, "The userId is required"));
   }
}

exports.updateUser = async (req, res, next) => {
    if (req.params.id) {
       const id = parseInt(req.params.id);
       const users = await usersService.getUserById(id);
       if (users.length === 1) {
          const nbOfUpdate = await usersService.updateUser(id,req.body.userName, req.body.password, req.body.isAdmin);
          if (nbOfUpdate === 1) {
             res.json({success: true});
          } else {
             next(createError(500, 'Unknown error when trying to update this user, maybe it\'s already deleted'));
          }
       } else {
          next(createError(404, `The user with id '${id}' doesn't exists, it cannot be deleted`));
       }
    } else {
       next(createError(400, "The userId is required"));
    }
 }