const EventEmitter = require('events').EventEmitter;
const emitter = new EventEmitter();

// 定义监听器
const listener1 = function (arg1, arg2) {
  console.log('listener 1 监听器：', arg1, arg2);
};
const listener2 = function (arg1, arg2) {
  console.log('listener 2 监听器：', arg1, arg2);
};

// 注册事件，并绑定监听器 listener1
emitter.on('bells', listener1);
// 注册事件，并绑定监听器 listener2
emitter.on('bells', listener2);

emitter.emit('bells', 'jingle', 'star');

/**
 * 移到事件的监听器： emitter.removeListener(eventName, listener)
 * @param eventName[String]: 事件名
 * @param listener[Function]: 监听器
 */
emitter.removeListener('bells', listener1);

emitter.emit('bells', 'jingle', 'blink');   // 移除监听器listener1后，触发bells事件，只有listener2能监听到