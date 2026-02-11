"use client";

import { FAQ_ITEMS, FAQ_SECTION } from "@/constants/content";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export function FAQ() {
  return (
    <section id="faq" className="relative scroll-mt-20 py-24 px-6">
      <div className="absolute inset-0 bg-gradient-to-br from-brand-purple/5 via-transparent to-space-blue/5" />
      <div className="relative mx-auto max-w-3xl">
        <h2 className="text-center text-3xl font-bold tracking-tight break-keep sm:text-4xl">
          {FAQ_SECTION.title}
        </h2>
        <p className="mx-auto mt-4 max-w-xl text-center leading-relaxed text-muted-foreground">
          {FAQ_SECTION.subtitle}
        </p>

        <Accordion type="single" collapsible className="mt-12">
          {FAQ_ITEMS.map((item, i) => (
            <AccordionItem key={i} value={`faq-${i}`}>
              <AccordionTrigger className="text-base text-left">
                {item.question}
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground leading-relaxed break-keep">
                {item.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
}
