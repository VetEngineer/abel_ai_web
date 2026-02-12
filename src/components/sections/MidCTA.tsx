import { MID_CTA } from "@/constants/content";
import { Button } from "@/components/ui/button";

export function MidCTA() {
  return (
    <section className="relative py-16 px-6">
      <div className="absolute inset-0 bg-gradient-to-r from-space-blue/10 via-brand-purple/8 to-space-blue/10" />
      <div className="relative mx-auto max-w-2xl text-center">
        <h2 className="text-3xl font-bold leading-tight tracking-tight break-keep sm:text-4xl">
          {MID_CTA.title}
        </h2>
        <p className="mt-4 text-lg leading-relaxed text-muted-foreground break-keep">
          {MID_CTA.subtitle}
        </p>
        <Button size="lg" className="mt-8 text-lg px-8 py-6" asChild>
          <a
            href="http://pf.kakao.com/_hIFxgn/chat?mode=chat&input=%ED%99%88%ED%8E%98%EC%9D%B4%EC%A7%80%EC%97%90%EC%84%9C%20%EB%B3%B4%EA%B3%A0%20%EB%AC%B8%EC%9D%98%EB%93%9C%EB%A6%BD%EB%8B%88%EB%8B%A4."
            target="_blank"
            rel="noopener noreferrer"
          >
            {MID_CTA.cta}
          </a>
        </Button>
        <p className="mt-3 text-sm font-medium text-muted-foreground">
          {MID_CTA.riskRemoval}
        </p>
      </div>
    </section>
  );
}
