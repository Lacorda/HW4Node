const EventEmitter = require('events').EventEmitter;
const emitter = new EventEmitter();

// 定义监听器
const listener1 = function (arg1, arg2) {
  console.log('listener 1 监听器：', arg1, arg2);
};
const listener2 = function (arg1, arg2) {
  console.log('listener 2 监听器：', arg1, arg2);
};

/**
 * events模块自带事件：
 *    newListener: 当事件 绑定 新监听器时触发回调，参数：eventName, listener
 */
emitter.on('newListener', (eventName, listener) => {
  console.log('绑定了新监听器：',eventName, listener.valueOf());
});

/**
 * events模块自带事件：
 *    removeListener: 当事件 移除 监听器时触发，参数：eventName, listener
 *    ps: 绑定一个removeListener事件监听器，也会触发 newListener
 */
emitter.on('removeListener', (eventName, listener) => {
  console.log('移除了新监听器：',eventName, listener.valueOf());
});

emitter.on('bells', listener1);
emitter.on('bells', listener2);

emitter.removeListener('bells', listener1);
