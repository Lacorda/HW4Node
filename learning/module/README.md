# Node.js模块分三种：
## 核心模块

## 自定义模块，即文件模块，分三种：
    # js文件
    # json文件
    # node文件(编译后的C/C++扩展文件)
##### 模块优先级：核心模块 > 文件模块（js文件 > json文件 > node文件）

## node.js 使用 commonjs 模块导入导出
    # module.exports： 唯一导出接口
    # required 获取
### module.exports Vs exports
<font color=red>module.exports 才是node.js的唯一导出接口，exports实际上只是module.exports的引用地址</font>
    
    // file path: node/lib/module.js
    // ...
    global.require = require;
    global.exports = self.exports;
    global.__filename = filename;
    global.__dirname = dirname;
    global.module = self;
    
    return runInThisContext(content, filename, true);
    // ...
# 总结：
#####     exports 是 global 对象的属性，是 module.exports 的引用地址；
#####     给exports直接赋值时，exports就不再指向module.exports，所以exports !== module.exports
#####     为了保证 exports 永远指向 module.exports，或对 exports 直接赋值，应该写成这样：

    exports = module.exports = someObject; // 直接赋值exports
    exports.sth = sobj; // 非直接赋值exports
    
#####     1.同一个方法/属性不要分别定义module.exports和exports，module.exports会覆盖exports
#####     2.NodeJs开发者建议： 导出对象用module.exports，导出多个方法和变量用exports
