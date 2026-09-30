import test from "node:test";
import assert from "node:assert/strict";
import fs from "node:fs";
import ts from "typescript";
import { createRequire } from "node:module";
const compiled = ts.transpileModule(
  fs.readFileSync("src/app/api/subscribe/route.ts", "utf8"),
  {
    compilerOptions: {
      module: ts.ModuleKind.CommonJS,
      target: ts.ScriptTarget.ES2022,
    },
  },
).outputText;
const module = { exports: {} };
new Function("require", "module", "exports", compiled)(
  createRequire(import.meta.url),
  module,
  module.exports,
);
const { POST } = module.exports;
const valid = {
  firstName: "Reader",
  email: "reader@example.com",
  consent: "on",
  website: "",
};
function request(data, origin = "https://rentalcashflowlab.com") {
  return new Request("https://rentalcashflowlab.com/api/subscribe", {
    method: "POST",
    headers: { "Content-Type": "application/json", Origin: origin },
    body: JSON.stringify(data),
  });
}
test("signup validation, unconfigured mode, and provider handling", async () => {
  const oldKey = process.env.MAILERTLITE_API_KEY,
    oldGroup = process.env.MAILERTLITE_GROUP_ID,
    oldFetch = globalThis.fetch;
  try {
    delete process.env.MAILERTLITE_API_KEY;
    delete process.env.MAILERTLITE_GROUP_ID;
    for (const data of [
      null,
      {},
      { ...valid, email: "wrong" },
      { ...valid, firstName: " " },
      { ...valid, consent: undefined },
      { ...valid, website: "spam" },
    ])
      assert.equal((await POST(request(data))).status, 400);
    assert.equal(
      (await POST(request(valid, "https://example.com"))).status,
      403,
    );
    const pending = await POST(request(valid));
    assert.equal(pending.status, 200);
    assert.match((await pending.json()).message, /Delivery is being connected/);
    process.env.MAILERTLITE_API_KEY = "test-only";
    process.env.MAILERTLITE_GROUP_ID = "test-group";
    globalThis.fetch = async (url, opts) => {
      assert.equal(url, "https://connect.mailerlite.com/api/subscribers");
      assert.deepEqual(JSON.parse(opts.body), {
        email: valid.email,
        fields: { name: "Reader" },
        groups: ["test-group"],
      });
      return new Response("{}", { status: 201 });
    };
    assert.equal((await POST(request(valid))).status, 200);
    globalThis.fetch = async () =>
      new Response("sensitive provider error", { status: 401 });
    const failure = await POST(request(valid));
    assert.equal(failure.status, 502);
    assert.doesNotMatch(await failure.text(), /sensitive|test-only/);
    globalThis.fetch = async () => {
      throw new Error("network");
    };
    assert.equal((await POST(request(valid))).status, 503);
  } finally {
    globalThis.fetch = oldFetch;
    for (const [key, value] of [
      ["MAILERTLITE_API_KEY", oldKey],
      ["MAILERTLITE_GROUP_ID", oldGroup],
    ]) {
      if (value === undefined) delete process.env[key];
      else process.env[key] = value;
    }
  }
});
