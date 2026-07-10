import { Link } from "react-router-dom";
import { HeroIllustration } from "./HeroIllustration";
import { IncidentLifecycleCard } from "./IncidentLifecycleCard";
import { WaitlistForm } from "./WaitlistForm";

export function Hero() {
  return (
    <section className="mx-auto max-w-6xl px-6 pb-20 pt-16 md:pt-24">
      <div className="grid items-center gap-14 md:grid-cols-2">
        <div>
          <span className="inline-flex items-center rounded-full border border-pine/25 bg-pine/8 px-3 py-1 font-mono text-[11px] uppercase tracking-wider text-pine">
            Early access opening soon
          </span>

          <h1 className="mt-5 font-display text-[2.75rem] font-semibold leading-[1.08] tracking-tight text-ink md:text-[3.4rem]">
            The security engineer
            <br />
            you haven't <span className="text-coral">hired</span> yet.
          </h1>

          <p className="mt-5 max-w-md text-lg leading-relaxed text-ink/70">
            Securiq watches your AWS and GitHub for misconfigurations and leaked
            secrets, drafts the fix, and waits for your sign-off before touching
            anything. Built for teams running real infrastructure without a
            security hire.
          </p>

          <div className="mt-8" id="waitlist">
            <WaitlistForm />
            <p className="mt-3 text-sm text-ink/60">
              No credit card. We'll email you when your spot opens up.{" "}
              <Link to="/privacy" className="underline hover:text-ink/70">
                Privacy Policy
              </Link>
              .
            </p>
          </div>
        </div>

        <div className="relative flex justify-center md:justify-end">
          <div className="pointer-events-none absolute inset-0 -z-10 flex items-center justify-center opacity-90">
            <HeroIllustration />
          </div>
          <IncidentLifecycleCard />
        </div>
      </div>
    </section>
  );
}
