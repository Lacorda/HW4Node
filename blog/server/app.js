const Koa = require('koa');
const app = new Koa();
// const co = require('co');
const router = require('./routes');
const bodyParser = require('koa-bodyparser');  // request body 解析
const cors = require('koa-cors');              // CORS跨域

/**
 * ...各种中间件
 * Koa 是一个 middleware framework, 它提供了 3 种不同类型的中间件写法
 * common function
 * async function（新增）
 * generatorFunction：使用 co 或 koa-convert 转过之后才可使用，不然会报warning
 */
/*
 app.use((ctx, next) => {
 const start = new Date();
 return next().then(() => {
 const ms = new Date() - start;
 console.log(`common_${ctx.method} ${ctx.url} - ${ms}ms`)
 })
 });

 app.use(async (ctx, next) => {
 const start = new Date();
 await next();
 const ms = new Date() - start;
 console.log(`async_${ctx.method} ${ctx.url} - ${ms}ms`);
 });

 app.use(co.wrap(function *(ctx, next) {
 const start = new Date();
 yield next();
 const ms = new Date() - start;
 console.log(`generator_${ctx.method} ${ctx.url} - ${ms}ms`);
 }));
 */
app.use(bodyParser());

app.use(cors());

/**
 * router中间件
 */
app
  .use(router.routes())
  .use(router.allowedMethods());

/**
 * response
 */
/*
 app.use(ctx => {
 ctx.body = 'Hello Koa2';
 });
 */

app.listen(3002);