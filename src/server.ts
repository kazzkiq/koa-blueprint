/* eslint-disable @typescript-eslint/no-var-requires */
import cors from "@koa/cors";
import Koa from "koa";
import bodyParser from "koa-bodyparser";
import { config } from "@/config";
import routes from "@/routes/_routes";
import cluster from "node:cluster";
import { cpus } from "node:os";
import process from "node:process";
import MiddlewareNotFound from "./middlewares/not-found";
import Environment from "./commons/environment";

const numCPUs = cpus().length;
const CPUsToUse = (() => {
  if (Environment.notProduction) {
    return 1;
  }

  if (numCPUs > 1) {
    return numCPUs - 1;
  }
  return 1;
})();

const app = new Koa();

function runServer() {
  app
    .use(
      bodyParser({
        jsonLimit: config.REQUEST_BODY_SIZE_LIMIT,
      })
    )
    .use(cors())

    .use(routes)

    .use(MiddlewareNotFound);

  if (process.env.NODE_ENV !== "test") {
    app.listen(config.PORT);

    if (Environment.notProduction) {
      console.log(`

    API is live: http://localhost:${config.PORT}

    `);
    }
  }
}

if (process.env.NODE_ENV === "test") {
  runServer();
} else if (cluster.isPrimary) {
  console.log(`Starting Cluster, workers: ${CPUsToUse}`);

  for (let i = 0; i < CPUsToUse; i++) {
    cluster.fork();
  }

  cluster.on("exit", (worker: any) => {
    console.log(`Worker ${worker.process.pid} died.`);
  });
} else {
  runServer();
}

export default app;
