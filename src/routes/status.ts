import Router from "@koa/router";
import { ApiStatusEndpoints } from "../endpoints/api-status";

const router = new Router();

router.get("/", ApiStatusEndpoints.read);

export default router.routes();
