import { CreditCard, Building2, TrendingUp, Shield } from 'lucide-react';
import { BentoCard, BentoGrid } from '@/components/ui/bento-grid';

const services = [
  {
    Icon: CreditCard,
    name: 'Alternative Payment Methods',
    description: 'Support for diverse payment options including digital wallets, bank transfers, and local payment methods to maximize conversion rates.',
    href: '#contact',
    cta: 'Learn more',
    className: 'col-span-3 lg:col-span-2',
    background: (
      <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-primary/5 to-transparent" />
    ),
  },
  {
    Icon: Building2,
    name: 'Corporate Banking Services',
    description: 'Comprehensive banking solutions tailored for businesses, including account management, transaction processing, and treasury services.',
    href: '#contact',
    cta: 'Learn more',
    className: 'col-span-3 lg:col-span-1',
    background: (
      <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-primary/5 to-transparent" />
    ),
  },
  {
    Icon: TrendingUp,
    name: 'Payment Consulting',
    description: 'Expert guidance on payment strategy, optimization, and implementation to help your business scale efficiently.',
    href: '#contact',
    cta: 'Learn more',
    className: 'col-span-3 lg:col-span-1',
    background: (
      <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-primary/5 to-transparent" />
    ),
  },
  {
    Icon: Shield,
    name: 'Compliance & Security',
    description: 'Industry-leading security measures and regulatory compliance support to protect your business and customers.',
    href: '#contact',
    cta: 'Learn more',
    className: 'col-span-3 lg:col-span-2',
    background: (
      <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-primary/5 to-transparent" />
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
            {services.map((service, idx) => (
              <BentoCard key={idx} {...service} />
            ))}
          </BentoGrid>
        </div>
      </div>
    </section>
  );
}
