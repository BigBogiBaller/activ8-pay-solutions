import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { AnimatedGroup } from "@/components/ui/animated-group";
import { FloatingIcons } from "./FloatingIcons";
import { Logos3 } from "@/components/ui/logos3";
import dashboardPreview from "@/assets/dashboard-new.png";
import jcbLogo from "@/assets/jcb-logo.png";
import mastercardLogo from "@/assets/mastercard-logo.png";
import visaLogo from "@/assets/visa-logo.png";
import googlepayLogo from "@/assets/googlepay-logo.png";
import applepayLogo from "@/assets/applepay-logo.png";
import amexLogo from "@/assets/amex-logo.png";
import sepaLogo from "@/assets/sepa-logo.png";
import cbLogo from "@/assets/cb-logo.png";

const transitionVariants = {
  item: {
    hidden: {
      opacity: 0,
      filter: "blur(12px)",
      y: 12,
    },
    visible: {
      opacity: 1,
      filter: "blur(0px)",
      y: 0,
      transition: {
        type: "spring" as const,
        bounce: 0.3,
        duration: 1.5,
      },
    },
  },
};

interface IconData {
  id: number;
  image: string;
  className: string;
  alt: string;
}

const floatingIcons: IconData[] = [
  { id: 1, image: cbLogo, className: "top-[10%] left-[10%]", alt: "Cartes Bancaires" },
  { id: 2, image: sepaLogo, className: "top-[20%] right-[8%]", alt: "SEPA" },
  { id: 3, image: mastercardLogo, className: "top-[5%] left-[30%]", alt: "Mastercard" },
  { id: 4, image: visaLogo, className: "top-[5%] right-[30%]", alt: "Visa" },
  { id: 5, image: googlepayLogo, className: "top-[35%] left-[8%]", alt: "Google Pay" },
  { id: 6, image: applepayLogo, className: "top-[40%] left-[15%]", alt: "Apple Pay" },
  { id: 7, image: amexLogo, className: "top-[15%] right-[8%]", alt: "American Express" },
  { id: 8, image: jcbLogo, className: "top-[30%] right-[12%]", alt: "JCB" },
];

const paymentLogos = [
  { id: "logo-1", description: "JCB", image: jcbLogo, className: "h-8 w-auto" },
  { id: "logo-2", description: "SEPA", image: sepaLogo, className: "h-8 w-auto" },
  { id: "logo-3", description: "Mastercard", image: mastercardLogo, className: "h-8 w-auto" },
  { id: "logo-4", description: "Visa", image: visaLogo, className: "h-8 w-auto" },
  { id: "logo-5", description: "Google Pay", image: googlepayLogo, className: "h-8 w-auto" },
  { id: "logo-6", description: "Apple Pay", image: applepayLogo, className: "h-8 w-auto" },
  { id: "logo-7", description: "American Express", image: amexLogo, className: "h-8 w-auto" },
  { id: "logo-8", description: "Cartes Bancaires", image: cbLogo, className: "h-8 w-auto" },
];

