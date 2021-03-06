const Sequelize = require('sequelize');
const sequelize = require('./index');

// 创建users表
const User = sequelize.define('user', {
  userName: {
    type: Sequelize.STRING,
    field: 'user_name'
  },
  password: Sequelize.STRING,
  sex: Sequelize.BOOLEAN,
  email: Sequelize.STRING,
  telephone: Sequelize.STRING,
  avatar: Sequelize.STRING
});
User.sync();

module.exports = User;