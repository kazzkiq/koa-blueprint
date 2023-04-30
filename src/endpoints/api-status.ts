import Koa from "koa";
import os from "os";
import cluster from "node:cluster";

export const ApiStatusEndpoints = {
  read(ctx: Koa.BaseContext, next: Koa.Next) {
    ctx.body = {
      status: "API working.",
      server_date: new Date(),
      cores: os.cpus().length,
      cluster_id: cluster.worker?.id,
    };
    next();
  },
};
