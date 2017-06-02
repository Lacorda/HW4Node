// const Koa = require('koa');
// const app = new Koa();
// const co = require('co');
// const router = require('./routes');
import app from 'koa';
import router from './routes';
import co from 'co';

/**
 * ...各种中间件
 * Koa 是一个 middleware framework, 它提供了 3 种不同类型的中间件写法
 * common function
 * async function（新增）
 * generatorFunction：使用 co 或 koa-convert 转过之后才可使用，不然会报warning
 */
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

/**
 * router
 */
app
  .use(router.routes())
  .use(router.allowedMethods());

/**
 * response
 */
app.use(ctx => {
  ctx.body = 'Hello Koa2';
});

app.listen(3002);