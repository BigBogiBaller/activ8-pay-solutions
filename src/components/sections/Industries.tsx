import { Gallery6 } from "@/components/ui/gallery6";

const industriesData = [
  {
    id: "item-1",
    title: "E-Commerce",
    summary: "Comprehensive payment solutions for online stores, marketplaces, and digital retailers with global reach.",
    url: "#contact",
    image: "/images/block/placeholder-dark-1.svg",
  },
  {
    id: "item-2",
    title: "SaaS & Software",
    summary: "Recurring billing and subscription management for software companies and digital service providers.",
    url: "#contact",
    image: "/images/block/placeholder-dark-1.svg",
  },
  {
    id: "item-3",
    title: "Professional Services",
    summary: "Streamlined invoicing and payment processing for consultants, agencies, and service providers.",
    url: "#contact",
    image: "/images/block/placeholder-dark-1.svg",
  },
  {
    id: "item-4",
    title: "Hospitality",
    summary: "Integrated payment systems for hotels, restaurants, and entertainment venues with contactless options.",
    url: "#contact",
    image: "/images/block/placeholder-dark-1.svg",
  },
  {
    id: "item-5",
    title: "Real Estate",
    summary: "Secure payment processing for property management, real estate transactions, and rental payments.",
    url: "#contact",
    image: "/images/block/placeholder-dark-1.svg",
  },
  {
    id: "item-6",
    title: "Financial Services",
    summary: "Advanced payment infrastructure for fintech companies, digital wallets, and financial platforms.",
    url: "#contact",
    image: "/images/block/placeholder-dark-1.svg",
  },
];

export function Industries({ className = "" }: { className?: string }) {
  return (
    <section id="industries">
      <Gallery6 
        heading="Industries We Serve" 
        demoUrl="#contact"
        items={industriesData}
      />
    </section>
  );
}