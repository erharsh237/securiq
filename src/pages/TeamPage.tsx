import { useState } from "react";
import { ChevronLeft, ChevronRight, Quote } from "lucide-react";
import { Nav } from "../components/Nav";
import { Footer } from "../components/Footer";
import { SEO } from "../components/SEO";

interface TeamMember {
  initial: string;
  name: string;
  role: string;
  quote: string;
  bio: string;
  accent: "pine" | "coral" | "sage";
}

const team: TeamMember[] = [
  {
    initial: "H",
    name: "Harsh",
    role: "Founder, CEO",
    quote: "Security shouldn't be a tab nobody opens.",
    bio: "Sets the product and company direction, obsessed with making Securiq something teams actually want to open — not another dashboard that gets ignored.",
    accent: "pine",
  },
  {
    initial: "K",
    name: "Kanishka",
    role: "Co-Founder, CTO",
    quote: "The model should draft the fix. You should always pull the trigger.",
    bio: "Designs the AI systems and architecture behind detection, reasoning, and remediation — with human approval as a hard boundary, not a setting.",
    accent: "coral",
  },
  {
    initial: "S",
    name: "Shruti",
    role: "Co-Founder, COO",
    quote: "Every early team we talk to shapes what we build next.",
    bio: "Runs operations and customer relationships, making sure the roadmap stays grounded in what real early-access teams actually need.",
    accent: "sage",
  },
];

const accentStyles = {
  pine: {
    avatar: "bg-pine text-paper",
    ring: "ring-pine/30",
    tag: "border-pine/25 bg-pine/8 text-pine",
    glow: "bg-pine/10",
  },
  coral: {
    avatar: "bg-coral text-paper",
    ring: "ring-coral/30",
    tag: "border-coral/25 bg-coral/8 text-coral",
    glow: "bg-coral/10",
  },
  sage: {
    avatar: "bg-sage-dark text-pine-dark",
    ring: "ring-sage-dark/40",
    tag: "border-pine/20 bg-sage/40 text-pine-dark",
    glow: "bg-sage-dark/20",
  },
} as const;

export function TeamPage() {
  const [active, setActive] = useState(0);
  const member = team[active];
  const accent = accentStyles[member.accent];

  function go(delta: number) {
    setActive((prev) => (prev + delta + team.length) % team.length);
  }

  return (
    <div className="min-h-screen bg-paper">
      <SEO
        title="Team"
        description="Meet the small team building Securiq: founders working on making security something teams actually want to open, with AI-drafted fixes and human approval as a hard boundary."
        path="/team"
      />
      <Nav />

      <main className="mx-auto max-w-5xl px-6 py-16">
        <span className="font-mono text-[11px] uppercase tracking-wider text-muted">
          Who's building this
        </span>
        <h1 className="mt-2 font-display text-3xl font-semibold text-ink md:text-4xl">
          Meet the team
        </h1>
        <p className="mt-4 max-w-xl text-ink/70">
          We're a small team building Securiq in the open. Here's who's
          behind it.
        </p>

        {/* Spotlight carousel */}
        <div className="relative mt-14">
          <div
            key={member.name}
            className="relative overflow-hidden rounded-3xl border border-ink/10 bg-white/70 p-8 md:p-12"
            style={{ animation: "fadeIn 0.35s ease-out" }}
          >
            <div className={`pointer-events-none absolute -right-16 -top-16 h-56 w-56 rounded-full blur-3xl ${accent.glow}`} />

            <div className="relative grid gap-8 md:grid-cols-[auto_1fr] md:items-start">
              <div
                className={`flex h-24 w-24 flex-shrink-0 items-center justify-center rounded-2xl font-display text-4xl font-semibold ring-4 ${accent.avatar} ${accent.ring}`}
              >
                {member.initial}
              </div>

              <div>
                <div className="flex flex-wrap items-center gap-3">
                  <h2 className="font-display text-2xl font-semibold text-ink">
                    {member.name}
                  </h2>
                  <span
                    className={`inline-flex items-center rounded-full border px-3 py-1 font-mono text-[11px] uppercase tracking-wider ${accent.tag}`}
                  >
                    {member.role}
                  </span>
                </div>

                <div className="mt-5 flex gap-3">
                  <Quote size={20} className="mt-0.5 flex-shrink-0 text-ink/20" strokeWidth={2} />
                  <p className="font-display text-lg italic leading-snug text-ink/80">
                    {member.quote}
                  </p>
                </div>

                <p className="mt-5 max-w-xl text-sm leading-relaxed text-ink/65">
                  {member.bio}
                </p>
              </div>
            </div>
          </div>

          {/* Carousel controls */}
          <div className="mt-6 flex items-center justify-between">
            <button
              onClick={() => go(-1)}
              aria-label="Previous team member"
              className="flex h-10 w-10 items-center justify-center rounded-full border border-ink/15 bg-white/60 text-ink/60 transition-colors hover:border-ink/30 hover:text-ink"
            >
              <ChevronLeft size={18} />
            </button>

            <div className="flex items-center gap-4">
              {team.map((m, i) => {
                const isActive = i === active;
                const dotAccent = accentStyles[m.accent];
                return (
                  <button
                    key={m.name}
                    onClick={() => setActive(i)}
                    className="group flex flex-col items-center gap-2"
                    aria-label={`Show ${m.name}`}
                  >
                    <span
                      className={`flex h-10 w-10 items-center justify-center rounded-full font-display text-sm font-semibold transition-all ${
                        isActive
                          ? `${dotAccent.avatar} scale-110 shadow-md`
                          : "bg-ink/5 text-ink/40 group-hover:bg-ink/10"
                      }`}
                    >
                      {m.initial}
                    </span>
                    <span
                      className={`h-1 w-1 rounded-full transition-colors ${
                        isActive ? "bg-ink" : "bg-ink/15"
                      }`}
                    />
                  </button>
                );
              })}
            </div>

            <button
              onClick={() => go(1)}
              aria-label="Next team member"
              className="flex h-10 w-10 items-center justify-center rounded-full border border-ink/15 bg-white/60 text-ink/60 transition-colors hover:border-ink/30 hover:text-ink"
            >
              <ChevronRight size={18} />
            </button>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
