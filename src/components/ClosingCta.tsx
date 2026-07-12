import { WaitlistFormExpanded } from "./WaitlistFormExpanded";

export function ClosingCta() {
  return (
    <section id="waitlist-full" className="mx-auto max-w-6xl px-6 py-24">
      <div className="rounded-3xl border border-ink/10 bg-white/60 px-4 py-10 text-center sm:px-8 sm:py-14 md:px-16">
        <h2 className="mx-auto max-w-xl font-display text-3xl font-semibold leading-tight text-ink">
          Be first in when we open access.
        </h2>
        <p className="mx-auto mt-3 max-w-md text-ink/65">
          We're onboarding a small group of early teams before general
          availability, and shaping v1 around what they tell us.
        </p>
        <div className="mt-8">
          <WaitlistFormExpanded />
        </div>
      </div>
    </section>
  );
}
