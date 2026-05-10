import { motion } from 'framer-motion';
import { Lock, Eye, Zap, Shield } from 'lucide-react';

/**
 * Security & Trust Section - PetOlife
 * Design: Minimal Brutalism with Warmth
 * - Focus on encryption and privacy
 * - Technical but trustworthy presentation
 * - Asymmetric layout
 */

export default function Security() {
  const securityFeatures = [
    {
      icon: Lock,
      title: 'End-to-End Encryption',
      description: 'All medical records are encrypted using industry-standard protocols. Only authorized parties can access pet data.',
    },
    {
      icon: Eye,
      title: 'Granular Permissions',
      description: 'Pet parents control exactly who can access what information. Share vaccination records without exposing sensitive data.',
    },
    {
      icon: Zap,
      title: 'Verified Veterinarian Access',
      description: 'Only licensed veterinarians with verified credentials can request access to pet records.',
    },
    {
      icon: Shield,
      title: 'Privacy-First Architecture',
      description: 'Built on zero-knowledge principles. We never store unnecessary data and cannot access encrypted records.',
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.12,
        delayChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] as any },
    },
  };

  return (
    <section id="security" className="relative bg-white py-24 sm:py-32 overflow-hidden">
      {/* Decorative background */}
      <div className="absolute top-1/2 right-0 w-96 h-96 bg-accent/5 rounded-full blur-3xl -z-10 -translate-y-1/2" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Left Content */}
          <motion.div
            className="space-y-8"
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <div>
              <h2 className="text-4xl sm:text-5xl font-bold text-foreground mb-6">
                Security & Trust Built In
              </h2>
              <p className="text-lg text-foreground/60 leading-relaxed">
                Pet health data is sensitive. PetOlife is built with security and privacy as core principles, not afterthoughts. Every record is protected with enterprise-grade encryption and verified access controls.
              </p>
            </div>

            {/* Trust Indicators */}
            <div className="space-y-4">
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 mt-1">
                  <div className="flex items-center justify-center h-8 w-8 rounded-full bg-accent/10">
                    <svg className="h-5 w-5 text-accent" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                </div>
                <div>
                  <h4 className="font-semibold text-foreground">HIPAA-Compliant Architecture</h4>
                  <p className="text-sm text-foreground/60">Designed to meet healthcare data protection standards</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 mt-1">
                  <div className="flex items-center justify-center h-8 w-8 rounded-full bg-accent/10">
                    <svg className="h-5 w-5 text-accent" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                </div>
                <div>
                  <h4 className="font-semibold text-foreground">Regular Security Audits</h4>
                  <p className="text-sm text-foreground/60">Third-party penetration testing and compliance verification</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 mt-1">
                  <div className="flex items-center justify-center h-8 w-8 rounded-full bg-accent/10">
                    <svg className="h-5 w-5 text-accent" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                </div>
                <div>
                  <h4 className="font-semibold text-foreground">Zero-Knowledge Infrastructure</h4>
                  <p className="text-sm text-foreground/60">We cannot access your pet's encrypted data</p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right Features */}
          <motion.div
            className="space-y-6"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {securityFeatures.map((feature, index) => {
              const Icon = feature.icon;
              return (
                <motion.div
                  key={index}
                  className="bg-background rounded-xl p-6 border border-border hover:shadow-lg transition-shadow duration-300"
                  variants={itemVariants}
                  whileHover={{ x: 4 }}
                >
                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0">
                      <div className="flex items-center justify-center h-12 w-12 rounded-lg bg-accent/10">
                        <Icon className="h-6 w-6 text-accent" />
                      </div>
                    </div>
                    <div>
                      <h3 className="text-base font-semibold text-foreground mb-1">
                        {feature.title}
                      </h3>
                      <p className="text-sm text-foreground/60">
                        {feature.description}
                      </p>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
