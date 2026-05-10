import { motion } from 'framer-motion';
import { Users, FileText, QrCode, Cloud } from 'lucide-react';

/**
 * Product Flow Section - PetOlife
 * Design: Premium Healthcare SaaS
 * - Connected visual workflow with animated lines
 * - 4-step process visualization
 * - Mini UI previews
 * - Professional, clean presentation
 */

export default function ProductFlow() {
  const steps = [
    {
      number: 1,
      title: 'Create Pet Profile',
      description: 'Add your pet\'s details and build their health profile.',
      icon: Users,
    },
    {
      number: 2,
      title: 'Upload Medical Records',
      description: 'Securely upload and organize medical records in one place.',
      icon: FileText,
    },
    {
      number: 3,
      title: 'Share QR with Vet',
      description: 'Share your pet\'s health profile instantly and securely.',
      icon: QrCode,
    },
    {
      number: 4,
      title: 'Access Anywhere',
      description: 'Your pet\'s records are secure and available 24/7.',
      icon: Cloud,
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
    <section id="product" className="relative bg-background py-24 sm:py-32 overflow-hidden">
      {/* Decorative background */}
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-accent/5 rounded-full blur-3xl -z-10" />

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
            How It Works
          </h2>
          <p className="text-lg text-foreground/70 max-w-2xl mx-auto">
            Four simple steps to unified pet healthcare.
          </p>
        </motion.div>

        {/* Workflow visualization */}
        <motion.div
          className="relative"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {/* Steps Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
            {steps.map((step, idx) => {
              const Icon = step.icon;
              return (
                <motion.div
                  key={idx}
                  className="relative"
                  variants={itemVariants}
                >
                  {/* Step Card */}
                  <div className="bg-white rounded-xl p-8 border border-border hover:shadow-lg transition-all duration-300 h-full">
                    {/* Step number badge */}
                    <div className="absolute -top-4 -left-4 w-10 h-10 bg-accent text-white rounded-full flex items-center justify-center font-bold text-lg shadow-lg">
                      {step.number}
                    </div>

                    {/* Icon */}
                    <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center mb-6 mt-2">
                      <Icon className="w-6 h-6 text-accent" />
                    </div>

                    {/* Content */}
                    <h3 className="text-lg font-semibold text-foreground mb-3">
                      {step.title}
                    </h3>
                    <p className="text-foreground/70 text-sm leading-relaxed">
                      {step.description}
                    </p>
                  </div>

                  {/* Connecting arrow (hidden on last item) */}
                  {idx < steps.length - 1 && (
                    <div className="hidden lg:flex absolute top-1/2 -right-4 transform -translate-y-1/2 z-10">
                      <motion.svg
                        width="32"
                        height="32"
                        viewBox="0 0 32 32"
                        fill="none"
                        initial={{ opacity: 0, x: -10 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6, delay: 0.3 + idx * 0.1 }}
                        viewport={{ once: true }}
                      >
                        <path
                          d="M4 16h24M20 10l6 6-6 6"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          className="text-accent"
                        />
                      </motion.svg>
                    </div>
                  )}
                </motion.div>
              );
            })}
          </div>

          {/* Workflow image showcase */}
          <motion.div
            className="mt-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            viewport={{ once: true }}
          >
            <img
              src="https://d2xsxph8kpxj0f.cloudfront.net/310519663645597460/DK38DRw8yRbA3JtFXTYJAN/petolife-workflow-visualization-C56wE2km4hpaZUbCuZ2WEd.webp"
              alt="Workflow Visualization"
              className="w-full h-auto rounded-2xl shadow-lg border border-border"
            />
          </motion.div>
        </motion.div>

        {/* Bottom message */}
        <motion.div
          className="text-center mt-16"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          viewport={{ once: true }}
        >
          <p className="text-lg text-foreground/70">
            <span className="font-semibold text-foreground">Secure. Private. Trusted.</span> Your pet's health data is encrypted and protected at every step.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
