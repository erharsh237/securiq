import { useState } from "react";
import { Link } from "react-router-dom";
import { ArrowRight, Check } from "lucide-react";
import { useWaitlistSubmit } from "../hooks/useWaitlistSubmit";

export function WaitlistForm({ variant = "default" }: { variant?: "default" | "compact" }) {
  const [email, setEmail] = useState("");
  const { status, submit } = useWaitlistSubmit();

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!email.trim() || status === "submitting") return;
    await submit({ email });
  }

  if (status === "success") {
    return (
      <div className="flex items-center gap-2.5 rounded-full border border-pine/30 bg-pine/10 px-5 py-3 text-pine">
        <Check size={17} strokeWidth={2.5} />
        <span className="text-sm font-medium">You're on the list. We'll be in touch.</span>
      </div>
    );
  }

  return (
    <div className={`w-full ${variant === "compact" ? "max-w-sm" : "max-w-md"}`}>
      <form onSubmit={handleSubmit} className="flex gap-2">
        <input
          type="email"
          required
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="you@company.com"
          disabled={status === "submitting"}
          className="min-w-0 flex-1 rounded-full border border-ink/15 bg-white px-5 py-3 text-sm text-ink placeholder:text-muted focus:border-pine disabled:opacity-60"
        />
        <button
          type="submit"
          disabled={status === "submitting"}
          className="flex flex-shrink-0 items-center gap-1.5 rounded-full bg-coral px-5 py-3 text-sm font-semibold text-ink transition-colors hover:bg-coral/90 disabled:opacity-60"
        >
          {status === "submitting" ? "Joining…" : "Join waitlist"}
          {status !== "submitting" && <ArrowRight size={15} strokeWidth={2.5} />}
        </button>
      </form>
      {status === "error" && (
        <p className="mt-2 text-sm text-coral">
          Something went wrong. Please try again.
        </p>
      )}
      <p className="mt-2 text-xs text-ink/60">
        By joining, you agree to be contacted about early access. See our{" "}
        <Link to="/privacy" className="underline hover:text-ink/60">
          Privacy Policy
        </Link>
        .
      </p>
    </div>
  );
}

