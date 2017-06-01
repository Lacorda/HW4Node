const sequelize = require('./1_new_Sequelize');


/**
 * http://sequelize.readthedocs.io/en/latest/api/sequelize/#definemodelname-attributes-options-model
 *
 * 定义模型，创建表格+定义表格字段
 * sequelize.define(name, attributes, options)
 * @param name[String]: 表格名字
 * @param attributes[Object]: 定义字段类型 type、数据库字段名 field 等
 * @param options[Object]:
 */
function define(name, attributes, options) {

}

const User = sequelize.define('user', {                              //定义数据模型
  username: Sequelize.STRING,
  birthday: Sequelize.DATE
});