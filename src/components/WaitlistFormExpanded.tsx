import { useState } from "react";
import { Link } from "react-router-dom";
import { ArrowRight, Check } from "lucide-react";
import { useWaitlistSubmit } from "../hooks/useWaitlistSubmit";

const companySizes = ["1–10", "11–50", "51–200", "200+"];
const stacks = ["AWS only", "GitHub only", "Both AWS + GitHub", "Neither yet"];

export function WaitlistFormExpanded() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    companySize: "",
    stack: "",
    painPoint: "",
  });
  const [consent, setConsent] = useState(false);
  const { status, submit } = useWaitlistSubmit();

  function update<K extends keyof typeof form>(key: K, value: string) {
    setForm((f) => ({ ...f, [key]: value }));
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!form.email.trim() || !form.name.trim() || !consent || status === "submitting") return;
    await submit({
      name: form.name,
      email: form.email,
      company_size: form.companySize || "not specified",
      stack: form.stack || "not specified",
      pain_point: form.painPoint || "not specified",
    });
  }

  if (status === "success") {
    return (
      <div className="mx-auto flex max-w-md items-center gap-2.5 rounded-full border border-pine/30 bg-pine/10 px-5 py-3 text-pine">
        <Check size={17} strokeWidth={2.5} />
        <span className="text-sm font-medium">You're on the list. We'll be in touch.</span>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="mx-auto max-w-xl text-left">
      <div className="grid gap-4 sm:grid-cols-2">
        <div>
          <label htmlFor="waitlist-name" className="text-xs font-medium text-ink/60">
            Name
          </label>
          <input
            id="waitlist-name"
            type="text"
            required
            value={form.name}
            onChange={(e) => update("name", e.target.value)}
            placeholder="Jane Smith"
            className="mt-1 w-full rounded-lg border border-ink/15 bg-white px-4 py-2.5 text-sm text-ink placeholder:text-muted focus:border-pine"
          />
        </div>
        <div>
          <label htmlFor="waitlist-email" className="text-xs font-medium text-ink/60">
            Work email
          </label>
          <input
            id="waitlist-email"
            type="email"
            required
            value={form.email}
            onChange={(e) => update("email", e.target.value)}
            placeholder="you@company.com"
            className="mt-1 w-full rounded-lg border border-ink/15 bg-white px-4 py-2.5 text-sm text-ink placeholder:text-muted focus:border-pine"
          />
        </div>

        <div>
          <label htmlFor="waitlist-company-size" className="text-xs font-medium text-ink/60">
            Company size
          </label>
          <select
            id="waitlist-company-size"
            value={form.companySize}
            onChange={(e) => update("companySize", e.target.value)}
            className="mt-1 w-full rounded-lg border border-ink/15 bg-white px-4 py-2.5 text-sm text-ink focus:border-pine"
          >
            <option value="">Select…</option>
            {companySizes.map((s) => (
              <option key={s} value={s}>
                {s} employees
              </option>
            ))}
          </select>
        </div>
        <div>
          <label htmlFor="waitlist-stack" className="text-xs font-medium text-ink/60">
            What do you use today
          </label>
          <select
            id="waitlist-stack"
            value={form.stack}
            onChange={(e) => update("stack", e.target.value)}
            className="mt-1 w-full rounded-lg border border-ink/15 bg-white px-4 py-2.5 text-sm text-ink focus:border-pine"
          >
            <option value="">Select…</option>
            {stacks.map((s) => (
              <option key={s} value={s}>
                {s}
              </option>
            ))}
          </select>
        </div>

        <div className="sm:col-span-2">
          <label htmlFor="waitlist-pain-point" className="text-xs font-medium text-ink/60">
            Biggest cloud security headache right now?{" "}
            <span className="text-ink/60">(optional)</span>
          </label>
          <textarea
            id="waitlist-pain-point"
            value={form.painPoint}
            onChange={(e) => update("painPoint", e.target.value)}
            rows={2}
            placeholder="e.g. we have no idea what's public in our S3 buckets"
            className="mt-1 w-full resize-none rounded-lg border border-ink/15 bg-white px-4 py-2.5 text-sm text-ink placeholder:text-muted focus:border-pine"
          />
        </div>
      </div>

      <label className="mt-5 flex items-start gap-2.5 text-sm text-ink/60">
        <input
          type="checkbox"
          required
          checked={consent}
          onChange={(e) => setConsent(e.target.checked)}
          className="mt-0.5 h-4 w-4 flex-shrink-0 rounded border-ink/25 text-pine focus:ring-pine"
        />
        <span>
          I agree to be contacted about Securiq early access and product
          updates. See our{" "}
          <Link to="/privacy" className="text-pine underline">
            Privacy Policy
          </Link>
          .
        </span>
      </label>

      <button
        type="submit"
        disabled={status === "submitting" || !consent}
        className="mt-4 flex w-full items-center justify-center gap-1.5 rounded-full bg-ink px-5 py-3 text-sm font-semibold text-paper transition-colors hover:bg-pine-dark disabled:opacity-40 sm:w-auto"
      >
        {status === "submitting" ? "Joining…" : "Join waitlist"}
        {status !== "submitting" && <ArrowRight size={15} strokeWidth={2.5} />}
      </button>

      {status === "error" && (
        <p className="mt-2 text-sm text-coral">Something went wrong. Please try again.</p>
      )}
      <p className="mt-3 text-xs text-ink/60">
        We're onboarding a small group of early teams and shaping v1 around
        their feedback.
      </p>
    </form>
  );
}
