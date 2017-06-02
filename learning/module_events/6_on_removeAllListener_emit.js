const EventEmitter = require('events').EventEmitter;
const emitter = new EventEmitter();

// 定义监听器
const listener1 = function (arg1, arg2) {
  console.log('listener 1 监听器：', arg1, arg2);
};
const listener2 = function (arg1, arg2) {
  console.log('listener 2 监听器：', arg1, arg2);
};
const listener3 = function (arg1, arg2) {
  console.log('listener 3 监听器：', arg1, arg2);
};

// 注册事件bells，并绑定监听器listener1、listener2
emitter.on('bells',listener1);
emitter.on('bells',listener2);

// 注册事件jingle，并绑定监听器listener2、listener3
emitter.on('jingle',listener2);
emitter.on('jingle',listener3);

emitter.emit('bells', 'a', 'b');
emitter.emit('jingle', 'b', 'c');

/**
 * 移除指定事件的所有监听器：emitter.removeAllListeners([eventName]);
 * @param eventName[String]: 事件名，可以为空，不传参数时，表示移除所有事件的所有的监听器
 */
emitter.removeAllListeners('bells');

// 移除bells的所有监听器之后，再emit bells无法触发
emitter.emit('bells', 'a', 'b');
emitter.emit('jingle', 'b', 'c');