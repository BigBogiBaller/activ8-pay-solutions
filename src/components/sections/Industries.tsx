import { Building2, ShoppingCart, Briefcase, Code, Home, CreditCard } from "lucide-react";
import RadialOrbitalTimeline from "@/components/ui/radial-orbital-timeline";
const industriesData = [{
  id: 1,
  title: "E-Commerce",
  date: "Online Retail",
  content: "Comprehensive payment solutions for online stores, marketplaces, and digital retailers with global reach.",
  category: "E-Commerce",
  icon: ShoppingCart,
  relatedIds: [2, 6],
  status: "completed" as const,
  energy: 95
}, {
  id: 2,
  title: "SaaS & Software",
  date: "Subscription Services",
  content: "Recurring billing and subscription management for software companies and digital service providers.",
  category: "SaaS",
  icon: Code,
  relatedIds: [1, 3],
  status: "completed" as const,
  energy: 92
}, {
  id: 3,
  title: "Professional Services",
  date: "B2B Solutions",
  content: "Streamlined invoicing and payment processing for consultants, agencies, and service providers.",
  category: "Professional",
  icon: Briefcase,
  relatedIds: [2, 4],
  status: "completed" as const,
  energy: 88
}, {
  id: 4,
  title: "Hospitality",
  date: "Hotels & Restaurants",
  content: "Integrated payment systems for hotels, restaurants, and entertainment venues with contactless options.",
  category: "Hospitality",
  icon: Building2,
  relatedIds: [3, 5],
  status: "completed" as const,
  energy: 90
}, {
  id: 5,
  title: "Real Estate",
  date: "Property Management",
  content: "Secure payment processing for property management, real estate transactions, and rental payments.",
  category: "Real Estate",
  icon: Home,
  relatedIds: [4, 6],
  status: "completed" as const,
  energy: 85
}, {
  id: 6,
  title: "Financial Services",
  date: "Fintech",
  content: "Advanced payment infrastructure for fintech companies, digital wallets, and financial platforms.",
  category: "Fintech",
  icon: CreditCard,
  relatedIds: [5, 1],
  status: "completed" as const,
  energy: 94
}];
export function Industries({ className = "" }: { className?: string }) {
  return <section id="industries" className="py-20 bg-[#0A1128]">
      <div className="container mx-auto px-4 md:px-6 text-center mb-8">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">Industries We Serve</h2>
        <p className="text-lg text-white/70 max-w-2xl mx-auto">
          Tailored payment solutions for diverse sectors
        </p>
      </div>
      <RadialOrbitalTimeline timelineData={industriesData} className="bg-[#0a1128]" />
    </section>;
}