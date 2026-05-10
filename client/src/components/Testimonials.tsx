import { motion } from 'framer-motion';
import { Star } from 'lucide-react';

/**
 * Testimonials Section - PetOlife
 * Design: Minimal Brutalism with Warmth
 * - Clean, modern testimonial cards
 * - Fictional but believable testimonials
 * - Asymmetric layout with subtle offset
 */

export default function Testimonials() {
  const testimonials = [
    {
      name: 'Sarah Mitchell',
      role: 'Pet Parent',
      image: '🐕',
      quote: 'PetOlife saved my dog\'s life. When Max had an emergency, the vet had instant access to his complete medical history. No delays, no missing records.',
      rating: 5,
    },
    {
      name: 'Dr. James Chen',
      role: 'Veterinarian',
      image: '👨‍⚕️',
      quote: 'Finally, a system that works for veterinary practice. We can access verified pet records instantly, and our clients love the transparency and control.',
      rating: 5,
    },
    {
      name: 'Riverside Animal Clinic',
      role: 'Veterinary Clinic',
      image: '🏥',
      quote: 'Implementing PetOlife reduced our administrative overhead by 40%. Our team spends less time searching for records and more time caring for pets.',
      rating: 5,
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] as any },
    },
  };

  return (
    <>
      <div className="section-divider" />
      <section className="relative bg-background py-24 sm:py-32 overflow-hidden">
        {/* Decorative background */}
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-accent/5 rounded-full blur-3xl -z-10" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Section Header */}
          <motion.div
            className="mb-16 sm:mb-20 text-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl sm:text-5xl font-bold text-foreground mb-6 tracking-tight">
              Trusted by Pet Parents
              <br className="hidden sm:block" />
              & Veterinarians
            </h2>
            <p className="text-lg text-foreground/60 max-w-2xl mx-auto">
              See how PetOlife is transforming pet healthcare and ownership verification.
            </p>
          </motion.div>

          {/* Testimonials Grid */}
          <motion.div
            className="grid grid-cols-1 md:grid-cols-3 gap-8"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={index}
                className={`bg-white rounded-xl p-8 border border-border card-hover-premium ${
                  index === 1 ? 'lg:translate-y-6' : ''
                }`}
                variants={itemVariants}
              >
                {/* Stars */}
                <div className="flex gap-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} size={16} className="fill-accent text-accent" />
                  ))}
                </div>

                {/* Quote */}
                <p className="text-foreground/80 mb-6 leading-relaxed italic">
                  {testimonial.quote}
                </p>

                {/* Author */}
                <div className="flex items-center gap-3 pt-4 border-t border-border/50">
                  <div className="text-3xl">{testimonial.image}</div>
                  <div>
                    <h4 className="font-semibold text-foreground">{testimonial.name}</h4>
                    <p className="text-sm text-foreground/60">{testimonial.role}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>
    </>
  );
}