export function Hero() {
  return (
    <section id="hero" className="relative overflow-hidden bg-[#0A1128] text-white">
      {/* Background gradients */}
      <div
        aria-hidden
        className="z-[2] absolute inset-0 pointer-events-none isolate opacity-50 contain-strict hidden lg:block"
      >
        <div className="w-[35rem] h-[80rem] -translate-y-[350px] absolute left-0 top-0 -rotate-45 rounded-full bg-[radial-gradient(68.54%_68.72%_at_55.02%_31.46%,hsla(217,100%,40%,.08)_0,hsla(217,100%,40%,.02)_50%,hsla(217,100%,40%,0)_80%)]" />
        <div className="h-[80rem] absolute left-0 top-0 w-56 -rotate-45 rounded-full bg-[radial-gradient(50%_50%_at_50%_50%,hsla(217,100%,40%,.06)_0,hsla(217,100%,40%,.02)_80%,transparent_100%)] [translate:5%_-50%]" />
        <div className="h-[80rem] -translate-y-[350px] absolute left-0 top-0 w-56 -rotate-45 bg-[radial-gradient(50%_50%_at_50%_50%,hsla(217,100%,40%,.04)_0,hsla(217,100%,40%,.02)_80%,transparent_100%)]" />
      </div>

      {/* Floating Icons - Now using the FloatingIconsHero component styling */}
      <FloatingIcons icons={floatingIcons} />

      <div
        aria-hidden
        className="absolute inset-0 -z-10 size-full [background:radial-gradient(125%_125%_at_50%_100%,transparent_0%,#0A1128_75%)]"
      />

      <div className="relative pt-24 md:pt-36">
        <div className="mx-auto max-w-7xl px-6">
          <div className="text-center sm:mx-auto lg:mr-auto lg:mt-0">
            <AnimatedGroup variants={transitionVariants}>
              <a
                href="#services"
                className="hover:bg-[#1a2847] dark:hover:border-t-border bg-[#1a2847] group mx-auto flex w-fit items-center gap-4 rounded-full border border-white/10 p-1 pl-4 shadow-md shadow-black/5 transition-all duration-300"
              >
                <span className="text-white text-sm">Introducing Advanced Payment Solutions</span>
                <span className="block h-4 w-0.5 border-l bg-white/20"></span>

                <div className="bg-white/10 group-hover:bg-white/20 size-6 overflow-hidden rounded-full duration-500">
                  <div className="flex w-12 -translate-x-1/2 duration-500 ease-in-out group-hover:translate-x-0">
                    <span className="flex size-6">
                      <ArrowRight className="m-auto size-3 text-white" />
                    </span>
                    <span className="flex size-6">
                      <ArrowRight className="m-auto size-3 text-white" />
                    </span>
                  </div>
                </div>
              </a>

              <h1 className="mt-8 max-w-4xl mx-auto text-balance text-6xl md:text-7xl lg:mt-16 xl:text-[5.25rem] font-bold text-white">
                Your Bridge to Reliable Payment Solutions for Modern Business
              </h1>
              <p className="mx-auto mt-8 max-w-2xl text-balance text-lg text-white/80">
                Specializing in Alternative Payment Methods (APMs) and corporate banking services. We provide consulting
                services to support your growth and optimize your business transactions.
              </p>
            </AnimatedGroup>

            <AnimatedGroup
              variants={{
                container: {
                  visible: {
                    transition: {
                      staggerChildren: 0.05,
                      delayChildren: 0.75,
                    },
                  },
                },
                ...transitionVariants,
              }}
              className="mt-12 flex flex-col items-center justify-center gap-2 md:flex-row"
            >
              <div className="bg-white/10 rounded-[14px] border border-white/20 p-0.5">
                <Button asChild size="lg" className="rounded-xl px-5 text-base bg-[#B3CBB9] hover:bg-[#9fb8a6] text-[#0A1128]">
                  <a href="#contact">
                    <span className="text-nowrap">Get Started</span>
                  </a>
                </Button>
              </div>
              <Button asChild size="lg" variant="ghost" className="h-11 rounded-xl px-5 text-white hover:bg-white/10 hover:text-white">
                <a href="#about">
                  <span className="text-nowrap">Learn More</span>
                </a>
              </Button>
            </AnimatedGroup>
          </div>
        </div>

        <AnimatedGroup
          variants={{
            container: {
              visible: {
                transition: {
                  staggerChildren: 0.05,
                  delayChildren: 0.75,
                },
              },
            },
            ...transitionVariants,
          }}
        >
          <div className="relative mt-8 px-2 sm:mt-12 md:mt-20">
            <div
              aria-hidden
              className="bg-gradient-to-b to-[#0A1128] absolute inset-0 z-10 from-transparent from-35%"
            />
            <div className="relative mx-auto max-w-6xl overflow-hidden rounded-2xl border border-white/10 p-4 shadow-lg shadow-black/50 ring-1 ring-white/5 bg-gradient-to-br from-[#0044CC]/20 to-[#0A1128]">
              <img
                src={dashboardPreview}
                alt="Activ8Pay Payment Dashboard"
                className="relative rounded-2xl border border-white/10 w-full h-auto object-contain"
              />
            </div>
          </div>
        </AnimatedGroup>

        <Logos3 heading="Specializing In 100+ Different Payment Methods" logos={paymentLogos} />
      </div>
    </section>
  );
}
