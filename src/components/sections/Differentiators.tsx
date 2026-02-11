import { DIFFERENTIATORS } from "@/constants/content";

export function Differentiators() {
  return (
    <section id="differentiators" className="relative scroll-mt-20 py-24 px-6 border-y border-border/30">
      <div className="absolute inset-0 bg-gradient-to-tr from-space-blue/8 via-transparent to-brand-purple/8" />
      <div className="relative mx-auto max-w-4xl">
        <div className="text-center">
          <h2 className="text-3xl font-bold leading-tight tracking-tight break-keep sm:text-4xl">
            {DIFFERENTIATORS.title}
          </h2>
          <p className="mt-4 leading-relaxed text-muted-foreground break-keep">
            {DIFFERENTIATORS.subtitle}
          </p>
        </div>

        <div className="mt-12 overflow-hidden rounded-xl border border-border bg-card">
          {/* Table header - Hidden on mobile, use visual indicators instead */}
          <div className="hidden sm:grid grid-cols-2 bg-card border-b border-border">
            <div className="border-r border-border px-6 py-4 text-sm font-semibold text-muted-foreground">
              기존 방식
            </div>
            <div className="px-6 py-4 text-sm font-semibold text-gradient">
              ABEL AI
            </div>
          </div>

          {/* Table rows - Stack on mobile */}
          {DIFFERENTIATORS.comparisons.map((row, i) => (
            <div
              key={i}
              className="grid grid-cols-1 sm:grid-cols-2 border-b border-border last:border-b-0"
            >
              <div className="px-6 py-4 text-sm text-muted-foreground/70 line-through decoration-muted-foreground/40 sm:border-r border-border">
                <span className="inline-block sm:hidden text-xs font-semibold text-muted-foreground mb-1">기존 방식</span>
                <span className="block">{row.before}</span>
              </div>
              <div className="px-6 py-4 text-sm font-medium bg-primary/5">
                <span className="inline-block sm:hidden text-xs font-semibold text-gradient mb-1">ABEL AI</span>
                <span className="block">{row.after}</span>
              </div>
            </div>
          ))}
        </div>

        <p className="mt-10 text-center text-sm leading-relaxed text-muted-foreground break-keep whitespace-pre-line">
          {DIFFERENTIATORS.supporting}
        </p>

        <div className="mt-12 flex justify-center">
          <div className="inline-flex items-center gap-2 rounded-full border border-border/50 bg-card/50 px-4 py-2">
            <div className="size-1.5 rounded-full bg-primary animate-pulse" />
            <p className="text-sm text-muted-foreground">
              {DIFFERENTIATORS.transitionHook}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
