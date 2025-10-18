import { Header } from '@/components/layout/Header';
import { StackedCircularFooter } from '@/components/ui/stacked-circular-footer';
import { Hero } from '@/components/sections/Hero';
import { About } from '@/components/sections/About';
import { Founder } from '@/components/sections/Founder';
import { Services } from '@/components/sections/Services';
import { FAQ } from '@/components/sections/FAQ';
import { Contact } from '@/components/sections/Contact';

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <Hero />
        <About />
        <Founder />
        <Services />
        <FAQ />
        <Contact />
      </main>
      <StackedCircularFooter />
    </div>
  );
};

export default Index;
