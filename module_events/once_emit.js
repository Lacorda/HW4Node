// 调用events模块，获取EventEmitter对象
const EventEmitter = require('events').EventEmitter;
const emitter = new EventEmitter();

/**
 * 一次性事件监听器: emitter.once(eventName, listener)
 * @param eventName[String]: 事件名
 * @param listener[Function]: 事件回调函数
 * @return [EventEmitter]: 返回一个EventEmitter对象
 * ps: 监听器只能监听在其后触发的事件
 * ps: 只监听第一个触发的事件
 */

const isOn = emitter.once('bells', (arg1, arg2, arg3) => {
  console.log('一次性事件监听器：', arg1, arg2, arg3);
});

/**
 * 事件发射器/触发事件: emitter.emit(eventName, [...args])
 * @param eventName[String]: 事件名
 * @param args[String | Object | Array .etc]: 监听器接收的参数
 * @return [Boolean]: 返回Boolean值，表示是否触发成功
 */
const isSuccess1 = emitter.emit('bells', 'jingle1', 'blink1', 'star1');  // true，只监听第一次触发的事件
const isSuccess2 = emitter.emit('bells', 'jingle2', 'blink2', 'star2');  // false，第二次触发事件不被监听

console.log(isSuccess1, isSuccess2);

