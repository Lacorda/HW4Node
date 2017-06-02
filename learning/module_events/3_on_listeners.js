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
emitter.on('bells',listener2);

/**
 * 返回指定事件的所有监听器：events.listeners(eventName)
 */
const listeners = emitter.listeners('bells');
listeners.forEach(listener => {
  console.log(listener.valueOf());
})

/**
 * 返回指定事件的监听器数量：emitter.listenerCount(eventName)
 */
const listenersCount = listeners.length;
console.log(listenersCount);
console.log(emitter.listenerCount('bells') === listenersCount);