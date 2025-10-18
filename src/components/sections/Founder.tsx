import { AnimatedGroup } from '@/components/ui/animated-group';
import founderImage from '@/assets/founder-charles.png';

export function Founder() {
  return (
    <section id="founder" className="py-24 bg-secondary/30">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <AnimatedGroup preset="blur-slide">
            <h2 className="text-4xl md:text-5xl font-bold mb-16 text-center">
              Meet Our Founder
            </h2>
            
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div className="flex justify-center">
                <div className="relative">
                  <img
                    src={founderImage}
                    alt="Charles Baudin, Founder"
                    className="rounded-2xl shadow-2xl w-full max-w-md object-cover"
                  />
                </div>
              </div>
              
              <div className="space-y-6">
                <div>
                  <h3 className="text-3xl font-bold mb-2">Charles Baudin</h3>
                  <p className="text-xl text-primary font-semibold">Founder & CEO</p>
                </div>
                
                <div className="prose prose-lg max-w-none text-muted-foreground">
                  <p className="text-lg leading-relaxed">
                    Charles Baudin is a seasoned financial services professional with extensive experience 
                    in payment solutions and corporate banking. With a deep understanding of the evolving 
                    payment landscape, Charles founded Activ8Pay to bridge the gap between traditional 
                    banking and modern alternative payment methods.
                  </p>
                  
                  <p className="text-lg leading-relaxed mt-4">
                    His expertise spans across payment processing, financial technology, regulatory compliance, 
                    and strategic consulting. Charles has helped numerous organizations optimize their payment 
                    infrastructure and navigate the complex world of financial transactions, positioning them 
                    for sustainable growth in the digital economy.
                  </p>
                  
                  <p className="text-lg leading-relaxed mt-4">
                    Under his leadership, Activ8Pay has become a trusted partner for businesses seeking 
                    innovative payment solutions and comprehensive banking services tailored to their unique needs.
                  </p>
                </div>
              </div>
            </div>
          </AnimatedGroup>
        </div>
      </div>
    </section>
  );
}
