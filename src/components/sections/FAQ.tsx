import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';

const faqs = [
  {
    question: 'What are Alternative Payment Methods (APMs)?',
    answer: 'Alternative Payment Methods are payment options beyond traditional credit and debit cards. They include digital wallets, bank transfers, buy-now-pay-later services, and local payment methods. APMs help businesses reach more customers by offering their preferred payment options.',
  },
  {
    question: 'How secure are your payment solutions?',
    answer: 'Security is our top priority. We employ bank-level encryption, PCI DSS compliance, and advanced fraud detection systems. All transactions are monitored 24/7, and we regularly update our security protocols to stay ahead of emerging threats.',
  },
  {
    question: 'What industries do you serve?',
    answer: 'We serve a wide range of industries including e-commerce, retail, fintech, SaaS, marketplaces, and enterprise businesses. Our solutions are flexible and can be customized to meet the specific needs of your industry.',
  },
  {
    question: 'How long does implementation take?',
    answer: 'Implementation timelines vary based on your specific requirements and existing infrastructure. Typically, basic integrations can be completed in 2-4 weeks, while more complex enterprise solutions may take 6-12 weeks. Our team works closely with you to ensure a smooth transition.',
  },
  {
    question: 'Do you offer international payment support?',
    answer: 'Yes, we support international payments across multiple currencies and regions. Our platform is designed to handle cross-border transactions efficiently, with support for local payment methods in various countries.',
  },
  {
    question: 'What kind of support do you provide?',
    answer: 'We provide comprehensive 24/7 customer support including technical assistance, account management, and consulting services. Our team is always available to help you optimize your payment operations and resolve any issues quickly.',
  },
];

export function FAQ() {
  return (
    <section id="faq" className="py-24 bg-[#0A1128]">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-white">Frequently Asked Questions</h2>
          <p className="text-xl text-white/70 max-w-2xl mx-auto">
            Find answers to common questions about our services
          </p>
        </div>
        
        <div className="max-w-3xl mx-auto">
          <Accordion type="single" collapsible className="w-full">
            {faqs.map((faq, index) => (
              <AccordionItem key={index} value={`item-${index}`}>
                <AccordionTrigger className="text-left text-lg text-white">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-base text-white/70">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
}
