const EventEmitter = require('events').EventEmitter;
const emitter = new EventEmitter();

/**
 * 设置监听器的最大上限，防止内存泄漏: emitter.setMaxListeners(n);
 * @param n[Number]: 上限值
 * ps:
 *    seMaxListeners必须写在注册事件之前才有效
 *    若不设置setMaxListeners，默认上限为10，当事件超过10个监听器时，会报Warning
 *    emitter.defaultMaxListeners = n: 也是设置监听器的最大上限，但优先级不及 emitter.setMaxListeners(n)
 */
emitter.setMaxListeners(11);

for (let i = 0; i < 11; i++) {
  emitter.on('bells', (arg1, arg2) => {
    console.log(`第${i + 1}个监听器`, arg1, arg2);
  })
}

emitter.emit('bells', 'jingle', 'star');