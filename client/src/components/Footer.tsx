import { motion } from 'framer-motion';

/**
 * Footer Component - PetOlife
 * Design: Minimal Brutalism with Warmth
 * - Minimal and modern
 * - Clean layout with essential links
 * - Brand statement for institutional positioning
 */

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const links = {
    Product: ['Features', 'Security', 'Pricing', 'API'],
    Company: ['About', 'Blog', 'Careers', 'Contact'],
    Legal: ['Privacy', 'Terms', 'Security', 'Compliance'],
    Social: ['Twitter', 'LinkedIn', 'GitHub'],
  };

  return (
    <footer className="relative bg-foreground text-white py-16 sm:py-20 overflow-hidden">
      {/* Decorative background */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-white/5 rounded-full blur-3xl -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-6 gap-12 mb-16">
          {/* Brand */}
          <motion.div
            className="md:col-span-2"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <div className="flex items-center gap-2 mb-5">
              <img src="/logo.png" alt="PetOlife Logo" className="h-10 w-auto object-contain brightness-0 invert" />
            </div>
            <p className="text-white/60 text-sm mb-3 leading-relaxed">
              Unified Pet Identity Protocol for the modern pet parent.
            </p>
            <p className="text-white/40 text-xs italic">
              Institutional-grade veterinary identity infrastructure.
            </p>
          </motion.div>

          {/* Links */}
          {Object.entries(links).map(([category, items], idx) => (
            <motion.div
              key={category}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: (idx + 1) * 0.1 }}
              viewport={{ once: true }}
            >
              <h4 className="font-semibold text-white mb-4 text-sm uppercase tracking-wider">{category}</h4>
              <ul className="space-y-2.5">
                {items.map((item) => (
                  <li key={item}>
                    <a
                      href="#"
                      className="text-white/60 hover:text-white transition-colors duration-300 text-sm relative group inline-block"
                    >
                      {item}
                      <span className="absolute bottom-0 left-0 w-0 h-px bg-accent group-hover:w-full transition-all duration-300" />
                    </a>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

        {/* Divider */}
        <div className="h-px bg-white/10 mb-8" />

        {/* Bottom */}
        <motion.div
          className="flex flex-col sm:flex-row justify-between items-center gap-4"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          viewport={{ once: true }}
        >
          <p className="text-white/50 text-sm">
            © {currentYear} PetOlife. All rights reserved.
          </p>
          <div className="flex gap-6">
            <a href="#" className="text-white/50 hover:text-white transition-colors duration-300 text-sm relative group inline-block">
              Privacy Policy
              <span className="absolute bottom-0 left-0 w-0 h-px bg-accent group-hover:w-full transition-all duration-300" />
            </a>
            <a href="#" className="text-white/50 hover:text-white transition-colors duration-300 text-sm relative group inline-block">
              Terms of Service
              <span className="absolute bottom-0 left-0 w-0 h-px bg-accent group-hover:w-full transition-all duration-300" />
            </a>
            <a href="#" className="text-white/50 hover:text-white transition-colors duration-300 text-sm relative group inline-block">
              Cookie Settings
              <span className="absolute bottom-0 left-0 w-0 h-px bg-accent group-hover:w-full transition-all duration-300" />
            </a>
          </div>
        </motion.div>
      </div>
    </footer>
  );
}
