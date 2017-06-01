const Sequelize = require('');

/**
 * http://sequelize.readthedocs.io/en/latest/api/sequelize/#new-sequelizedatabase-usernamenull-passwordnull-options
 *
 * 创建Sequelize实例, 建立数据库连接
 * new Sequelize(database, username, password, options);
   * @param database[String]: 数据库名字
   * @param username[String]: 用户名
   * @param password[String]: 密码
   * @param options[Object]:  数据库所有字段统一配置，常用
   * {
     * host:
     * port:
     * dialect:
     * protocol:
     * define:
     * query:
     * set:
     * sync:
     * timezone:
     * pool:
     * typeValidation:
   * }
 *
 * 使用uri
 * var sequelize = new Sequelize('postgres://user:pass@example.com:5432/dbname');)
 */
const sequelize = new Sequelize('blog', 'root', 'baigmygyi5186');

module.exports = sequelize;