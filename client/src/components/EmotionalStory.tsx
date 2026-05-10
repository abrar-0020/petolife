import { motion } from 'framer-motion';
import { AlertCircle, Clock, Heart, CheckCircle } from 'lucide-react';

/**
 * Emotional Story Section - PetOlife
 * Design: Premium Healthcare SaaS
 * - Emotional healthcare moment
 * - Emergency scenario storytelling
 * - Justifies the product value
 */

export default function EmotionalStory() {
  const scenarios = [
    {
      icon: AlertCircle,
      title: 'Emergency Happens',
      description: 'Your pet has a medical emergency and needs immediate care.',
      color: 'text-red-500',
    },
    {
      icon: Clock,
      title: 'Critical Minutes',
      description: 'Vet needs vaccine history and allergy information instantly.',
      color: 'text-yellow-500',
    },
    {
      icon: Heart,
      title: 'Complete Records',
      description: 'With PetOlife, all medical data is instantly accessible via QR code.',
      color: 'text-accent',
    },
    {
      icon: CheckCircle,
      title: 'Pet Saved',
      description: 'Vet has everything needed to provide the best emergency care.',
      color: 'text-green-500',
    },
  ];

  return (
    <>
      <div className="section-divider" />
      <section className="relative bg-background py-24 sm:py-32 overflow-hidden">
        {/* Decorative background */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-96 h-96 bg-accent/5 rounded-full blur-3xl -z-10" />

        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Section Header */}
          <motion.div
            className="text-center mb-16 sm:mb-20"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl sm:text-5xl font-bold text-foreground mb-6 tracking-tight">
              When Emergencies Happen
            </h2>
            <p className="text-lg text-foreground/70 max-w-2xl mx-auto">
              Every second matters. PetOlife ensures veterinarians have instant access to critical health information.
            </p>
          </motion.div>

          {/* Scenario Flow */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            {scenarios.map((scenario, idx) => {
              const Icon = scenario.icon;
              return (
                <motion.div
                  key={idx}
                  className="relative"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: idx * 0.1 }}
                  viewport={{ once: true }}
                >
                  {/* Card */}
                  <div className="bg-white rounded-xl p-6 border border-border text-center h-full card-hover-premium">
                    <div className={`w-12 h-12 rounded-lg flex items-center justify-center mx-auto mb-4 bg-background`}>
                      <Icon className={`w-6 h-6 ${scenario.color}`} />
                    </div>
                    <h3 className="font-semibold text-foreground mb-2">{scenario.title}</h3>
                    <p className="text-sm text-foreground/70">{scenario.description}</p>
                  </div>

                  {/* Arrow to next (desktop only) */}
                  {idx < scenarios.length - 1 && (
                    <div className="hidden lg:flex absolute top-1/2 -right-4 transform -translate-y-1/2 z-10">
                      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" className="text-accent/40">
                        <path d="M5 12h14M12 5l7 7-7 7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                    </div>
                  )}
                </motion.div>
              );
            })}
          </div>

          {/* CTA Message */}
          <motion.div
            className="bg-gradient-to-r from-accent/8 to-primary/8 rounded-xl p-8 border border-accent/15 text-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
          >
            <h3 className="text-2xl font-bold text-foreground mb-3 tracking-tight">
              Don't Leave Your Pet's Health to Chance
            </h3>
            <p className="text-foreground/70 mb-6 max-w-2xl mx-auto">
              Create your pet's digital identity today. In an emergency, every second counts. PetOlife ensures your vet has everything they need.
            </p>
            <motion.button
              className="inline-flex items-center gap-2 px-8 py-3 bg-primary text-white font-semibold rounded-lg hover:shadow-lg transition-all duration-300"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Create Pet ID Now
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </motion.button>
          </motion.div>
        </div>
      </section>
    </>
  );
}
