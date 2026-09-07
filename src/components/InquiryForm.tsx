"use client";

import { useEffect, useRef, useState, useSyncExternalStore } from "react";
import type { FormEvent } from "react";
import Link from "next/link";
import { Arrow } from "./Site";

type FormState = "idle" | "sending" | "accepted" | "error";
const contactEmail = "brian.mcleod@primeelixirco.com";
const subscribeToHydration = () => () => undefined;
const clientSnapshot = () => true;
const serverSnapshot = () => false;

export function InquiryForm() {
  const [state, setState] = useState<FormState>("idle");
  const [message, setMessage] = useState("");
  const attempt = useRef<{ payload: string; key: string } | null>(null);
  const pending = useRef(false);
  const resultHeading = useRef<HTMLHeadingElement>(null);
  const errorBox = useRef<HTMLDivElement>(null);
  const hydrated = useSyncExternalStore(
    subscribeToHydration,
    clientSnapshot,
    serverSnapshot,
  );
  const disabled = !hydrated || state === "sending";

  useEffect(() => {
    if (state === "accepted") resultHeading.current?.focus();
    if (state === "error") errorBox.current?.focus();
  }, [state, message]);

  async function submit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (!hydrated || pending.current) return;
    const form = event.currentTarget;
    const data = new FormData(form);
    const payload = JSON.stringify({
      name: String(data.get("name") ?? "").trim(),
      email: String(data.get("email") ?? "").trim(),
      firm: String(data.get("firm") ?? "").trim(),
      role: String(data.get("role") ?? ""),
      monthlyVolume: String(data.get("monthlyVolume") ?? ""),
      website: String(data.get("website") ?? ""),
    });
    pending.current = true;
    setMessage("");
    setState("sending");
    let timeout: ReturnType<typeof setTimeout> | undefined;
    try {
      if (!attempt.current || attempt.current.payload !== payload) {
        attempt.current = { payload, key: crypto.randomUUID() };
      }
      const controller = new AbortController();
      timeout = setTimeout(() => controller.abort(), 15000);
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Idempotency-Key": attempt.current.key,
        },
        body: payload,
        signal: controller.signal,
      });
      const result = await response.json();
      if (
        response.status === 202 &&
        result.success === true &&
        result.status === "accepted"
      ) {
        setState("accepted");
      } else {
        setState("error");
        setMessage(
          result.code === "invalid_request"
            ? "Please check your business contact details. Use your name, firm and role, without client or matter information."
            : result.code === "contact_unavailable"
              ? "The inquiry form is currently unavailable. Please email us directly to continue."
              : "We could not confirm that your inquiry was sent. Your details are still here. Try again, or email us directly.",
        );
      }
    } catch {
      setState("error");
      setMessage(
        "We could not confirm that your inquiry was sent. Your details are still here. Try again, or email us directly.",
      );
    } finally {
      clearTimeout(timeout);
      pending.current = false;
    }
  }

  if (state === "accepted") {
    return (
      <div className="inquiry-success" role="status">
        <p className="eyebrow">Inquiry received</p>
        <h2 ref={resultHeading} tabIndex={-1}>
          Thank you.
          <br />
          We’ll take it from here.
        </h2>
        <p>
          Your inquiry was accepted for sending. We’ll review it and reply by
          email about the next step.
        </p>
        <p>
          This begins a conversation about fit. It does not start live work or
          subscribe you to marketing.
        </p>
        <Link className="text-link" href="/records-to-demand">
          Keep the lane brief handy <Arrow />
        </Link>
      </div>
    );
  }

  return (
    <form
      className="inquiry-form"
      method="post"
      action="/api/contact"
      onSubmit={submit}
      aria-busy={state === "sending"}
    >
      <p className="form-full form-privacy">
        All fields are required unless marked optional.
      </p>
      <label className="field" htmlFor="inquiry-name">
        Your name
        <input
          id="inquiry-name"
          name="name"
          autoComplete="name"
          required
          minLength={2}
          maxLength={100}
          disabled={disabled}
        />
      </label>
      <label className="field" htmlFor="inquiry-email">
        Business email
        <input
          id="inquiry-email"
          name="email"
          type="email"
          autoComplete="email"
          required
          maxLength={254}
          disabled={disabled}
        />
      </label>
      <label className="field field-wide" htmlFor="inquiry-firm">
        Firm name
        <input
          id="inquiry-firm"
          name="firm"
          autoComplete="organization"
          required
          minLength={2}
          maxLength={160}
          disabled={disabled}
        />
      </label>
      <label className="field" htmlFor="inquiry-role">
        Your role
        <select
          id="inquiry-role"
          name="role"
          defaultValue=""
          required
          disabled={disabled}
        >
          <option value="" disabled>
            Select your role
          </option>
          <option value="managing-partner">Managing partner / owner</option>
          <option value="attorney">Attorney</option>
          <option value="operations">Operations</option>
          <option value="pre-lit-lead">Pre-lit lead</option>
          <option value="paralegal-case-manager">Paralegal / case manager</option>
          <option value="records-specialist">Records specialist</option>
          <option value="other">Other</option>
        </select>
      </label>
      <label className="field" htmlFor="inquiry-volume">
        Typical new PI matters per month{" "}
        <span className="field-note">(optional)</span>
        <select
          id="inquiry-volume"
          name="monthlyVolume"
          defaultValue=""
          disabled={disabled}
        >
          <option value="">Select an approximate range</option>
          <option value="under-25">Fewer than 25</option>
          <option value="25-99">25 to 99</option>
          <option value="100-plus">100 or more</option>
          <option value="unsure">Not sure</option>
        </select>
      </label>
      <div className="honeypot" aria-hidden="true">
        <label htmlFor="inquiry-website">
          Leave this field empty
          <input
            id="inquiry-website"
            name="website"
            tabIndex={-1}
            autoComplete="off"
          />
        </label>
      </div>
      <p className="form-full form-privacy">
        Business contact information only. Please do not include client,
        treatment or confidential matter details. This inquiry does not
        subscribe you to marketing.{" "}
        <Link href="/privacy">How we handle your information</Link>.
      </p>
      {state === "error" && (
        <div
          className="form-full form-error"
          ref={errorBox}
          tabIndex={-1}
          role="alert"
        >
          <p>{message}</p>
          <a href={`mailto:${contactEmail}`}>Email {contactEmail}</a>
        </div>
      )}
      <button
        className="button form-submit form-full"
        disabled={disabled}
        type="submit"
      >
        {state === "sending" ? "Sending inquiry…" : "Send inquiry"}
        <Arrow />
      </button>
    </form>
  );
}
