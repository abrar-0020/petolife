import { motion } from 'framer-motion';
import { useState } from 'react';

/**
 * Digital Pet Identity Card Section - PetOlife
 * Design: Premium Healthcare SaaS — SIGNATURE MOMENT
 * - Centerpiece showcase of the digital pet identity card
 * - Ambient shimmer border, layered shadows, premium depth
 * - Interactive QR scan effect on hover
 * - Emotional core of the product
 */

export default function DigitalPetCard() {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <>
      <div className="section-divider" />
      <section className="relative bg-white py-24 sm:py-32 overflow-hidden">
        {/* Decorative background */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-accent/8 rounded-full blur-3xl -z-10" />
        <div className="hidden md:block absolute bottom-0 right-1/4 w-72 h-72 bg-primary/5 rounded-full blur-3xl -z-10" />

        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Section Header */}
          <motion.div
            className="text-center mb-16 sm:mb-20"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-foreground mb-6 tracking-tight">
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
            {/* Ambient shimmer border — slow gradient shift, no spinning */}
            <div
              className="absolute -inset-1 rounded-[28px] opacity-60"
              style={{
                background: 'linear-gradient(90deg, rgba(46,125,90,0.3), rgba(15,81,50,0.1), rgba(46,125,90,0.3), rgba(94,156,118,0.2), rgba(46,125,90,0.3))',
                backgroundSize: '200% 100%',
                animation: 'shimmer 8s ease infinite',
                filter: 'blur(8px)',
              }}
            />

            {/* Stronger ambient glow */}
            <div className="absolute inset-0 bg-gradient-to-r from-accent/15 via-accent/8 to-accent/15 rounded-3xl blur-3xl" />

            {/* Card container with premium layered shadows */}
            <motion.div
              className="relative w-full max-w-2xl cursor-pointer"
              animate={{ y: [0, -8, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: [0.42, 0, 0.58, 1] as any }}
              onMouseEnter={() => setIsHovered(true)}
              onMouseLeave={() => setIsHovered(false)}
              style={{
                filter: 'drop-shadow(0 4px 20px rgba(46, 125, 90, 0.12)) drop-shadow(0 20px 60px rgba(0, 0, 0, 0.08))',
              }}
            >
              <img
                src="https://d2xsxph8kpxj0f.cloudfront.net/310519663645597460/DK38DRw8yRbA3JtFXTYJAN/petolife-identity-card-premium-TUapxHSZ3QCAH7MFTFqZLw.webp"
                alt="Digital Pet Identity Card"
                className="w-full h-auto rounded-3xl border border-accent/10"
              />

              {/* Glassmorphic overlay */}
              <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-white/20 via-transparent to-transparent pointer-events-none" />

              {/* QR Scan Effect — visible on hover */}
              <motion.div
                className="absolute inset-0 rounded-3xl overflow-hidden pointer-events-none"
                initial={{ opacity: 0 }}
                animate={{ opacity: isHovered ? 1 : 0 }}
                transition={{ duration: 0.3 }}
              >
                {/* Scanning line */}
                <div
                  className="absolute left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-accent to-transparent"
                  style={{
                    animation: isHovered ? 'qr-scan 2.5s ease-in-out infinite' : 'none',
                    boxShadow: '0 0 20px rgba(46, 125, 90, 0.4), 0 0 40px rgba(46, 125, 90, 0.2)',
                  }}
                />
              </motion.div>

              {/* Verified badge — appears on hover */}
              <motion.div
                className="absolute top-4 right-4 glass-card rounded-full px-3 py-1.5 flex items-center gap-2"
                initial={{ opacity: 0, scale: 0.8, y: -8 }}
                animate={{
                  opacity: isHovered ? 1 : 0,
                  scale: isHovered ? 1 : 0.8,
                  y: isHovered ? 0 : -8,
                }}
                transition={{ duration: 0.4, delay: 0.2 }}
              >
                <div className="w-2 h-2 bg-green-500 rounded-full" />
                <span className="text-xs font-semibold text-foreground">✓ Verified</span>
              </motion.div>
            </motion.div>

            {/* Floating reflection — mirrored gradient below */}
            <div className="absolute -bottom-12 left-1/2 -translate-x-1/2 w-3/4 h-16 bg-gradient-to-b from-accent/6 to-transparent rounded-full blur-2xl" />
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
                className="text-center group"
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
    </>
  );
}
