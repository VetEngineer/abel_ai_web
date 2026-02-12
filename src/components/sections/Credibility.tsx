import { CREDIBILITY } from "@/constants/content";

export function Credibility() {
  return (
    <section id="credibility" className="relative scroll-mt-20 py-24 px-6" aria-labelledby="credibility-heading">
      <div className="absolute inset-0 bg-gradient-to-bl from-brand-purple/5 via-transparent to-space-blue/5" />
      <div className="relative mx-auto max-w-4xl">
        <div className="text-center">
          <h2 id="credibility-heading" className="text-4xl font-bold leading-tight tracking-tight break-keep sm:text-5xl">
            {CREDIBILITY.title}
          </h2>
          <p className="mx-auto mt-6 max-w-2xl text-xl leading-relaxed text-muted-foreground break-keep whitespace-pre-line">
            {CREDIBILITY.subtitle}
          </p>
        </div>

        {/* Anti-hype quotes */}
        <div className="mx-auto mt-12 max-w-lg space-y-3 text-center">
          {CREDIBILITY.antiHype.map((quote) => (
            <p
              key={quote}
              className="text-lg text-muted-foreground/50 line-through decoration-muted-foreground/30"
            >
              {quote}
            </p>
          ))}
          <p className="mt-6 text-base leading-relaxed text-foreground/80 break-keep whitespace-pre-line">
            {CREDIBILITY.antiHypeClosing}
          </p>
        </div>

        {/* Principles grid */}
        <div className="mt-16 grid gap-8 md:grid-cols-3">
          {CREDIBILITY.principles.map((principle) => (
            <div
              key={principle.title}
              className="rounded-xl border border-border bg-card p-8"
            >
              <p className="text-4xl font-bold text-gradient">
                {principle.stat}
              </p>
              <p className="mt-1 text-xs text-muted-foreground/70">
                {principle.statLabel}
              </p>
              <h3 className="mt-6 text-lg font-semibold break-keep">
                {principle.title}
              </h3>
              <p className="mt-3 text-base leading-relaxed text-muted-foreground break-keep whitespace-pre-line">
                {principle.description}
              </p>
            </div>
          ))}
        </div>

        <div className="mt-16 flex justify-center">
          <div className="inline-flex items-center gap-2 rounded-full border border-border/50 bg-card/50 px-4 py-2">
            <div className="size-1.5 rounded-full bg-primary animate-pulse" />
            <p className="text-sm text-muted-foreground">
              {CREDIBILITY.transitionHook}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
