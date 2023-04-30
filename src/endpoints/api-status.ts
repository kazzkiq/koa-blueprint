import Koa from "koa";
import os from "os";
import cluster from "node:cluster";

import Router from "@koa/router";

const router = new Router();

router.get("/", (ctx: Koa.BaseContext, next: Koa.Next) => {
  // Endpoint documentation:
  //
  // #swagger.tags = ['App']
  // #swagger.responses[200] = {
  //   schema: {
  //      status: "API working.",
  //      server_date: "2023-04-30T06:35:51.766Z",
  //      cores: 6,
  //      cluster_id: 1,
  //    }
  //  }
  //
  // (end swagger docs)

  ctx.status = 200;
  ctx.body = {
    status: "API working.",
    server_date: new Date(),
    cores: os.cpus().length,
    cluster_id: cluster.worker?.id,
  };
  next();
});

export default router.routes();
