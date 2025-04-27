
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    question: "What makes AetherUI different from other platforms?",
    answer: "AetherUI combines cutting-edge AI technology with intuitive design, offering seamless integration, real-time analytics, and unparalleled customization options that adapt to your specific business needs."
  },
  {
    question: "How secure is the platform?",
    answer: "We implement enterprise-grade security measures including end-to-end encryption, regular security audits, and compliance with GDPR and other international data protection standards."
  },
  {
    question: "Can I try AetherUI before committing?",
    answer: "Yes! We offer a 14-day free trial with full access to all features, allowing you to experience the platform's capabilities firsthand before making a decision."
  },
  {
    question: "What kind of support do you provide?",
    answer: "Our dedicated support team is available 24/7 through multiple channels including live chat, email, and phone. We also provide extensive documentation and regular training sessions."
  },
  {
    question: "How often do you release updates?",
    answer: "We maintain a regular update schedule with major feature releases quarterly and continuous improvements and security updates throughout the year."
  }
];

const FAQSection = () => {
  return (
    <section className="section bg-slate-50/50 dark:bg-slate-900/50">
      <div className="container py-20 lg:py-32">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="heading-lg mb-4 reveal-element">
            Frequently Asked <span className="text-gradient">Questions</span>
          </h2>
          <p className="text-lg text-slate-600 dark:text-slate-400 reveal-element reveal-delay-1">
            Find answers to common questions about our platform and services
          </p>
        </div>

        <div className="max-w-3xl mx-auto reveal-element reveal-delay-2">
          <Accordion type="single" collapsible className="w-full space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem 
                key={index} 
                value={`item-${index}`}
                className="bg-white dark:bg-slate-800 rounded-lg px-6 border border-slate-200 dark:border-slate-700"
              >
                <AccordionTrigger className="text-left hover:no-underline py-6">
                  <span className="font-semibold text-lg">{faq.question}</span>
                </AccordionTrigger>
                <AccordionContent className="text-slate-600 dark:text-slate-400 pb-6">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
};

export default FAQSection;
