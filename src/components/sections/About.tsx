import { AnimatedGroup } from '@/components/ui/animated-group';
import FeaturesSectionDemo from '@/components/ui/features-section-demo-3';
import { FinanceChartDemo } from '@/components/ui/finance-chart-demo';
import activ8payLogo from '@/assets/activ8pay-logo-main.png';

export function About() {
  return (
    <section id="about" className="py-24 bg-secondary/30">
      <div className="container mx-auto px-6">
        <AnimatedGroup preset="blur-slide" className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 flex items-center justify-center gap-3">
              About <img src={activ8payLogo} alt="Activ8Pay" className="h-16 w-auto inline-block" />
            </h2>
            <p className="text-xl text-muted-foreground">
              Your trusted partner in payment solutions
            </p>
          </div>
          
          <div className="grid lg:grid-cols-2 gap-8 items-center">
            <div className="prose prose-lg max-w-none text-muted-foreground">
              <p className="text-lg leading-relaxed">
                At Activ8Pay, we connect forward-thinking businesses across all industries to a robust, reliable, and efficient global payment ecosystem.
              </p>
              <p className="text-lg leading-relaxed mt-4">
                As an Independent Sales Organization (ISO) partnered with 25 acquiring banks, including several top-tier European financial institutions, we empower merchants to access the right acquiring and banking partners for their specific needs.
              </p>
              <p className="text-lg leading-relaxed mt-4">
                Our expertise covers a wide range of industries, from e-commerce, digital goods, dating and adult to iGaming and crypto, and other high-growth verticals. Whether your business needs a reliable acquirer, a dedicated IBAN or a robust fraud and chargeback prevention solution, Activ8Pay provides the right connections and guidance to help you operate safely and scale globally.
              </p>
              <p className="text-lg leading-relaxed mt-4">
                Our mission is to make payments widely and quickly accessible, safely processed, and strategically optimized so.. Ready to Activ8 and grow your business?
              </p>
            </div>
            
            <div className="w-full">
              <FinanceChartDemo />
            </div>
          </div>
        </AnimatedGroup>
        
        <FeaturesSectionDemo />
      </div>
    </section>
  );
}
