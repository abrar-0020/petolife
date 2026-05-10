import { motion } from 'framer-motion';
import { FileText, Shield, Calendar, Clock, CheckCircle, Lock } from 'lucide-react';

/**
 * Features Section - PetOlife
 * Design: Minimal Brutalism with Warmth
 * - Premium feature cards with icons
 * - Hover animations and subtle shadows
 * - Asymmetric grid layout
 */

export default function Features() {
  const features = [
    {
      icon: FileText,
      title: 'Digital Pet Passport',
      description: 'Complete pet profile with verified ownership, breed, and medical history all in one place.',
    },
    {
      icon: Shield,
      title: 'Emergency Vet Access',
      description: 'Authorized veterinarians can instantly access critical health information during emergencies.',
    },
    {
      icon: Calendar,
      title: 'Vaccination Timeline',
      description: 'Automated tracking of all vaccinations with reminders for upcoming appointments.',
    },
    {
      icon: Clock,
      title: 'Smart Appointment Sync',
      description: 'Seamlessly sync vet appointments and receive automated reminders and follow-ups.',
    },
    {
      icon: CheckCircle,
      title: 'Ownership Verification',
      description: 'Cryptographically verified ownership prevents fraud and ensures pet safety.',
    },
    {
      icon: Lock,
      title: 'Secure Medical Records',
      description: 'End-to-end encrypted records with granular permission controls for maximum privacy.',
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
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
    <section id="features" className="relative bg-background py-24 sm:py-32 overflow-hidden">
      {/* Decorative background */}
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-accent/5 rounded-full blur-3xl -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          className="mb-16 sm:mb-20"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl sm:text-5xl font-bold text-foreground mb-6">
            Powerful Features Built for Pet Care
          </h2>
          <p className="text-lg text-foreground/60 max-w-2xl">
            Everything you need to manage your pet's health, safety, and identity in one intelligent platform.
          </p>
        </motion.div>

        {/* Features Grid */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <motion.div
                key={index}
                className="bg-white rounded-xl p-8 border border-border hover:shadow-xl transition-all duration-300"
                variants={itemVariants}
                whileHover={{
                  y: -8,
                  boxShadow: '0 20px 40px rgba(244, 160, 36, 0.1)',
                }}
              >
                <div className="flex flex-col h-full">
                  {/* Icon */}
                  <div className="mb-4">
                    <div className="inline-flex items-center justify-center h-12 w-12 rounded-lg bg-accent/10">
                      <Icon className="h-6 w-6 text-accent" />
                    </div>
                  </div>

                  {/* Content */}
                  <h3 className="text-lg font-semibold text-foreground mb-3">
                    {feature.title}
                  </h3>
                  <p className="text-foreground/60 flex-grow">
                    {feature.description}
                  </p>

                  {/* Hover indicator */}
                  <motion.div
                    className="mt-4 h-1 bg-accent rounded-full"
                    initial={{ width: 0 }}
                    whileHover={{ width: '100%' }}
                    transition={{ duration: 0.3 }}
                  />
                </div>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
