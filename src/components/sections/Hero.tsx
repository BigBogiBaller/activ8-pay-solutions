import { ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { AnimatedGroup } from '@/components/ui/animated-group';
import logo from '@/assets/activ8pay-logo.png';

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

export function Hero() {
  return (
    <section id="home" className="relative pt-32 pb-20 overflow-hidden">
      <div
        aria-hidden
        className="absolute inset-0 -z-10 size-full [background:radial-gradient(125%_125%_at_50%_10%,transparent_40%,hsl(var(--primary)/0.05)_100%)]"
      />
      
      <div className="container mx-auto px-6">
        <div className="text-center max-w-4xl mx-auto">
          <AnimatedGroup variants={transitionVariants}>
            <div className="mb-8">
              <img src={logo} alt="Activ8Pay" className="h-16 mx-auto" />
            </div>
            
            <h1 className="text-5xl md:text-7xl font-bold tracking-tight mb-6 bg-gradient-to-b from-foreground to-foreground/70 text-transparent bg-clip-text">
              Efficient Payment Solutions for Modern Business
            </h1>
            
            <p className="text-xl text-muted-foreground mb-10 max-w-2xl mx-auto">
              Specializing in Alternative Payment Methods (APMs) and corporate banking services. 
              We provide consulting services to support your growth and optimize your business transactions.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="group">
                Get Started
                <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Button>
              <Button size="lg" variant="outline">
                Learn More
              </Button>
            </div>
          </AnimatedGroup>
        </div>
      </div>
    </section>
  );
}
