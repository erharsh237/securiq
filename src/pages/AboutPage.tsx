import { Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import { UseCases } from "../components/UseCases";
import { Roadmap } from "../components/Roadmap";
import { Team } from "../components/Team";
import { Footer } from "../components/Footer";

export function AboutPage() {
  return (
    <div className="min-h-screen bg-paper">
      <header className="border-b border-ink/8">
        <div className="mx-auto flex max-w-3xl items-center justify-between px-6 py-5">
          <Link to="/" className="flex items-center">
            <img src="/logo.png" alt="Securiq" loading="lazy" className="h-7 w-auto" />
          </Link>
          <Link
            to="/"
            className="flex items-center gap-1.5 text-sm font-medium text-ink/60 hover:text-ink"
          >
            <ArrowLeft size={15} />
            Back to home
          </Link>
        </div>
      </header>

      <main className="mx-auto max-w-3xl px-6 py-16">
        <span className="font-mono text-[11px] uppercase tracking-wider text-muted">
          About
        </span>
        <h1 className="mt-2 font-display text-3xl font-semibold text-ink">
          Why we're building Securiq
        </h1>

        <div className="prose-legal mt-10 space-y-6 text-ink/75 [&_p]:leading-relaxed">
          <p>
            Somewhere between 10 and 200 people, most startups end up in the
            same spot: real production infrastructure on AWS, real code and
            secrets flowing through GitHub, and no one whose job it is to
            watch either one from a security lens. Not from negligence — the
            team is just busy building, and security tooling built for
            enterprises with dedicated security staff doesn't fit a team where
            everyone is already wearing three hats.
          </p>
          <p>
            We started Securiq because we kept seeing the same failure mode:
            a bucket goes public, a key gets committed, a security group opens
            wider than it should — and it sits there until something goes
            wrong, because nobody's dashboard is set up to catch it, let alone
            fix it.
          </p>
          <p>
            Existing security tools are good at surfacing findings. Fewer are
            good at actually closing the loop — explaining what's wrong in
            plain language, drafting a specific fix, and only touching your
            infrastructure once a human has explicitly said yes. That loop —
            detect, reason, plan, approve, execute, verify, log — is the
            entire premise of what we're building.
          </p>
          <p>
            We're a small team building this in the open, starting narrow —
            AWS and GitHub — before expanding to the rest of the stack.
          </p>
        </div>

      </main>

      <UseCases />
      <Roadmap />
      <Team />
      <Footer />
    </div>
  );
}
