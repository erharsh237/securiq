export function Problem() {
  return (
    <section className="border-y border-ink/8 bg-white/50">
      <div className="mx-auto max-w-6xl px-6 py-20">
        <div className="grid gap-10 md:grid-cols-3">
          <div>
            <h2 className="font-display text-2xl font-semibold leading-snug text-ink">
              You have production infrastructure.
              <br />
              You don't have a security team.
            </h2>
          </div>
          <p className="text-ink/70 leading-relaxed">
            Somewhere between 10 and 200 people, most startups end up here: real
            AWS accounts, real customer data, real GitHub repos — and zero
            dedicated security headcount. The tools built for enterprise security
            teams assume someone's watching the dashboard full time. No one is.
          </p>
          <p className="text-ink/70 leading-relaxed">
            So misconfigurations sit unnoticed. A bucket goes public. A key gets
            committed. A security group opens wider than it should. Not from
            negligence — just from nobody's job being to catch it.
          </p>
        </div>
      </div>
    </section>
  );
}
