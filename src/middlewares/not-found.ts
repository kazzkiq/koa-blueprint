import Koa from "koa";

export default function MiddlewareNotFound(
  ctx: Koa.BaseContext,
  next: Koa.Next
) {
  if (ctx.status === 404 && !ctx.body) {
    ctx.status = 404;
    ctx.body = {
      status: 404,
      message: "Route not found.",
    };
  }
  return next();
}
