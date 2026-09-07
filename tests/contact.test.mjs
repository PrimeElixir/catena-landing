import assert from "node:assert/strict";
import { after, before, test } from "node:test";
import {
  handleContactRequest,
  isContactConfigured,
} from "../src/lib/contact.ts";

// Synthetic fixtures only. Even accidental use of global fetch cannot send mail.
const originalFetch = globalThis.fetch;
before(() => {
  globalThis.fetch = async () => {
    throw new Error("Network forbidden in contact tests");
  };
});
after(() => {
  globalThis.fetch = originalFetch;
});

const origin = "https://www.catenaos.com";
const key = "da8b28cb-9ed3-4f0b-88d1-3afc73299617";
const config = {
  enabled: "true",
  deploymentEnvironment: "production",
  apiKey: "re_fake_test_only",
  from: "contact@example.test",
  to: "owner@example.test",
};
const details = {
  name: "Morgan Example",
  email: "morgan@example.test",
  firm: "Example Firm",
  role: "operations",
  monthlyVolume: "25-99",
  website: "",
};

function request(body = details, headers = {}, raw = false) {
  const allHeaders = new Headers({
    Origin: origin,
    "Sec-Fetch-Site": "same-origin",
    "Content-Type": "application/json",
    "Idempotency-Key": key,
  });
  for (const [name, value] of Object.entries(headers)) {
    if (value === null) allHeaders.delete(name);
    else allHeaders.set(name, value);
  }
  return new Request(`${origin}/api/contact`, {
    method: "POST",
    headers: allHeaders,
    body: raw ? body : JSON.stringify(body),
    ...(body instanceof ReadableStream ? { duplex: "half" } : {}),
  });
}

function harness(overrides = {}) {
  const calls = [];
  return {
    calls,
    dependencies: {
      config,
      providerTimeoutMs: 100,
      fetch: async (url, options) => {
        calls.push({ url, options });
        return Response.json({ id: "provider-synthetic-message" });
      },
      ...overrides,
    },
  };
}

async function expectRejected(req, status, code) {
  const { calls, dependencies } = harness();
  const response = await handleContactRequest(req, dependencies);
  assert.equal(response.status, status);
  const result = await response.json();
  assert.equal(result.success, false);
  assert.equal(result.code, code);
  assert.equal(calls.length, 0);
}

for (const [role, label] of [
  ["pre-lit-lead", "Pre-lit lead"],
  ["paralegal-case-manager", "Paralegal / case manager"],
  ["records-specialist", "Records specialist"],
]) {
  test(`practitioner inquiry accepts ${role} and preserves its email label with volume omitted`, async () => {
    const { calls, dependencies } = harness();
    const requiredDetails = { ...details };
    delete requiredDetails.monthlyVolume;
    const response = await handleContactRequest(
      request({ ...requiredDetails, role }), dependencies,
    );
    assert.equal(response.status, 202);
    assert.equal(calls.length, 1);
    const message = JSON.parse(calls[0].options.body);
    assert.ok(message.text.includes(`Role: ${label}`));
    assert.deepEqual(message.to, [config.to]);
    assert.equal("attachments" in message, false);
  });
}

test("valid inquiry is accepted only with a provider ID, without exposing contact or provider data", async () => {
  const { calls, dependencies } = harness();
  const response = await handleContactRequest(request(), dependencies);
  assert.equal(response.status, 202);
  assert.deepEqual(await response.json(), {
    success: true,
    status: "accepted",
  });
  assert.equal(response.headers.get("cache-control"), "no-store");
  assert.equal(response.headers.get("x-content-type-options"), "nosniff");
  assert.equal(calls.length, 1);
  const { url, options } = calls[0];
  assert.equal(url, "https://api.resend.com/emails");
  assert.equal(options.redirect, "error");
  assert.equal(options.cache, "no-store");
  assert.equal(options.headers["Idempotency-Key"], `catena-contact/${key}`);
  const message = JSON.parse(options.body);
  assert.equal(message.subject, "Catena: Records-to-Demand inquiry");
  assert.equal(message.reply_to, details.email);
  assert.deepEqual(message.to, [config.to]);
  assert.match(message.text, /Firm: Example Firm/);
  assert.match(message.text, /Typical new PI matters per month: 25 to 99/);
  assert.equal("html" in message, false);
  assert.equal("attachments" in message, false);
  assert.equal("cc" in message, false);
});

test("volume is optional and business names remain plain text, including markup characters", async () => {
  const { calls, dependencies } = harness();
  const response = await handleContactRequest(
    request({
      ...details,
      monthlyVolume: "",
      firm: "<img src=x onerror=alert(1)> & Partners",
    }),
    dependencies,
  );
  assert.equal(response.status, 202);
  const message = JSON.parse(calls[0].options.body);
  assert.match(message.text, /Firm: <img src=x onerror=alert\(1\)> & Partners/);
  assert.match(message.text, /per month: Not provided/);
  assert.equal("html" in message, false);
});

