const Router = require('koa-router');
const router = new Router();

const User = require('../controllers/user');

router.post('/sign-in', User.create);

module.exports = router;