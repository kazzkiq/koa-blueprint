import { RouterContext } from "@koa/router";
import Koa from "koa";
import os from "os";
import cluster from "node:cluster";

export const ApiStatusEndpoints = {
  async read(ctx: Koa.Context & RouterContext, next: Koa.Next) {
    ctx.status = 200;
    ctx.body = {
      status: "API working.",
      server_date: new Date(),
      cores: os.cpus().length,
      cluster_id: cluster.worker?.id,
    };
    next();
  },
};
