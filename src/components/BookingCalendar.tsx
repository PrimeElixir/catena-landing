"use client";

import Cal, { getCalApi } from "@calcom/embed-react";
import { useEffect, useState } from "react";
import { BOOKING_PATH } from "@/lib/booking";

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
    }, 20000);

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
        cal("on", { action: "linkFailed", callback: failed });
        const ui = {
          theme: "light" as const,
          hideEventTypeDetails: false,
          layout: "month_view" as const,
          cssVarsPerTheme: {
            light: {
              "cal-brand": "#165f52",
              "cal-brand-emphasis": "#124d43",
              "cal-brand-text": "#ffffff",
            },
            dark: {
              "cal-brand": "#165f52",
              "cal-brand-emphasis": "#124d43",
              "cal-brand-text": "#ffffff",
            },
          },
        };
        cal("ui", ui);
        unsubscribe = () => {
          cal("off", { action: "linkReady", callback: ready });
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
      <p className="calendar-status helper" role="status" aria-live="polite">
        {status === "loading"
          ? "Loading available times…"
          : status === "unavailable"
            ? "Calendar taking too long? Use the direct booking link below, or email us."
            : ""}
      </p>
      <Cal
        namespace={namespace}
        calLink={BOOKING_PATH}
        config={config}
        style={{ width: "100%", height: "100%" }}
      />
    </div>
  );
}
