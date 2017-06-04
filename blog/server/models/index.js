const Sequelize = require('sequelize');

// 连接数据库
const sequelize = new Sequelize('blog', 'root', 'baigmygyi5186', {
  dialect: 'mysql',
  host: 'localhost',
  port: 3306,
  define: {
    underscored: true
  }
});

module.exports = sequelize;
