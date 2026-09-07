/** Business inquiries only. No case text, uploads, mailing-list enrollment or CRM writes. */
const MAX_BODY_BYTES = 4096;
const PROVIDER_TIMEOUT_MS = 8000;
const UUID_V4 =
  /^[0-9a-f]{8}-[0-9a-f]{4}-4[0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}$/i;
const CONTROL_CHARACTERS = /[\u0000-\u001f\u007f-\u009f\u2028\u2029]/;
const ROLES = {
  "managing-partner": "Managing partner / owner",
  attorney: "Attorney",
  operations: "Operations",
  "pre-lit-lead": "Pre-lit lead",
  "paralegal-case-manager": "Paralegal / case manager",
  "records-specialist": "Records specialist",
  other: "Other",
} as const;
const VOLUMES = {
  "under-25": "Fewer than 25",
  "25-99": "25 to 99",
  "100-plus": "100 or more",
  unsure: "Not sure",
} as const;
const FIELDS = new Set([
  "name",
  "email",
  "firm",
  "role",
  "monthlyVolume",
  "website",
]);

export interface ContactConfiguration {
  enabled?: string;
  apiKey?: string;
  /** A single verified sender mailbox, without a display name. */
  from?: string;
  /** A single destination mailbox, without a display name. */
  to?: string;
  deploymentEnvironment?: string;
}

interface ContactDependencies {
  config: ContactConfiguration;
  /** Mandatory injection keeps tests independent of ambient credentials/network. */
  fetch: typeof fetch;
  providerTimeoutMs?: number;
}

interface ContactDetails {
  name: string;
  email: string;
  firm: string;
  role: keyof typeof ROLES;
  monthlyVolume?: keyof typeof VOLUMES;
}

