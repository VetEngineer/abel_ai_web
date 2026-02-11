import { INSIGHT } from "@/constants/content";

export function Insight() {
  return (
    <section className="relative scroll-mt-20 py-24 px-6">
      <div className="absolute inset-0 bg-gradient-to-bl from-brand-purple/5 via-transparent to-space-blue/5" />
      <div className="relative mx-auto max-w-6xl">
        <div className="text-center">
          <h2 className="text-3xl font-bold leading-tight tracking-tight break-keep sm:text-4xl">
            {INSIGHT.title}
          </h2>
          <p className="mx-auto mt-4 max-w-2xl leading-relaxed text-muted-foreground break-keep whitespace-pre-line">
            {INSIGHT.subtitle}
          </p>
        </div>

        <div className="mt-16 grid gap-8 md:grid-cols-3">
          {INSIGHT.cards.map((card) => (
            <div
              key={card.term}
              className="rounded-xl border border-border bg-card p-8 transition-all duration-300 hover:border-primary/50 hover:glow-blue"
            >
              <p className="text-lg font-semibold leading-relaxed break-keep">
                {card.result}
              </p>
              <p className="mt-4 text-sm leading-relaxed text-muted-foreground break-keep whitespace-pre-line">
                {card.description}
              </p>
              <p className="mt-6 text-xs font-mono text-muted-foreground/70">
                {card.term}
              </p>
            </div>
          ))}
        </div>

        <p className="mx-auto mt-12 max-w-xl text-center font-medium leading-relaxed break-keep whitespace-pre-line">
          {INSIGHT.integration}
        </p>

        <div className="mt-12 flex justify-center">
          <div className="inline-flex items-center gap-2 rounded-full border border-border/50 bg-card/50 px-4 py-2">
            <div className="size-1.5 rounded-full bg-primary animate-pulse" />
            <p className="text-sm text-muted-foreground">
              {INSIGHT.transitionHook}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
