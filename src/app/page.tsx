import { Header } from "@/components/sections/Header";
import { Hero } from "@/components/sections/Hero";
import { Reality } from "@/components/sections/Reality";
import { Insight } from "@/components/sections/Insight";
import { Services } from "@/components/sections/Services";
import { Credibility } from "@/components/sections/Credibility";
import { Process } from "@/components/sections/Process";
import { MidCTA } from "@/components/sections/MidCTA";
import { Differentiators } from "@/components/sections/Differentiators";
import { Qualification } from "@/components/sections/Qualification";
import { FAQ } from "@/components/sections/FAQ";
import { FinalCTA } from "@/components/sections/FinalCTA";
import { Footer } from "@/components/layout/Footer";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Reality />
        <Insight />
        <Services />
        <Credibility />
        <Process />
        <MidCTA />
        <Differentiators />
        <Qualification />
        <FAQ />
        <FinalCTA />
      </main>
      <Footer />
    </>
  );
}
