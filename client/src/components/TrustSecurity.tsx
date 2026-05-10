import { motion } from 'framer-motion';
import { Shield, Lock, CheckCircle2, Eye } from 'lucide-react';

/**
 * Trust + Security Section - PetOlife
 * Design: Premium Healthcare SaaS
 * - Modern trust section inspired by healthcare/security SaaS
 * - Layered cards with shield/security visuals
 * - Enterprise-grade reliability messaging
 */

export default function TrustSecurity() {
  const trustPoints = [
    {
      icon: Shield,
      title: 'Encrypted Medical Records',
      description: 'End-to-end encryption with industry-standard protocols. Your pet\'s data is secured at rest and in transit.',
      color: 'from-accent/10 to-accent/5',
    },
    {
      icon: Lock,
      title: 'Secure Sharing',
      description: 'You control who accesses your pet\'s records. Generate temporary access tokens for veterinarians.',
      color: 'from-primary/10 to-primary/5',
    },
    {
      icon: CheckCircle2,
      title: 'Verified Veterinary Access',
      description: 'Only registered veterinary clinics can access pet records. Every access is logged and audited.',
      color: 'from-green-100 to-green-50',
    },
    {
      icon: Eye,
      title: 'Privacy-First Infrastructure',
      description: 'Zero-knowledge architecture means we cannot access your encrypted records even if we wanted to.',
      color: 'from-blue-100 to-blue-50',
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
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] as any },
    },
  };

  return (
    <section id="security" className="relative bg-white py-24 sm:py-32 overflow-hidden">
      {/* Decorative background */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl -z-10" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-accent/5 rounded-full blur-3xl -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          className="text-center mb-16 sm:mb-20"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl sm:text-5xl font-bold text-foreground mb-6">
            Enterprise-Grade Security
          </h2>
          <p className="text-lg text-foreground/70 max-w-2xl mx-auto">
            Built with institutional-grade reliability and privacy-first architecture.
          </p>
        </motion.div>

        {/* Trust Cards Grid */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {trustPoints.map((point, idx) => {
            const Icon = point.icon;
            return (
              <motion.div
                key={idx}
                className="relative group"
                variants={itemVariants}
              >
                {/* Card with gradient background */}
                <div className={`bg-gradient-to-br ${point.color} rounded-xl p-8 border border-border hover:shadow-lg transition-all duration-300 h-full`}>
                  {/* Icon */}
                  <div className="w-12 h-12 bg-white rounded-lg flex items-center justify-center mb-6 shadow-sm">
                    <Icon className="w-6 h-6 text-foreground" />
                  </div>

                  {/* Content */}
                  <h3 className="text-lg font-semibold text-foreground mb-3">
                    {point.title}
                  </h3>
                  <p className="text-foreground/70 leading-relaxed">
                    {point.description}
                  </p>
                </div>

                {/* Hover glow effect */}
                <div className="absolute inset-0 rounded-xl bg-gradient-to-br from-white/0 to-white/0 group-hover:from-white/10 group-hover:to-white/5 transition-all duration-300 pointer-events-none" />
              </motion.div>
            );
          })}
        </motion.div>

        {/* Compliance badges */}
        <motion.div
          className="mt-16 pt-16 border-t border-border"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
        >
          <div className="text-center mb-8">
            <h3 className="text-lg font-semibold text-foreground mb-8">
              Compliance & Standards
            </h3>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {[
              { label: 'HIPAA Compliant', icon: '🛡️' },
              { label: 'SOC 2 Type II', icon: '✓' },
              { label: 'GDPR Compliant', icon: '🔒' },
              { label: '99.9% Uptime SLA', icon: '⚡' },
            ].map((badge, idx) => (
              <motion.div
                key={idx}
                className="text-center p-4 bg-background rounded-lg border border-border"
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.05 * idx }}
                viewport={{ once: true }}
              >
                <div className="text-2xl mb-2">{badge.icon}</div>
                <div className="text-sm font-semibold text-foreground">{badge.label}</div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