function isMailbox(value: unknown): value is string {
  if (
    typeof value !== "string" ||
    value.length > 254 ||
    CONTROL_CHARACTERS.test(value)
  )
    return false;
  const parts = value.split("@");
  if (parts.length !== 2) return false;
  const [local, domain] = parts;
  return (
    local.length > 0 &&
    local.length <= 64 &&
    /^[a-z0-9!#$%&'*+/=?^_`{|}~.-]+$/i.test(local) &&
    !local.startsWith(".") &&
    !local.endsWith(".") &&
    !local.includes("..") &&
    domain.includes(".") &&
    domain
      .split(".")
      .every((label) => /^[a-z0-9](?:[a-z0-9-]{0,61}[a-z0-9])?$/i.test(label))
  );
}

export function isContactConfigured(config: ContactConfiguration): boolean {
  // Preview and local builds cannot send even if production secrets are inherited.
  return (
    config.enabled === "true" &&
    config.deploymentEnvironment === "production" &&
    typeof config.apiKey === "string" &&
    config.apiKey.length > 0 &&
    !/\s/.test(config.apiKey) &&
    isMailbox(config.from) &&
    !/@(?:[a-z0-9-]+\.)*resend\.dev$/i.test(config.from) &&
    isMailbox(config.to)
  );
}

function reply(status: number, body: Record<string, unknown>): Response {
  return Response.json(body, {
    status,
    headers: {
      "Cache-Control": "no-store",
      "X-Content-Type-Options": "nosniff",
    },
  });
}

function failure(
  status: number,
  code: string,
  message: string,
  retryable = false,
): Response {
  return reply(status, { success: false, code, message, retryable });
}

function invalid(): Response {
  return failure(
    400,
    "invalid_request",
    "Check your business contact details and try again. Do not include case information.",
  );
}

function singleLine(value: unknown, maximum: number): string | undefined {
  if (typeof value !== "string" || CONTROL_CHARACTERS.test(value))
    return undefined;
  const trimmed = value.trim();
  return trimmed.length >= 2 && trimmed.length <= maximum ? trimmed : undefined;
}

function validateDetails(value: unknown): ContactDetails | undefined {
  if (!value || typeof value !== "object" || Array.isArray(value))
    return undefined;
  const data = value as Record<string, unknown>;
  if (Object.keys(data).some((field) => !FIELDS.has(field))) return undefined;
  if (data.website !== undefined && data.website !== "") return undefined;
  const name = singleLine(data.name, 100);
  const firm = singleLine(data.firm, 160);
  const email = typeof data.email === "string" ? data.email.trim() : undefined;
  if (
    !name ||
    !firm ||
    !isMailbox(email) ||
    typeof data.email !== "string" ||
    CONTROL_CHARACTERS.test(data.email) ||
    typeof data.role !== "string" ||
    !Object.hasOwn(ROLES, data.role)
  )
    return undefined;
  const volume = data.monthlyVolume;
  if (
    volume !== undefined &&
    volume !== "" &&
    (typeof volume !== "string" || !Object.hasOwn(VOLUMES, volume))
  )
    return undefined;
  return {
    name,
    firm,
    email,
    role: data.role as keyof typeof ROLES,
    ...(volume ? { monthlyVolume: volume as keyof typeof VOLUMES } : {}),
  };
}

class BodyTooLarge extends Error {}

async function readBoundedJson(request: Request): Promise<unknown> {
  const length = request.headers.get("content-length");
  if (length && (!/^\d+$/.test(length) || Number(length) > MAX_BODY_BYTES))
    throw new BodyTooLarge();
  if (!request.body) throw new Error("Missing body");
  const reader = request.body.getReader();
  let size = 0;
  const chunks: Uint8Array[] = [];
  try {
    while (true) {
      const { value, done } = await reader.read();
      if (done) break;
      size += value.byteLength;
      if (size > MAX_BODY_BYTES) {
        // Do not wait for an untrusted sender to complete an oversized stream.
        void reader.cancel().catch(() => {});
        throw new BodyTooLarge();
      }
      chunks.push(value);
    }
  } finally {
    reader.releaseLock();
  }
  const bytes = new Uint8Array(size);
  let offset = 0;
  for (const chunk of chunks) {
    bytes.set(chunk, offset);
    offset += chunk.byteLength;
  }
  return JSON.parse(new TextDecoder("utf-8", { fatal: true }).decode(bytes));
}

function emailBody(details: ContactDetails): string {
  return [
    "Catena business inquiry: Records-to-Demand",
    "",
    `Name: ${details.name}`,
    `Business email: ${details.email}`,
    `Firm: ${details.firm}`,
    `Role: ${ROLES[details.role]}`,
    `Typical new PI matters per month: ${details.monthlyVolume ? VOLUMES[details.monthlyVolume] : "Not provided"}`,
    "",
    "Source: Catena website /conversation",
    "This is a business inquiry. It does not enroll the sender in a mailing list or admit live matters.",
  ].join("\n");
}

export async function handleContactRequest(
  request: Request,
  dependencies: ContactDependencies,
): Promise<Response> {
  const { config } = dependencies;
  if (!isContactConfigured(config)) {
    return failure(
      503,
      "contact_unavailable",
      "The form is unavailable. Please use the email link instead.",
    );
  }
  if (request.method !== "POST")
    return failure(
      405,
      "method_not_allowed",
      "Use the inquiry form to send a message.",
    );
  const origin = request.headers.get("origin");
  const site = request.headers.get("sec-fetch-site");
  if (
    origin !== new URL(request.url).origin ||
    (site !== null && site !== "same-origin")
  ) {
    return failure(
      403,
      "request_not_allowed",
      "Please open the inquiry page on this site and try again.",
    );
  }
  if (
    request.headers.get("content-type")?.split(";")[0].trim().toLowerCase() !==
      "application/json" ||
    ![null, "identity"].includes(request.headers.get("content-encoding"))
  ) {
    return failure(
      415,
      "unsupported_format",
      "Please use the inquiry form on this site.",
    );
  }
  const attemptKey = request.headers.get("idempotency-key");
  if (!attemptKey || !UUID_V4.test(attemptKey)) return invalid();

  let details: ContactDetails | undefined;
  try {
    details = validateDetails(await readBoundedJson(request));
  } catch (error) {
    return error instanceof BodyTooLarge
      ? failure(
          413,
          "request_too_large",
          "Use only the business contact fields provided. Do not include case information.",
        )
      : invalid();
  }
  if (!details) return invalid();

  const controller = new AbortController();
  let timer: ReturnType<typeof setTimeout> | undefined;
  try {
    const timeout = new Promise<never>((_, reject) => {
      timer = setTimeout(() => {
        controller.abort();
        reject(new Error("Provider timeout"));
      }, dependencies.providerTimeoutMs ?? PROVIDER_TIMEOUT_MS);
    });
    const providerResult = (async () => {
      const response = await dependencies.fetch(
        "https://api.resend.com/emails",
        {
          method: "POST",
          headers: {
            Authorization: `Bearer ${config.apiKey}`,
            "Content-Type": "application/json",
            "Idempotency-Key": `catena-contact/${attemptKey.toLowerCase()}`,
          },
          body: JSON.stringify({
            from: `Catena <${config.from}>`,
            to: [config.to],
            reply_to: details.email,
            subject: "Catena: Records-to-Demand inquiry",
            text: emailBody(details),
          }),
          signal: controller.signal,
          redirect: "error",
          cache: "no-store",
        },
      );
      if (!response.ok) {
        // Provider payloads can contain submitted data or internal account details.
        // Do not read, log or return them.
        void response.body?.cancel().catch(() => {});
        return failure(
          502,
          "send_unconfirmed",
          "We could not confirm your inquiry was sent. Retry with the same details or use the email link.",
          true,
        );
      }
      const data: unknown = await response.json();
      if (
        !data ||
        typeof data !== "object" ||
        !("id" in data) ||
        typeof data.id !== "string" ||
        data.id.trim().length === 0 ||
        ("error" in data && data.error)
      ) {
        throw new Error("Provider acceptance missing");
      }
      return reply(202, { success: true, status: "accepted" });
    })();
    return await Promise.race([providerResult, timeout]);
  } catch {
    // A timeout may occur after acceptance. The client must reuse its attempt key
    // for a retry of the same details; there is no automatic second send here.
    return failure(
      502,
      "send_unconfirmed",
      "We could not confirm your inquiry was sent. Retry with the same details or use the email link.",
      true,
    );
  } finally {
    clearTimeout(timer);
  }
}
