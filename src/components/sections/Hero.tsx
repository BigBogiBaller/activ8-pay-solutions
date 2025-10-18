import { ArrowRight, ChevronRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { AnimatedGroup } from '@/components/ui/animated-group';
import { FloatingIcons } from './FloatingIcons';
import {
  IconGoogle,
  IconApple,
  IconMicrosoft,
  IconFigma,
  IconGitHub,
  IconSlack,
  IconVercel,
  IconStripe,
  IconDiscord,
  IconX,
  IconNotion,
  IconSpotify,
  IconDropbox,
  IconTwitch,
  IconLinear,
  IconYouTube,
} from '@/components/icons/FloatingCompanyIcons';
import dashboardPreview from '@/assets/dashboard-preview.png';

const transitionVariants = {
  item: {
    hidden: {
      opacity: 0,
      filter: 'blur(12px)',
      y: 12,
    },
    visible: {
      opacity: 1,
      filter: 'blur(0px)',
      y: 0,
      transition: {
        type: 'spring' as const,
        bounce: 0.3,
        duration: 1.5,
      },
    },
  },
};

interface IconData {
  id: number;
  icon: React.FC<React.SVGProps<SVGSVGElement>>;
  className: string;
}

const floatingIcons: IconData[] = [
  { id: 1, icon: IconGoogle, className: 'top-[10%] left-[10%]' },
  { id: 2, icon: IconApple, className: 'top-[20%] right-[8%]' },
  { id: 3, icon: IconMicrosoft, className: 'top-[80%] left-[10%]' },
  { id: 4, icon: IconFigma, className: 'bottom-[10%] right-[10%]' },
  { id: 5, icon: IconGitHub, className: 'top-[5%] left-[30%]' },
  { id: 6, icon: IconSlack, className: 'top-[5%] right-[30%]' },
  { id: 7, icon: IconVercel, className: 'bottom-[8%] left-[25%]' },
  { id: 8, icon: IconStripe, className: 'top-[40%] left-[15%]' },
  { id: 9, icon: IconDiscord, className: 'top-[75%] right-[25%]' },
  { id: 10, icon: IconX, className: 'top-[90%] left-[70%]' },
  { id: 11, icon: IconNotion, className: 'top-[50%] right-[5%]' },
  { id: 12, icon: IconSpotify, className: 'top-[55%] left-[5%]' },
  { id: 13, icon: IconDropbox, className: 'top-[5%] left-[55%]' },
  { id: 14, icon: IconTwitch, className: 'bottom-[5%] right-[45%]' },
  { id: 15, icon: IconLinear, className: 'top-[25%] right-[20%]' },
  { id: 16, icon: IconYouTube, className: 'top-[60%] left-[30%]' },
];

export function Hero() {

  return (
    <section id="home" className="relative overflow-hidden">
      {/* Background gradients */}
      <div
        aria-hidden
        className="z-[2] absolute inset-0 pointer-events-none isolate opacity-50 contain-strict hidden lg:block"
      >
        <div className="w-[35rem] h-[80rem] -translate-y-[350px] absolute left-0 top-0 -rotate-45 rounded-full bg-[radial-gradient(68.54%_68.72%_at_55.02%_31.46%,hsla(205,100%,42%,.08)_0,hsla(205,100%,42%,.02)_50%,hsla(205,100%,42%,0)_80%)]" />
        <div className="h-[80rem] absolute left-0 top-0 w-56 -rotate-45 rounded-full bg-[radial-gradient(50%_50%_at_50%_50%,hsla(205,100%,42%,.06)_0,hsla(205,100%,42%,.02)_80%,transparent_100%)] [translate:5%_-50%]" />
        <div className="h-[80rem] -translate-y-[350px] absolute left-0 top-0 w-56 -rotate-45 bg-[radial-gradient(50%_50%_at_50%_50%,hsla(205,100%,42%,.04)_0,hsla(205,100%,42%,.02)_80%,transparent_100%)]" />
      </div>

      {/* Floating Icons - Now using the FloatingIconsHero component styling */}
      <FloatingIcons icons={floatingIcons} />

      <div
        aria-hidden
        className="absolute inset-0 -z-10 size-full [background:radial-gradient(125%_125%_at_50%_100%,transparent_0%,var(--background)_75%)]"
      />

      <div className="relative pt-24 md:pt-36">
        <div className="mx-auto max-w-7xl px-6">
          <div className="text-center sm:mx-auto lg:mr-auto lg:mt-0">
            <AnimatedGroup variants={transitionVariants}>
              <a
                href="#services"
                className="hover:bg-background dark:hover:border-t-border bg-muted group mx-auto flex w-fit items-center gap-4 rounded-full border p-1 pl-4 shadow-md shadow-black/5 transition-all duration-300 dark:border-t-white/5 dark:shadow-zinc-950"
              >
                <span className="text-foreground text-sm">
                  Introducing Advanced Payment Solutions
                </span>
                <span className="dark:border-background block h-4 w-0.5 border-l bg-white dark:bg-zinc-700"></span>

                <div className="bg-background group-hover:bg-muted size-6 overflow-hidden rounded-full duration-500">
                  <div className="flex w-12 -translate-x-1/2 duration-500 ease-in-out group-hover:translate-x-0">
                    <span className="flex size-6">
                      <ArrowRight className="m-auto size-3" />
                    </span>
                    <span className="flex size-6">
                      <ArrowRight className="m-auto size-3" />
                    </span>
                  </div>
                </div>
              </a>

              <h1 className="mt-8 max-w-4xl mx-auto text-balance text-6xl md:text-7xl lg:mt-16 xl:text-[5.25rem] font-bold">
                Efficient Payment Solutions for Modern Business
              </h1>
              <p className="mx-auto mt-8 max-w-2xl text-balance text-lg text-muted-foreground">
                Specializing in Alternative Payment Methods (APMs) and corporate
                banking services. We provide consulting services to support your
                growth and optimize your business transactions.
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
              <div className="bg-foreground/10 rounded-[14px] border p-0.5">
                <Button asChild size="lg" className="rounded-xl px-5 text-base">
                  <a href="#contact">
                    <span className="text-nowrap">Get Started</span>
                  </a>
                </Button>
              </div>
              <Button
                asChild
                size="lg"
                variant="ghost"
                className="h-11 rounded-xl px-5"
              >
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
          <div className="relative -mr-56 mt-8 overflow-hidden px-2 sm:mr-0 sm:mt-12 md:mt-20">
            <div
              aria-hidden
              className="bg-gradient-to-b to-background absolute inset-0 z-10 from-transparent from-35%"
            />
            <div className="relative mx-auto max-w-6xl overflow-hidden rounded-2xl border p-4 shadow-lg shadow-zinc-950/15 ring-1 ring-background bg-gradient-to-br from-primary/5 to-background">
              <img
                src={dashboardPreview}
                alt="Activ8Pay Payment Dashboard"
                className="aspect-video relative rounded-2xl border border-border/25 w-full h-auto object-cover"
              />
            </div>
          </div>
        </AnimatedGroup>
      </div>

      {/* Trusted Companies Section */}
      <section className="bg-background pb-16 pt-16 md:pb-32">
        <div className="group relative m-auto max-w-5xl px-6">
          <div className="absolute inset-0 z-10 flex scale-95 items-center justify-center opacity-0 duration-500 group-hover:scale-100 group-hover:opacity-100">
            <a href="#about" className="block text-sm duration-150 hover:opacity-75">
              <span>Meet Our Partners</span>
              <ChevronRight className="ml-1 inline-block size-3" />
            </a>
          </div>
          <div className="group-hover:blur-xs mx-auto mt-12 grid max-w-2xl grid-cols-4 gap-x-12 gap-y-8 transition-all duration-500 group-hover:opacity-50 sm:gap-x-16 sm:gap-y-14">
            <div className="flex">
              <img
                className="mx-auto h-5 w-fit dark:invert opacity-60"
                src="https://html.tailus.io/blocks/customers/nvidia.svg"
                alt="Partner Logo"
                height="20"
                width="auto"
              />
            </div>
            <div className="flex">
              <img
                className="mx-auto h-4 w-fit dark:invert opacity-60"
                src="https://html.tailus.io/blocks/customers/column.svg"
                alt="Partner Logo"
                height="16"
                width="auto"
              />
            </div>
            <div className="flex">
              <img
                className="mx-auto h-4 w-fit dark:invert opacity-60"
                src="https://html.tailus.io/blocks/customers/github.svg"
                alt="Partner Logo"
                height="16"
                width="auto"
              />
            </div>
            <div className="flex">
              <img
                className="mx-auto h-5 w-fit dark:invert opacity-60"
                src="https://html.tailus.io/blocks/customers/nike.svg"
                alt="Partner Logo"
                height="20"
                width="auto"
              />
            </div>
            <div className="flex">
              <img
                className="mx-auto h-5 w-fit dark:invert opacity-60"
                src="https://html.tailus.io/blocks/customers/lemonsqueezy.svg"
                alt="Partner Logo"
                height="20"
                width="auto"
              />
            </div>
            <div className="flex">
              <img
                className="mx-auto h-4 w-fit dark:invert opacity-60"
                src="https://html.tailus.io/blocks/customers/laravel.svg"
                alt="Partner Logo"
                height="16"
                width="auto"
              />
            </div>
            <div className="flex">
              <img
                className="mx-auto h-7 w-fit dark:invert opacity-60"
                src="https://html.tailus.io/blocks/customers/lilly.svg"
                alt="Partner Logo"
                height="28"
                width="auto"
              />
            </div>
            <div className="flex">
              <img
                className="mx-auto h-6 w-fit dark:invert opacity-60"
                src="https://html.tailus.io/blocks/customers/openai.svg"
                alt="Partner Logo"
                height="24"
                width="auto"
              />
            </div>
          </div>
        </div>
      </section>
    </section>
  );
}
