// 调用events模块，获取EventEmitter对象
const EventEmitter = require('events').EventEmitter;
const emitter = new EventEmitter();

/**
 * 事件监听器: emitter.on(event, listener)
 * @param[String]: 事件名
 * @param[Function]: 事件回调函数
 * @return[EventEmitter]: 返回一个EventEmitter对象
 * ps: 监听器只能监听在其后触发的事件
 */

const isOn = emitter.on('bells', (arg1, arg2, arg3) => {
  console.log('第 1 个事件监听器：', arg1, arg2, arg3);
});

/**
 * 事件发射器/触发事件: emitter.emit(event, [...arg])
 * @param[String]: 事件名
 * @param[String | Object | Array .etc]: 监听器接收的参数
 * @return[Boolean]: 返回Boolean值，表示是否触发成功
 */
const isSuccess1 = emitter.emit('bells', 'jingle1', 'blink1', 'star1');
emitter.emit('bells', 'jingle2', 'blink2', 'star2');
emitter.emit('bells', 'jingle3', 'blink3', 'star3');

// 只能监听到后面emit的事件
emitter.on('bells', (arg1, arg2, arg3) => {
  console.log('第 2 个事件监听器：', arg1, arg2, arg3);
});

const isSuccess2 = emitter.emit('bells', 'jingle4', 'blink4', 'star4');

const isSuccess3 = emitter.emit('jingle bells', 'jingle4', 'blink4', 'star4');

console.log(isOn, isSuccess1, isSuccess2, isSuccess3);

