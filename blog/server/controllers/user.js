const UserModel = require('../models/user');

const UserController = function () {
};
UserController.prototype.create = function (ctx, fn) {
  // ctx.response.status = 200;
  const data = ctx.request.body;
  UserModel.create(data).then(fn);
};

const userController = new UserController();

module.exports = userController;