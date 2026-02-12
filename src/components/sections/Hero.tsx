"use client";

import { useState, useCallback, useRef, useEffect } from "react";
import { HERO, HERO_MODES } from "@/constants/content";
import { RING_COLORS } from "@/constants/brand-colors";
import { Button } from "@/components/ui/button";
import dynamic from "next/dynamic";
import type { Mode } from "@/components/shared/search-universe/SearchUniverseRing";

const SearchUniverse3D = dynamic(
  () =>
    import("@/components/shared/search-universe/SearchUniverse3D").then(
      (mod) => mod.SearchUniverse3D
    ),
  { ssr: false }
);

const MODE_KEYS: Mode[] = ["SEO", "AEO", "GEO"];

export function Hero() {
  const [mode, setMode] = useState<Mode>("SEO");
  const [contextVisible, setContextVisible] = useState(true);
  const [tooltip, setTooltip] = useState<{
    mode: Mode;
    x: number;
    y: number;
  } | null>(null);
  const tabRefs = useRef<(HTMLButtonElement | null)[]>([]);

  const timeoutRef = useRef<ReturnType<typeof setTimeout>>(undefined);

  const handleModeChange = useCallback((newMode: Mode) => {
    setMode((prev) => {
      if (newMode === prev) return prev;
      setContextVisible(false);
      clearTimeout(timeoutRef.current);
      timeoutRef.current = setTimeout(() => {
        setContextVisible(true);
      }, 200);
      return newMode;
    });
  }, []);

  useEffect(() => {
    return () => clearTimeout(timeoutRef.current);
  }, []);

  const handleTabKeyDown = useCallback(
    (e: React.KeyboardEvent<HTMLButtonElement>, currentIndex: number) => {
      let nextIndex: number | null = null;
      if (e.key === "ArrowRight") {
        nextIndex = (currentIndex + 1) % MODE_KEYS.length;
      } else if (e.key === "ArrowLeft") {
        nextIndex = (currentIndex - 1 + MODE_KEYS.length) % MODE_KEYS.length;
      }
      if (nextIndex !== null) {
        e.preventDefault();
        handleModeChange(MODE_KEYS[nextIndex]);
        tabRefs.current[nextIndex]?.focus();
      }
    },
    [handleModeChange]
  );

  const handleNodeHover = useCallback(
    (hoveredMode: Mode, screenPos: { x: number; y: number }) => {
      setTooltip({ mode: hoveredMode, x: screenPos.x, y: screenPos.y });
    },
    []
  );

  const handleNodeLeave = useCallback(() => {
    setTooltip(null);
  }, []);

  const modeData = HERO_MODES[mode];
  const activeColor = RING_COLORS[mode];

  return (
    <section className="relative h-[calc(100svh-4rem)] overflow-hidden">
      {/* 3D Scene — full bleed background, right-aligned via camera offset */}
      <div className="absolute inset-0">
        <SearchUniverse3D
          className="h-full w-full"
          mode={mode}
          onNodeHover={handleNodeHover}
          onNodeLeave={handleNodeLeave}
        />
      </div>

      {/* Left fade for text readability on mobile */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-r from-background via-background/80 to-transparent lg:via-background/40" />

      {/* Text content — pointer-events-none so 3D canvas receives drag/hover */}
      <div className="pointer-events-none relative z-10 mx-auto flex h-full max-w-7xl items-center px-6 lg:px-8">
        <div className="pointer-events-auto flex max-w-xl flex-col items-start">
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
          <p className="mt-6 max-w-lg text-lg leading-relaxed text-muted-foreground break-keep sm:text-xl">
            {HERO.subtitle.split("\n").map((line, i) => (
              <span key={i}>
                {line}
                {i === 0 && <br />}
              </span>
            ))}
          </p>

          {/* Mode Toggle */}
          <div className="mt-8 flex gap-2" role="tablist" aria-label="검색 최적화 모드 선택">
            {MODE_KEYS.map((key, index) => {
              const isActive = mode === key;
              const color = RING_COLORS[key];
              const data = HERO_MODES[key];
              return (
                <button
                  key={key}
                  ref={(el) => { tabRefs.current[index] = el; }}
                  role="tab"
                  aria-selected={isActive}
                  aria-label={data.ariaLabel}
                  aria-controls="hero-mode-panel"
                  tabIndex={isActive ? 0 : -1}
                  onClick={() => handleModeChange(key)}
                  onKeyDown={(e) => handleTabKeyDown(e, index)}
                  className={`flex flex-col items-center gap-0.5 rounded-lg border px-4 py-2.5 transition-all ${
                    isActive
                      ? "border-current/50 bg-current/10"
                      : "border-border/50 bg-card/50 text-muted-foreground hover:text-foreground"
                  }`}
                  style={isActive ? { color } : undefined}
                >
                  <span className="font-mono text-xs tracking-wider">{data.label}</span>
                  <span className={`text-xs ${isActive ? "" : "opacity-60"}`}>
                    {data.shortLabel}
                  </span>
                </button>
              );
            })}
          </div>

          {/* Active mode accent line */}
          <div
            className="mt-1 h-0.5 rounded-full transition-all duration-500"
            style={{ backgroundColor: activeColor, width: "4rem", opacity: 0.6 }}
          />

          {/* Context panel */}
          <div
            className="h-[3.5rem] flex items-center"
            role="tabpanel"
            id="hero-mode-panel"
            aria-live="polite"
          >
            <p
              className="text-sm text-muted-foreground break-keep transition-opacity duration-200"
              style={{ opacity: contextVisible ? 1 : 0 }}
            >
              {modeData.contextLine}
            </p>
          </div>

          <Button size="lg" className="mt-6 text-lg px-8 py-6" asChild>
            <a href="#final-cta">{HERO.cta}</a>
          </Button>

          <div className="mt-8 flex items-center gap-2 rounded-full border border-border/50 bg-card/50 px-4 py-2">
            <div className="size-1.5 shrink-0 rounded-full bg-primary animate-pulse" />
            <p className="text-sm text-muted-foreground">
              {HERO.transitionHook}
            </p>
          </div>
        </div>
      </div>

      {/* Tooltip overlay */}
      {tooltip && (
        <div
          className="pointer-events-none fixed z-50 rounded-md border border-border/50 bg-card/90 px-3 py-1.5 text-xs text-foreground backdrop-blur-sm"
          style={{
            left: tooltip.x,
            top: tooltip.y - 32,
            transform: "translateX(-50%)",
          }}
        >
          {HERO_MODES[tooltip.mode].shortLabel}
        </div>
      )}
    </section>
  );
}
