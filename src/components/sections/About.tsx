import { CheckCircle2 } from 'lucide-react';
import { AnimatedGroup } from '@/components/ui/animated-group';

const features = [
  'Over 10 years of industry expertise',
  'Trusted by leading enterprises worldwide',
  'Cutting-edge payment technology',
  '24/7 dedicated customer support',
];

export function About() {
  return (
    <section id="about" className="py-24 bg-secondary/30">
      <div className="container mx-auto px-6">
        <AnimatedGroup preset="blur-slide" className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">About Activ8Pay</h2>
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
          
          <div className="grid md:grid-cols-2 gap-4 mt-12">
            {features.map((feature, index) => (
              <div
                key={index}
                className="flex items-center gap-3 p-4 rounded-lg bg-card border"
              >
                <CheckCircle2 className="h-5 w-5 text-primary flex-shrink-0" />
                <span className="text-card-foreground">{feature}</span>
              </div>
            ))}
          </div>
        </AnimatedGroup>
      </div>
    </section>
  );
}
