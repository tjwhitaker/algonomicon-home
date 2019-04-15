"use strict";

var _koa = _interopRequireDefault(require("koa"));

var _koaRouter = _interopRequireDefault(require("koa-router"));

var _koaLogger = _interopRequireDefault(require("koa-logger"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const app = new _koa.default();
const router = new _koaRouter.default();
app.use((0, _koaLogger.default)());
router.get('/', (ctx, next) => {
  ctx.body = 'Hello world!';
});
app.use(router.routes());
app.use(router.allowedMethods());
app.listen(8000);