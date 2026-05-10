import { motion } from 'framer-motion';
import { ArrowRight, Play } from 'lucide-react';

/**
 * Hero Section - PetOlife
 * Design: Premium Healthcare SaaS
 * - Asymmetric layout: text left, product mockup right
 * - Strong typography hierarchy with dramatic line breaks
 * - Realistic product showcase with layered depth
 * - Floating status pills for ambient context
 * - Premium interactions and depth
 */

export default function Hero() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] as any },
    },
  };

  return (
    <section id="home" className="relative min-h-screen bg-background pt-32 pb-20 overflow-x-clip">
      {/* Layered ambient background */}
      <div className="absolute top-20 right-0 w-96 h-96 bg-accent/5 rounded-full blur-3xl -z-10" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-secondary/10 rounded-full blur-3xl -z-10" />
      <div className="hidden md:block absolute top-1/3 right-1/4 w-64 h-64 bg-accent/3 rounded-full blur-3xl -z-10" style={{ animation: 'ambient-pulse 6s ease-in-out infinite' }} />
      <div className="hidden md:block absolute bottom-1/4 left-1/3 w-48 h-48 bg-primary/4 rounded-full blur-3xl -z-10" style={{ animation: 'ambient-pulse 8s ease-in-out infinite 2s' }} />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left: Premium Content */}
          <motion.div
            className="space-y-10 lg:col-span-5"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            {/* Eyebrow */}
            <motion.div variants={itemVariants} className="flex items-center gap-3">
              <div className="w-2 h-2 bg-accent rounded-full" />
              <span className="text-sm font-semibold text-accent uppercase tracking-widest">
                Pet Healthcare Reimagined
              </span>
            </motion.div>

            {/* Main Headline - Dramatic line breaks */}
            <motion.h1
              variants={itemVariants}
              className="text-6xl sm:text-7xl lg:text-8xl font-bold text-foreground leading-[0.95] tracking-tight"
            >
              Your Pet's Entire
              <br />
              Medical Life.
              <br />
              <span className="text-accent">Unified.</span>
            </motion.h1>

            {/* Subheadline */}
            <motion.p
              variants={itemVariants}
              className="text-lg sm:text-xl text-foreground/70 max-w-md leading-relaxed"
            >
              Vaccinations, emergency access, verified ownership, and lifelong medical history — unified into one intelligent identity layer.
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              variants={itemVariants}
              className="flex flex-col sm:flex-row gap-4 pt-2"
            >
              <motion.button
                className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-primary text-white font-semibold rounded-lg hover:shadow-xl transition-all duration-300"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Create Pet ID
                <ArrowRight size={20} />
              </motion.button>

              <motion.button
                className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-white border-2 border-border text-foreground font-semibold rounded-lg hover:bg-secondary/30 transition-all duration-300"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Play size={20} className="fill-foreground" />
                Watch Demo
              </motion.button>
            </motion.div>

            {/* Trust indicators */}
            <motion.div
              variants={itemVariants}
              className="flex flex-col sm:flex-row gap-8 pt-8 border-t border-border"
            >
              <div>
                <div className="text-3xl font-bold text-foreground">10K+</div>
                <div className="text-sm text-foreground/60">Pets Protected</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-foreground">500+</div>
                <div className="text-sm text-foreground/60">Veterinary Clinics</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-foreground">99.9%</div>
                <div className="text-sm text-foreground/60">Uptime SLA</div>
              </div>
            </motion.div>
          </motion.div>

          {/* Right: Product Mockup */}
          <motion.div
            className="relative w-full mt-10 lg:mt-0 lg:col-span-7"
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.3, ease: [0.25, 0.46, 0.45, 0.94] as any }}
          >
            {/* Ambient glow behind image */}
            <div className="hidden md:block absolute -inset-8 bg-gradient-to-br from-accent/8 via-transparent to-primary/5 rounded-3xl blur-2xl -z-10" />

            {/* Main product mockup with premium shadow */}
            <motion.div
              className="relative w-full rounded-2xl overflow-hidden shadow-2xl border border-border/20"
              whileHover={{ y: -8 }}
              transition={{ duration: 0.5, ease: [0.25, 0.46, 0.45, 0.94] as any }}
            >
              <img
                src="https://d2xsxph8kpxj0f.cloudfront.net/310519663645597460/DK38DRw8yRbA3JtFXTYJAN/petolife-hero-dashboard-mockup-77pMoB6fe4PPqWyxmwGo5y.webp"
                alt="PetOlife Dashboard"
                className="w-full h-auto object-contain rounded-2xl"
              />
              
              {/* Glassmorphic overlay effect */}
              <div className="absolute inset-0 bg-gradient-to-br from-white/10 to-transparent pointer-events-none" />
            </motion.div>

            {/* Floating accent card - bottom right (glassmorphism) */}
            <motion.div
              className="hidden md:block absolute -bottom-6 -right-6 lg:-bottom-12 lg:-right-20 glass-card rounded-xl shadow-xl p-6 max-w-xs z-10"
              animate={{ y: [0, -12, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: [0.42, 0, 0.58, 1] as any }}
            >
              <div className="flex items-center gap-3 mb-3">
                <div className="w-10 h-10 bg-accent/10 rounded-lg flex items-center justify-center">
                  <span className="text-lg">✓</span>
                </div>
                <span className="font-semibold text-foreground">Verified Pet</span>
              </div>
              <p className="text-sm text-foreground/60">
                Your pet's identity is secured and verified across all veterinary networks.
              </p>
            </motion.div>

            {/* Floating accent card - top left (glassmorphism) */}
            <motion.div
              className="hidden md:block absolute -top-6 -left-6 lg:-top-12 lg:-left-24 glass-card rounded-xl shadow-xl p-5 max-w-xs z-10"
              animate={{ y: [0, -12, 0] }}
              transition={{ duration: 4.5, repeat: Infinity, ease: [0.42, 0, 0.58, 1] as any, delay: 0.5 }}
            >
              <div className="flex items-center gap-2 mb-2">
                <div className="w-2 h-2 bg-green-500 rounded-full" />
                <span className="text-xs font-semibold text-foreground/60 uppercase">Emergency Ready</span>
              </div>
              <p className="text-sm font-semibold text-foreground">
                Instant vet access to critical health data
              </p>
            </motion.div>

            {/* Floating status pills — small ambient indicators */}
            <motion.div
              className="hidden lg:flex absolute top-1/4 -left-16 items-center gap-2 glass-card rounded-full px-3 py-1.5 z-10"
              animate={{ y: [0, -8, 0] }}
              transition={{ duration: 5, repeat: Infinity, ease: [0.42, 0, 0.58, 1] as any, delay: 1 }}
            >
              <div className="w-1.5 h-1.5 bg-green-500 rounded-full" />
              <span className="text-xs font-medium text-foreground/70">Vaccination Synced</span>
            </motion.div>

            <motion.div
              className="hidden lg:flex absolute bottom-1/4 -left-12 items-center gap-2 glass-card rounded-full px-3 py-1.5 z-10"
              animate={{ y: [0, -6, 0] }}
              transition={{ duration: 6, repeat: Infinity, ease: [0.42, 0, 0.58, 1] as any, delay: 2 }}
            >
              <div className="w-1.5 h-1.5 bg-accent rounded-full" />
              <span className="text-xs font-medium text-foreground/70">Secure Vet Access</span>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
