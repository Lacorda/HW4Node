## KOA
    基于 nodejs 的框架，用于搭建服务端接口、启动服务
    
### KOA2的使用
    const Koa = require('koa');
    const Router = require('koa-router'); // koa-router 做服务端接口
    const app = new Koa();
    const router = new Router();
    
    // 各种中间件
    app.use((ctx, next) => { // do something... });
    
    // 路由中间件
    app.use(router.routes())
       .use(router.allowedMethods());
       
    // response主体
    app.use((ctx, next) => {
        ctx.body = 'response data';
    })
       
    // 创建 HTTP 服务
    app.listen(9000);
    
## Koa-router的使用： https://github.com/alexmingoia/koa-router/tree/master/
    用于做服务端接口

### 在 koa 实例中使用
    const Koa = require('koa');
    const Router = require('koa-router'); // koa-router 做服务端接口
    const app = new Koa();
    const router = new Router();
    
    app.use(router.routes())
       .use(router.allowedMethods())
       
### Router 前缀
    const router = new Router({
        prefix: 'user'
    })
    
    router.get('/', ...)  // response to '/user'
    router.get('/:id', ...)  // response to '/user/:id'
    
### Router 请求方法：get|post|put|del|all
    router
      .get('/', function (ctx, next) {
        ctx.body = 'Hello World!';
      })
      .post('/users', function (ctx, next) {
        // ...
      })
      .put('/users/:id', function (ctx, next) {
        // ...
      })
      .del('/users/:id', function (ctx, next) {
        // ...
      })
      .all('/users/:id', function (ctx, next) {
        // ...
      });
      
#### Router命名、参数
    router.get('user', '/users/:id', function (ctx, next) {
     ctx._matchedRoute              // /users/id
     ctx._matchedRouteName          // user
     ctx.params                     // { id: xxx }
    });
    
    router.url('user', 3);
    // => "/users/3"
    
#### 指定路由 router.url(name, params) 
    router.get('user', '/users/:id', function (ctx, next) {
      // ...
    });
    
    router.url('user', 3);
    // => "/users/3"
    
    router.url('user', { id: 3 });
    // => "/users/3"
    
    router.use(function (ctx, next) {
      // redirect to named route
      ctx.redirect(ctx.router.url('sign-in'));
    })
    
#### 重定向：一般用于验证是否已经登录/授权
    router.redirect(源路由，目标路由，状态码30x);
    
    router.redirect('/login', 'sign-in');
    
    or
    
    router.all('/login', function (ctx) {
      ctx.redirect('/sign-in');
      ctx.status = 301;
    });
    
#### 项目中使用多路由
    // app.js
    const Koa = require('koa');
    const Router = require('./routers'); // 路由文件总入口
    const app = new Koa();
    
    app.use(router.routes())
       .use(router.allowedMethods())
       
       
    // 路由文件总入口：routers/index.js
    const Router = require('koa-router');
    const router = new Router();
    // 每个业务的路由请求文件
    const user = require('./user');
    const topic = require('./topic');
    const message = require('./message');
    
    router.use('/user', user.routes(), user.allowedMethods());
    router.use('/topic', topic.routes(), topic.allowedMethods());
    router.use('/message', message.routes(), message.allowedMethods());
    
    module.exports = router;
    
    
    // 业务请求文件：./user.js
    const Router = require('koa-router');
    const router = new Router();
    // 数据库操作文件：controller/xxx.js
    const controller = require('../controllers/user');
    const controllerOrder = require('../controllers/userOrder');
    const controllerAccount = require('../controllers/userAccount');
    
    router
    .get('/',controller.index)                  // response to '/user'
    .get('/order',controllerOrder.index)        // response to '/user/order'
    .get('/account',controllerAccount.index)    // response to '/user/account'
    .get('/myOrder',controllerOrder.myOrder);   // response to '/user/myOrder'
    
    module.exports = router;
    module.exports = router;
    
    
    // 数据库操作文件：controller/xxx.js
    const UserModel = require('../models/user.js')
    exports.index = () => {
        // 操作UserModel表
    }
    
    
    // 数据库文件：models/xxx.js
    // Sequelize
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    