import { AnimatedGroup } from '@/components/ui/animated-group';
import FeaturesSectionDemo from '@/components/ui/features-section-demo-3';
import activ8payLogo from '@/assets/activ8pay-logo-main.png';

export function About() {
  return (
    <section id="about" className="py-24 bg-secondary/30">
      <div className="container mx-auto px-6">
        <AnimatedGroup preset="blur-slide" className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 flex items-center justify-center gap-3">
              About <img src={activ8payLogo} alt="Activ8Pay" className="h-16 w-auto inline-block" />
            </h2>
            <p className="text-xl text-muted-foreground">
              Your trusted partner in payment solutions
            </p>
          </div>
          
          <div className="prose prose-lg max-w-none text-muted-foreground mb-8">
            <p className="text-lg leading-relaxed">
              Activ8Pay is a leading provider of innovative payment solutions, specializing in 
              Alternative Payment Methods (APMs) and comprehensive corporate banking services. 
              Our mission is to empower businesses with efficient, secure, and scalable payment 
              infrastructure that drives growth and enhances customer experiences.
            </p>
            <p className="text-lg leading-relaxed mt-4">
              With deep industry expertise and a commitment to excellence, we deliver tailored 
              consulting services that help our clients navigate the complex landscape of modern 
              financial transactions. From startups to enterprise organizations, we provide the 
              tools and insights needed to succeed in today's digital economy.
            </p>
          </div>
        </AnimatedGroup>
        
        <FeaturesSectionDemo />
      </div>
    </section>
  );
}
