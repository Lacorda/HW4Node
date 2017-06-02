const router = require('koa-router')();
import User from '../controllers/user'

router.use('/user', User.index);