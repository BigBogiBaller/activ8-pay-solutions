import { CreditCard, Building2, TrendingUp, Shield } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { AnimatedGroup } from '@/components/ui/animated-group';

const services = [
  {
    icon: CreditCard,
    title: 'Alternative Payment Methods',
    description: 'Support for diverse payment options including digital wallets, bank transfers, and local payment methods to maximize conversion rates.',
  },
  {
    icon: Building2,
    title: 'Corporate Banking Services',
    description: 'Comprehensive banking solutions tailored for businesses, including account management, transaction processing, and treasury services.',
  },
  {
    icon: TrendingUp,
    title: 'Payment Consulting',
    description: 'Expert guidance on payment strategy, optimization, and implementation to help your business scale efficiently.',
  },
  {
    icon: Shield,
    title: 'Compliance & Security',
    description: 'Industry-leading security measures and regulatory compliance support to protect your business and customers.',
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
        
        <AnimatedGroup preset="scale" className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto">
          {services.map((service, index) => (
            <Card key={index} className="border-2 hover:border-primary/50 transition-colors">
              <CardHeader>
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                  <service.icon className="h-6 w-6 text-primary" />
                </div>
                <CardTitle className="text-xl">{service.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base">{service.description}</CardDescription>
              </CardContent>
            </Card>
          ))}
        </AnimatedGroup>
      </div>
    </section>
  );
}
