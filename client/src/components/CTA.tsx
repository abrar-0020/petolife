import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

/**
 * Final CTA Section - PetOlife
 * Design: Minimal Brutalism with Warmth
 * - Strong emotional closing statement
 * - Clear call-to-action
 * - Premium presentation
 */

export default function CTA() {
  return (
    <section id="cta" className="relative bg-white py-24 sm:py-32 overflow-hidden">
      {/* Decorative background */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-accent/5 rounded-full blur-3xl -z-10" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-accent/5 rounded-full blur-3xl -z-10" />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="text-center space-y-8"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          {/* Headline */}
          <motion.h2
            className="text-5xl sm:text-6xl lg:text-7xl font-bold text-foreground leading-tight"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
          >
            Your Pet Deserves a Lifelong Identity
          </motion.h2>

          {/* Subheading */}
          <motion.p
            className="text-xl sm:text-2xl text-foreground/60 max-w-2xl mx-auto leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            Start building your pet's secure digital identity today. Join thousands of pet parents and veterinarians who trust PetOlife.
          </motion.p>

          {/* CTA Button */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            viewport={{ once: true }}
          >
            <motion.button
              className="inline-flex items-center gap-2 px-10 py-4 bg-accent text-white font-semibold rounded-lg hover:shadow-2xl transition-all duration-300"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Get Started
              <ArrowRight size={20} />
            </motion.button>
          </motion.div>

          {/* Trust indicators */}
          <motion.div
            className="pt-8 border-t border-border"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
          >
            <p className="text-sm text-foreground/60 mb-4">Trusted by leading veterinary clinics and pet parents</p>
            <div className="flex justify-center items-center gap-6 flex-wrap">
              <div className="text-center">
                <div className="text-2xl font-bold text-foreground">10K+</div>
                <div className="text-xs text-foreground/60">Pet Profiles Created</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-foreground">500+</div>
                <div className="text-xs text-foreground/60">Veterinary Clinics</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-foreground">99.9%</div>
                <div className="text-xs text-foreground/60">Uptime SLA</div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
