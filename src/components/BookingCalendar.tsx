"use client";

import Cal, { getCalApi } from "@calcom/embed-react";
import { useEffect, useState } from "react";
import { BOOKING_PATH, BOOKING_URL, CONTACT_EMAIL } from "@/lib/booking";

const namespace = "catena-15min";
const config = {
  layout: "month_view",
  theme: "light",
  useSlotsViewOnSmallScreen: "true",
} as const;

export function BookingCalendar() {
  const [status, setStatus] = useState<"loading" | "ready" | "unavailable">(
    "loading",
  );

  useEffect(() => {
    let active = true;
    let unsubscribe: (() => void) | undefined;
    const timeout = window.setTimeout(() => {
      if (active) setStatus("unavailable");
    }, 9000);

    getCalApi({ namespace })
      .then((cal) => {
        if (!active) return;
        const ready = () => {
          window.clearTimeout(timeout);
          if (active) setStatus("ready");
        };
        const failed = () => {
          window.clearTimeout(timeout);
          if (active) setStatus("unavailable");
        };
        cal("on", { action: "linkReady", callback: ready });
        cal("on", { action: "__iframeReady", callback: ready });
        cal("on", { action: "linkFailed", callback: failed });
        const ui = {
          theme: "light" as const,
          hideEventTypeDetails: false,
          layout: "month_view" as const,
          cssVarsPerTheme: {
            light: {
              "cal-brand": "#0f3d30",
              "cal-brand-emphasis": "#0a2920",
              "cal-brand-text": "#ffffff",
            },
            dark: {
              "cal-brand": "#0f3d30",
              "cal-brand-emphasis": "#0a2920",
              "cal-brand-text": "#ffffff",
            },
          },
        };
        cal("ui", ui);
        unsubscribe = () => {
          cal("off", { action: "linkReady", callback: ready });
          cal("off", { action: "__iframeReady", callback: ready });
          cal("off", { action: "linkFailed", callback: failed });
        };
      })
      .catch(() => {
        if (active) setStatus("unavailable");
      });

    return () => {
      active = false;
      window.clearTimeout(timeout);
      unsubscribe?.();
    };
  }, []);

  return (
    <div className="booking-calendar">
      {status !== "ready" && (
        <div className="calendar-status-banner" role="status" aria-live="polite">
          <div>
            <strong>
              {status === "loading"
                ? "Loading live calendar slots…"
                : "Prefer not to wait on the embedded calendar?"}
            </strong>
            <p>
              {status === "loading"
                ? "If your browser blocks embedded schedulers, you can open our Cal.com page directly in one click."
                : "Open our scheduling page directly on Cal.com to pick a 15-minute slot immediately, or email us."}
            </p>
          </div>
          <div className="calendar-banner-actions">
            <a
              className="button"
              href={BOOKING_URL}
              target="_blank"
              rel="noopener noreferrer"
            >
              Open scheduler on Cal.com ↗
            </a>
            <a className="button-secondary" href={`mailto:${CONTACT_EMAIL}`}>
              Email {CONTACT_EMAIL}
            </a>
          </div>
        </div>
      )}
      <Cal
        namespace={namespace}
        calLink={BOOKING_PATH}
        config={config}
        style={{ width: "100%", minHeight: "640px", height: "100%" }}
      />
    </div>
  );
}
