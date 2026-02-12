import { FINAL_CTA } from "@/constants/content";
import { Button } from "@/components/ui/button";

export function FinalCTA() {
  return (
    <section
      id="final-cta"
      className="scroll-mt-20 relative py-24 px-6 overflow-hidden"
    >
      {/* Gradient background */}
      <div className="absolute inset-0 bg-gradient-to-br from-space-blue/20 via-brand-purple/10 to-space-blue/20" />
      <div className="pointer-events-none absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-[400px] w-[400px] rounded-full bg-brand-purple/10 blur-[100px]" />

      <div className="relative mx-auto max-w-2xl text-center">
        <h2 className="text-3xl font-bold leading-tight tracking-tight break-keep sm:text-4xl md:text-5xl">
          {FINAL_CTA.title}
        </h2>
        <p className="mt-4 text-lg leading-relaxed text-muted-foreground break-keep whitespace-pre-line">
          {FINAL_CTA.subtitle}
        </p>

        <div className="mx-auto mt-8 max-w-md">
          <ul className="space-y-3">
            {FINAL_CTA.checklist.map((item) => (
              <li key={item} className="flex items-start gap-3 text-sm">
                <svg
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  className="mt-0.5 size-5 shrink-0 text-primary"
                >
                  <path
                    fillRule="evenodd"
                    d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z"
                    clipRule="evenodd"
                  />
                </svg>
                <span className="text-left text-muted-foreground">{item}</span>
              </li>
            ))}
          </ul>
        </div>

        <Button size="lg" className="mt-10 text-lg px-10 py-6" asChild>
          <a href="https://pf.kakao.com/_hIFxgn/chat?mode=chat&input=%ED%99%88%ED%8E%98%EC%9D%B4%EC%A7%80%EC%97%90%EC%84%9C%20%EB%B3%B4%EA%B3%A0%20%EB%AC%B8%EC%9D%98%EB%93%9C%EB%A6%BD%EB%8B%88%EB%8B%A4." target="_blank" rel="noopener noreferrer">{FINAL_CTA.cta}</a>
        </Button>

        <p className="mt-4 text-sm font-medium text-muted-foreground">
          {FINAL_CTA.riskRemoval}
        </p>
      </div>
    </section>
  );
}
