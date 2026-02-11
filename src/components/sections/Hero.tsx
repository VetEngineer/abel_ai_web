import { HERO } from "@/constants/content";
import { Button } from "@/components/ui/button";
import { SplineScene } from "@/components/shared/SplineScene";

export function Hero() {
  return (
    <section className="relative min-h-screen overflow-hidden">
      <div className="relative mx-auto grid min-h-screen max-w-7xl items-center gap-0 px-6 lg:grid-cols-2 lg:px-8">
        {/* Text content */}
        <div className="relative z-10 flex flex-col items-start py-20 lg:py-0">
          <h1 className="text-4xl font-bold leading-tight tracking-tight break-keep sm:text-5xl lg:text-6xl">
            {HERO.title.split("\n").map((line, i) => (
              <span key={i} className="block">
                {i === 0 ? (
                  <span className="text-gradient">{line}</span>
                ) : (
                  line
                )}
              </span>
            ))}
          </h1>
          <p className="mt-6 max-w-xl text-lg leading-relaxed text-muted-foreground break-keep sm:text-xl">
            {HERO.subtitle.split("\n").map((line, i) => (
              <span key={i}>
                {line}
                {i === 0 && <br />}
              </span>
            ))}
          </p>

          <Button size="lg" className="mt-10 text-lg px-8 py-6" asChild>
            <a href="#final-cta">{HERO.cta}</a>
          </Button>

          <div className="mt-12 flex items-center gap-2 rounded-full border border-border/50 bg-card/50 px-4 py-2">
            <div className="size-1.5 shrink-0 rounded-full bg-primary animate-pulse" />
            <p className="text-sm text-muted-foreground">
              {HERO.transitionHook}
            </p>
          </div>
        </div>

        {/* 3D Scene */}
        <div className="absolute inset-0 lg:relative lg:inset-auto lg:h-[37.5rem]">
          <SplineScene className="h-full w-full" />
          <div className="pointer-events-none absolute inset-0 bg-gradient-to-r from-background/90 via-background/50 to-transparent lg:hidden" />
        </div>
      </div>
    </section>
  );
}
