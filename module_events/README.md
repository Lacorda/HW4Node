事件模块：events
require('events');

events模块只提供了一个对象events.EventEmitter，EventEmitter 的核心是事件发射与事件监听器。

Node.js中大部分的模块，都继承自Event模块。

与DOM树上事件不同，不存在事件冒泡、逐层捕获等行为。


events模块自带事件：
newListener
removeListener


常用方法：
on | addListener
once
prependListener
prependOnceListener
--------
emit
--------
removeListener
removeAllListener
--------
setMaxListeners
--------
listenerCount


常用属性：
eventNames
listeners
defaultMaxListeners
