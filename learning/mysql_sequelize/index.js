const Sequelize = require('learning/mysql_sequelize/sequelize');

const seq = new Sequelize('blog', 'root', 'baigmygyi5186');

// const User = seq.define('users', {                              //定义数据模型
//   username: Sequelize.STRING,
//   birthday: Sequelize.DATE
// });
//
// seq.sync().then(function () {                                  //保存数据
//   return User.create({
//     username: 'bells',
//     birthday: new Date()
//   });
// }).then(function (data) {
//   console.log(data.get({
//     plain: true
//   }));
// });
const User = seq.define('user11', {
  firstName: {
    type: Sequelize.STRING,
    field: 'first_name' // 数据库里该字段的名称
  },
  lastName: {
    type: Sequelize.STRING
  }
}, {
  freezeTableName: false // 为true时，数据库表名同model名，为false时，数据库表名 = model名+s
});

// sequelize.sync() 将根据你的模型定义，创建任何丢失的表，如果 force: true 将先删除表，然后再创建.
User.sync({force: true}).then(function () {
  // Table created
  return User.create({
    firstName: 'John',
    lastName: 'Hancock'
  });
});