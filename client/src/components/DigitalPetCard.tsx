import { motion } from 'framer-motion';

/**
 * Digital Pet Identity Card Section - PetOlife
 * Design: Premium Healthcare SaaS
 * - Centerpiece showcase of the digital pet identity card
 * - Glowing border, layered shadows, premium depth
 * - Emotional core of the product
 */

export default function DigitalPetCard() {
  return (
    <section className="relative bg-white py-24 sm:py-32 overflow-hidden">
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
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-foreground mb-6">
            Your Pet's Digital Identity
          </h2>
          <p className="text-lg text-foreground/70 max-w-2xl mx-auto">
            A beautifully designed, secure digital identity card that contains everything veterinarians need in an emergency.
          </p>
        </motion.div>

        {/* Digital Pet Card Showcase */}
        <motion.div
          className="relative flex justify-center"
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          {/* Glowing background effect */}
          <div className="absolute inset-0 bg-gradient-to-r from-accent/20 via-accent/10 to-accent/20 rounded-3xl blur-3xl" />

          {/* Card container with premium shadow */}
          <motion.div
            className="relative w-full max-w-2xl"
            animate={{ y: [0, -8, 0] }}
            transition={{ duration: 4, repeat: Infinity, ease: [0.42, 0, 0.58, 1] as any }}
          >
            <img
              src="https://d2xsxph8kpxj0f.cloudfront.net/310519663645597460/DK38DRw8yRbA3JtFXTYJAN/petolife-identity-card-premium-TUapxHSZ3QCAH7MFTFqZLw.webp"
              alt="Digital Pet Identity Card"
              className="w-full h-auto rounded-3xl shadow-2xl border border-border/20"
            />

            {/* Glassmorphic overlay */}
            <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-white/20 via-transparent to-transparent pointer-events-none" />
          </motion.div>
        </motion.div>

        {/* Features of the card */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-20"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
        >
          {[
            {
              icon: '🔒',
              title: 'Secure & Verified',
              description: 'Cryptographically verified ownership and identity',
            },
            {
              icon: '📱',
              title: 'Instant Access',
              description: 'Vets scan QR code for immediate health records',
            },
            {
              icon: '🛡️',
              title: 'Emergency Ready',
              description: 'Critical health data accessible in emergencies',
            },
          ].map((feature, idx) => (
            <motion.div
              key={idx}
              className="text-center"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 * idx }}
              viewport={{ once: true }}
            >
              <div className="text-4xl mb-4">{feature.icon}</div>
              <h3 className="text-lg font-semibold text-foreground mb-2">{feature.title}</h3>
              <p className="text-foreground/60">{feature.description}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
