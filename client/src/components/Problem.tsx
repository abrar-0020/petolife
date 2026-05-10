import { motion } from 'framer-motion';
import { AlertCircle, FileX, Zap, Users } from 'lucide-react';

/**
 * Problem Section - PetOlife
 * Design: Minimal Brutalism with Warmth
 * - Shows fragmented pet care issues
 * - Transitions to unified solution
 * - Asymmetric layout with visual hierarchy
 */

export default function Problem() {
  const problems = [
    {
      icon: FileX,
      title: 'Lost Records',
      description: 'Medical history scattered across multiple clinics',
    },
    {
      icon: Users,
      title: 'Multiple Clinics',
      description: 'No centralized access to pet health information',
    },
    {
      icon: AlertCircle,
      title: 'Missing Vaccine History',
      description: 'Vaccination records lost or outdated',
    },
    {
      icon: Zap,
      title: 'Emergency Issues',
      description: 'Critical health info unavailable in emergencies',
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
        <div className="absolute top-1/2 left-0 w-96 h-96 bg-accent/5 rounded-full blur-3xl -z-10 -translate-y-1/2" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Section Header */}
          <motion.div
            className="mb-16 sm:mb-20"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl sm:text-5xl font-bold text-foreground mb-6 tracking-tight">
              The Problem With
              <br className="hidden sm:block" />
              Fragmented Pet Care
            </h2>
            <p className="text-lg text-foreground/60 max-w-2xl">
              Pet parents and veterinarians struggle with scattered information, lost records, and critical gaps in emergency situations.
            </p>
          </motion.div>

          {/* Problem Cards Grid */}
          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-20"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {problems.map((problem, index) => {
              const Icon = problem.icon;
              return (
                <motion.div
                  key={index}
                  className={`bg-white rounded-xl p-8 border border-border card-hover-premium ${
                    index % 2 === 1 ? 'md:mt-6' : ''
                  }`}
                  variants={itemVariants}
                >
                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0">
                      <div className="flex items-center justify-center h-12 w-12 rounded-lg bg-accent/10">
                        <Icon className="h-6 w-6 text-accent" />
                      </div>
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-foreground mb-2">
                        {problem.title}
                      </h3>
                      <p className="text-foreground/60">
                        {problem.description}
                      </p>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </motion.div>

          {/* Solution Transition */}
          <motion.div
            className="relative py-16 sm:py-20"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            {/* Divider */}
            <div className="h-px bg-gradient-to-r from-transparent via-border to-transparent mb-16" />

            {/* Solution Message */}
            <motion.div
              className="text-center max-w-3xl mx-auto"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <h3 className="text-3xl sm:text-4xl font-bold text-foreground mb-6 tracking-tight">
                One Unified Profile Solves Everything
              </h3>
              <p className="text-lg text-foreground/60">
                PetOlife brings together all pet health information into a single, secure, and accessible digital identity. No more lost records. No more fragmented care. Just complete, verified, and always-available pet health data.
              </p>
            </motion.div>
          </motion.div>
        </div>
      </section>
    </>
  );
}