test("missing configuration and every nonproduction environment fail closed without calling provider", async (t) => {
  for (const [field, value] of [
    ["enabled", undefined],
    ["enabled", "false"],
    ["enabled", "1"],
    ["deploymentEnvironment", "preview"],
    ["deploymentEnvironment", "development"],
    ["deploymentEnvironment", undefined],
    ["apiKey", ""],
    ["apiKey", undefined],
    ["apiKey", "re_fake\r\ninjected"],
    ["from", undefined],
    ["to", undefined],
    ["from", "onboarding@resend.dev"],
    ["from", "test@sub.resend.dev"],
    ["from", "Catena <contact@example.test>"],
    ["to", "a@example.test,b@example.test"],
    ["to", "a@example.test\r\nBcc: b@example.test"],
  ]) {
    await t.test(`${field}=${JSON.stringify(value)}`, async () => {
      const changedConfig = { ...config, [field]: value };
      assert.equal(isContactConfigured(changedConfig), false);
      const { calls, dependencies } = harness({ config: changedConfig });
      const response = await handleContactRequest(request(), dependencies);
      assert.equal(response.status, 503);
      assert.equal((await response.json()).code, "contact_unavailable");
      assert.equal(calls.length, 0);
    });
  }
});

test("cross-origin, absent origin and cross-site requests cannot trigger email", async (t) => {
  for (const headers of [
    { Origin: "https://attacker.example" },
    { Origin: null },
    { Origin: "null" },
    { "Sec-Fetch-Site": "cross-site" },
    { "Sec-Fetch-Site": "same-site" },
  ]) {
    await t.test(JSON.stringify(headers), () =>
      expectRejected(request(details, headers), 403, "request_not_allowed"),
    );
  }
});

test("same-origin browsers without Fetch Metadata remain supported", async () => {
  const { dependencies } = harness();
  assert.equal(
    (
      await handleContactRequest(
        request(details, { "Sec-Fetch-Site": null }),
        dependencies,
      )
    ).status,
    202,
  );
});

test("non-JSON and encoded requests are rejected", async (t) => {
  for (const headers of [
    { "Content-Type": "text/plain" },
    { "Content-Type": "application/x-www-form-urlencoded" },
    { "Content-Type": "multipart/form-data" },
    { "Content-Encoding": "gzip" },
  ]) {
    await t.test(JSON.stringify(headers), () =>
      expectRejected(request(details, headers), 415, "unsupported_format"),
    );
  }
});

test("attempt key is required and must be a UUID v4", async (t) => {
  for (const value of [
    null,
    "",
    "shared-key",
    "da8b28cb-9ed3-1f0b-88d1-3afc73299617",
  ]) {
    await t.test(String(value), () =>
      expectRejected(
        request(details, { "Idempotency-Key": value }),
        400,
        "invalid_request",
      ),
    );
  }
});

test("unknown fields, free text, honeypot and invalid fit values are rejected", async (t) => {
  const variants = [
    null,
    [],
    "text",
    {},
    { ...details, mind: "Case details" },
    { ...details, path: "pilot" },
    { ...details, attachments: [] },
    { ...details, website: "https://spam.example" },
    { ...details, website: false },
    { ...details, firm: "" },
    { ...details, name: 42 },
    { ...details, role: "constructor" },
    { ...details, role: "legal-expert" },
    { ...details, monthlyVolume: "1-1000" },
    { ...details, monthlyVolume: null },
    { ...details, name: "x".repeat(101) },
    { ...details, firm: "x".repeat(161) },
    { ...details, email: "a..b@example.test" },
    { ...details, email: "a@example..test" },
    { ...details, email: "a@example.test,b@example.test" },
    { ...details, email: `${"x".repeat(65)}@example.test` },
  ];
  for (const [index, variant] of variants.entries()) {
    await t.test(`invalid payload ${index + 1}`, () =>
      expectRejected(request(variant), 400, "invalid_request"),
    );
  }
});

test("control characters and header injection are rejected in every business text field", async (t) => {
  for (const field of ["name", "firm", "email"]) {
    for (const prefix of [
      "\r\nBcc: secret@example.test",
      "\u0000",
      "\u2028",
      "\u2029",
    ]) {
      await t.test(`${field} rejects control ${JSON.stringify(prefix)}`, () =>
        expectRejected(
          request({ ...details, [field]: prefix + details[field] }),
          400,
          "invalid_request",
        ),
      );
    }
  }
});

test("malformed JSON and invalid UTF-8 never call the provider", async () => {
  await expectRejected(request("{broken", {}, true), 400, "invalid_request");
  await expectRejected(
    request(new Uint8Array([0xff, 0xfe]), {}, true),
    400,
    "invalid_request",
  );
});

