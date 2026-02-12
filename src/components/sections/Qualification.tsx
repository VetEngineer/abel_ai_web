import { Check, X } from "lucide-react";
import { QUALIFICATION } from "@/constants/content";

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
              이런 분에게 적합합니다
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
              이런 경우에는 맞지 않습니다
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

        <div className="mt-16 flex justify-center">
          <div className="inline-flex items-center gap-2 rounded-full border border-border/50 bg-card/50 px-4 py-2">
            <div className="size-1.5 rounded-full bg-primary animate-pulse" />
            <p className="text-sm text-muted-foreground">
              {QUALIFICATION.transitionHook}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
