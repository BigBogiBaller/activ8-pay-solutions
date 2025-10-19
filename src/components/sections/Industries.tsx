import { Building2, ShoppingCart, Briefcase, Plane, GraduationCap, Heart } from "lucide-react";
import RadialOrbitalTimeline from "@/components/ui/radial-orbital-timeline";

const industriesData = [
  {
    id: 1,
    title: "Retail",
    date: "E-Commerce",
    content: "Seamless payment solutions for online and brick-and-mortar retail businesses with multiple payment options.",
    category: "Retail",
    icon: ShoppingCart,
    relatedIds: [2, 6],
    status: "completed" as const,
    energy: 95,
  },
  {
    id: 2,
    title: "Hospitality",
    date: "Hotels & Dining",
    content: "Integrated payment systems for hotels, restaurants, and entertainment venues with contactless options.",
    category: "Hospitality",
    icon: Building2,
    relatedIds: [1, 3],
    status: "completed" as const,
    energy: 90,
  },
  {
    id: 3,
    title: "Professional Services",
    date: "B2B Solutions",
    content: "Streamlined invoicing and payment processing for consultants, agencies, and service providers.",
    category: "Professional",
    icon: Briefcase,
    relatedIds: [2, 4],
    status: "in-progress" as const,
    energy: 85,
  },
  {
    id: 4,
    title: "Travel & Tourism",
    date: "Global Payments",
    content: "Multi-currency payment support for travel agencies, tour operators, and booking platforms.",
    category: "Travel",
    icon: Plane,
    relatedIds: [3, 5],
    status: "completed" as const,
    energy: 88,
  },
  {
    id: 5,
    title: "Education",
    date: "EdTech",
    content: "Secure payment solutions for educational institutions, online courses, and learning platforms.",
    category: "Education",
    icon: GraduationCap,
    relatedIds: [4, 6],
    status: "in-progress" as const,
    energy: 80,
  },
  {
    id: 6,
    title: "Healthcare",
    date: "Medical Services",
    content: "HIPAA-compliant payment processing for medical practices, telehealth, and healthcare providers.",
    category: "Healthcare",
    icon: Heart,
    relatedIds: [5, 1],
    status: "completed" as const,
    energy: 92,
  },
];

export function Industries() {
  return (
    <section id="industries" className="relative">
      <div className="absolute inset-0 bg-gradient-to-b from-background via-black to-background pointer-events-none" />
      <div className="relative">
        <div className="container mx-auto px-4 md:px-6 py-16 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">Industries We Serve</h2>
          <p className="text-lg text-white/70 mb-8 max-w-2xl mx-auto">
            Tailored payment solutions for diverse sectors
          </p>
        </div>
        <RadialOrbitalTimeline timelineData={industriesData} />
      </div>
    </section>
  );
}
