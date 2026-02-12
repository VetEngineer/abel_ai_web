import { Check, X } from "lucide-react";
import { QUALIFICATION } from "@/constants/content";
import { TransitionHook } from "@/components/shared/TransitionHook";

export function Qualification() {
  return (
    <section className="relative scroll-mt-20 py-24 px-6 border-y border-border/30" aria-labelledby="qualification-heading">
      <div className="absolute inset-0 bg-gradient-to-tr from-space-blue/8 via-transparent to-brand-purple/8" />
      <div className="relative mx-auto max-w-4xl">
        <h2 id="qualification-heading" className="text-center text-4xl font-bold leading-tight tracking-tight break-keep sm:text-5xl">
          {QUALIFICATION.title}
        </h2>

        <div className="mt-16 grid gap-12 md:grid-cols-2">
          {/* Fit For */}
          <div>
            <h3 className="text-lg font-semibold text-primary">
              {QUALIFICATION.fitForTitle}
            </h3>
            <ul className="mt-6 space-y-4">
              {QUALIFICATION.fitFor.map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <Check className="mt-0.5 size-5 shrink-0 text-primary" />
                  <span className="text-base leading-relaxed text-foreground/90 break-keep">
                    {item}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          {/* Not For */}
          <div>
            <h3 className="text-lg font-semibold text-muted-foreground/70">
              {QUALIFICATION.notForTitle}
            </h3>
            <ul className="mt-6 space-y-4">
              {QUALIFICATION.notFor.map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <X className="mt-0.5 size-5 shrink-0 text-muted-foreground/50" />
                  <span className="text-base leading-relaxed text-muted-foreground/70 break-keep">
                    {item}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <TransitionHook text={QUALIFICATION.transitionHook} />
      </div>
    </section>
  );
}
