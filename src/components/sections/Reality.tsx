import { REALITY } from "@/constants/content";


export function Reality() {
  return (
    <section className="relative scroll-mt-20 min-h-[80svh] flex flex-col justify-center py-20 px-6 border-y border-border/30" aria-labelledby="reality-heading">
      <div className="absolute inset-0 bg-gradient-to-br from-space-blue/8 via-brand-purple/5 to-transparent" />
      <div className="relative mx-auto max-w-4xl">
        <div className="text-center">
          <h2 id="reality-heading" className="text-3xl font-bold leading-tight tracking-tight break-keep sm:text-4xl">
            {REALITY.title}
          </h2>
          <p className="mt-4 text-lg font-light leading-relaxed text-muted-foreground break-keep">
            {REALITY.subtitle}
          </p>
        </div>

        {REALITY.pain && (
          <div className="mt-8 text-center">
            <p className="text-lg leading-relaxed text-foreground/90 break-keep whitespace-pre-line">
              {REALITY.pain}
            </p>
          </div>
        )}

        <div className="mt-16 grid gap-8 sm:grid-cols-3">
          {REALITY.dataCards.map((card) => (
            <div
              key={card.stat}
              className="rounded-xl border border-border bg-card p-6 text-center"
            >
              <p className="text-4xl font-bold text-gradient">{card.stat}</p>
              <p className="mt-3 text-base font-light leading-relaxed text-muted-foreground break-keep">
                {card.description}
              </p>
            </div>
          ))}
        </div>

        <div className="mt-10 text-center">
          <p className="font-light text-muted-foreground leading-relaxed break-keep whitespace-pre-line">
            {REALITY.supporting}
          </p>
        </div>

      </div>
    </section>
  );
}
