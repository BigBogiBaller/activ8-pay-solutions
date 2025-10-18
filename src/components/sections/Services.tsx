import { CalendarIcon, FileTextIcon } from "@radix-ui/react-icons";
import { BellIcon, Share2Icon } from "lucide-react";
import { cn } from "@/lib/utils";
import { Calendar } from "@/components/ui/calendar";
import AnimatedBeamMultipleOutputDemo from "@/components/ui/animated-beam-multiple-outputs";
import AnimatedListDemo from "@/components/ui/animated-list-demo";
import { BentoCard, BentoGrid } from "@/components/ui/bento-grid";
import { Marquee } from "@/components/ui/marquee";

const files = [
  {
    name: "Alternative Payment Methods",
    body: "Support for diverse payment options including digital wallets, bank transfers, and local payment methods to maximize conversion rates.",
  },
  {
    name: "Corporate Banking Services",
    body: "Comprehensive banking solutions tailored for businesses, including account management, transaction processing, and treasury services.",
  },
  {
    name: "Payment Consulting",
    body: "Expert guidance on payment strategy, optimization, and implementation to help your business scale efficiently.",
  },
  {
    name: "Compliance & Security",
    body: "Industry-leading security measures and regulatory compliance support to protect your business and customers.",
  },
];

const features = [
  {
    Icon: FileTextIcon,
    name: "Alternative Payment Methods",
    description: "Support for diverse payment options including digital wallets, bank transfers, and local payment methods to maximize conversion rates.",
    href: "#contact",
    cta: "Learn more",
    className: "col-span-3 lg:col-span-1",
    background: (
      <Marquee
        pauseOnHover
        className="absolute top-10 [mask-image:linear-gradient(to_top,transparent_40%,#000_100%)] [--duration:20s]"
      >
        {files.map((f, idx) => (
          <figure
            key={idx}
            className={cn(
              "relative w-32 cursor-pointer overflow-hidden rounded-xl border p-4",
              "border-gray-950/[.1] bg-gray-950/[.01] hover:bg-gray-950/[.05]",
              "dark:border-gray-50/[.1] dark:bg-gray-50/[.10] dark:hover:bg-gray-50/[.15]",
              "transform-gpu blur-[1px] transition-all duration-300 ease-out hover:blur-none"
            )}
          >
            <div className="flex flex-row items-center gap-2">
              <div className="flex flex-col">
                <figcaption className="text-sm font-medium dark:text-white">
                  {f.name}
                </figcaption>
              </div>
            </div>
            <blockquote className="mt-2 text-xs">{f.body}</blockquote>
          </figure>
        ))}
      </Marquee>
    ),
  },
  {
    Icon: BellIcon,
    name: "Corporate Banking Services",
    description: "Comprehensive banking solutions tailored for businesses, including account management, transaction processing, and treasury services.",
    href: "#contact",
    cta: "Learn more",
    className: "col-span-3 lg:col-span-2",
    background: (
      <AnimatedListDemo className="absolute top-4 right-2 h-[300px] w-full scale-75 border-none [mask-image:linear-gradient(to_top,transparent_10%,#000_100%)] transition-all duration-300 ease-out group-hover:scale-90" />
    ),
  },
  {
    Icon: Share2Icon,
    name: "Payment Consulting",
    description: "Expert guidance on payment strategy, optimization, and implementation to help your business scale efficiently.",
    href: "#contact",
    cta: "Learn more",
    className: "col-span-3 lg:col-span-2",
    background: (
      <AnimatedBeamMultipleOutputDemo className="absolute top-4 right-2 h-[300px] border-none [mask-image:linear-gradient(to_top,transparent_10%,#000_100%)] transition-all duration-300 ease-out group-hover:scale-105" />
    ),
  },
  {
    Icon: CalendarIcon,
    name: "Compliance & Security",
    description: "Industry-leading security measures and regulatory compliance support to protect your business and customers.",
    className: "col-span-3 lg:col-span-1",
    href: "#contact",
    cta: "Learn more",
    background: (
      <Calendar
        mode="single"
        selected={new Date(2022, 4, 11, 0, 0, 0)}
        className="absolute top-10 right-0 origin-top scale-75 rounded-md border [mask-image:linear-gradient(to_top,transparent_40%,#000_100%)] transition-all duration-300 ease-out group-hover:scale-90"
      />
    ),
  },
];

export function Services() {
  return (
    <section id="services" className="py-24">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">Products & Services</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Comprehensive payment solutions designed to streamline your business operations
          </p>
        </div>
        
        <div className="max-w-7xl mx-auto">
          <BentoGrid>
            {features.map((feature, idx) => (
              <BentoCard key={idx} {...feature} />
            ))}
          </BentoGrid>
        </div>
      </div>
    </section>
  );
}
