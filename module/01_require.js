/*
 一个Node.js文件就是一个模块，这个文件可能是Javascript代码、JSON或者编译过的C/C++扩展。
 重要的两个对象：
 require是从外部获取模块
 exports是把模块接口公开
 */
let counter = require('./01');

console.log('第一次调用模块[01]');

counter.seOutputVal(10);               // 设置从10开始计数
counter.setIncrement(10);              // 设置增量为10

counter.printNextCount();
counter.printNextCount();
counter.printNextCount();
counter.printNextCount();

/*
 require多次调用同一模块不会重复加载
 */
counter = require('./01');

console.log('第二次调用模块[01]');
counter.printNextCount();