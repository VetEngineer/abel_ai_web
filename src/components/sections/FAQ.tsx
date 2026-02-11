"use client";

import { useState } from "react";
import { FAQ_ITEMS, FAQ_SECTION } from "@/constants/content";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const INITIAL_COUNT = 6;

export function FAQ() {
  const [showAll, setShowAll] = useState(false);
  const visibleItems = showAll ? FAQ_ITEMS : FAQ_ITEMS.slice(0, INITIAL_COUNT);
  const remainingCount = FAQ_ITEMS.length - INITIAL_COUNT;

  return (
    <section id="faq" className="relative scroll-mt-20 py-24 px-6">
      <div className="absolute inset-0 bg-gradient-to-br from-brand-purple/5 via-transparent to-space-blue/5" />
      <div className="relative mx-auto max-w-3xl">
        <h2 className="text-center text-4xl font-bold leading-tight tracking-tight break-keep sm:text-5xl">
          {FAQ_SECTION.title}
        </h2>
        <p className="mx-auto mt-6 max-w-xl text-center text-xl leading-relaxed text-muted-foreground break-keep">
          {FAQ_SECTION.subtitle}
        </p>

        <Accordion type="single" collapsible className="mt-12">
          {visibleItems.map((item, i) => (
            <AccordionItem key={i} value={`faq-${i}`}>
              <AccordionTrigger className="text-base text-left break-keep">
                {item.question}
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground leading-relaxed break-keep">
                {item.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>

        {!showAll && remainingCount > 0 && (
          <div className="mt-8 flex justify-center">
            <button
              type="button"
              onClick={() => setShowAll(true)}
              className="text-sm font-medium text-primary hover:text-primary/80 transition-colors"
            >
              더 많은 질문 보기 ({remainingCount}개)
            </button>
          </div>
        )}
      </div>
    </section>
  );
}
