import { useCallback, useState } from "react";
import { FORMSPREE_ENDPOINT } from "../lib/constants";

export type WaitlistSubmitStatus = "idle" | "submitting" | "success" | "error";

/**
 * Shared submission logic for any waitlist form variant. Each caller supplies
 * its own payload shape and its own "is this ready to submit" check, since
 * those are the only two things that differ between the compact and expanded
 * forms; the fetch call, status state machine, and error handling are identical.
 */
export function useWaitlistSubmit() {
  const [status, setStatus] = useState<WaitlistSubmitStatus>("idle");

  const submit = useCallback(
    async (payload: Record<string, string>) => {
      if (status === "submitting") return;

      setStatus("submitting");
      try {
        const res = await fetch(FORMSPREE_ENDPOINT, {
          method: "POST",
          headers: { Accept: "application/json", "Content-Type": "application/json" },
          body: JSON.stringify(payload),
        });
        setStatus(res.ok ? "success" : "error");
      } catch {
        setStatus("error");
      }
    },
    [status]
  );

  return { status, submit };
}
