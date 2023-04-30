import Koa from "koa";
import Router, { RouterContext } from "@koa/router";

import { ApiStatusEndpoints } from "@/endpoints/api-status";

const router = new Router();

router.get(
  "/",
  async (ctx: Koa.BaseContext & RouterContext, next: Koa.Next) => {
    /*
    Endpoint documentation:
    
    #swagger.tags = ['App']

    #swagger.responses[200] = {
      schema: {
        status: "API working.",
        server_date: "2023-04-30T06:35:51.766Z",
        cores: 6,
        cluster_id: 1,
      }
    }
  
    (end swagger docs)
    */

    return ApiStatusEndpoints.read.call(this, ctx, next);
  }
);

export default router.routes();