test("body limit rejects declared sizes and enforces actual UTF-8 bytes without Content-Length", async () => {
  await expectRejected(
    request(details, { "Content-Length": "4097" }),
    413,
    "request_too_large",
  );
  await expectRejected(
    request(details, { "Content-Length": "invalid" }),
    413,
    "request_too_large",
  );
  await expectRejected(
    request({ ...details, firm: "é".repeat(2048) }),
    413,
    "request_too_large",
  );
});

test("chunked oversized stream is cancelled before complete buffering", async () => {
  let cancelled = false;
  let chunk = 0;
  const stream = new ReadableStream(
    {
      pull(controller) {
        chunk += 1;
        controller.enqueue(new Uint8Array(2048).fill(32));
      },
      cancel() {
        cancelled = true;
      },
    },
    { highWaterMark: 0 },
  );
  await expectRejected(request(stream, {}, true), 413, "request_too_large");
  assert.equal(cancelled, true);
  assert.equal(chunk, 3);
});

test("provider HTTP errors, including rate limits and idempotency conflicts, never look successful", async (t) => {
  for (const status of [400, 401, 403, 409, 422, 429, 500, 503]) {
    await t.test(`provider ${status}`, async () => {
      let parsed = false;
      const { dependencies } = harness({
        fetch: async () => ({
          ok: false,
          status,
          json: async () => {
            parsed = true;
            return { error: details.email, secret: config.apiKey };
          },
        }),
      });
      const response = await handleContactRequest(request(), dependencies);
      assert.equal(response.status, 502);
      const result = await response.json();
      assert.equal(result.success, false);
      assert.equal(result.code, "send_unconfirmed");
      assert.equal(result.retryable, true);
      assert.equal(parsed, false);
      assert.equal(JSON.stringify(result).includes(details.email), false);
      assert.equal(JSON.stringify(result).includes(config.apiKey), false);
    });
  }
});

test("successful HTTP status without valid acceptance evidence is not success", async (t) => {
  for (const body of [
    null,
    {},
    { id: "" },
    { id: 42 },
    { error: { message: "failed" } },
    { id: "maybe", error: "failed" },
  ]) {
    await t.test(JSON.stringify(body), async () => {
      const { dependencies } = harness({
        fetch: async () => Response.json(body),
      });
      const response = await handleContactRequest(request(), dependencies);
      assert.equal(response.status, 502);
      assert.equal((await response.json()).success, false);
    });
  }
  const { dependencies } = harness({
    fetch: async () =>
      new Response("<html>upstream failure</html>", { status: 200 }),
  });
  assert.equal(
    (await handleContactRequest(request(), dependencies)).status,
    502,
  );
});

test("network exceptions produce a safe uncertain result, with no submitted values or secrets in logs", async () => {
  const oldError = console.error;
  const oldLog = console.log;
  const logged = [];
  console.error = (...args) => logged.push(args);
  console.log = (...args) => logged.push(args);
  try {
    const { dependencies } = harness({
      fetch: async () => {
        throw new Error(`${details.email}: ${config.apiKey}`);
      },
    });
    const response = await handleContactRequest(request(), dependencies);
    assert.equal(response.status, 502);
    const text = await response.text();
    assert.equal(text.includes(details.email), false);
    assert.equal(text.includes(config.apiKey), false);
    assert.deepEqual(logged, []);
  } finally {
    console.error = oldError;
    console.log = oldLog;
  }
});

test("timeout aborts the one provider attempt and reports uncertainty", async () => {
  let signal;
  let attempts = 0;
  const { dependencies } = harness({
    providerTimeoutMs: 10,
    fetch: async (_url, options) => {
      attempts += 1;
      signal = options.signal;
      return new Promise(() => {});
    },
  });
  const response = await handleContactRequest(request(), dependencies);
  assert.equal(response.status, 502);
  assert.equal((await response.json()).retryable, true);
  assert.equal(signal.aborted, true);
  assert.equal(attempts, 1);
});

test("provider response-body stall is included in timeout", async () => {
  let signal;
  const { dependencies } = harness({
    providerTimeoutMs: 10,
    fetch: async (_url, options) => {
      signal = options.signal;
      return { ok: true, json: async () => new Promise(() => {}) };
    },
  });
  const response = await handleContactRequest(request(), dependencies);
  assert.equal(response.status, 502);
  assert.equal(signal.aborted, true);
});

test("a retry after uncertain acceptance sends the identical provider payload and idempotency key", async () => {
  const calls = [];
  const { dependencies } = harness({
    fetch: async (_url, options) => {
      calls.push(options);
      if (calls.length === 1)
        throw new Error("Synthetic lost response after provider acceptance");
      return Response.json({ id: "same-synthetic-provider-message" });
    },
  });
  const first = await handleContactRequest(request(), dependencies);
  const retry = await handleContactRequest(request(), dependencies);
  assert.equal(first.status, 502);
  assert.equal(retry.status, 202);
  assert.equal(calls.length, 2);
  assert.equal(
    calls[0].headers["Idempotency-Key"],
    calls[1].headers["Idempotency-Key"],
  );
  assert.equal(calls[0].body, calls[1].body);
});
