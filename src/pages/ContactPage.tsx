import { Mail, ShieldAlert, TrendingUp } from "lucide-react";
import { Nav } from "../components/Nav";
import { Footer } from "../components/Footer";

const channels = [
  {
    icon: Mail,
    label: "General & sales",
    email: "hello@securiq.co",
    detail: "Questions about the product, waitlist, or a demo.",
  },
  {
    icon: ShieldAlert,
    label: "Security & disclosure",
    email: "security@securiq.co",
    detail: "Report a vulnerability or ask about our security posture.",
  },
  {
    icon: TrendingUp,
    label: "Investors",
    email: "investors@securiq.co",
    detail: "Investor inquiries and partnership conversations.",
  },
];

export function ContactPage() {
  return (
    <div className="min-h-screen bg-paper">
      <Nav />

      <main className="mx-auto max-w-3xl px-6 py-16">
        <span className="font-mono text-[11px] uppercase tracking-wider text-muted">
          Contact
        </span>
        <h1 className="mt-2 font-display text-3xl font-semibold text-ink">
          Get in touch
        </h1>
        <p className="mt-4 max-w-xl text-ink/70">
          We're a small team, so email is the fastest way to reach us. Pick
          the right inbox below and we'll get back to you personally.
        </p>

        <div className="mt-10 grid gap-4">
          {channels.map(({ icon: Icon, label, email, detail }) => (
            <a
              key={email}
              href={`mailto:${email}`}
              className="flex items-start gap-4 rounded-2xl border border-ink/10 bg-white/60 px-6 py-5 transition-colors hover:border-ink/20 hover:bg-white"
            >
              <div className="mt-0.5 flex h-9 w-9 flex-shrink-0 items-center justify-center rounded-full bg-ink/5">
                <Icon size={17} className="text-ink/70" />
              </div>
              <div>
                <p className="font-display text-base font-semibold text-ink">
                  {label}
                </p>
                <p className="mt-0.5 text-sm text-ink/60">{detail}</p>
                <p className="mt-1.5 text-sm font-medium text-pine">{email}</p>
              </div>
            </a>
          ))}
        </div>
      </main>

      <Footer />
    </div>
  );
}
