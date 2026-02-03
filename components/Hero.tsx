
import React from 'react';
import { motion } from 'framer-motion';
import BioDigesterIllustration from './BioDigesterIllustration';

const Hero: React.FC = () => {
  return (
    <section className="relative min-h-screen flex items-center pt-20 overflow-hidden bg-cream dark:bg-darkBg transition-colors duration-300">
      {/* Decorative Diagonal Background */}
      <div className="absolute top-0 right-0 w-1/2 h-full bg-secondary/10 dark:bg-primary/5 -skew-x-12 transform translate-x-20 z-0"></div>
      
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col lg:flex-row items-center">
        <div className="lg:w-1/2 mb-12 lg:mb-0">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <span className="inline-block px-4 py-1.5 rounded-full bg-primary/10 dark:bg-primary/20 text-primary dark:text-secondary font-bold text-sm mb-6">
              RENEWABLE ENERGY • IOT ENABLED
            </span>
            <h1 className="text-5xl lg:text-7xl font-heading font-bold text-navy dark:text-white leading-tight mb-6">
              Smart <span className="text-primary dark:text-secondary underline decoration-accent decoration-4">BioDigester</span>
            </h1>
            <p className="text-xl text-navy/70 dark:text-white/60 mb-8 max-w-lg leading-relaxed">
              Clean Energy from Organic Waste — Monitored in Real Time. 
              Transform organic waste into renewable biogas with an intelligent, sensor-based digester system.
            </p>
            
            <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-primary text-white font-bold px-8 py-4 rounded-xl shadow-xl hover:shadow-primary/20 flex items-center justify-center"
              >
                Explore the System
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-white dark:bg-white/5 text-navy dark:text-white border-2 border-navy/10 dark:border-white/10 font-bold px-8 py-4 rounded-xl shadow-sm hover:bg-cream dark:hover:bg-white/10 flex items-center justify-center"
              >
                View Live Monitoring
              </motion.button>
            </div>
          </motion.div>
        </div>

        <div className="lg:w-1/2 w-full">
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative"
          >
            <BioDigesterIllustration />
          </motion.div>
        </div>
      </div>

      {/* Social proof floating icons */}
      <div className="absolute bottom-10 left-0 w-full flex justify-center space-x-12 opacity-30 dark:opacity-20 grayscale pointer-events-none px-4 text-xs font-bold uppercase tracking-widest text-navy dark:text-white">
        <span>University Research</span>
        <span>Eco-Village Partners</span>
        <span>Smart City Initiative</span>
      </div>
    </section>
  );
};

export default Hero;
