import { test } from "uvu";
import assert from "uvu/assert";
import { config } from "../src/config";

export function url(path: string) {
  return `http://localhost:${config.PORT}${path}`;
}

export function isServerReady(resolveFn?: (value: unknown) => void) {
  // eslint-disable-next-line no-async-promise-executor
  return new Promise((resolve) => {
    const recursive = () => setTimeout(() => isServerReady(resolve), 200);

    fetch(url("/"))
      .then((res) => {
        if (res.status === 200) {
          if (resolveFn) {
            resolveFn(true);
          } else {
            resolve(true);
          }
        }
      })
      .catch(() => {
        recursive();
      });
  });
}

test("/ ~> Dev server must be up.", async () => {
  const serverReady = await isServerReady();
  assert.is(serverReady, true);
});

test.run();
