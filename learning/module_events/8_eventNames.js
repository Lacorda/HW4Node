const EventEmitter = require('events').EventEmitter;
const emitter = new EventEmitter();

// 定义监听器
const listener1 = function (arg1, arg2) {
  console.log('listener 1 监听器：', arg1, arg2);
};
const listener2 = function (arg1, arg2) {
  console.log('listener 2 监听器：', arg1, arg2);
};

// 注册事件bells，并绑定监听器listener1、listener2
emitter.on('bells',listener1);
emitter.on('jingle bells',listener2);

/**
 * 获取所有事件名：emitter.eventNames
 */
console.log(emitter.eventNames());

