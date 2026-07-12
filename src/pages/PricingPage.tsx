import { Check } from "lucide-react";
import { Nav } from "../components/Nav";
import { Footer } from "../components/Footer";
import { WaitlistFormExpanded } from "../components/WaitlistFormExpanded";
import { SEO } from "../components/SEO";

const tiers = [
  {
    name: "Starter",
    blurb: "For small teams getting visibility for the first time.",
    detail: "AWS or GitHub, one workspace",
  },
  {
    name: "Team",
    blurb: "For teams running both AWS and GitHub with active remediation.",
    detail: "AWS + GitHub, unlimited repos",
    highlighted: true,
  },
  {
    name: "Scale",
    blurb: "For teams approaching SOC 2 / ISO 27001 with audit needs.",
    detail: "Custom integrations, audit exports",
  },
];

const included = [
  "Continuous scanning across connected accounts",
  "Plain-language incident explanations",
  "Human-approved remediation plans",
  "Full audit log of every action taken",
];

export function PricingPage() {
  return (
    <div className="min-h-screen bg-paper">
      <SEO
        title="Pricing"
        description="Securiq pricing for teams of every size — from small teams getting AWS and GitHub visibility for the first time to companies approaching SOC 2 or ISO 27001 audits. Continuous scanning, plain-language incidents, human-approved remediation."
        path="/pricing"
      />
      <Nav />

      <main className="mx-auto max-w-6xl px-6 py-16">
        <span className="font-mono text-[11px] uppercase tracking-wider text-muted">
          Pricing
        </span>
        <h1 className="mt-2 font-display text-3xl font-semibold text-ink md:text-4xl">
          We're still shaping pricing.
        </h1>
        <p className="mt-4 max-w-xl text-ink/70">
          Securiq is pre-launch. We're onboarding a small group of early
          teams to shape pricing around real usage, not the other way
          around. Here's the shape we're planning toward — join the
          waitlist and we'll bring pricing details to you directly.
        </p>

        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {tiers.map((tier) => (
            <div
              key={tier.name}
              className={`rounded-2xl border px-6 py-8 ${
                tier.highlighted
                  ? "border-ink/20 bg-white shadow-sm"
                  : "border-ink/10 bg-white/50"
              }`}
            >
              <h2 className="font-display text-xl font-semibold text-ink">
                {tier.name}
              </h2>
              <p className="mt-2 text-sm text-ink/65">{tier.blurb}</p>
              <p className="mt-4 font-mono text-[11px] uppercase tracking-wider text-muted">
                {tier.detail}
              </p>
              <p className="mt-6 text-sm font-medium text-ink/50">
                Pricing announced at launch
              </p>
            </div>
          ))}
        </div>

        <div className="mt-16 rounded-2xl border border-ink/10 bg-white/60 px-8 py-10">
          <h3 className="font-display text-lg font-semibold text-ink">
            What's included at every tier
          </h3>
          <ul className="mt-5 grid gap-3 sm:grid-cols-2">
            {included.map((item) => (
              <li key={item} className="flex items-start gap-2.5 text-sm text-ink/75">
                <Check size={16} className="mt-0.5 flex-shrink-0 text-pine" />
                {item}
              </li>
            ))}
          </ul>
        </div>

        <div id="waitlist" className="mt-20 rounded-3xl border border-ink/10 bg-white/60 px-8 py-14 text-center md:px-16">
          <h2 className="mx-auto max-w-xl font-display text-3xl font-semibold leading-tight text-ink">
            Join the waitlist for early pricing.
          </h2>
          <p className="mx-auto mt-3 max-w-md text-ink/65">
            Early teams get input on pricing and a preferred rate at
            launch.
          </p>
          <div className="mt-8">
            <WaitlistFormExpanded />
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
