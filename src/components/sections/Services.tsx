import { CalendarIcon, FileTextIcon } from "@radix-ui/react-icons";
import { BellIcon, Share2Icon } from "lucide-react";
import { cn } from "@/lib/utils";
import { Calendar } from "@/components/ui/calendar";
import AnimatedBeamDemo from "@/components/ui/animated-beam-demo";
import AnimatedListDemo from "@/components/ui/animated-list-demo";
import { BentoCard, BentoGrid } from "@/components/ui/bento-grid";
import { Marquee } from "@/components/ui/marquee";

const files = [
  {
    name: "Card Processing",
    body: "Accept card payments globally with fast onboarding through top EU and US acquirers. We support Visa, Mastercard, Cartes Bancaires, Amex, JCB, and more — with tailored pricing and MCC coverage for your business model.",
  },
  {
    name: "Corporate Banking",
    body: "Access dedicated multi-currency IBANs for your pay-ins and pay-outs. Enjoy seamless connectivity with SWIFT, SEPA, SEPA Instant, and UK Faster Payments.",
  },
  {
    name: "Chargeback & Fraud Prevention",
    body: "Protect your revenue with real-time alerts, automated dispute handling, and AI-driven fraud scoring. Integrated tools help you reduce chargebacks and improve approval ratios across your PSPs.",
  },
  {
    name: "Stablecoin Payments",
    body: "Send and receive USDT, USDC, or EURS instantly through compliant on/off-ramp partners. Secure, transparent, and settlement-ready for both merchants and service providers.",
  },
];

const features = [
  {
    Icon: FileTextIcon,
    name: "Card Processing",
    description: "Accept card payments globally with fast onboarding through top EU and US acquirers. We support Visa, Mastercard, Cartes Bancaires, Amex, JCB, and more — with tailored pricing and MCC coverage for your business model.",
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
    name: "Chargeback & Fraud Prevention",
    description: "Protect your revenue with real-time alerts, automated dispute handling, and AI-driven fraud scoring. Integrated tools help you reduce chargebacks and improve approval ratios across your PSPs.",
    href: "#contact",
    cta: "Learn more",
    className: "col-span-3 lg:col-span-2",
    background: (
      <AnimatedListDemo className="absolute top-4 right-2 h-[300px] w-full scale-75 border-none [mask-image:linear-gradient(to_top,transparent_10%,#000_100%)] transition-all duration-300 ease-out group-hover:scale-90" />
    ),
  },
  {
    Icon: Share2Icon,
    name: "Chargeback & Fraud Prevention",
    description: "Protect your revenue with real-time alerts, automated dispute handling, and AI-driven fraud scoring. Integrated tools help you reduce chargebacks and improve approval ratios across your PSPs.",
    href: "#contact",
    cta: "Learn more",
    className: "col-span-3 lg:col-span-2",
    background: (
      <AnimatedBeamDemo className="absolute top-4 right-2 h-[300px] border-none [mask-image:linear-gradient(to_top,transparent_10%,#000_100%)] transition-all duration-300 ease-out group-hover:scale-105" />
    ),
  },
  {
    Icon: CalendarIcon,
    name: "Stablecoin Payments",
    description: "Send and receive USDT, USDC, or EURS instantly through compliant on/off-ramp partners. Secure, transparent, and settlement-ready for both merchants and service providers.",
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
    <section id="services" className="py-24 bg-[#0A1128]">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-white">Solutions</h2>
          <p className="text-xl text-white/80 max-w-2xl mx-auto">
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
