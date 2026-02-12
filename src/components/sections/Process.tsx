import { PROCESS } from "@/constants/content";
import { TransitionHook } from "@/components/shared/TransitionHook";

export function Process() {
  return (
    <section id="process" className="relative scroll-mt-20 py-24 px-6">
      <div className="absolute inset-0 bg-gradient-to-bl from-brand-purple/5 via-transparent to-space-blue/5" />
      <div className="relative mx-auto max-w-4xl">
        <h2 className="text-center text-3xl font-bold leading-tight tracking-tight break-keep sm:text-4xl">
          {PROCESS.title}
        </h2>
        <p className="mx-auto mt-4 max-w-xl text-center leading-relaxed text-muted-foreground break-keep">
          {PROCESS.subtitle}
        </p>

        <div className="mt-16 flex flex-col gap-0">
          {PROCESS.steps.map((step, i) => (
            <div key={step.step} className="relative flex gap-6">
              {/* Timeline line */}
              <div className="flex flex-col items-center">
                <div className="flex size-12 shrink-0 items-center justify-center rounded-full bg-primary text-lg font-bold text-primary-foreground">
                  {step.step}
                </div>
                {i < PROCESS.steps.length - 1 && (
                  <div className="h-full w-px bg-border" />
                )}
              </div>

              {/* Content */}
              <div className="flex-1 pb-16 pt-1">
                <div className="flex flex-wrap items-center gap-2">
                  <h3 className="text-xl font-bold break-keep">
                    {step.title}
                  </h3>
                  {step.free && (
                    <span className="inline-flex items-center rounded-full bg-primary/15 px-3 py-1 text-sm font-semibold text-primary glow-blue">
                      무료
                    </span>
                  )}
                </div>
                <p className="mt-2 leading-relaxed text-muted-foreground break-keep whitespace-pre-line">
                  {step.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        <TransitionHook text={PROCESS.transitionHook} className="mt-8" />
      </div>
    </section>
  );
}
