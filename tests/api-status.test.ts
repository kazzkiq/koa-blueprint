import { test } from "uvu";
import assert from "uvu/assert";
import { url } from "./_server.test";

test("/ ~> must return status 200", async () => {
  const req = await fetch(url("/"));
  assert.is(req.status, 200);
});

test.run();
