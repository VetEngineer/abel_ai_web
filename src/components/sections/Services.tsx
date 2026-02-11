"use client";

import { ChevronDown } from "lucide-react";
import { SERVICES, SERVICES_SECTION } from "@/constants/content";
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible";

export function Services() {
  return (
    <section id="services" className="relative scroll-mt-20 py-24 px-6 border-y border-border/30">
      <div className="absolute inset-0 bg-gradient-to-tr from-space-blue/8 via-transparent to-brand-purple/8" />
      <div className="relative mx-auto max-w-6xl">
        <h2 className="text-center text-4xl font-bold leading-tight tracking-tight break-keep sm:text-5xl">
          {SERVICES_SECTION.title}
        </h2>

        <div className="mt-20 grid gap-8 md:grid-cols-3">
          {SERVICES.map((service) => (
            <div
              key={service.id}
              className="group rounded-xl border border-border bg-card p-8 transition-all duration-300 hover:border-primary/50 hover:glow-blue"
            >
              <div className="mb-4">
                <h3 className="text-2xl font-bold break-keep text-gradient">
                  {service.title}
                </h3>
                <p className="mt-3 text-lg font-semibold text-foreground/90 break-keep">
                  {service.benefit}
                </p>
              </div>

              <p className="text-base leading-relaxed text-muted-foreground break-keep">
                {service.description}
              </p>

              <Collapsible className="mt-8">
                <CollapsibleTrigger className="flex items-center gap-1.5 text-sm font-medium text-primary hover:text-primary/80 transition-colors [&[data-state=open]>svg]:rotate-180">
                  핵심 작업 보기
                  <ChevronDown className="size-4 transition-transform duration-200" />
                </CollapsibleTrigger>
                <CollapsibleContent>
                  <ul className="mt-3 space-y-2">
                    {service.tasks.map((task) => (
                      <li
                        key={task}
                        className="flex items-start gap-2 text-sm text-muted-foreground"
                      >
                        <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-primary" />
                        {task}
                      </li>
                    ))}
                  </ul>
                </CollapsibleContent>
              </Collapsible>
            </div>
          ))}
        </div>

        <div className="mt-16 flex justify-center">
          <div className="inline-flex items-center gap-2 rounded-full border border-border/50 bg-card/50 px-4 py-2">
            <div className="size-1.5 rounded-full bg-primary animate-pulse" />
            <p className="text-sm text-muted-foreground">
              {SERVICES_SECTION.transitionHook}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
