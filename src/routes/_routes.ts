import Router from "@koa/router";
import status from "./status";

const routes = new Router();

routes
  // All routes go here.
  .use(status);

export default routes.routes();
