const Sequelize = require('sequelize');
const sequelize = require('./index');

// 创建topic表
const Topic = sequelize.define('topic', {
  name: Sequelize.STRING,
  forum: Sequelize.STRING,
  content: Sequelize.STRING,
  scanTimes: {
    type: Sequelize.INTEGER,
    field: 'scan_times'
  },
  userId: {
    type: Sequelize.INTEGER,
    field: 'user_id'
  },
  userName: {
    type: Sequelize.STRING,
    field: 'user_name'
  },
  isTop: {
    type: Sequelize.BOOLEAN,
    field: 'is_top'
  },
  isCommit: {
    type: Sequelize.BOOLEAN,
    field: 'is_commit'
  }
});
Topic.sync({force: true});