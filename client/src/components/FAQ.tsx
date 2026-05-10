import { motion } from 'framer-motion';
import { ChevronDown } from 'lucide-react';
import { useState } from 'react';

/**
 * FAQ Section - PetOlife
 * Design: Minimal Brutalism with Warmth
 * - Accordion-style FAQs
 * - Clean, minimal presentation
 * - Smooth animations
 */

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs = [
    {
      question: 'How secure is my pet\'s data?',
      answer: 'PetOlife uses end-to-end encryption with industry-standard protocols. All data is encrypted at rest and in transit. We employ zero-knowledge architecture, meaning we cannot access your encrypted records even if we wanted to.',
    },
    {
      question: 'How do I share my pet\'s records with a veterinarian?',
      answer: 'Simply generate a unique QR code from your pet\'s profile and share it with your veterinarian. They can scan it to request access to specific records. You maintain full control over what information is shared.',
    },
    {
      question: 'What happens if I lose my phone?',
      answer: 'Your pet\'s profile is securely stored in the cloud. You can access it from any device by logging in with your account. Your data is never lost.',
    },
    {
      question: 'Can I export my pet\'s records?',
      answer: 'Yes. You can export your pet\'s complete medical history in standard formats (PDF, FHIR) at any time. Your data belongs to you.',
    },
    {
      question: 'Is PetOlife HIPAA compliant?',
      answer: 'PetOlife is built with HIPAA-compliant architecture and best practices. While HIPAA technically applies to human healthcare, we follow the same rigorous standards for pet healthcare data protection.',
    },
    {
      question: 'How much does PetOlife cost?',
      answer: 'PetOlife offers a free tier for basic pet profiles. Premium features and veterinary clinic integrations are available through our tiered pricing model. Visit our pricing page for details.',
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.08,
        delayChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 10 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, ease: [0.25, 0.46, 0.45, 0.94] as any },
    },
  };

  return (
    <section id="faq" className="relative bg-white py-24 sm:py-32 overflow-hidden">
      {/* Decorative background */}
      <div className="absolute top-1/2 left-0 w-96 h-96 bg-accent/5 rounded-full blur-3xl -z-10 -translate-y-1/2" />

      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          className="mb-16 sm:mb-20 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl sm:text-5xl font-bold text-foreground mb-6">
            Frequently Asked Questions
          </h2>
          <p className="text-lg text-foreground/60">
            Everything you need to know about PetOlife
          </p>
        </motion.div>

        {/* FAQ Accordion */}
        <motion.div
          className="space-y-4"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              className="border border-border rounded-lg overflow-hidden"
              variants={itemVariants}
            >
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="w-full px-6 py-4 bg-background hover:bg-secondary transition-colors duration-300 flex items-center justify-between"
              >
                <span className="text-left font-semibold text-foreground">
                  {faq.question}
                </span>
                <motion.div
                  animate={{ rotate: openIndex === index ? 180 : 0 }}
                  transition={{ duration: 0.3 }}
                  className="flex-shrink-0 ml-4"
                >
                  <ChevronDown className="w-5 h-5 text-accent" />
                </motion.div>
              </button>

              {/* Answer */}
              <motion.div
                initial={{ height: 0, opacity: 0 }}
                animate={{
                  height: openIndex === index ? 'auto' : 0,
                  opacity: openIndex === index ? 1 : 0,
                }}
                transition={{ duration: 0.3 }}
                className="overflow-hidden"
              >
                <div className="px-6 py-4 bg-background border-t border-border">
                  <p className="text-foreground/70 leading-relaxed">
                    {faq.answer}
                  </p>
                </div>
              </motion.div>
            </motion.div>
          ))}
        </motion.div>

        {/* Still have questions */}
        <motion.div
          className="mt-16 text-center"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          viewport={{ once: true }}
        >
          <p className="text-foreground/60 mb-4">Still have questions?</p>
          <a
            href="#"
            className="inline-flex items-center gap-2 text-accent font-semibold hover:text-accent/80 transition-colors"
          >
            Contact our support team
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </a>
        </motion.div>
      </div>
    </section>
  );
}
