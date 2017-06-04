const UserModel = require('../models/user');

const UserController = function () {
};
UserController.prototype.create = function (data, fn) {
  console.log(ctx);
  UserModel.create(data).then(fn);
};

const userController = new UserController();

module.exports = userController;