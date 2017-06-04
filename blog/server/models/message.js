const Sequelize = require('sequelize');
const sequelize = require('./index');

// 创建message表
const Message = sequelize.define('message', {
  name: Sequelize.STRING,
  content: Sequelize.STRING,
  userId: {
    type: Sequelize.INTEGER,
    field: 'user_id'
  },
  userName: {
    type: Sequelize.STRING,
    field: 'user_name'
  },
  topicId: {
    type: Sequelize.INTEGER,
    field: 'topic_id'
  },
  topicName: {
    type: Sequelize.STRING,
    field: 'topic_name'
  },
  isRead: {
    type: Sequelize.BOOLEAN,
    field: 'is_read'
  }
});
Message.sync({force: true});